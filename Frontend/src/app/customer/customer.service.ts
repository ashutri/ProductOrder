import { Injectable } from '@angular/core';
import { Customer } from "./customer";
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class CustomerService {
private apiUrl = '/api/customer';
constructor(private http: Http) {
 }
findAll(): Promise<Array<Customer>> {
 return this.http.get(this.apiUrl)
 .toPromise()
 .then(response => response.json() as Customer[])
 .catch(this.handleError);
 }
createCustomer(customer: Customer): Promise<Array<Customer>> {
 let custHeaders = new Headers({ 'Content-Type': 'application/json' });
 return this.http.post(this.apiUrl, JSON.stringify(customer), { headers: custHeaders })
 .toPromise()
 .then(response => response.json() as Customer[])
 .catch(this.handleError);
 }
deleteCustomerById(id: number): Promise<Array<Customer>> {
 const url = `${this.apiUrl}/${id}`;
 return this.http.delete(url)
 .toPromise()
 .then(response => response.json() as Customer[])
 .catch(this.handleError);
 }
private handleError(error: any): Promise<Array<any>> {
 console.error('An error occurred', error);
 return Promise.reject(error.message || error);
 }
}