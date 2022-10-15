const mysql = require('mysql');

// MYSQL config

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "17kosongsembilan",
});

db.connect(function(error) {
    if(error){
        console.error(error);
    } else {
        console.info("Connected to Database");
    }
});


// CREATE DATABASE
const create_merchantservice = "CREATE DATABASE merchant_service";

db.query(create_merchantservice, function (err, result) {
    if (err) throw err;
    console.log("Database created");
});