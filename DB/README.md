# OrderMaster Database Setup Guide

## Initializing the Database

Follow these steps to set up and initialize the OrderMaster database:

1. **Create a Project Folder:**
   - Create a folder on your system, such as `OrderMaster`, to initialize the database container in.

2. **Download Configuration Files:**
   - Download and copy the [docker-compose.yml](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/4710a80a32a91b14052a2ecdd7d0d55563f55fbc/DB/docker-compose.yml) file into the `OrderMaster` folder.
   - Download and copy the [init_OrderMaster.sql](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/4710a80a32a91b14052a2ecdd7d0d55563f55fbc/DB/init_OrderMaster.sql) file into the same folder.

3. **Run the MariaDB Container:**
   - In the `OrderMaster` folder, open a terminal and run the following command to start the container:
     ```bash
     docker compose up
     ```

4. **Connect to the Database:**
   - Open [DBeaver](https://dbeaver.io/download/) or another database management tool.
   - Navigate to `Create > Connection` and select **MariaDB**.
   
5. **Enter Connection Details:**
   - Use the following credentials to connect:
     - **Username:** `user`
     - **Password:** `password`
   
6. **Test the Connection:**
   - After connecting to the database, test the setup by running the following SQL query:
     ```sql
     SELECT * FROM food_orders;
     ```
   - If the query runs successfully and returns results, the database has been initialized correctly.

7. **Troubleshooting:**
   - If the connection fails or the query doesn't run successfully, refer to the [Troubleshooting](#troubleshooting) section below.

---

## Using the SQL Toolbox

The SQL Toolbox contains several scripts to interact with the database. Below are descriptions and links to the scripts:

### 1. **Insert Script**
[Link to Insert Script](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/4710a80a32a91b14052a2ecdd7d0d55563f55fbc/DB/SQL-ToolBox/InsertScript.sql)
- This script inserts data into various tables in the database, populating it with initial values.

### 2. **Availability Script**
[Link to Availability Script](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/4710a80a32a91b14052a2ecdd7d0d55563f55fbc/DB/SQL-ToolBox/AvailabilityScript.sql)
- This query pulls the server ID, first name, last name, and availability of the servers.
- The `WHERE` clause filters the result to show only servers whose availability is marked as `'Y'`. This can be used to find which servers are currently available to take orders.

### 3. **Order Details Script**
[Link to Order Details Script](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/4710a80a32a91b14052a2ecdd7d0d55563f55fbc/DB/SQL-ToolBox/OrderDetailsScript.sql)
- This script retrieves the order details ID and total price from the `order_details` table. It can be used to calculate the average profit made from orders.

### 4. **Food Orders Script**
[Link to Food Orders Script](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/4710a80a32a91b14052a2ecdd7d0d55563f55fbc/DB/SQL-ToolBox/FoodOrderScript.sql)
- This query pulls information from the `food_orders` table, including order ID, server ID, table ID, date, time ordered, and time completed. It provides a snapshot of a specific order’s details.

### 5. **Pricing Script**
[Link to Pricing Script](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/main/DB/SQL-ToolBox/PriceScript.sql)
- This script can be used to review pricing information for items in the menu.

### 6. **Top Selling Items Script**
[Link to Pricing Script]() 
- This query retrieves the total quantity sold for each menu item. By grouping the data by item_name and ordering the results by total_quantity_sold in descending order, it helps identify the top-selling items. This information is valuable for inventory management, menu optimization, and promotions.

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
