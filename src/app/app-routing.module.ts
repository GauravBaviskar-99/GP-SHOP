import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'my/orders', component: MyOrdersComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/orders', component: AdminOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
