import { ShoppingCart } from './../models/shopping-cart';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../Services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {

  @Input('product') product: Product;
  @Input('showActions') showActions: boolean = true;
  @Input('shoppping-cart') shoppingCart: ShoppingCart;
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  async addToShoppingCart() {
    this.cartService.addToCart(this.product);
  }



  async removeFromShoppingCart() {
    this.cartService.removeFromCart(this.product);
  }

}
