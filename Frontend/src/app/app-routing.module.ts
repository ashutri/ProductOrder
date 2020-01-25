import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login/login.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { ProductComponent } from './product/product/product.component';
import { OrderComponent } from './order/order/order.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'details/:id', component: OrderComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'product', component: ProductComponent},
  { path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
