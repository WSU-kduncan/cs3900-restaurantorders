# UI / UX - Group Project Additions

## Landing / main application page
* user flow
* user flow description of behavior
* wireframe that reflects understanding of Jakob's Ten Usability Heuristics and Gestalt Principles

## Search
* ![WireFrame Search](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/main/WireFrame%20Search.png)
* ![User Flow Search](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/main/User%20Flow%20Search.png)
* user flow description of behavior
* wireframe that reflects understanding of Jakob's Ten Usability Heuristics and Gestalt Principles

1. **Start**

    The user begins at the home page, where they see a simple layout of the restaurant.

2. **Select Create New Order**

    The user selects the 'Create' button on the sidebar.

3. **Select Table Number**

    The user is prompted to select the table number for the order.

4. **Select View Order**

    The user will be shown a list or current orders and there statuses 

---
## Create

![Create Userflow](https://raw.githubusercontent.com/WSU-kduncan/cs3900-restaurantorders/refs/heads/main/OrderMaster_Create_UserFlow.png)

**User Flow Description of Behavior**
The application behaves as follows:
* When a user clicks "Create" on the sidebar, it open the "Create" UI
* The user is prompted to select a table, the table selected must be available
* The user is directed to enter the information about the order
* The user is then asked to confirm they would like to save the order
---
1. **Start**

    The user begins at the home page, where they see a simple layout of the restaurant.

2. **Select Create**

    The user selects the 'Create' button on the sidebar.

3. **Select Table Number**

    The user is prompted to select the table number for the order.

4. **Enter Information**

    The user has a series of text boxes to fill out for the information in the order.

5. **Save Order**

    A modal dialog appears, asking, "Save Order?" The user has two options:
     * Confirm: Saves and Creates the order.
     * Cancel: Aborts the action and returns to the order list.

6. **Order Created**

    If confirmed, the system creates the Order and sends the user to the homepage.

![Create Wireframe](https://raw.githubusercontent.com/WSU-kduncan/cs3900-restaurantorders/refs/heads/main/OrderMaster_Create_Wireframe.png)

## Update
![UpdateFlow](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/main/UpdateFlow.png)
User Flow Description of Behavior The application behavior is as follows:

- The user opens the application
- The user selects a table that has an order
- The user will then change the neccesary information
- When the user is satisfied with the changes they then will click save

![UpdateWireFrame](https://github.com/WSU-kduncan/cs3900-restaurantorders/blob/main/UpdateWireFrame.png)


## Delete (Optional)

![Delete Userflow](https://github.com/user-attachments/assets/f5fac59e-18fb-4b66-b4e2-5ab441a019ad)

**User Flow Description of Behavior**
The application behavior is as follows:
* When a user clicks "Select" next to an order, they are visually informed that the specific order is selected.
* Upon clicking "Delete," a confirmation modal ensures error prevention by asking for user verification.
* If confirmed, the order is removed from the list, with immediate feedback provided through a success message. This flow reduces user errors and enhances control.

1. **Start**
The user begins at the order management dashboard, where they see a list of current restaurant orders.
2. **View Orders**
The user reviews the list of orders displayed in rows, each with order details and actions.

3. **Select Order**
The user clicks the "Select" button next to the specific order they want to delete.

4. **Click Delete Button**
A "Delete" button appears below the list. The user clicks this button to initiate deletion.

5. **Confirmation Prompt**
A modal dialog appears, asking, "Are you sure you want to delete this order?" The user has two options:

   * Confirm: Deletes the order.
   * Cancel: Aborts the action and returns to the order list.

6. **Order Deleted**
If confirmed, the system deletes the selected order, which is removed from the list.

7. **Success Message**
A success message ("Order successfully deleted") appears, confirming the action.

![Delete Wireframe (1)](https://github.com/user-attachments/assets/3272bb1e-b59d-476e-82f2-e6525537ed96)

## Batch (Honors)
![Batch Userflow](UIUX-Group-Batch-Userflow.png)

The Batch process is quite similar to that of the Delete process, because they are both done from the same menu. When a user wants to batch-delete orders, they would most likely not expect to have to enter a separate, dedicated menu to do that. Putting the two processes together is more user-friendly and much neater.

1. The user is brought to the landing page when the program is initialized.

2. There will be a button called "View Orders" that allows the user to see all orders as a list. The user clicks on this button.

3. Each order has a "Select" button to the far-right. The user clicks this, and the button will become depressed and change its label to say "Deselect". Clicking it again will deselect that order.

4. From here, the user will select any number of orders using the Select buttons. If they are not done, they will continue to select orders; if they have selected the orders that they want, the next step will commence.

5. The user will click on the "Delete" button towards the bottom of the page, which will have different text to accomondate for more than one order.

6. A confirmation dialog will pop, again with different text, And the user is given a "yes" button and a "no" button. If the user selects "No", then the dialog will disappear. Notably, the orders will remain selected after "No" is chosen, as it would be annoying for the user to have to re-select every order if they selected the wrong option. If the user selects "Yes", however, the selected orders are removed from the database.

7. A confirmation dialog will pop, informing the user that the deletion was successful.


![Batch Userflow](UIUX-Group-Batch-Wireframe.png)
