import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { BsNavbarComponent } from './Components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductsComponent } from './Components/products/products.component';
import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    BsNavbarComponent,
    ProductsComponent,
    LoginComponent,
  ],
  imports: [
    CoreRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
