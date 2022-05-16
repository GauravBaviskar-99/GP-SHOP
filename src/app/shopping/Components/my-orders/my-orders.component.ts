import { AuthService } from 'shared/Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { OrderService } from "shared/Services/order.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  public allOrders$: Observable<any>;
  constructor(private OrderService: OrderService, private AuthService: AuthService) {
    this.allOrders$ = this.AuthService.userDetails$.pipe(switchMap(userDetails => this.OrderService.getYourOrders(userDetails?.uid)))
  }

  ngOnInit(): void {
  }

}
