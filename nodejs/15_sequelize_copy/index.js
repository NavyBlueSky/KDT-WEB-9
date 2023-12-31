const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
// const indexRouter = require('./routes');
// app.use('/', indexRouter);
const visitorRouter = require('./routes/visitor');
app.get('/', (req, res) => {
    res.render('index');
});
//localhost:8000/visitor
app.use('/visitor', visitorRouter);

app.use('*', (req, res) => {
    res.render('404');
});

// force-true 다 지워버리고 새로 할때(개발할때)
// 생략하면 기본값은 false.
db.sequelize.sync({ force: false }).then( () => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});