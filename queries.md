# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT p.productname, c.categoryname
FROM products as p
inner join categories as c on p.categoryid = c.categoryid;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.orderid, s.shippername 
FROM orders as o
inner join shippers as s on o.shipperid = s.shipperid
WHERE o.orderdate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT p.productname, o.quantity
FROM products as p
inner join orderdetails as o on o.productid = p.productid
where o.orderid = 10251;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT o.orderid as "order", c.customername as client , e.lastname as "sold by"
FROM orders as o
inner join customers as c on o.customerid = c.customerid
inner join employees as e on o.employeeid = e.employeeid;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

select c.categoryname, count(*) 
from products as p
inner join categories as c on p.categoryid = c.categoryid
group by c.categoryid;

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

SELECT orderID, COUNT(productId) as ItemCount
FROM orderdetails
GROUP BY orderId;


