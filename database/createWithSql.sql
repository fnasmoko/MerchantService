CREATE DATABASE merchant_service;
USE DATABASE merchant_service;

CREATE TABLE `accounts` (
            `id` int NOT NULL AUTO_INCREMENT,
            `password` varchar(255) NOT NULL,
            `name` varchar(255) NOT NULL,
            `address` varchar(255) NOT NULL,
            `join_date` datetime NOT NULL DEFAULT current_timestamp(),
            `phone_number` numeric NOT NULL,
            PRIMARY KEY (`id`)
  );
  
CREATE TABLE `products` (
            `id` int NOT NULL AUTO_INCREMENT,
            `name` varchar(255) NOT NULL,
            `quantity` numeric NOT NULL,
            `price` numeric NOT NULL,
            PRIMARY KEY (`id`)
);