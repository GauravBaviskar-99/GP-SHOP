import { Product } from 'shared/models/product';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firebaseDB: AngularFireDatabase) {

  }

  addProductInDB(product: any) {
    return this.firebaseDB.list('/Products/').push(product);
  }

  getAllProducts(): Observable<Product[] | any> {
    return this.firebaseDB.list('/Products').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const key = a.payload.key;
        let data = a.payload.val() as Object;
        return { ...data, key };
      })
    }));
  }

  getProduct(id: string) {
    return this.firebaseDB.object('/Products/' + id).valueChanges();
  }

  updateProduct(id: string, product: any) {
    return this.firebaseDB.object('Products/' + id).update(product)
  }

  deleteProduct(id: string) {
    return this.firebaseDB.object('Products/' + id).remove();
  }
}
