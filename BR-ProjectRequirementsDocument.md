# Project Requirements Document

## [OrderMaster]

### Context

OrderMaster is a software application for restaurant managers that will let them track and manage orders. The user interface will be simple and allow servers to use it without formal training. Using OrderMaster, the user can create a new order, edit an existing order, or delete an order in case of a cancellation. They will also be able to assign the order to a table and a server, as well as provide an easy to read list of the menu items in the order. Additonally, they will be able to search through in-progress as well as completed orders by key factors such as date and time placed.

The current status of this OrderMaster is ideation.

***

### Use Cases

As restaurants grow and handle more customers, the demand for efficiency in order management increases. In smaller restaurants, staff can manage orders manually without many issues. However, as the business scales, manual systems become more prone to errors such as misplaced orders, miscommunication between front and back of house, and long wait times for customers. These challenges can lead to lost revenue due to customer dissatisfaction and comped meals.

Restaurants that experience an increase in customer traffic often find themselves overwhelmed by the volume of orders, particularly during peak hours. Existing solutions on the market can be too complex or require significant training, which many small- to medium-sized restaurant teams are unable to accommodate. This results in a lack of adoption or inefficient usage of the system.

Managers are in search of a straightforward and user-friendly solution that allows their teams to quickly adapt and streamline the order process. Essential functionalities like creating and modifying orders, tracking when orders are placed, and searching completed orders for sales trends or discrepancies are crucial to ensuring smoother operations and reducing mistakes.

***

### Objectives

The objective of this project is to develop an intuitive order management system that allows restaurant staff to quickly and easily manage food orders, track the status of each order, and assign orders to tables and servers. By simplifying the process of order creation, modification, and tracking, the application will help reduce errors, increase operational efficiency, and enhance the overall customer experience.

Additionally, the application will:
- Improve communication between front-of-house and back-of-house staff.
- Provide transparency in order status to avoid delays or lost tickets.
- Allow for the modification of orders to reflect customer preferences and dietary restrictions.

***

### Assumptions

- **Staff Training:** Minimal formal training will be required for staff to use the application effectively.
- **Access to Devices:** Staff members (servers, kitchen staff) will have access to devices like tablets or smartphones to interact with the application.
- **Connectivity:** The restaurant will have a stable network connection to allow real-time updates of orders and status tracking across different areas of the restaurant.
- **Scale:** The restaurant has around 50-150 orders per day and employs 5-10 staff members who will be using the application simultaneously.

***

### Requirements
The application will:
- Provide a way to submit and remove selected food orders.
- Provide order tracking to provide transparency between front and back of house.
- Provide table management to ensure that the restuarant is not overbooked.
- Have the option for order modifications to adhere to customer preferances and dietary requirements.
***

### Scope
Since this is a university class with a schedule and deadline, our scope has been partially decided for us. At this moment, the priority is on the creation of our database model. We will soon begin work on the program's UI design. Our MVP requires a simple program that allows our users to create, modify, and remove an order's database entry with a graphical user interface. Orders are expected to be capable of consisting of several items, which will have the ability to each contain a price and special instructions from the user's customers. Orders will be associated with both tables and servers, allowing them to be efficiently handled and delivered to the right place. In the future, we hope to add the ability to explicitly support several types of food services, such as delivery and takeout.


### Performance

***

### Open Questions

***
