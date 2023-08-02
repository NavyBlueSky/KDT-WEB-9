const express = require('express')
const app = express();
const PORT = 8000

//body-parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//router
app.get('/', (req, res) => {
    res.render('index', {title: 'Axios get post'});
})
app.get('/get', (req, res) => {
    res.render('get', {title: 'Axios get'});
})
app.get('/post', (req, res) => {
    res.render('post', {title: 'Axios post'});
})


//axios
app.get('/axios', (req, res) => {
    console.log('back', req.query);
    res.send(req.query);
});
app.post('/axios', (req, res) => {
    let id = 'lyle';
    let pw = '1234';
    console.log('back', req.body);
    const {idid, pwpw} = req.body;
    if(id === idid && pw === pwpw)
        res.send(true);
    else res.send(false);
});


//open port
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});