SELECT order_id, server_id, table_id, `date`, time_ordered, time_completed,
TIMESTAMPDIFF(MINUTE, time_ordered, time_completed) AS order_duration
FROM restaurant.food_orders;
