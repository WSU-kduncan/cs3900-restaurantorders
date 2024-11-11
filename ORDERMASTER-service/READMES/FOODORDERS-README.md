## Food Orders

### Endpoints

----

### `GET /api/food_orders`
Retrieve all food orders, with optional search, pagination, and sorting.
- **Ingested Data**: 
  - `search` (optional): search term
  - `page` (default `1`): page number
  - `rpp` (default `10`): results per page
  - `sortOrder`, `sortField` (optional): sorting options
- **Response**: List of food orders, including `orderId`, `serverId`, `tableId`, `date`, `timeOrdered`, `timeCompleted`, `status`, `specialInstructions`.
- **Database Query**: `SELECT * FROM food_orders` with optional filters and sorting.

### `POST /api/food_orders`
Add a new food order.
- **Ingested Data**: 
  - Fields `serverId`, `tableId`, `date`, `timeOrdered` (required).
  - Optional fields: `timeCompleted`, `status`, `specialInstructions`.
- **Response**: Newly created food order entry with generated `orderId`.
- **Database Query**: `INSERT INTO food_orders (server_id, table_id, date, time_ordered, time_completed, status, special_instructions) VALUES (?, ?, ?, ?, ?, ?, ?)`

### `PUT /api/food_orders/{id}`
Update an existing food order.
- **Ingested Data**:
  - `id` (orderId)
  - Fields to update (e.g., `serverId`, `tableId`, `date`, `timeOrdered`, `timeCompleted`, `status`, `specialInstructions`).
- **Response**: Updated food order entry.
- **Database Query**: `UPDATE food_orders SET server_id = ?, table_id = ?, date = ?, time_ordered = ?, time_completed = ?, status = ?, special_instructions = ? WHERE order_id = ?`

### `DELETE /api/food_orders/{id}`
Delete a food order by ID.
- **Ingested Data**: `id` (orderId)
- **Response**: No content (HTTP 204) on success.
- **Database Query**: `DELETE FROM food_orders WHERE order_id = ?`
