import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { BsNavbarComponent } from './Components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductsComponent } from './Components/products/products.component';


@NgModule({
  declarations: [
    HomeComponent,
    BsNavbarComponent,
    ProductsComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
