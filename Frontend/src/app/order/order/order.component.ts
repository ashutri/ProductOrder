import { Component, OnInit, Input }        from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Product }        from '../../product/product';
import { Order }        from '../order';
import { OrderService }  from '../../order/order.service';
import { ProductService }  from '../../product/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers:[OrderService, ProductService]
})
export class OrderComponent implements OnInit {
  private orders: Order[];
  private items: Order[] = [];
	private total: number = 0;
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit() {
		this.route.params.subscribe(params => {
			var id = params['id'];
			if (id) {
				var item: Order = {
					product: this.productService.find(id),
					count: 1
				};
				if (localStorage.getItem('order') == null) {
					let order: any = [];
					order.push(JSON.stringify(item));
					localStorage.setItem('order', JSON.stringify(order));
				} else {
					let order: any = JSON.parse(localStorage.getItem('order'));
					let index: number = -1;
					for (var i = 0; i < order.length(); i++) {
						let item: Order = JSON.parse(order[i]);
						if (item.product.id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						order.push(JSON.stringify(item));
						localStorage.setItem('order', JSON.stringify(order));
					} else {
						let item: Order = JSON.parse(order[index]);
						item.count += 1;
						order[index] = JSON.stringify(item);
						localStorage.setItem("order", JSON.stringify(order));
					}
				}
				this.loadCart();
			} else {
				this.loadCart();
			}
		});
  }
  loadCart(): void {
		this.total = 0;
		this.items = [];
		let order = JSON.parse(localStorage.getOrder('order'));
		for (var i = 0; i < order.length; i++) {
			let item = JSON.parse(order[i]);
			this.items.push({
				product: item.product,
				count: item.count
			});
			this.total += item.product.price * item.quantity;
		}
	}
  getAllOrders() {
    this.orderService.findAll().then(
     orders => {
    this.orders = orders;
    },
    err => {
    console.log(err);
    }
   );
    }
    
	remove(id: Number): void {
		let order: any = JSON.parse(localStorage.getItem('order'));
		let index: number = -1;
		for (var i = 0; i < order.length; i++) {
			let item: Order = JSON.parse(order[i]);
			if (item.product.id == id) {
				order.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("order", JSON.stringify(order));
		this.loadCart();
	}
   
  goBack(): void {
    this.location.back();
  }

  
}

