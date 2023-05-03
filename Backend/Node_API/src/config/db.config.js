const mysql = require("mysql")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "",
    database : "my_ecommerce"
})

module.exports = db