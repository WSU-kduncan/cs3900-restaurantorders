# API Design for Menu Items - Robert Sutton

## GET /menu_items
Retrieves all menu items stored in the database.

- **Required Parameters**: None
- **Optional Parameters**: None
- **Response**: A list of all menu items with details such as `id`, `name`, `price`, and `availability`.

## POST /menu_items
Creates a new menu item.

- **Request Body**:
  ```json
  {
    "name": "Burger",
    "price": 5.99,
    "availability": true
  }
  ```
- **Response**: The created menu item with its assigned ID.

## PUT /menu_items/{id}
Updates an existing menu item.

- **Required Parameters**: `id` (the ID of the menu item)
- **Request Body**:
  ```json
  {
    "name": "Cheeseburger",
    "price": 6.99,
    "availability": true
  }
  ```
- **Response**: The updated menu item.

## DELETE /menu_items/{id}
Deletes a menu item by its ID.

- **Required Parameters**: `id` (the ID of the menu item)
- **Response**: A confirmation message of the deletion.
