const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const app = express();
const PORT = 8000;

//http 서버
const server = http.createServer(app);
//socket서버
const io = SocketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});

io.on('connection', (socket) => {
    socket.on('open_message', (arg, cb) => {
        // console.log(arg); //, arg2, arg3, arg4);
        // cb(arg);
    });

    socket.on('form_message', (arg) => {
        console.log(`${arg.name}: ${arg.message}`);
        socket.emit('backend_message', {name:arg.name, message:arg.message});
    });
});



server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});