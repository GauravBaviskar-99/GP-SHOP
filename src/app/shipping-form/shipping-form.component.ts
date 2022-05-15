import { AuthService } from './../auth.service';
import { OrderService } from './../Services/order.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Order } from 'shared/models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {

  @Input('shopping-cart') ShoppingCart: ShoppingCart;
  public shoppingCartSubscription: Subscription;
  public userSubscription: Subscription;

  public uid: any;

  constructor(private OrderService: OrderService,
    private AuthService: AuthService,
    private router: Router) { }
  ngOnInit(): void {
    this.userSubscription = this.AuthService.userDetails$.subscribe(user => this.uid = user?.uid);
  }

  async placeOrder(shippingDetails: any) {

    let order = new Order(this.uid, shippingDetails, this.ShoppingCart)
    let result = await this.OrderService.placeOrder(order)
    this.router.navigate(['/order-success', result.key])

  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
