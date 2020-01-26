package com.ProductOrder.app.Model;

import java.io.Serializable;
public class Order implements Serializable {
private static final long serialVersionUID = -8809089768201955649L;
private Long id;
private Product product;
private Long count;
public Order(){}
public Order(Long id, Product product, Long count) {
super();
this.id = id;
this.setProduct(product);
this.setCount(count);
}
public Long getId() {
return id;
}
public void setId(Long id) {
this.id = id;
}

public Long getCount() {
	return count;
}
public void setCount(Long count) {
	this.count = count;
}

public Product getProduct() {
	return product;
}
public void setProduct(Product product) {
	this.product = product;
}

}
