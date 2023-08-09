const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// 라우터
const userRouter = require('./routes/user');
app.use('/user', userRouter);

// app.get('/', (req, res) => {
//     res.render('index');
// });

// app.post('/signup', (req, res) => {
//     res.render('signup');
// });

// app.post('/signin', (req, res) => {
//     res.render('signin');
// });

// 404
app.use('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});