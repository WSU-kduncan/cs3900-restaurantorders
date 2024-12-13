# Menu Items
Menu items are objects that represent the food that customers may order. For this table, there are no order-specific attributes; each object just represents a generic item on the menu, and they are used in order_details to craft a personalized order for a customer. The item will get its personalization, such as special instructions or quantity, from that table.

## GET
Menu items are retrieved using a GET endpoint. In particular, there are two Getter methods: getAllMenuItems and getItemByName. These names are rather self-explanatory: the first will provide a full list of every menu item currently in the database, and the second will allow users to search for a specific item.

## GetAllMenuItems
getAllMenuItems will retrieve all menu items in the database. This will likely be used automatically by the program when the menu item list is loaded, and probably won't have a user-facing manual activation method. A possibility would be a refresh button, but since menu items are rarely updated, this isn't necessary. It will return a list object of all of the menu items that it finds. The program will likely display all of the objects' attributes at once.

## getItemByName
Despite having an ID attribute, it is unlikely that servers will search for a menu item by ID, and would probably rather to look them up by name. Because of this, the program uses a string provided by the user to match to a menu item, rather than the ID. This uses a custom method to retrieve a name from an item entry to return to the user.

## THE OTHERS
The other endpoints are made to be used very frequently, every day. It isn't necessary to add these kinds of endpoints to menu items because they will likely be added after the restaurant's opening hours, and will not be frequently changed. It would be more efficient to just add menu items directly as they are needed.
