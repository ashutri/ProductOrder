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
@RestController
@RequestMapping(value = "/api/customer")
public class CustomerController {
private List<Customer> customers = new ArrayList<Customer>();
CustomerController() {
this.customers = buildCustomers();
}
@RequestMapping(method = RequestMethod.GET)
public List<Customer> getCustomers() {
return this.customers;
}
@RequestMapping(value = "/{id}", method = RequestMethod.GET)
public Customer getCustomer(@PathVariable("id") Long id) {
return this.customers.stream().filter(emp -> emp.getId() == id).findFirst().orElse(null);
}
@RequestMapping(method = RequestMethod.POST)
public List<Customer> saveCustomer(@RequestBody Customer cust) {
Long nextId = 0L;
if (this.customers.size() != 0) {
	Customer lastCustomer = this.customers.stream().skip(this.customers.size() - 1).findFirst().orElse(null);
nextId = lastCustomer.getId() + 1;
}
cust.setId(nextId);
this.customers.add(cust);
return this.customers;
}
@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
public List<Customer> deleteCustomer(@PathVariable Long id) {
for(Iterator<Customer> itr=this.customers.iterator();itr.hasNext();)
{
	Customer cust = itr.next();
Long inId = cust.getId();
if(inId == (id)){
itr.remove();
}
}
return this.customers;
}
List<Customer> buildCustomers() {
List<Customer> custs = new ArrayList<>();
Customer cust1 = buildCustomer(1L, "Rohan", 56454644646L, "Rohan@email.com");
Customer cust2 = buildCustomer(2L, "Rajesh", 45464654645L, "Rajesh@email.com");
Customer cust3 = buildCustomer(3L, "Karan", 9854444446L, "Karan@email.com");
Customer cust4 = buildCustomer(4L, "Renuka", 8864654645L, "Renuka@email.com");
custs.add(cust1);
custs.add(cust2);
custs.add(cust3);
custs.add(cust4);
return custs;
}
Customer buildCustomer(Long id, String fname, Long phoneNo, String email) {
	Customer emp = new Customer(id, fname, phoneNo, email);
return emp;
}
}
