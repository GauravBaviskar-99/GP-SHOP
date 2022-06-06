import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { ShippingFormComponent } from './Components/shipping-form/shipping-form.component';
import { ShippingWidgetComponent } from './Components/shipping-widget/shipping-widget.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { ShoppingRoutingModule } from './shopping-routing.module';


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
    ShoppingRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class ShoppingModule { }
