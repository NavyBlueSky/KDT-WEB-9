const express = require('express');
const http = require('http');
const SocketIO = require('socket.io');

const app = express();
const PORT = 8000;

const db = require('./models');
const server = http.createServer(app);
const io = SocketIO(server);

app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//router 분리
const router = require('./routes/main');
const socketRouter = require('./routes/socket');
socketRouter(io);

app.use('/', router);



//오류처리
app.use('*', (req, res) => {
    res.status(404).render('404');
});

//db싱크
//force:true 항상 테이블을 삭제 후 재생성
//force:false(default) 테이블이 존재하는 패쓰, 없으면 생성
db.sequelize.sync({
    force: true
}).then(() => {
    server.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});