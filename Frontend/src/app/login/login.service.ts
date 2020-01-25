import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Login} from "../login/login";
import {Observable} from "rxjs/index";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }
  baseUrl: string = 'api/login';

   
 
}

