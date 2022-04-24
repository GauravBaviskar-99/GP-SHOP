import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  public allProducts: Product[];
  public filteredProductList: any;
  constructor(private ProductService: ProductService) {
    this.ProductService.getAllProducts().subscribe(products => {
      this.allProducts = this.filteredProductList = products;
    });
  }

  ngOnInit(): void {
  }

  filterProductList(query: string) {
    this.filteredProductList = query ? this.allProducts.filter((product: any) => product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : this.allProducts;
  }

}
