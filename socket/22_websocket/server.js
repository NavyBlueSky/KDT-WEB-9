const http = require('http');
const ws =  require('ws');
const express = require('express');
const app = express();
//http서버
const server = http.createServer(app); // express에 직접적인 접근이 아닌 간접적인 접근
//추후 복잡해지는 상황에서 오류 가능성에 대한 예방 작업이다. + 확장성
//웹서버// 웹소켓 서버 접속
const wss = new ws.Server({server}); // <--- {port: PORT, server: server}

const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});

//브라우저(클라이언트)들을 담을 배열 변수
const sockets = [];

//socket변수는 접속한 브라우저
wss.on('connection', (socket) => {
    console.log('클라이언트가 연결되었습니다.');
    //sockets배열에 브라우저 정보 추가
    sockets.push(socket);

    //메세지 이벤트
    socket.on('message', (message) => {
        console.log(`클라이언트로부터 받은 메세지 : ${message}`);
        // socket.send(`서버메세지: ${message}`);
        sockets.forEach(elem => {
            elem.send(`서버메세지: ${message}`);
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


server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
