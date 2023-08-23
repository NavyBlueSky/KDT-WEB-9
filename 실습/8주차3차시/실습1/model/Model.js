const mysql = require('mysql');

//mysql연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kdt',
    password: '',
    database: 'kdt',
    port: 3306,
});

const users = [
    {
        id: 1,
        who: '김민일',
        gender: 'male',
        major: '정보통신공학과',
    },
    {
        id: 2,
        who: '김민이',
        gender: 'female',
        major: '심리학과',
    },
    {
        id: 3,
        who: '김민삼',
        gender: 'male',
        major: '자동차공학과',
    },
    {
        id: 4,
        who: '김민사',
        gender: 'female',
        major: '경영학과',
    },
    {
        id: 5,
        who: '김민오',
        gender: 'male',
        major: '컴퓨터공학과',
    },
];

module.exports = users;
