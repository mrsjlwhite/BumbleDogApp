import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  aboutMode = false;

  constructor() { }

  ngOnInit(): void {

  }

  registerToggle() {
    this.registerMode = !this.registerMode;
    if (this.registerMode) {
      this.aboutMode = false;
    }
  }

  aboutToggle() {
    this.aboutMode = !this.aboutMode;
    if (this.aboutMode) {
      this.registerMode = false;
    }
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
