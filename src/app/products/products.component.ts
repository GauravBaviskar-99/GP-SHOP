import { switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../Services/product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public allAvailableProducts: Product[] = [];
  public filteredProducts: Product[] = [];
  public category: any;
  constructor(private ProductService: ProductService,

    private ActivatedRoute: ActivatedRoute) {


    this.ProductService.getAllProducts().pipe(switchMap(products => {
      this.filteredProducts = this.allAvailableProducts = products;
      return this.ActivatedRoute.queryParamMap;
    })).subscribe(params => {
      this.category = params.get('category')
      this.filteredProducts = (this.category) ? this.allAvailableProducts.filter(product => product.category == this.category) : this.allAvailableProducts
    });


  }

  ngOnInit(): void {

  }

}
