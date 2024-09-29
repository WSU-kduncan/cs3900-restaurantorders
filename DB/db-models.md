# OrderMaster Model Descriptions
---
## Conceptual Model
![Conceptual Model for OrderMaster DB](CS3900_OrderMaster_Conceptual.png)

The conceptual model for the OrderMaster database lays out a simple, easy-to-understand diagram of the database's entities, their relationships among themselves, and their attributes. This allows any individual to follow the database's flow, regardless of their experience level.

### servers
The Servers entity represents the workers in the restaurant who are in charge of delivering orders to customers.

#### Attributes
They have 4 attributes in total:
- **Server_id** = This is a unique number provided to each worker to help differentiate them within the database. This is the primary key for this entity.
- **first_name** = This is a specific server's first name.
- **last_name** = This is a specific server's last name.
- **availability** = This attribute denotes whether a specific server is available to be given orders. This may reflect, for example, a server who's not on the clock.

#### Relationships
A specific server may have several orders assigned to them. Therefore, it has a 1:M relationship to the "order_details" entity.

### tables
The Tables entity represents the individual tables that are available at the restaurant.

#### Attributes
They have 2 attributes in total:
- **table_id** = This is a unique number provided to each table to help differentiate them within the database. This is the primary key for this entity.
- **capacity** = This attribute denotes the number of available seats for a given table.
#### Relationships
A table can have one given order assigned to it. Therefore, it has a 1:1 relationship with the "order_details" entity.

### food_orders
The food_orders entities represent an entire order that was taken from a customer.

#### Attributes
This entity has the most attributes assigned to it, at a staggering total of 8.
- **order_id** = This is a unique number provided to each order to help differentiate them within the database. This is the primary key for this entity.
- **server_id** = This is the ID of the server that has been assigned to this order. It is a foreign key from the "servers" entity.
- **table_id** = This is the ID of the table that requested the order. It is a foreign key from the "tables" entity.
- **date** = This is the date that the order was placed.
- **time_ordered** = This is the exact time that the order was entered into the database.
- **time_completed** = This is the exact time that the order was considered to be completed.
- **status** = This is an attribute that denotes the status of the order, or what exactly is being done.
- **special_instructions** = This attribute is an open spot to list any instructions given by the customer that isn't usual for the order or the items within the order.
  
#### Relationships
A given order was taken from customers at a specific table. Therefore, it has a 1:1 relationship with the "tables" entity.

An order is likely to contain several food items. Therefore, it has a 1:M relationship to the "order_details" entity.

---

### **order_details**
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

### **menu_items**

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
## **Physical Model**

![Physical Model for OrderMaster DB](CS3900_OrderMaster_Physical.png)

The physical model includes the database’s technical specifications. It defines the data types and storage mechanisms in MariaDB to represent the logical model accurately. 
