## Tables

### Endpoints

----

### `GET /RestaurantTables`
Retrieve all restaurant tables.
- **Ingested Data**: None.
- **Response**: List of tables with `tableId`, and `capacity`.
- **Database Query**: `SELECT * FROM RestaurantTables`

### `GET /RestuarantTables/{tableId}`
Retrieve a restaurant table by ID.
- **Ingested Data**: `tableId`
- **Response**: Table details matching `tableId`.
- **Database Query**: `SELECT * FROM table WHERE table_id = ?`

### `POST /RestuarantTables`
Add a new restaurant table.
- **Ingested Data**: Fields `tableId` (required), `capacity` (optional).
- **Response**: Newly created table entry with set `tableID`.
- **Database Query**: `INSERT INTO table (capacity) VALUES (?)`

### `PUT /RestuarantTables/{tableId}`
Update restaurant table details.
- **Ingested Data**:
  - `tableId`
  - Fields to update (`availability`).
- **Response**: Updated table entry.
- **Database Query**: `UPDATE table SET tableId = ?, capacity = ? WHERE table_id = ?`

### `DELETE /RestuarantTables/{tableId}`
Delete a restaurant table.
- **Ingested Data**: `TableId`
- **Response**: No content (HTTP 204) on success.
- **Database Query**: `DELETE FROM tables WHERE table_id = ?`
