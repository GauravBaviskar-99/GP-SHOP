import { map } from 'rxjs';
import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private firebaseDB: AngularFireDatabase, private ShoppingCartService: ShoppingCartService) { }


  placeOrder(order: any) {
    this.ShoppingCartService.clearShoppingCart();
    return this.firebaseDB.list('/Orders/').push(order);
  }

  getAllOrders() {
    return this.firebaseDB.list('/Orders').snapshotChanges().pipe(map(orders => {
      return orders.map(order => {
        const key = order.key;
        const values = order.payload.val() as object;
        return { ...values, key }
      })
    }));
  }
  getYourOrders(userId: any) {
    return this.firebaseDB.list('/Orders', queryFn => queryFn.orderByChild('userId').equalTo(userId)).snapshotChanges().pipe(map(orders => {
      return orders.map(order => {
        const key = order.key
        const values = order.payload.val() as object
        return { ...values, key }
      })
    }));
  }

}
