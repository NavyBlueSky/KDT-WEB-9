const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

const router = require('./routes/index.js'); // .js 생략가능, 이름이 index면 생략가능 ./routes

app.use('/static', express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(__dirname + '/views/css')); // css폴더 경로 셋팅
app.use(express.static(__dirname + '/views/js')); // js폴더 경로 셋팅
app.use(express.static(__dirname + '/views/img')); // img폴더 경로 셋팅

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: true
})); // 폼 데이터를 파싱하기 위해 추가


//이메일 전송 임시 라우터
const email = require('./routes/email');
app.use('/email', email);


app.use('/', router); // 
// ex)
// const userRouter = require('./routes.user');
// app.use('/user', userRouter)


app.get('/recomCar', (req, res) => {
    res.render('recomCar');
});


//* 맨마지막 선언
app.use('*', (req, res) => {
    res.render('404'); //에러
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});