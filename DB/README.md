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

- This script inserts data into the various tables.

### Availability Script
[Link to Availibility Script](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/4710a80a32a91b14052a2ecdd7d0d55563f55fbc/DB/SQL-ToolBox/AvailabilityScript.sql)

- This query script pulls the server id, first name and last name as well as the availabilty of the servers. The where statment makes the satement only pull the servers whose availabiliy is 'Y'. This would be used to find out which servers are available to take orders, tables, and other task such as running food.

### Order Details Script
[Link to Order Details Script](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/4710a80a32a91b14052a2ecdd7d0d55563f55fbc/DB/SQL-ToolBox/OrderDetailsScript.sql)

- This pulls the order details id, and total price from the order_details table. This could be used to eventually calculate the average profit made from orders.

### Food Orders Script
[Link to Food Orders Script](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/4710a80a32a91b14052a2ecdd7d0d55563f55fbc/DB/SQL-ToolBox/FoodOrderScript.sql)

- The query pulls the order id, server id, table id, date, time ordered, and time completed from the food_orders table. This info gives a glance into a specific orders overall info.

### Pricing Script
[Link to Pricing Script](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/main/DB/SQL-ToolBox/PriceScript.sql)

- This script be used to review pricing information.

---

## Troubleshooting

If you encounter issues during the setup or while running queries, try the following:

1. **Ensure Docker is Installed and Running:**
   - Install Docker from [here](https://docs.docker.com/desktop/install/windows-install/), and ensure the Docker Desktop application is running.

2. **Ensure DBeaver is Installed:**
   - Install DBeaver from [here](https://dbeaver.io/download/) if it's not already installed.
     
3. **Check Running Containers:**
   - Run the following command to check if the MariaDB container is running:
     ```bash
     docker ps -a
     ```
   - If the container is not running, check the logs for errors.

4. **Remove Conflicting Containers:**
   - If there are conflicting containers from previous setups, remove them using:
     ```bash
     docker rm <containername>
     ```

5. **Reset the Container Environment:**
   - If you need to reset the environment, run the following command in the folder where you've previously run `docker compose up`:
     ```bash
     docker compose rm
     ```

If these steps do not resolve your issue, consult Docker and MariaDB documentation for further troubleshooting.
