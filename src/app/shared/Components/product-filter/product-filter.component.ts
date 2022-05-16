import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'shared/Services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  public categories: any[];
  @Input('category') category: any;
  constructor(private CategoryService: CategoryService) {
    this.CategoryService.getCategories().subscribe(categories => this.categories = categories);

  }

  ngOnInit(): void {
  }

}
