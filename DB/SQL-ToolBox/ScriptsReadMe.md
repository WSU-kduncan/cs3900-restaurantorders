# SQL Query Scripts Documentation

This document outlines and explains the various SQL scripts used in the OrderMaster database project. Each script is designed to address common business queries and help manage the database effectively.

---

### Insert Data into Tables

```sql
-- insert servers
INSERT INTO restaurant.servers (first_name, last_name, availability) VALUES('John', 'Doe', 'Y');
INSERT INTO restaurant.servers (first_name, last_name, availability) VALUES('Jane', 'Doe', 'N');
INSERT INTO restaurant.servers (first_name, last_name, availability) VALUES('John', 'Smith', 'Y');
INSERT INTO restaurant.servers (first_name, last_name, availability) VALUES('Derrick', 'Jones', 'Y');
INSERT INTO restaurant.servers (first_name, last_name, availability) VALUES('Tody', 'Phillip', 'Y');

-- insert menu items
INSERT INTO restaurant.menu_items (item_name, price) VALUES('Hot Dog', 2.00);
INSERT INTO restaurant.menu_items (item_name, price) VALUES('Pizza - Cheese', 3.00);
INSERT INTO restaurant.menu_items (item_name, price) VALUES('Pizza - Deluxe', 4.00);
INSERT INTO restaurant.menu_items (item_name, price) VALUES('Hamburger', 3.00);
INSERT INTO restaurant.menu_items (item_name, price) VALUES('Cheeseburger', 3.20);
INSERT INTO restaurant.menu_items (item_name, price) VALUES('Soft Drink', 2.00);

-- insert tables
INSERT INTO restaurant.tables (order_id, server_id) VALUES(1, 1);
INSERT INTO restaurant.tables (order_id, server_id) VALUES(2, 2);
INSERT INTO restaurant.tables (order_id, server_id) VALUES(2, 3);
INSERT INTO restaurant.tables (order_id, server_id) VALUES(3, 4);

-- insert food orders 
INSERT INTO restaurant.food_orders (server_id, table_id, `date`, time_ordered, time_completed, status, special_instructions) 
VALUES(1, 1, '2024-08-30 00:00:00', '00:00:00', '01:00:00', 'Complete', 'drink - root beer');
INSERT INTO restaurant.food_orders (server_id, table_id, `date`, time_ordered, time_completed, status, special_instructions) 
VALUES(2, 2, '2024-08-30 00:00:00', '00:00:00', '01:00:00', 'Complete', 'drink - root beer');

-- insert orders
INSERT INTO restaurant.order_details (order_id, item_id, name, quantity, total_price) 
VALUES(1, 1, 'Henry Jacobs', 3, 9.00);
INSERT INTO restaurant.order_details (order_id, item_id, name, quantity, total_price) 
VALUES(1, 6, 'Henry Jacobs', 4, 8.00);
INSERT INTO restaurant.order_details (order_id, item_id, name, quantity, total_price) 
VALUES(1, 1, 'Henry Jacobs', 1, 2.00);
INSERT INTO restaurant.order_details (order_id, item_id, name, quantity, total_price) 
VALUES(1, 1, 'Amy Styles', 3, 9.00);
INSERT INTO restaurant.order_details (order_id, item_id, name, quantity, total_price) 
VALUES(1, 6, 'John Henry', 4, 8.00);
INSERT INTO restaurant.order_details (order_id, item_id, name, quantity, total_price) 
VALUES(1, 1, 'John Henry', 1, 2.00);
```

* **Description:** This script inserts initial data into the tables, including servers, menu items, tables, food orders, and order details.

---

### Availability of Servers

```sql
SELECT server_id, first_name, last_name, availability
FROM restaurant.servers
WHERE availability = 'Y'
ORDER BY last_name ASC;
```
* **Description:** This query pulls the server ID, first name, last name, and availability status. It identifies which servers are available (denoted by 'Y') to take orders or manage tables. It’s used to check which staff members are currently on duty.

---

### Order Details

```sql
SELECT order_id, SUM(total_price) AS total_order_price
FROM restaurant.order_details
GROUP BY order_id;
```
* **Description:** This query retrieves the order_details_id and total_price for each item in the order_details table. It can be used to assess the profit made from individual orders or track specific items in an order.

---

```
SELECT order_id, server_id, table_id, `date`, time_ordered, time_completed
FROM restaurant.food_orders;
```
- The query pulls the order id, server id, table id, date, time ordered, and time completed from the food_orders table. This info gives a glance into a specific orders overall info.
<br>

```
SELECT item_id, item_name, unit_price
FROM restaurant.menu_items;
```
- This would be used to review pricing information.
