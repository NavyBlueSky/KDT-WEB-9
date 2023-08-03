const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 정적파일 설정
app.use('/uploads', express.static(__dirname + '/uploads'));





// //multer => body-parser 바로뒤에 줌
// const upload = multer({
//     //dest - 업로드할 파일이 저장되는 경로를 지정
//     dest: 'uploads/'
// });
// const uploadDetail = multer({
//     //storage: 저장할 공간에 대한 정보
//     //diskStorage: 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
//     storage: multer.diskStorage({
//         //done : 그냥 변수명 , null: 에러처리하기 위함
//         destination(req, file, done) {
//             done(null, 'uploads/')
//         },
//         filename(req, file, done) {
//             const ext = path.extname(file.originalname);
//             console.log('ext', ext);
//             done(null, file.fieldname + ext);
//         },
//     }),
//     limits: {fileSize : 5 * 1024 * 1024 },
// });

//router
app.get('/', (req, res) => {
    res.render('index');
});
app.post('/result', (req, res) => {
    res.render('result');
})

// // 싱글
// app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
//     console.log(req.file);
//     console.log(req.body);
// });

// // 동적
// app.post('/dynamicFile', uploadDetail.single('dynamic-file'), (req, res) => {
//     console.log(req.file);
//     res.send(req.file);
// });

//server
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});