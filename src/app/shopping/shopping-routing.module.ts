import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'shared/Guards/auth.guard';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'shopping-cart', component: ShoppingCartComponent },

  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
  { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },

  {
    path: 'orderDetails/:id',
    component: OrderDetailsComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
