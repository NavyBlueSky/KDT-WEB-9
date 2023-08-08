const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/signup', (req, res) => {
    res.render('signup');
})

app.get('/signin', (req, res) => {
    res.render('signin');
})

app.use('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log('http://localhost:8000');
});