const ws =  require('ws');
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client2');
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

// 웹소켓 서버 접속
const wss = new ws.Server({server}); // <--- {port: PORT, server: server}

//브라우저(클라이언트)들을 담을 배열 변수
const sockets = [];

//socket변수는 접속한 브라우저
wss.on('connection', (socket) => {
    console.log('클라이언트가 연결되었습니다.');
    //클라이언트 상태확인
    //ws.CONNECTING: 0 웹소켓이 연결 시도중
    //ws.OPEN: 1 웹소켓이 열린상태
    //ws.CLOSING: 2 웹소켓이 닫히는 중
    //ws.CLOSED: 3 웹소켓이 닫힌 상태
    //socket.readyState:웹소켓의 클라이언트 상태를 나타내느 속성
    console.log(ws.OPEN);
    //sockets배열에 브라우저 정보 추가
    // sockets.push(socket);

    //메세지 이벤트
    socket.on('message', (message) => {
        //웹소켓을 통해 클라이언트와 서버간의 데이터를 주고 받을 때는 
        //일반적으로 문자열 또는 버퍼형태로 전달된다.
        // 서버가 모두 다른 환경이기 때문에 객체를 전달할 때는 
        // 객체를 일련의 바이트로 변환하는 직렬화 과정이 필요하다.
        // console.log(message);
        const msg = JSON.parse(message);
        console.log(`클라이언트로부터 받은 메세지 : ${msg.message}`);
        // socket.send(`서버메세지: ${message}`);
        wss.clients.forEach((elem) => {
            elem.send(`${msg.user}님의 메세지:  ${msg.message}`);
        });
    });

    //오류 이벤트
    socket.on('error', (err) => {
        console.log('에러가 발생되었습니다.', err);
    });

    //접속 종료 이벤트
    socket.on('close', () => {
        console.log('클라이언트와의 연결이 종료되었습니다.');
    });
});