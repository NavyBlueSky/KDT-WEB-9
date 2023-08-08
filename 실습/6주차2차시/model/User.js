const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'news',
    password: '1234',
    database: 'kdt9',
    port: 3306,
});

conn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connect');
});

// exports.login = 