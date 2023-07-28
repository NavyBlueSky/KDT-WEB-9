const express = require('express')

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views'); 


app.use('/public', express.static('./public'));

app.get('/', (req, res) => {
    res.render('prac4', {

    });
});

app.get('/pracdomain1', (req, res) => {
    res.render('prac2', {name: 'lyle'}) 
})

app.get('/pracdomain2', (req, res) => {
    res.render('prac1', {name2: 'Hello there'})
})

app.get('/pracdomain3', (req, res) => {
    res.render('prac3', {
        number: [1,2,3,4,5,6,7,8,9]
    })
})

app.get('/pracdomain4', (req, res) => {
    res.render('pracimg', {})
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})