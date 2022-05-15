import { Product } from 'shared/models/product';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { Observable, take, map } from 'rxjs';
import { promises } from 'dns';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private firebaseDB: AngularFireDatabase) { }
  createShoppingCart() {
    return this.firebaseDB.list('/Shopping-Carts/').push({
      createDate: new Date().getTime()
    })
  }

  async getCart(): Promise<Observable<ShoppingCart | any>> {
    let cartId = await this.getOrCreateShoppingCartId();
    return this.firebaseDB.object('/Shopping-Carts/' + cartId).valueChanges().pipe(map((cart: any) => {
      if (cart?.Items) return new ShoppingCart(cart.Items)
      return new ShoppingCart({});
    }));
  }

  async clearShoppingCart() {
    let cartId = await this.getOrCreateShoppingCartId();
    this.firebaseDB.object('/Shopping-Carts/' + cartId + '/Items/').remove();
  }

  private async getOrCreateShoppingCartId() {
    let cartId = localStorage.getItem('cartId');

    if (cartId) return cartId;

    let result = await this.createShoppingCart()
    localStorage.setItem("cartId", result.key as string)
    return result.key;

  }

  getItemReferenceFromShoppingCart(cartId: string, key: string) {
    return this.firebaseDB.object('/Shopping-Carts/' + cartId + '/Items/' + key)
  }

  async addToCart(product: Product): Promise<any> {
    this.updateQuantityInCart(product, +1)

  }
  async removeFromCart(product: Product) {
    this.updateQuantityInCart(product, -1)
  }

  private async updateQuantityInCart(product: Product, change: number) {
    let cartId = await this.getOrCreateShoppingCartId();
    let itemRef = this.getItemReferenceFromShoppingCart(cartId as string, product.key)

    itemRef.valueChanges().pipe(take(1)).subscribe((item: any) => {

      if (item?.quantity + change == 0) itemRef.remove();
      else itemRef.update(
        {
          title: product.title,
          price: product.price,
          imageUrl: product.imageUrl,
          quantity: (item?.quantity || 0) + change
        });

    })
  }



}