## Initializing the Database

1.  Create a folder, such as 'OrderMaster' to intialize the container in.
2.  Download and copy [docker-compose.yml](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/4710a80a32a91b14052a2ecdd7d0d55563f55fbc/DB/docker-compose.yml) into the OrderMaster folder.
3.  Download and copy [int_OrderMaster.sql](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/4710a80a32a91b14052a2ecdd7d0d55563f55fbc/DB/init_OrderMaster.sql) into the OrderMaster folder.
4.  In the OrderMaster folder where 'docker-compose.yml' and 'init_OrderMaster.sql' are saved, run the command `docker compose up`
5.  Open DBeaver and Create > Connection.
6.  Select MariaDB
7.  Enter the username:```user``` and the password:```password```.
8. Connect to the Database
9. Test the connection by running the SQL Query ```SELECT * FROM food_orders;```
10. If successful you have initialized the database, if not, refer to the troubleshooting section.

## Using the SQL Toolbox

### Insert Script
[Link to Insert Script](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/4710a80a32a91b14052a2ecdd7d0d55563f55fbc/DB/SQL-ToolBox/InsertScript.sql)
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

### Availability Script
[Link to Availibility Script](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/4710a80a32a91b14052a2ecdd7d0d55563f55fbc/DB/SQL-ToolBox/AvailabilityScript.sql)
```
SELECT server_id, first_name, last_name, availability
FROM restaurant.servers
WHERE availability = 'Y'
;
```
- This query script pulls the server id, first name and last name as well as the availabilty of the servers. The where statment makes the satement only pull the servers whose availabiliy is 'Y'. This would be used to find out which servers are available to take orders, tables, and other task such as running food.
<br>

### Order Details Script
[Link to Order Details Script](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/4710a80a32a91b14052a2ecdd7d0d55563f55fbc/DB/SQL-ToolBox/OrderDetailsScript.sql)
```
SELECT order_details_id, total_price
FROM restaurant.order_details;
```
- This pulls the order details id, and total price from the order_details table. This could be used to eventually calculate the average profit made from orders.
<br>

### Food Orders Script
[Link to Food Orders Script](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/4710a80a32a91b14052a2ecdd7d0d55563f55fbc/DB/SQL-ToolBox/FoodOrderScript.sql)
```
SELECT order_id, server_id, table_id, `date`, time_ordered, time_completed
FROM restaurant.food_orders;
```
- The query pulls the order id, server id, table id, date, time ordered, and time completed from the food_orders table. This info gives a glance into a specific orders overall info.






## Troubleshooting

1. Ensure [Docker](https://docs.docker.com/desktop/install/windows-install/) is installed and running.
2. Ensure [DBeaver](https://dbeaver.io/download/) is installed.
3. Check running containers using ```docker ps -a```.
4. Remove any conflicting containers with ```docker rm 'containername'```.
5. Use the command ```docker compose rm``` in any folders you have run ```docker compose up``` in the past.

