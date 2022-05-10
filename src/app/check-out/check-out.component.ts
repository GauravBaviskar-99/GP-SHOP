import { Observable } from 'rxjs';
import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../Services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  public ShoppingCart$: Observable<ShoppingCart>;

  constructor(private ShoppingCartService: ShoppingCartService) {

  }
  async ngOnInit() {
    this.ShoppingCart$ = await (this.ShoppingCartService.getCart())
  }
}
