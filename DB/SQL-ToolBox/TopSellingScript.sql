SELECT menu_items.item_name, SUM(order_details.quantity) AS total_quantity_sold
FROM order_details
JOIN menu_items ON order_details.item_id = menu_items.item_id
GROUP BY menu_items.item_name
ORDER BY total_quantity_sold DESC;
