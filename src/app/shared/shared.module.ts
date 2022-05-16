import { RouterModule } from '@angular/router';
import { ProductFilterComponent } from './Components/product-filter/product-filter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { ProductQuantityComponent } from './Components/product-quantity/product-quantity.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    ProductFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    ProductFilterComponent
  ]
})
export class SharedModule { }
