import { Component, OnInit } from '@angular/core';
import {User } from '../shared/user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   user: User;
  constructor() { }

  ngOnInit(): void {
  }

}
