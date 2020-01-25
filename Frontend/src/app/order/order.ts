
import { Product }        from '../product/product';
export class Order{
    product: Product;
    count: number;
    constructor(product: Product, count: number){
    this.product = product;
    this.count = count;
    }
    }