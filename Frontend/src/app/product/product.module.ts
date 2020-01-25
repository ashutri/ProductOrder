import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  
  { path: 'detail/:id', component: ProductComponent },
  
];
@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
     [RouterModule.forRoot(routes)]
    
  ], 
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [RouterModule]
})
export class ProductModule { }
