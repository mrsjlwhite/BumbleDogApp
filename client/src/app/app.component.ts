import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// how data is being bound to view
export class AppComponent implements OnInit {
  title = 'The Bumble Dog App';
  users: any; // turning off type safety, so can be any data type

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  setCurrentUser() {
    const userJson = localStorage.getItem('user');
    const user: User = userJson !== null ? JSON.parse(userJson) : {};
    this.accountService.setCurrentUser(user);
  }

}