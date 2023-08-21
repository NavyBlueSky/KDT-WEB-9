const express = require('express');
const multer = require('multer');
const path = require('path'); // 폴더와 파일의 경로를 쉽게 조작하도록 제공
const app = express();
const PORT = 8000;

//ejs
app.set('view engine', 'ejs');

//body-parser
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

//정적파일
app.use('/uploads', express.static(__dirname + '/uploads'));
console.log(__dirname);

//multer 설정
const uploadsDetail = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;
        cb(null, newName);
    },
});

//파일크기 제한
// const limits = {
//     fileSize: 50 * 1024 * 1024
// };
//key-value에서 key값과 value의 변수가 동일 하면 합칠 수 있음
const upload = multer({storage: uploadsDetail});

//동적(비동기)
app.post('/dynamic', upload.array('dynamic'), (req, res) => {
    console.log(req.file);
    res.send(req.files);
})

//router
app.get('/', (req, res) => {
    res.render('index');
});

app.use('*', (req, res) => {
    res.render('404');
});

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
