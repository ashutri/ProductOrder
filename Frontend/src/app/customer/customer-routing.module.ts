import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from '../customer/customer/customer.component';
const routes: Routes = [
    { path: 'api/customer', component: CustomerComponent}
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CustomerRoutingModule { }
