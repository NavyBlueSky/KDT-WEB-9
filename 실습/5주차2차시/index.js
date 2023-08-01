const express = require('express')
const app = express();
const PORT = 8000

//body-parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//router
app.get('/', (req, res) => {
    res.render('index', {title: 'Get과 Post 실습'})
});

app.get('/get', (req, res) => {
    // console.log(req.body);
    // res.send('hello');
    res.render('get', {title: '실습' })
});

app.get('/post', (req, res) => {
    // console.log(req.body);
    // res.send('hello');
    res.render('post', {title: '실습' })
});

app.get('/getForm', (req, res) => {
    console.log(req.query);
    res.render('resultget', {
        title: "회원가입 완료",
        userInfo: req.query
    })
});
app.post('/postForm', (req, res) => {
    console.log(req.body);
    res.render('resultpost', {
        title: 'POST 회원가입',
        userInfo: req.body,
    })
});


//open port
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});