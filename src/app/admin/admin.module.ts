import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminOrdersComponent } from './Components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './Components/admin-products/admin-products.component';
import { ProductFormComponent } from './Components/product-form/product-form.component';



@NgModule({
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
