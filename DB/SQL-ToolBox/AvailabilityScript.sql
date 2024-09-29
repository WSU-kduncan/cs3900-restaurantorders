SELECT server_id, first_name, last_name, availability
FROM restaurant.servers
WHERE availability = 'Y'
ORDER BY last_name ASC;
