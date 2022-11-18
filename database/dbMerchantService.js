const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '17kosongsembilan',
    database: 'merchant_service'
})

db_merchantService.connect(function(error) {
    if(error){
        console.error(error);
    } else {
        console.info("Merchant-Service Database Already to use");
    }
});

module.exports = db