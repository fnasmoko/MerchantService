# Merchant Service
Merchant Service is a service that can display a list of products from the sale of a user. This service can create and delete accounts. This service can also create, delete and update products.

Merchant Service adalah layanan yang dapat menampilkan daftar produk dari penjualan sebuah pengguna. Layanan ini dapat membuat dan menghapus akun. Layanan ini juga dapat membuat, menghapus dan memperbarui produk.


## Entity Relationship Diagram
This is how entity relationship work shown by diagram.
![ERD - Chat Application](https://github.com/fnasmoko/MerchantService/blob/main/ERD-MerchantService.jpg)


## Postman Documentation Merchant Application
Postman Documentation - https://www.getpostman.com/collections/2790655c6ef7bcc7b699


## List of API
These are the list of API /accounts
```
[GET] /accounts -> to get all user on merchant service

[POST] /accounts -> to create account on merchant service

[DEL] /accounts/{id} -> to delete account on merchant service
```

These are the list of API /products
```
[GET] /products -> to get all products on merchant service

[POST] /products -> to add product on merchant service

[DEL] /products/{id} -> to delete product on merchant service

[PUT] /products/{id} -> to update product on merchant service
```

This is the API /login
```
[GET] /login -> to login on merchant service, here is use basic auth

[POST] /loginJWT -> to get token JWT

[GET] /loginJWT -> to login on merchant service, here is use bearer token
```
