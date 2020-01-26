package com.ProductOrder.app.ProductOrderApp;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ProductOrder.app.Model.Customer;
import com.ProductOrder.app.Model.Product;
@RestController
@RequestMapping(value = "/api/product")
public class ProductController {
private List<Product> products = new ArrayList<Product>();
ProductController() {
this.products = buildProducts();
}
@RequestMapping(method = RequestMethod.GET)
public List<Product> getProducts() {
return this.products;
}
@RequestMapping(value = "/{id}", method = RequestMethod.GET)
public Product getProduct(@PathVariable("id") Long id) {
return this.products.stream().filter(prod -> prod.getId() == id).findFirst().orElse(null);
}
@RequestMapping(method = RequestMethod.POST)
public List<Product> saveProduct(@RequestBody Product prod) {
Long nextId = 0L;
if (this.products.size() != 0) {
	Product lastProduct = this.products.stream().skip(this.products.size() - 1).findFirst().orElse(null);
nextId = lastProduct.getId() + 1;
}
prod.setId(nextId);
this.products.add(prod);
return this.products;
}
@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
public List<Product> deleteEmployee(@PathVariable Long id) {
for(Iterator<Product> itr=this.products.iterator();itr.hasNext();)
{
	Product prod = itr.next();
Long inId = prod.getId();
if(inId == (id)){
itr.remove();
}
}
return this.products;
}
List<Product> buildProducts() {
List<Product> prods = new ArrayList<>();

Product prod1 = buildProduct(1L, "Puma Tshirt", 200.00, true, "https://cdn.designbyhumans.com/product_images/p/823036.65.198a4S7aysLAAAA-650x650-b-p-eee.jpg");
Product prod2 = buildProduct(2L, "Puma Shoes", 3000.00, true, "https://assets.ajio.com/medias/sys_master/root/h0b/h08/12611076620318/-473Wx593H-460319864-blue-MODEL.jpg");
Product prod3 = buildProduct(3L, "Titan Watch", 2000.00, true, "https://staticimg.titan.co.in/Titan/Catalog/90090KD02_1.jpg?pView=pdp");
Product prod4 = buildProduct(4L, "Nike Shoes", 6000.00, true, "https://5.imimg.com/data5/UX/UM/MY-14554186/nike-500x500.jpg");
Product prod5 = buildProduct(5L, "Titan Men Watch", 2000.00, true, "https://staticimg.titan.co.in/Titan/Catalog/90090KD02_1.jpg?pView=pdp");
Product prod6 = buildProduct(6L, "Nike Men Shoes", 6000.00, true, "https://5.imimg.com/data5/UX/UM/MY-14554186/nike-500x500.jpg");


prods.add(prod1);
prods.add(prod2);
prods.add(prod3);
prods.add(prod4);
prods.add(prod5);
prods.add(prod6);
return prods;
}
Product buildProduct(Long id, String name, Double price, boolean availability, String image) {
	Product prod = new Product(id, name, price, availability, image);
return prod;
}

}
