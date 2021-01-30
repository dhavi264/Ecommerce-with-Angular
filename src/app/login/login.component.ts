import { AlertService, AuthenticationService } from '../_services';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string;
  password:string;
  router: any;
  loginUser(){
    if (this.user == "dhavi264" && this.password=="Kakirde@212"){
       alert("Welcome to Let's Shop");
       this.router.navigate(['/home']);
    }
    else{
      alert("invalid user");  
     }
  }
   
  constructor() { 
    
         
  }

  ngOnInit() {}}
