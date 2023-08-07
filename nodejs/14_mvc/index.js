const express = require ('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const router = require('./routes/index.js'); // .js 생략가능, 이름이 index면 생략가능 ./routes
app.use('/', router); // 
// ex)
// const userRouter = require('./routes.user');
// app.use('/user', userRouter)

//* 맨마지막 선언
app.use('*', (req, res) => {
    res.render('404'); //에러
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});