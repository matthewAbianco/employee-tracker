  
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'root'
});
  
connection.connect(err => 
{
    if (err) throw err;
    console.log('connected to mysql2');
});



module.exports = connection;