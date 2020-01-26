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
import com.ProductOrder.app.Model.Order;
import com.ProductOrder.app.Model.Product;
@RestController
@RequestMapping(value = "/api/order")
public class OrderController {
private List<Order> orders = new ArrayList<Order>();
OrderController() {
this.orders = buildOrders();
}
@RequestMapping(method = RequestMethod.GET)
public List<Order> getOrders() {
return this.orders;
}
@RequestMapping(value = "/{id}", method = RequestMethod.GET)
public Order getOrder(@PathVariable("id") Long id) {
return this.orders.stream().filter(order -> order.getId() == id).findFirst().orElse(null);
}
@RequestMapping(method = RequestMethod.POST)
public List<Order> saveOrder(@RequestBody Order order) {
Long nextId = 0L;
if (this.orders.size() != 0) {
	Order lastOrder = this.orders.stream().skip(this.orders.size() - 1).findFirst().orElse(null);
nextId = lastOrder.getId() + 1;
}
order.setId(nextId);
this.orders.add(order);
return this.orders;
}
@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
public List<Order> deleteOrder(@PathVariable Long id) {
for(Iterator<Order> itr=this.orders.iterator();itr.hasNext();)
{
	Order order = itr.next();
Long inId = order.getId();
if(inId == (id)){
itr.remove();
}
}
return this.orders;
}
List<Order> buildOrders() {
List<Order> ords = new ArrayList<>();

return ords;
}
Order buildOrder(Long id, Product product, Long count) {
	Order order = new Order(id, product, count);
return order;
}
}
