import { Observable } from 'rxjs';
import { OrderService } from 'shared/Services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  public allOrders$: Observable<any>;
  constructor(private OrderService: OrderService) {
    this.allOrders$ = this.OrderService.getAllOrders();
  }

  ngOnInit(): void {
  }

}
