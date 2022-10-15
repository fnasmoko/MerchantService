const express = require('express')

const { join } = require('path')

const app = express()
app.use(express.json())

const mysql = require('mysql');
const { isDate } = require('util/types');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "17kosongsembilan",
    database: "merchant_service"
});


db.connect(function(error) {
    if(error){
        console.error(error);
    } else {
        console.info("Connected to Database");
    }
});

function validateAccount(pass, getname, address, date, phone){

    if(pass == undefined) {return {status: 404, error: 'please input your password'}}
    if(pass.length < 6) {return {status: 404, error: 'password cant be less than 6 character'}}

    if(getname == undefined) {return {status: 404, error: 'please input your name'}}
    if(getname.length < 3 || getname.length > 50) {return {status: 404, error: 'name must consist of 3 - 50 character'}}

    if(date == undefined) {return {status: 404, error: 'please input your join_date'}}

    if(address == undefined) {return {status: 404, error: 'please input your address'}}

    if(phone == undefined) {return {status: 404, error: 'please input your join_date'}}
    
    {return result = false}
}

function validateProduct (getname, quantity, price){
    if(getname == undefined) {return {status: 404, error: 'please input your product name'}}
    if(getname.length < 3 || getname.length > 50) {return {status: 404, error: 'name must consist of 3 - 50 character'}}

    if(quantity == undefined) {return {status: 404, error: 'please input your product quantity'}}
    if(quantity.length < 1 ) {return {status: 404, error: 'quantity must be more than one character'}}
    // if(quantity.isNumeric() == false) {return {status: 404, error: 'name must consist of 3 - 50 character'}}

    if(price == undefined) {return {status: 404, error: 'please input your product price'}}
    if(price < 10000) {return {status: 404, error: 'price must be more than 10000'}} 
    // if(price.isNumeric() == false) {return {status: 404, error: 'name must consist of 3 - 50 character'}}

    {return result = false}
}

function validateID (id){
    if(id == undefined) {return {status: 404, error: 'please input your id'}}
    if(Number.isNaN(id) == true){return {status: 400, error: 'id should be a number'}}
    if(id < 0){return {status: 400, error: 'id should not be negative'}}
    if(id == 0){return {status: 400, error: 'id cant be filled by zero'}}

    {return result = false}
}

function validate_Duplicate (affectedRows){
    if(affectedRows == 0) {return {status: 404, error: 'id not found'}} 
    
    {return result = false}
}

function basicAuth_validate (rows){
    if (rows[0] == undefined) {return {status: 404, error: 'User Unauthorized'}}
    
    return result = false
}



// MERCHANT ACCOUNT
// GET - ALL
app.get('/merchant_service/accounts/', (req, res) =>{
    db.query('select password, name, address, date_format(join_date, "%d %M %Y") as "join_date", phone_number from accounts', (err, rows) =>{
        if(!err){
        res.send(rows)
        console.log(rows)}
        else
        console.log(err)
    })    
})

// DELETE SATU KOLOM
app.delete('/merchant_service/accounts/:id', (req, res) =>{

    let id = parseInt(req.params.id)
    result = validateID(id)
    if (result != false) {return res.send(result)}

    db.query('delete from accounts where id = ?',[req.params.id], (err, rows) =>{
        if(!err){
        res.send('Deleted Successfully')
        } else
        console.log(err)
    })    
})

// CREATE DATA PAKE REQ.BODY -- success
app.post('/merchant_service/accounts/', (req, res) =>{
    const input = req.body;
    const sqlPost = `insert into accounts (password, name, address, join_date, phone_number) value (?, ?, ?, ?, ?)`
    
    let pass = input.password
    let getname = input.name
    let address = input.address
    let date = input.join_date
    let phone = input.phone_number

    result = validateAccount(pass, getname, address, date, phone)
    if (result != false) {return res.send(result)}

    db.query(sqlPost, [pass, getname, address, date, phone], function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send('Account Created Successfully')
        }
})});






// MERCHANT PRODUCTS
// GET - ALL
app.get('/merchant_service/products', (req, res) =>{
    db.query('select * from products', (err, rows) =>{
        if(!err){
        res.send(rows)
        console.log(rows)}
        else
        console.log(err)
    })    
})

// COBA GET SATU - success
app.get('/merchant_service/products/:id', (req, res) =>{
   
    let id = parseInt(req.params.id)
    result = validateID(id)
    if (result != false) {return res.send(result)}

    db.query('select * from products where id = ?',[req.params.id], (err, rows) =>{
        let kosong = []
        if(!err){
            if (rows = kosong) {return res.json({'error' : 'id not found'})}
            res.send(rows)
        }
        else
        console.log(err)
    })
})    

// DELETE SATU KOLOM
app.delete('/merchant_service/products/:id', (req, res) =>{

    let id = parseInt(req.params.id)
    result = validateID(id)
    if (result != false) {return res.send(result)}


    db.query('delete from products where id = ?',[req.params.id], (err, rows) =>{
        if(!err){
        // console.log(rows)
        res.send('Deleted Successfully')
        } else
        console.log(err)
    })    
})



// CREATE DATA PAKE REQ.BODY -- success
app.post('/merchant_service/products/', (req, res) =>{
    const input = req.body;
    const sqlPost = `insert into products (name, quantity, price) value (?, ?, ?)`
    
    let getname = input.name
    let quantity = input.quantity
    let price = input.price

    result = validateProduct(getname, quantity, price)
    if (result != false) {return res.send(result)}

    db.query(sqlPost, [getname, quantity, price], function (err, result) {
        // let affectedRows = result.affectedRows
        // result = validate_Duplicate(affectedRows)
        if (err) {
            res.send(err)
        } else {
            res.send('Products Details Created Successfully')
        }
})});


// UPDATE DATA KOLOM PAKE REQ.BODY --- success
app.put('/merchant_service/products/:id', (req, res) =>{
    const input = req.body;
    const sqlPut = `UPDATE products set name = ?, quantity = ?, price = ? where id = ?`
    
    let getname = input.name
    let quantity = input.quantity
    let price = input.price

    let id = parseInt(req.params.id)
    result = validateID(id)
    if (result != false) {return res.send(result)}

    result = validateProduct(getname, quantity, price)
    if (result != false) {return res.send(result)}

    db.query(sqlPut, [getname, quantity, price, id], function (err, result) {
        let affectedRows = result.affectedRows
        result = validate_Duplicate(affectedRows)
        if (err) {
            res.send(err)
        } else {
            if (result != false) {return res.send(result)} res.send('Updated Successfully')
        }
})});


// BASIC AUTH
// COBA GET SATU - success
app.get('/merchant_service/login', function (req, res) {
    let auth = require('basic-auth')
    let user = auth(req)        // import api auth
                                // npm install basic-auth dulu di terminal
    let name = user.name
    let pass = user.pass
    
    db.query('select * from accounts where name = ? && password = ?',[name, pass], (err, rows) =>{
        let result = basicAuth_validate(rows)
        
        if(!err){
            if (result != false) {return res.json(result)}
            else {return res.json({'Success' : 'User Authorized'})}
        }
        else
            return console.log(err)
    })
})




app.listen(3000)