const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cookieParser("asdfzxcv"));

// cookie 옵션 객체
const cookieConfig = {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 시점부터 하루
    signed: true, 
}

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/modal', (req, res) => {
    res.cookie('today', 'no-modal', cookieConfig)
    res.send({result: true});
})
app.get('/checkCookie', (req, res) => {
    //signedCookies ::  서명된 쿠키 값을 가져오기
    const hasCookie = req.signedCookies.today === 'no-modal';

    res.send({ hasCookie });
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})