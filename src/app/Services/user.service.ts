import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import * as firebase from "firebase/compat/app";
import { AppUser } from '../models/AppUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  saveUserDetails(user: firebase.default.User) {
    this.db.object('/Users/' + user.uid).update({
      UserName: user.displayName,
      Email: user.email
    })
  }

  getUserDetails(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/Users/' + uid)
  }
}
