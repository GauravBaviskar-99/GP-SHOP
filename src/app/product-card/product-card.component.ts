import { Product } from 'src/app/models/product';
import { ShoppingCartService } from './../Services/shopping-cart.service';
import { provideAuth } from '@angular/fire/auth';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;
  @Input('showActions') showActions: boolean = true;
  @Input('shoppping-cart') shoppingCart: any;
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  async addToShoppingCart() {
    this.cartService.addToCart(this.product);
  }

  getQuantity() {
    if (!this.shoppingCart) return 0;
    let item = this.shoppingCart["Items"] ? this.shoppingCart["Items"][this.product.key] : 0;

    return item?.quantity || 0;

  }

  async removeFromShoppingCart() {
    this.cartService.removeFromCart(this.product);
  }


}
