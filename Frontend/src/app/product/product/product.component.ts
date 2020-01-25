import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../product";
import { ProductService } from "../product.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
 
  private products: Product[];
  constructor(private router: Router,
   private prodService: ProductService) { }
  ngOnInit() {
   this.getAllProducts();
   }
  getAllProducts() {
   this.prodService.findAll().then(
    products => {
   this.products = products;
   },
   err => {
   console.log(err);
   }
  );
   }
  createProduct() {
   let name = (<HTMLInputElement>document.getElementById('name')).value;
   let price = (<HTMLInputElement>document.getElementById('price')).value;
   let availability = (<HTMLInputElement>document.getElementById('availability')).value;
   let image = (<HTMLInputElement>document.getElementById('image')).value;
   let product = new Product(0, name, Number(price), Boolean(availability), image);
   this.prodService.createProduct(product).then(
    products => {
   this.products = products;
   },
   err => {
   console.log(err);
   }
   );
   }
  
  }
