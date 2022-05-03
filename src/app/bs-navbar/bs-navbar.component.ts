import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../Services/shopping-cart.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/AppUser';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  public userDetails: AppUser | null;
  public ShoppingCart$: Observable<ShoppingCart | null>;


  constructor(public auth: AuthService, public cartService: ShoppingCartService) {
    this.auth.getAppUserDetails().subscribe(user => {
      this.userDetails = user
      console.log(user);
    });
  }

  async ngOnInit() {
    this.ShoppingCart$ = (await this.cartService.getCart())
  }
  logOut() {
    this.auth.logout()
  }
}
