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
  constructor(public auth: AuthService) {
    this.auth.getAppUserDetails().subscribe(user => {
      this.userDetails = user
      console.log(user);
    });
  }

  ngOnInit(): void {
  }
  logOut() {
    this.auth.logout()
  }
}
