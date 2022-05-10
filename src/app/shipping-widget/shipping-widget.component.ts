import { ShoppingCart } from './../models/shopping-cart';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shipping-widget',
  templateUrl: './shipping-widget.component.html',
  styleUrls: ['./shipping-widget.component.css']
})
export class ShippingWidgetComponent implements OnInit {

  @Input('shopping-cart') ShoppingCart: ShoppingCart;
  constructor() { }

  ngOnInit(): void {
  }

}
