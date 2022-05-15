import { OrderService } from 'src/app/Services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Order } from 'shared/models/order';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  public orderId: string | null;
  public order: Order | any;
  constructor(private activatedRout: ActivatedRoute, private OrderService: OrderService) { }

  ngOnInit(): void {
    this.activatedRout.paramMap.subscribe(params => this.orderId = params.get('id'))
    if (this.orderId)
      this.OrderService.getOrder(this.orderId).subscribe(order => this.order = order);

  }

}
