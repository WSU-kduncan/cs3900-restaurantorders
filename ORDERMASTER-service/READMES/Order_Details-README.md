## Order Details Resource README
This document provides an overview of the order_details resource, defining its purpose, endpoint mappings, and justification for each operation. The order_details resource manages detailed information about each order in the restaurant orders system, including the items ordered, quantities, and pricing.

### Purpose
The order_details resource allows the retrieval, creation, updating, and deletion of individual order detail records. Each record in order_details is associated with a specific order, storing information like the menu item, quantity, and price.

### Endpoint Mappings

1.  **GET /order_details**
* Purpose: Retrieve a list of all order detail records.
* Data Ingested from Frontend: None required for basic retrieval of all records. (In the future, optional query parameters could be used for filtering.)
* Return Data:
    * Returns a JSON array of all order_detail entries, each including fields such as id, orderId, menuItemId, quantity, and price.
* Database Query:
```
SELECT * FROM order_details;
```
Business Logic: Suitable for frontend display of all order detail records, useful for reviewing all items in various orders and confirming details with the user.
2. POST /order_details
Purpose: Add a new order detail entry to the database.
Data Ingested from Frontend:
JSON object with required fields:
orderId (Long) - the associated order’s ID.
menuItemId (Long) - ID of the item being ordered.
quantity (Integer) - number of units of the item.
price (Double) - price per unit for the item.
Return Data:
Returns the newly created order_detail object, including its generated id and provided values.
Database Query:
sql
Copy code
INSERT INTO order_details (orderId, menuItemId, quantity, price) VALUES (?, ?, ?, ?);
Business Logic: The POST endpoint is essential for adding new items to an order. Every order may contain multiple items, each represented by a record in order_details.
3. PUT /order_details/{id}
Purpose: Update an existing order detail record based on its unique identifier.
Data Ingested from Frontend:
Path parameter id - the unique ID of the order_detail entry to update.
JSON object with fields to be updated:
orderId, menuItemId, quantity, and/or price as necessary.
Return Data:
Returns the updated order_detail object with the new values.
Database Query:
sql
Copy code
UPDATE order_details SET orderId = ?, menuItemId = ?, quantity = ?, price = ? WHERE id = ?;
Business Logic: The PUT endpoint is necessary for editing individual items in an order. For example, if the quantity or item price changes, this endpoint allows for modifying the existing record.
4. DELETE /order_details/{id}
Purpose: Remove a specific order detail entry from the database.
Data Ingested from Frontend:
Path parameter id - the unique ID of the order_detail entry to delete.
Return Data:
Returns a 204 No Content response to indicate successful deletion.
Database Query:
sql
Copy code
DELETE FROM order_details WHERE id = ?;
Business Logic: This endpoint is suitable for removing individual items from an order. For instance, if a customer decides to cancel an item in their order, this allows for deletion of that item’s record.
5. DELETE /order_details
Purpose: Remove all entries from the order_details table.
Data Ingested from Frontend: None.
Return Data:
Returns a 204 No Content response to indicate all entries were successfully deleted.
Database Query:
sql
Copy code
DELETE FROM order_details;
Business Logic: Although this endpoint allows clearing all records, it would generally be restricted to admin use due to the risk of data loss. It may be useful for testing or clearing data between sessions.
Justification for Endpoint Mappings
All four endpoint mappings (GET, POST, PUT, and DELETE) are essential for managing the order_details resource as each allows distinct and necessary CRUD operations. By supporting these operations, the application provides flexibility for retrieving, creating, updating, and deleting records based on user needs and business requirements.
