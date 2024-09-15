# MVP \- Define Core Features

Team Name: Restaurant Orders 
Team Members:  
Project Name: Restaurant Orders Management System 

## Key Features

> List the essential features that will be included in MVP.  

- **Order Management:**
    - Users (servers, kitchen staff, etc.) will be able to create, modify, and track orders for customers (sit-down, delivery, pickup).

- **Menu Item Management:**
    - The application will allow users to add, update, and delete menu items, including prices.

- **Table and Server Assignment:**
    - Assign servers to specific tables and track which orders are associated with each table.

- **Order Status Tracking:**
    - Track the status of each order (e.g., ordered, in preparation, completed, delivered).

- **Special Instructions:**
    - Users will be able to input and review special instructions for each order, ensuring customization (e.g., dietary requirements).

- **Order Details:**
    - Track the detailed items ordered, quantities, and prices for each order, linking orders to specific menu items.

***

## User Flow

> Create a simple user flow diagram to illustrate how users will navigate through MVP.

- **Login/Access**
    - Server logs in → Sees a dashboard of their assigned tables.
    - Manager logs in → Sees an overview of all tables, orders, and staff availability.

- **Menu and Orders**
    - Server selects a table → Enters order details (selects items from the menu).
    - Kitchen receives order → Updates the order status as prepared/completed.
    - Server updates the status → Marks the order as delivered.

- **Order Completion**
    - Manager or server views order completion status → Logs the payment and closes the order.

 ***

## User Stories

> Break down each key feature into user stories.

- **Order Management**
    - As a server, I want to input customer orders quickly, so I can ensure they are sent to the kitchen without delay.
    - As a kitchen staff member, I want to view incoming orders in real-time, so I can begin preparation immediately.
    - As a manager, I want to view a list of all current and completed orders, so I can monitor restaurant performance.

- **Menu Item Management**
    - As a manager, I want to add or remove menu items, so the menu is always up-to-date.
    - As a server, I want to view the current menu, so I can ensure customers are ordering from the correct options.

- **Table and Server Assignment**
    - As a manager, I want to assign servers to tables, so each table has a dedicated staff member.
    - As a server, I want to see my assigned tables, so I know which customers to attend to.

- **Order Status Tracking**
    - As a server, I want to track the progress of customer orders (e.g., in progress, completed), so I can manage customer expectations.
    - As a kitchen staff member, I want to update the order status when completed, so servers know when to deliver the food.

- **Special Instructions**
    - As a server, I want to add special instructions to orders (e.g., dietary requirements), so the kitchen can customize dishes accordingly.
    - As a kitchen staff member, I want to view any special instructions, so I can prepare the meal correctly.

- **Order Details**
    - As a manager, I want to view order details (e.g., what was ordered, by which table, and by whom), so I can track sales performance.
    - As a customer, I want my order to be accurate, so I receive the correct items as requested.
      
***

## Risks and Mitigations

> Identify potential risks associated with MVP development and launch.
> Suggest strategies for mitigating these risks.

- **Risk:** Incorrect order entry or tracking due to user error.
    - **Mitigation:** Implement input validation to ensure orders are entered correctly before being sent to the kitchen.

- **Risk:** Delays in order updates, leading to slow customer service.
    - **Mitigation:** Build real-time updates for order status to ensure communication between servers and kitchen staff.

- **Risk:** Integration challenges with existing POS or accounting systems.
    - **Mitigation:** Ensure compatibility testing and early API integration for external systems to prevent launch delays.

- **Risk:** Loss of data due to system failure.
    - **Mitigation:** Implement regular backups and recovery processes to ensure data is not lost in case of system failure.

*** 

# Extra Credit:

## Feedback and Iteration

> Describe how user feedback will be collected and analyzed.

**Feedback Collection:**
- During the MVP trial period, feedback will be collected from all staff using the system (servers, kitchen, and management) through a built-in feedback form. A feedback session with end-users will be held weekly.

**Feedback Analysis:**
- Feedback will be analyzed for common pain points or feature requests. These will be categorized as high, medium, or low priority, and addressed in regular iterations to improve the system.


