SELECT order_id, SUM(total_price) AS total_order_price
FROM restaurant.order_details
GROUP BY order_id;
