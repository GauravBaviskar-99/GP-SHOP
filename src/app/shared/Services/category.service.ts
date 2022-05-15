import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public db: AngularFireDatabase) { }

  getCategories() {
    return this.db.list('/categories/', ref => ref.orderByChild('name')).snapshotChanges()
      .pipe(map(categores => {
        return categores.map(category => {
          let key = category.key;
          let data = category.payload.val() as object;
          return { key, ...data }
        })
      }));
  }
}
