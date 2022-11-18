# Merchant Service
Merchant Service is a service that can display a list of products from the sale of a user. This service can create and delete accounts. This service can also create, delete and update products.

Merchant Service adalah layanan yang dapat menampilkan daftar produk dari penjualan sebuah pengguna. Layanan ini dapat membuat dan menghapus akun. Layanan ini juga dapat membuat, menghapus dan memperbarui produk.


## Entity Relationship Diagram
This is how entity relationship work shown by diagram.
![ERD - Chat Application](https://github.com/fnasmoko/MerchantService/blob/main/ERD-MerchantService.jpg)


## Postman Documentation Merchant Application
Postman Documentation - https://www.postman.com/red-robot-753222/workspace/chats/collection/23537085-1f3777de-b07a-421b-8b1d-649cb3ff9e67?action=share&creator=23537085


## List of API
These are the list of API /user
```
[GET] /user -> to get all user on merchant service

[POST] /user -> to create account on merchant service

[DEL] /user/{id} -> to delete account on merchant service
```

These are the list of API /product
```
[GET] /product -> to get all products on merchant service

[POST] /product -> to add product on merchant service

[DEL] /product/{id} -> to delete product on merchant service

[PUT] /product/{id} -> to update product on merchant service
```

This is the API /login
```
[POST] /login -> to login on merchant service
```