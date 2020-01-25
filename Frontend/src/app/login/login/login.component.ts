import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import {Router} from "@angular/router";
import { LoginService } from "../login.service";
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
username: string;
password: string;
  ngOnInit() {
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["product"]);
    }else {
      alert("Invalid credentials");
    }
  }
  
}