# OrderMaster Model Descriptions

## Conceptual Model
![Conceptual Model for OrderMaster DB](CS3900_OrderMaster_Conceptual.png)

The conceptual model for the OrderMaster database lays out a simple, easy-to-understand diagram of the database's entities, their relationships among themselves, and their attributes. This allows any individual to follow the database's flow, regardless of their experience level.

### Entities Overview
---

#### **servers**
The Servers entity represents the workers in the restaurant who are in charge of delivering orders to customers.

| Attribute    | Description                                                                                       |
|--------------|---------------------------------------------------------------------------------------------------|
| **server_id** | Unique identifier for each server. Primary key.                                                   |
| **first_name** | First name of the server.                                                                         |
| **last_name** | Last name of the server.                                                                          |
| **availability** | Status indicating whether a server is available for new orders (e.g., off-shift, on-shift).     |

**Relationships:**  
- 1:M relationship with `food_orders`: A server may be assigned to many orders.

---

#### **tables**
The Tables entity represents the individual tables that are available at the restaurant.

| Attribute     | Description                              |
|---------------|------------------------------------------|
| **table_id**  | Unique identifier for each table. Primary key. |
| **capacity**  | Number of seats available at the table. |
  
**Relationships:**  
- 1:1 relationship with `food_orders`: A table is assigned one order at a time.

---

#### **food_orders**
The food_orders entities represent an entire order that was taken from a customer.

| Attribute             | Description                                                   |
|-----------------------|---------------------------------------------------------------|
| **order_id**          | Unique identifier for each order. Primary key.                |
| **server_id**         | ID of the server assigned to this order. Foreign key to `servers`. |
| **table_id**          | ID of the table for the order. Foreign key to `tables`.       |
| **date**              | Date when the order was placed.                               |
| **time_ordered**      | Time when the order was entered.                              |
| **time_completed**    | Time when the order was completed.                            |
| **status**            | Status of the order (e.g., pending, completed).               |
| **special_instructions** | Special instructions from the customer, if any.            |
  
**Relationships:**  
- 1:1 relationship with `tables`: Each order is assigned to a specific table.  
- 1:M relationship with `order_details`: Each order can have multiple items.

---

#### **order_details**
Order details are a representation of individual items contained in an order.

| Attribute          | Description                                                     |
|--------------------|-----------------------------------------------------------------|
| **order_id**       | ID of the order this detail is part of. Foreign key to `food_orders`. (Part of composite primary key). |
| **item_id**        | ID of the menu item. Foreign key to `menu_items`. (Part of composite primary key). |
| **quantity**       | Number of units for the menu item in the order.                 |
| **total_item_price** | Total price for the quantity of the item. Derived from `menu_items.unit_price`. |

**Relationships:**
- M:1 relationship with `food_orders`: Each set of order details belongs to one order.  
- 1:M relationship with `menu_items`: An item can appear in multiple orders.

---

#### **menu_items**

The menu_items entity is a representation of individual items present on the restaurant's menu. This entity is used to populate the order_details entity so that the items for an order are neatly stored.

| Attribute   | Description                                                       |
|-------------|-------------------------------------------------------------------|
| **item_id** | Unique identifier for each menu item. Primary key.                |
| **item_name** | Name of the menu item.                                           |
| **unit_price** | Price of a single unit of the item.                             |

**Relationships:** 
- M:1 relationship with `order_details`: A menu item can be included in multiple orders.

---
## **Logical Model**

![Logical Model for OrderMaster DB](CS3900_OrderMaster_Logical.png)

The logical model defines the structure of the database in more detail. It includes entities, their attributes, primary and foreign keys, and relationships between the entities. 

---

#### **servers**
This entity represents the servers that take orders and deliver food to tables.

| Attribute         | Description                                                                                |
|-------------------|--------------------------------------------------------------------------------------------|
| **server_id(PK)** | The primary key of the table, each server will have a unique id.                           |
| **first_name**    | The servers first name.                                                                    |
| **last_name**     | The servers last name.                                                                     |
| **availability**  | Whether or not the server is available for orders and waiting tables.                      |
 
- The `servers` entity has a 1 to M relationship with the `food_orders` entity. A server will be managing multiple orders at once.

---

#### **tables**
This entity represents the tables that customers are seated at and order for.

| Attribute        | Description                                            |
|------------------|--------------------------------------------------------|
| **table_id (PK)**| The primary key of tables, each table has a unique id. |
| **capacity**     | How many seats the table has available.                |
  
- The `tables` entity has a 1 to 1 relationship with the `food_orders` entity. Each food order is assigned to a singular table.

---

#### **food_orders**
This entity represents the orders made by customers.

| Attribute                | Description                                                        |
|--------------------------|--------------------------------------------------------------------|
| **order_id (PK)**        | The primary key of food_orders, each food order has a unique id.   |
| **server_id (FK)**       | A foreign key from the servers entity, each server has a unique id and is assigned to a food_order.|
| **table_id (FK)**        | A foreign key from the tables entity, each table has a unique id and is assigned to a food_order.  |
| **date**                 | The date each food order was placed.                                |
| **time_ordered**         | The time each food order was placed.                                |
| **time_completed**       | The time each food order was marked as completed.                   |
| **status**               | The status of the order, whether it is in progress, completed or canceled.  |
| **special_instructions** | Any special instructions listed by the customer, such as allergies.             |
  
- The `food_orders` entity has a 1 to 1 relationship with the `tables` entity. Each order is assigned to one table at a time. 
- The `food_orders` entity has a 1 to M relationship with the `order_details` entity. Each order may have multiple items.

---

#### **menu_items**
This entity represents the items available for a food order and their individual price.

| Attribute   | Description                                                           |
|-------------|-----------------------------------------------------------------------|
| **item_id (PK)** | The primary key of menu_items, each menu item has a unqiue id.   |
| **item_name** | The name of each menu item.                                         |
| **unit_price** | The price of a single menu item.                                   |

- The `menu_items` entity has a M to 1 relationship with the `order_details` entity. A menu item may be in multiple orders.

---

#### **order_details**
This entity represnts the details of each food order.

| Attribute          | Description                                                     |
|--------------------|-----------------------------------------------------------------|
| **order_id (FK)**  | Forms a composite primary key alongside `item_id`, each food order has a unique id |
| **item_id (FK)**   | Forms a composite primary key alongside `order_details`, each item has a unique id. |
| **quantity**       | The amount ordered for each item.                |
| **total_item_price** |  A calculation derived from `menu_items.unit_price`, defines the total price for this order detail. |

- The ```order_details``` entity has a M to 1 relationship with the `food_orders` entity. Each set of order details belongs to one order.  
- The ```order_details``` entity has a 1 to M relationship with the `menu_items`entity. Each order can have multiple items.

---

---
## **Physical Model**

![Physical Model for OrderMaster DB](CS3900_OrderMaster_Physical.png)

The physical model of the restaurant orders database defines the detailed structure of the tables, their attributes, and relationships. It is optimized for a MariaDB environment and includes specific data types and constraints such as `IDENTITY`, `NOT NULL`, and foreign key relationships to ensure referential integrity.

---

### **Tables**

Represents the restaurant’s seating arrangement.

| Attribute   | Data Type    | Description                                  |
|-------------|--------------|----------------------------------------------|
| **table_id** | `INT`         | Auto-incrementing unique identifier for each table. Primary key. |
| **capacity** | `TINYINT`     | Defines the number of seats available at each table. Not null. |

- **Relationships**: One-to-one relationship with `food_orders`: Each table is linked to one food order at a time.

---

### **Servers**

Represents the employees responsible for serving food orders to customers.

| Attribute    | Data Type      | Description                                                  |
|--------------|----------------|--------------------------------------------------------------|
| **server_id** | `INT`           | Auto-incrementing unique identifier for each server. Primary key. |
| **first_name** | `NVARCHAR(35)` | The first name of the server. Not null.                      |
| **last_name** | `NVARCHAR(35)` | The last name of the server. Not null.                       |
| **availability** | `VARCHAR(10)`  | The availability status of the server (e.g., 'Y' for available, 'N' for unavailable). Not null. |

- **Relationships**: One-to-many relationship with `food_orders`: A server can manage multiple food orders.

---

### **Food Orders**

Represents the orders placed by customers at their tables.

| Attribute            | Data Type     | Description                                                                 |
|----------------------|---------------|-----------------------------------------------------------------------------|
| **order_id**          | `INT`         | Auto-incrementing unique identifier for each food order. Primary key.        |
| **server_id**         | `INT`         | Foreign key linking to the `servers` table to identify the server responsible for the order. Not null. |
| **table_id**          | `INT`         | Foreign key linking to the `tables` table to identify the table where the order was placed. Not null. |
| **date**              | `DATE`        | The date when the order was placed. Not null.                                |
| **time_ordered**      | `TIME`        | The time when the order was placed. Not null.                                |
| **time_completed**    | `TIME`        | The time when the order was completed. Can be null if the order is still pending. |
| **status**            | `VARCHAR(10)` | The current status of the order (e.g., pending, completed). Not null.        |
| **special_instructions** | `VARCHAR(100)` | Any specific instructions from the customer, such as dietary preferences or modifications. Can be null. |

- **Relationships**: One-to-many relationship with `order_details`: Each food order can consist of multiple items (order details).  
- One-to-one relationship with `tables`: Each order is linked to a single table.

---

### **Menu Items**

Represents the items available on the restaurant’s menu.

| Attribute     | Data Type    | Description                                        |
|---------------|--------------|----------------------------------------------------|
| **item_id**    | `INT`         | Auto-incrementing unique identifier for each menu item. Primary key. |
| **item_name**  | `VARCHAR(16)` | The name of the menu item (e.g., 'Pizza', 'Hamburger'). Not null. |
| **unit_price** | `DECIMAL(5,2)` | The price of a single unit of the menu item. Not null. |

- **Relationships**: One-to-many relationship with `order_details`: A menu item can appear in multiple orders.

---

### **Order Details**

Represents the individual items within a food order.

| Attribute       | Data Type     | Description                                                      |
|-----------------|---------------|------------------------------------------------------------------|
| **order_id**     | `INT`         | Foreign key linking to the `food_orders` table. Identifies which order this item belongs to. Not null. |
| **item_id**      | `INT`         | Foreign key linking to the `menu_items` table. Identifies which menu item was ordered. Not null. |
| **quantity**     | `TINYINT`     | The number of units of the menu item ordered. Not null.           |
| **total_price**  | `DECIMAL(6,2)` | The total price for this order detail, calculated as `unit_price` multiplied by `quantity`. Not null. |

- **Relationships**: Many-to-one relationship with `food_orders`: Each order detail is linked to one food order.  
- Many-to-one relationship with `menu_items`: Each order detail is linked to one specific menu item.

---

### Key Relationships:

1. **Servers ↔ Food Orders**: A server can manage multiple food orders, but each food order is assigned to a single server.
2. **Tables ↔ Food Orders**: Each table is associated with one food order at a time.
3. **Food Orders ↔ Order Details**: A single food order can have multiple items (order details), but each order detail is linked to one food order.
4. **Order Details ↔ Menu Items**: Each order detail corresponds to one menu item, but the same menu item can appear in multiple orders.

