const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '011005',
    database: 'unp'
});

// SELECT
connection.query('select * from siswa', (err, results) => {
    if (err){
        console.log('Error executing query: ', err);
        return;
    }
    console.log('Query results: ', results);
});

//INSERT
// const insertData = {nama: 'Daniel Pasha', alamat: 'Cisaat', orangtua: 'Lengkap'};
// connection.query('insert into siswa set ?', insertData, (err, results) => {
//     if(err){
//         console.error('Error executing query: ', err);
//         return;
//     }console.log('Data inserted successfully.');
// });

//DELETE
const deleteData = {nama: 'Dede Suryana'};
connection.query('delete from siswa where ?', deleteData, (err, results)=>{
    if (err){
        console.error('Error executing query: ', err);
        return;
    }
    console.log('Data deleted successfully.');
});

connection.query('select * from siswa', (err, results) => {
    if (err){
        console.log('Error executing query: ', err);
        return;
    }
    console.log('Query results: ', results);
});