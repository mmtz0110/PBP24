const mysql = require("mysql2/promise");
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "011005",
    database: "siswa"
});

module.exports=pool;