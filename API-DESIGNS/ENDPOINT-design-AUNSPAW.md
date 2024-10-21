## Order Master Endpoint Mapping:

# Customer:
GET /customers:
	This will grab the list of customers

POST /customers:
	Add a customer

PUT /customers/{id}:
	Edit a customers ID


DELETE /customers/{id}:
	Delete Customer ID


# Server:
GET /Server
	Get Server list

POST /Server
	Add Server


PUT /server/{serverid}
  Update server id


# Delete:
Delete /server/{serverid}:
Delete Server id

Delete /customers/{customerid}:
Delete customer id

Delete /customers/:
Delete customer


# Table:
GET /Table:
Get list of tables


# Products:
GET /products:
Gets list of products



# Orders:
GET /orderSummaries:
Get order summaries

GET /Orders/{ORDER_ID}:
Get Order Details

PUT /Orders/{ORDER_ID}:
Update Order id

POST /Orders:
Add Orders
