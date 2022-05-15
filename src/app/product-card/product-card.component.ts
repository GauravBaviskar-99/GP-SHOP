import { ShoppingCart } from 'shared/models/shopping-cart';
import { Product } from 'shared/models/product';
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
  @Input('shoppping-cart') shoppingCart: ShoppingCart | any;
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    console.warn(this.shoppingCart)
  }

  async addToShoppingCart() {
    this.cartService.addToCart(this.product);
  }


}
