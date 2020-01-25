import { Injectable } from '@angular/core';
import { Order } from "./order";
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

private apiUrl = '/api/order';
constructor(private http: Http) {
 }
findAll(): Promise<Array<Order>> {
 return this.http.get(this.apiUrl)
 .toPromise()
 .then(response => response.json() as Order[])
 .catch(this.handleError);
 }

 createOrder(order: Order): Promise<Array<Order>> {
  let orderHeaders = new Headers({ 'Content-Type': 'application/json' });
  return this.http.post(this.apiUrl, JSON.stringify(order), { headers: orderHeaders })
  .toPromise()
  .then(response => response.json() as Order[])
  .catch(this.handleError);
  }

deleteOrderById(id: number): Promise<Array<Order>> {
 const url = `${this.apiUrl}/${id}`;
 return this.http.delete(url)
 .toPromise()
 .then(response => response.json() as Order[])
 .catch(this.handleError);
 }
private handleError(error: any): Promise<Array<any>> {
 console.error('An error occurred', error);
 return Promise.reject(error.message || error);
 }
 private handleErrors(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
  }
}