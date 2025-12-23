const mysql = require('mysql2');

//membuat koneksi ke database mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '011005',
    database: 'unp'
});

//mencoba koneksi ke database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ', err);
        return;
    }
    console.log('Connected to MySql!');
});