const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = "j^ohZEJCHMH*C;|K4kZAOsmB~vrbb'";

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const userInfo = { id: 'kdt9', pw: '1234', name: '홍길동'};
// const secret = 'secretKey';

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    if( req.headers.authorization) {
        const token = req.headers.authorization.split('');
        try {
            const result = jwt.verify(token[1], SECRET);
            if( result.id === userInfo.id) {
                res.json({ result: true, name: userInfo.name});
            }
        } catch (error) {
            res.json( {result: false, message:'인증ㄴ'});
        }

    } else {
        res.render('login');
    }
});

app.post('/login', (req, res) => {
    try {
        const {id, pw} = req.body;
        const {id: uId, pw: uPw} = userInfo;
        if(id === uId && pw === uPw) {
            const token = jwt.sign({id}, SECRET);
            res.json({ result: true, token});
        } else {
            res.json({result: false, message: '로그인 정보 잘못됨'});
        }
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

