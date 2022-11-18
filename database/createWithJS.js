const mysql = require('mysql');

// CONNECT TO MERCHANT DATABASE
const db_merchantService = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "17kosongsembilan"
});

db_merchantService.connect(function(error) {
    if(error){
        console.error(error);
    } else {
        console.info("Connected to Database Merchant-Service");
    }
});


// CREATE TABLE
const accounts_table = `CREATE TABLE accounts 
            (
                id int NOT NULL AUTO_INCREMENT,
                password VARCHAR(255), 
                name VARCHAR(255), 
                address VARCHAR(255), 
                join_date date,
                phone_number numeric,
                PRIMARY KEY (id)
            )`;
const products_table = `CREATE TABLE products
            (
                id int NOT NULL AUTO_INCREMENT,
                name VARCHAR(255), 
                quantity numeric,
                price numeric,
                PRIMARY KEY (id)
            )`;

db_merchantService.query(accounts_table, function (err, result) {
    if (err) throw err;
    console.log("Table Accounts Created");
});

db_merchantService.query(products_table, function (err, result) {
    if (err) throw err;
    console.log("Table Products Created");
});