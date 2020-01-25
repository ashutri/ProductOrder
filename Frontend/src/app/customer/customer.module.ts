import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';


import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule
  ], 
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [RouterModule]
})
export class CustomerModule { }
