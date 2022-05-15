import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'shared/Services/product.service';
import { CategoryService } from 'shared/Services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public categories$: any;
  public product: any = {};
  id: any;
  constructor(public categoryService: CategoryService,
    private ProductService: ProductService,
    private ActivatedRoute: ActivatedRoute,
    private route: Router) {
    this.categories$ = this.categoryService.getCategories();
  }

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id');
    if (this.id) this.ProductService.getProduct(this.id).subscribe(product => {
      this.product = product;
    });
  }
  onFormSubmit(formdata: any) {
    if (this.id) this.ProductService.updateProduct(this.id, this.product);
    else this.ProductService.addProductInDB(formdata);
    this.route.navigate(['admin/products'])
  }
  deleteProduct() {
    if (!confirm("Are You Sure You Want To Delete This Product")) return;
    this.ProductService.deleteProduct(this.id);
    this.route.navigate(['admin/products'])
  }
}
