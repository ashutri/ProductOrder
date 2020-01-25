import { Injectable } from '@angular/core';
import { Product } from "./product";
import { Http, Response } from "@angular/http";

import { Headers, RequestOptions } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ProductService {
private apiUrl = '/api/product';
private products: Product[];
constructor(private http: Http) {
 }
findAll(): Promise<Array<Product>> {
 return this.http.get(this.apiUrl)
 .toPromise()
 .then(response => response.json() as Product[])
 .catch(this.handleError);
 }
 find(id: Number): Product {
  return this.products[this.getSelectedIndex(id)];
}

private getSelectedIndex(id: Number) {
  for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
          return i;
      }
  }
  return -1;
}

 createProduct(prod: Product): Promise<Array<Product>> {
  let prodHeaders = new Headers({ 'Content-Type': 'application/json' });
  return this.http.post(this.apiUrl, JSON.stringify(prod), { headers: prodHeaders })
  .toPromise()
  .then(response => response.json() as Product[])
  .catch(this.handleError);
  }
  
deleteProductById(id: number): Promise<Array<Product>> {
 const url = `${this.apiUrl}/${id}`;
 return this.http.delete(url)
 .toPromise()
 .then(response => response.json() as Product[])
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