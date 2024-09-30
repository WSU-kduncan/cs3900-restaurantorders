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

### Food Orders Overview

```sql
SELECT order_id, server_id, table_id, `date`, time_ordered, time_completed,
TIMESTAMPDIFF(MINUTE, time_ordered, time_completed) AS order_duration
FROM restaurant.food_orders;
```
* **Description:** This query retrieves details for each order, such as the order ID, server assigned to the order, table ID, order date, time ordered, and time completed. It provides a high-level overview of the order status and timing.

---

### Menu Item Pricing

```sql
SELECT item_id, item_name, unit_price
FROM restaurant.menu_items
ORDER BY unit_price DESC;
```
* **Description:** This query pulls the item_id, item_name, and unit_price for all items on the menu. It helps in reviewing and managing pricing information for each menu item.

---

### Top Selling Items

```sql
SELECT menu_items.item_name, SUM(order_details.quantity) AS total_quantity_sold
FROM order_details
JOIN menu_items ON order_details.item_id = menu_items.item_id
GROUP BY menu_items.item_name
ORDER BY total_quantity_sold DESC;
```
* **Description:** This query retrieves the total quantity sold for each menu item. By grouping the data by item_name and ordering the results by total_quantity_sold in descending order, it helps identify the top-selling items. This information is valuable for inventory management, menu optimization, and promotions.
