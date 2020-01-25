import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from '../product/product/product.component';
const routes: Routes = [
  
  { path: 'product/:id', component: OrderComponent },
  
];
@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    [RouterModule.forRoot(routes)]
  ],  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class OrderModule { }
