import { ShoppingCartService } from './../Services/shopping-cart.service';
import { switchMap, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../Services/product.service';
import { Product } from './../models/product';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public allAvailableProducts: Product[] = [];
  public filteredProducts: Product[] = [];
  public category: any;
  public cart: any;
  public shoppingCartSubscription: Subscription;

  constructor(private ProductService: ProductService,
    private ShoppingCartService: ShoppingCartService,
    private ActivatedRoute: ActivatedRoute) {

    this.ProductService.getAllProducts().pipe(switchMap(products => {
      this.filteredProducts = this.allAvailableProducts = products;
      return this.ActivatedRoute.queryParamMap;
    })).subscribe(params => {
      this.category = params.get('category')
      this.filteredProducts = (this.category) ? this.allAvailableProducts.filter(product => product.category == this.category) : this.allAvailableProducts
    });

  }

  async ngOnInit() {
    this.shoppingCartSubscription = (await this.ShoppingCartService.getCart()).subscribe(cart => this.cart = cart);
  }

  ngOnDestroy() {
    if (this.shoppingCartSubscription) this.shoppingCartSubscription.unsubscribe();
  }

}
