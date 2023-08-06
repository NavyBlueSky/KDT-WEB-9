const express = require ('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// 임시 데이터
const comments = [
    {
        id: 1,
        userId: 'hello',
        date: '2023-08-04',
        comments: '안녕',
    },
    {
        id: 2,
        userId: 'world',
        date: '2023-08-03',
        comments: '하이요',
    },
    {
        id: 3,
        userId: 'widow',
        date: '2023-08-03',
        comments: '메씨',
    },
    {
        id: 4,
        userId: 'hanzo',
        date: '2023-08-01',
        comments: '안녕하신가',
    },
];

app.get('/', (req, res) => {
    res.render('index');
});

//get /comments
app.get('/comments', (req, res) => {
    res.render('comments', { commentInfos: comments });
});

//get /comment/:id
app.get( '/comments/:id', (req, res) => {
    // console.log(req.params);
    // console.log(req.params.id);
    const commentId = req.params.id;
    console.log(comments[commentId - 1]);
    res.render('comment', {commentInfo: comments[commentId - 1]});
});

//* 맨마지막 선언
app.get('*', (req, res) => {
    res.render('404'); //에러
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});