import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  userDetails$: Observable<any>
  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
    this.userDetails$ = this.AuthService.getAppUserDetails();
  }

}
