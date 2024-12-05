## Servers

### Endpoints

----

### `GET /servers`
Retrieve all servers.
- **Ingested Data**: None.
- **Response**: List of servers with `serverId`, `firstName`, `lastName`, and `availability`.
- **Database Query**: `SELECT * FROM servers`

### `GET /servers/{serverId}`
Retrieve a server by ID.
- **Ingested Data**: `serverId`
- **Response**: Server details matching `serverId`.
- **Database Query**: `SELECT * FROM servers WHERE server_id = ?`

### `POST /servers`
Add a new server.
- **Ingested Data**: Fields `firstName` (required), `lastName` (required), `availability` (optional).
- **Response**: Newly created server entry with generated `serverId`.
- **Database Query**: `INSERT INTO servers (first_name, last_name, availability) VALUES (?, ?, ?)`

### `PUT /servers/{serverId}`
Update server details.
- **Ingested Data**:
  - `serverId`
  - Fields to update (`firstName`, `lastName`, `availability`).
- **Response**: Updated server entry.
- **Database Query**: `UPDATE servers SET first_name = ?, last_name = ?, availability = ? WHERE server_id = ?`

### `DELETE /servers/{serverId}`
Delete a server.
- **Ingested Data**: `serverId`
- **Response**: No content (HTTP 204) on success.
- **Database Query**: `DELETE FROM servers WHERE server_id = ?`
