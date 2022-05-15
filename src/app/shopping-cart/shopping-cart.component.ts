import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/Services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public ShoppingCart$: Observable<ShoppingCart | any>;
  constructor(private ShoppingCartService: ShoppingCartService) { }

  async ngOnInit() {

    this.ShoppingCart$ = await this.ShoppingCartService.getCart()
  }

  clearShoppingCart() {
    this.ShoppingCartService.clearShoppingCart()
  }

}
