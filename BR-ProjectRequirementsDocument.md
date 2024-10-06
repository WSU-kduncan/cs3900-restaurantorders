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

Since we are functioning off of a university class, we are subject to the potential of class cancellations due to inclement weather or some other campus emergency. The former is less likely to happen than if the class took place in the Spring semester, but it is always possible, and emergencies can happen at any time. In these cases, we won't be able to attend class to gain important insight on how to progress development. Due to the advent of online classrooms, however, we will likely still be given access to some resources that can keep the project on pace, and the project itself is largely dependent on online services such as GitHub anyways. Depending on the severity of the situation, the administrators of the class may be willing to extend deadlines, but this is ultimately out of our control and we will be capable of adapting our workflow to any situation.

Another possible roadblock would be the absence of a team member. This may be temporary, such as an unexpected injury or illness, or it could be more permanent, such as a classmate dropping out. Again, depending on the severity of the situation, the affected team member may be capable of contributing to the project regardless of their attendance, but in the most drastic cases, we will restructure the workload to fill in for the missing team member.

Finally, it's worth noting that we have quite a large team of people. As the administrators have said, this is probably not ideal, but we have already created a group chat in Discord to ensure that communication is smooth and each participant completes their share of work. Each team member will need to pull their weight and stay focused on the project to make the development process as smooth as possible.

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

***

### Performance
OrderMaster will meet the following performance metrics:
- The application will load and be usable within 4 seconds.
- The application will be able to load orders in less than 2 seconds.
- The application will be able to search through orders using keywords in less than 5 seconds.

***

### Open Questions

- **Integration:** Will there be any need for future integration with external systems, such as accounting software or delievery platforms such as Door Dash?
- **Offline Capability:** Should the application offer limited offline functionality in case of network issues, with data syncing when the connection is restored?
- **Security:** What specific security protocols will be implemented to protect sensitive order and customer data?
- **Menu Management:** Will the MVP include menu item management, or will this be a feature for future iterations?
- **Customer Feedback:** Should there be a customer feedback module to allow for the collection of reviews or suggestions directly in the system?
  
***


