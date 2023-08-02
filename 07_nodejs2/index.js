const express = require('express') // 모듈을 가져온다.,,,혼자서 불러올수없기 때문에 변수로 선언
// ※nodejs는 코드의 순서가 중요함
//import express from 'express'
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');  // views폴더에 있는 ejs파일을 불러옴

// 정적인 파일 불러오기
//'/public': 이 부분은 미들웨어가 동작할 경로를 지정합니다. 즉, 클라이언트가 "/public"으로 시작하는 경로로 요청을 보낼 때 해당 미들웨어가 동작하게 됩니다.
// express.static('./public'): Express.js에서 제공하는 기본적인 정적 파일 제공 미들웨어입니다. 이 부분은 정적 파일이 위치한 디렉토리를 지정하는 역할을 합니다.
app.use('/public', express.static('./public'));

app.get('/', (req, res) => {  // 양식(리퀘스트, 리스폰스) ,, 선언한 변수를 객체로. get방식으로 호출을 했다.
    // send() 클라이언트에 응답 데이터를 보낼 때 사용함
    // res.send("Hello Express"); // 따옴표안의 데이터를 보냄
    res.send({result: true, code: 1000, message: '회원가입 성공', data: { name: 'Lyle'}})
})

app.get('/kdt9', (req, res) => {
    res.render('test', {name: 'lyle'}) // render() 뷰 엔진 렌더링
    // res.send('Hello kdt9');
})

app.listen(PORT, () => {
    // 콜백함수로 서버를 엶
    console.log(`http://localhost:${PORT}`);
})

// npm install ejs 선언하지않고 설치