package com.ProductOrder.app.Model;

import java.io.Serializable;

public class Product implements Serializable {
private static final long serialVersionUID = -8809089768201955649L;
private Long id;
private String name;
private Double price;
private boolean availability;
private String image;
public Product(){}
public Product(Long id, String name, Double price, boolean availability, String image){
super();
this.id = id;
this.setName(name);
this.setPrice(price);
this.setAvailability(availability);
this.setImage(image);
}
public Long getId() {
return id;
}
public void setId(Long id) {
this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public Double getPrice() {
	return price;
}
public void setPrice(Double price) {
	this.price = price;
}
public boolean isAvailability() {
	return availability;
}
public void setAvailability(boolean availability) {
	this.availability = availability;
}
public String getImage() {
	return image;
}
public void setImage(String image) {
	this.image = image;
}


}
