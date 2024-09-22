CREATE DATABASE IF NOT EXISTS restaurant;
USE restaurant;

CREATE TABLE `food_orders` (
  `order_id` INT AUTO_INCREMENT NOT NULL,
  `server_id` INT NULL DEFAULT NULL ,
  `table_id` INT NULL DEFAULT NULL ,
  `date` DATE NOT NULL,
  `time_ordered` TIME NOT NULL,
  `time_completed` TIME NULL DEFAULT NULL ,
  `status` VARCHAR(10) NOT NULL,
  `special_instructions` VARCHAR(100) NULL DEFAULT NULL ,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`order_id`)
);
CREATE TABLE `menu_items` (
  `item_id` INT AUTO_INCREMENT NOT NULL,
  `item_name` VARCHAR(16) NOT NULL,
  `unit_price` DECIMAL(5,2) NOT NULL,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`item_id`)
);
CREATE TABLE `order_details` (
  `order_details_id` INT AUTO_INCREMENT NOT NULL,
  `order_id` INT NULL DEFAULT NULL ,
  `item_id` INT NULL DEFAULT NULL ,
  `quantity` TINYINT NOT NULL,
  `total_item_price` DECIMAL(6,2) NOT NULL,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`order_details_id`)
);
CREATE TABLE `servers` (
  `server_id` INT AUTO_INCREMENT NOT NULL,
  `first_name` VARCHAR(35) NOT NULL,
  `last_name` VARCHAR(35) NOT NULL,
  `availability` VARCHAR(10) NOT NULL,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`server_id`)
);
CREATE TABLE `tables` (
  `table_id` INT AUTO_INCREMENT NOT NULL,
  `server_id` INT NULL DEFAULT NULL ,
  `capacity` TINYINT NULL DEFAULT NULL ,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`table_id`)
);
ALTER TABLE `food_orders` ADD CONSTRAINT `fk_server_id` FOREIGN KEY (`server_id`) REFERENCES `servers` (`server_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `food_orders` ADD CONSTRAINT `fk_table_id` FOREIGN KEY (`table_id`) REFERENCES `tables` (`table_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `order_details` ADD CONSTRAINT `fk_item_id` FOREIGN KEY (`item_id`) REFERENCES `menu_items` (`item_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `order_details` ADD CONSTRAINT `fk_order_id` FOREIGN KEY (`order_id`) REFERENCES `food_orders` (`order_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `tables` ADD CONSTRAINT `fk_tables_server_id` FOREIGN KEY (`server_id`) REFERENCES `servers` (`server_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
