import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation';

import { ProductCardComponent } from './Components/product-card/product-card.component';
import { ProductFilterComponent } from './Components/product-filter/product-filter.component';
import { ProductQuantityComponent } from './Components/product-quantity/product-quantity.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    ProductFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    ProductFilterComponent,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule,
    CommonModule,
  ]
})
export class SharedModule { }
