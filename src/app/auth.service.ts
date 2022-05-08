import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from "firebase/compat/app";
import { observable, Observable, of, Subscription, switchMap } from 'rxjs';
import { AppUser } from './models/AppUser';
import { UserService } from './Services/user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userDetails$: Observable<firebase.default.User | null>;
  public userSubscription: Subscription;

  constructor(public auth: AngularFireAuth,
    public activated_route: ActivatedRoute,
    public route: Router,
    public userService: UserService) {
    this.userDetails$ = this.auth.authState;

  }
  async login() {
    let returnUrl = this.activated_route.snapshot.queryParamMap.getAll('returnUrl') || '/';

    await this.auth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider())

    this.userSubscription = this.userDetails$.subscribe(user => {
      if (user) {

        this.userService.saveUserDetails(user);
        this.route.navigate([returnUrl.join('/')]);

      }
    })
  }
  logout() {
    this.auth.signOut()
    this.route.navigate(['/'])
  }

  getAppUserDetails(): Observable<AppUser | null> {
    return this.userDetails$
      .pipe(switchMap(user => {
        if (user)
          return this.userService.getUserDetails(user.uid).valueChanges()
        return of(null)
      }
      ))
  }
}
