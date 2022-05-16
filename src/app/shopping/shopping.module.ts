import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { ShippingFormComponent } from './Components/shipping-form/shipping-form.component';
import { ShippingWidgetComponent } from './Components/shipping-widget/shipping-widget.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    CheckOutComponent,
    ShippingWidgetComponent,
    ShippingFormComponent,
    OrderDetailsComponent,
    ShoppingCartComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class ShoppingModule { }
