const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

const comments = [
    {
        id: 1,
        userid: 'hello',
        date: '2023-08-23',
        comment: '안녕한가',
    },
    {
        id: 2,
        userid: 'happy',
        date: '2023-08-21',
        comment: '하삐하삐하삐',
    },
    {
        id: 3,
        userid: 'happy',
        date: '2023-08-19',
        comment: '반갑다',
    },
    {
        id: 4,
        userid: 'happy',
        date: '2023-08-07',
        comment: '저리가',
    },
];

module.exports = comments;
