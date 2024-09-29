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

### order_details
Order details are a representation of individual items contained in an order.

#### Attributes
order_details has 4 associated attributes:
- **order_id** = This is the ID of the order that this entity is a part of. It is a foreign key from the "food_orders" entity. This is one part of this attribute's primary key. An order detail is, by definition, exclusively a part of only one order, so this ID can be used to partially identify a specific entity.
- **item_id** = This is the ID of the specific food item that this detail represents. It is a foreign key from the "menu_items" entity. This is one part of this attribute's primary key. A specific food item can only be associated with one detail within an order, as duplicate items are grouped into one detail and represented with the "quantity" attribute. This allows the attribute to partially identify a specific order_details entity.
- **Quantity** = This attribute represents the quantity of a given food item within a part of an order.
- **total_item_price** = This is the total price for one group of the same food item within an order. This is important to have in-case there are more than 1 of the same item in an order. It's derived from the menu_items' unit price.
#### Relationships
A group of order details can only be assigned to one specific order, as it is unique for that customer. Therefore, it has a M:1 relationship with the food_orders table.

An order detail can only have one food item assigned to it. This is because the system is intended to "group" duplicate items into one detail for an order. Therefore, it has a 1:M relationship with the menu_items entity.

Since an order detail can only be associated with one order and one menu item, they can be combined to make the primary key, removing the need for a specific unique ID for an entity.

### menu_items

The menu_items entity is a representation of individual items present on the restaurant's menu. This entity is used to populate the order_details entity so that the items for an order are neatly stored.
#### Attributes
This entity has 3 attributes:
- **item_id** = This is a unique number used to identify each individual menu item. It is the primary key for this table.
- **item_name** = This attribute contains the name of a specific menu item.
- **unit_price** = This is the price of one single instance of this menu item. This is used to calculate the total price of an order detail.
#### Relationships
A menu item can be present within multiple order details. Therefore, it has a M:1 relationship with order_details.


---

![Logical Model for OrderMaster DB](CS3900_OrderMaster_Logical.png)

Logical Model

---

![Physical Model for OrderMaster DB](CS3900_OrderMaster_Physical.png)

Physical Model
