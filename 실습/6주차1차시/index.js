const express = require('express')
const app = express();
const PORT = 8000

//body-parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

const router = require('./routes/index');
app.use('/', router);

//* 맨마지막 선언
app.use('*', (req, res) => {
    res.render('404'); //에러
});

//open port
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});