### SQL Query Scripts
<br>

```
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
INSERT INTO restaurant.food_orders (server_id, table_id, `date`, time_ordered, time_completed, status, special_instructions) VALUES(1, 1, '2024-08-30 00:00:00', '00:00:00', '01:00:00', 'Complete', 'drink - root beer');
INSERT INTO restaurant.food_orders (server_id, table_id, `date`, time_ordered, time_completed, status, special_instructions) VALUES(2, 2, '2024-08-30 00:00:00', '00:00:00', '01:00:00', 'Complete', 'drink - root beer');


--  insert orders
INSERT INTO restaurant.order_details (order_id, item_id, name, quantity, total_price) VALUES(1, 1, 'Henry Jacobs', 3, 9.00);
INSERT INTO restaurant.order_details (order_id, item_id, name, quantity, total_price) VALUES(1, 6, 'Henry Jacobs', 4, 8.00);
INSERT INTO restaurant.order_details (order_id, item_id, name, quantity, total_price) VALUES(1, 1, 'Henry Jacobs', 1, 2.00);
INSERT INTO restaurant.order_details (order_id, item_id, name, quantity, total_price) VALUES(1, 1, 'Amy Styles', 3, 9.00);
INSERT INTO restaurant.order_details (order_id, item_id, name, quantity, total_price) VALUES(1, 6, 'John Henry', 4, 8.00);
INSERT INTO restaurant.order_details (order_id, item_id, name, quantity, total_price) VALUES(1, 1, 'John Henry', 1, 2.00);
```
- This script inserts data into the various tables.
<br>

```
SELECT server_id, first_name, last_name, availability
FROM restaurant.servers
WHERE availability = 'Y'
;
```
- This query script pulls the server id, first name and last name as well as the availabilty of the servers. The where statment makes the satement only pull the servers whose availabiliy is 'Y'.
<br>


```
SELECT order_details_id, total_price
FROM restaurant.order_details;
```
- This pulls the order details id, and total price from the order_details table.

