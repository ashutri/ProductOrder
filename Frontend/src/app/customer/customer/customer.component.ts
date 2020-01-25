import { Component, OnInit, Input } from '@angular/core';
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";
import { Router } from '@angular/router';
import { Location }                 from '@angular/common';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit {
 
  private customers: Customer[];
  constructor(private router: Router,
   private customerService: CustomerService,
   private location: Location) { }
  ngOnInit() {
   this.getAllCustomers();
   }
  getAllCustomers() {
   this.customerService.findAll().then(
    customers => {
   this.customers = customers;
   },
   err => {
   console.log(err);
   }
  );
   }
  createCustomer() {
   let firstName = (<HTMLInputElement>document.getElementById('firstName')).value;
   let phoneNo = (<HTMLInputElement>document.getElementById('phoneNo')).value;
   let email = (<HTMLInputElement>document.getElementById('email')).value;
   let customer = new Customer(0, firstName, Number(phoneNo), email);
   this.customerService.createCustomer(customer).then(
   customers => {
   this.customers = customers;
   },
   err => {
   console.log(err);
   }
   );
   }
  deleteCustomer(customer: Customer) {
   this.customerService.deleteCustomerById(customer.id).then(
    customers => {
   this.customers = customers;
   },
   err => {
   console.log(err);
   }
   );
   }

   goBack(): void {
    this.location.back();
  }
  }
