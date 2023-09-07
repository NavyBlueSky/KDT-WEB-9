const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models');
const path = require('path'); // path 모듈 추가
const bodyParser = require('body-parser');



app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());




app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // 폼 데이터를 파싱하기 위해 추가



const router = require('./routes/main');
app.use(router);

//이메일 전송 임시 라우터
const email = require('./routes/email');
app.use('/email', email);


// 404 error
app.use('*', (req, res) => {
    res.render('404');
});

db.sequelize
    .sync({
        force: false,
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    });
