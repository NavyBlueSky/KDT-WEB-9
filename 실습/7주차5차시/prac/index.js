const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models');

let hash = '';

//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
const userRouter = require('./routes/index');
app.use('/user', userRouter);

//404
app.use('*', (req, res) => {
    res.render('404');
});

//server open
db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});


//////암호화

const crypto = require('crypto');

// const createHashedPassword = (password) => {
//     return crypto.createHash('sha512').update(password).digest('base64');
// };

//pbkdf2
const salt = crypto.randomBytes(16).toString('base64');
const iterations = 100;
const keylen = 64;
const digest = 'sha512';//process.env.HASH;

const createPbkdf = (password) => {
    const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
    return hash.toString('base64');
}


// 암호 검증 verify
const verifyPassword = (password, salt, dbPassword) => {
    const compare = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('base64');
    if (compare == dbPassword) {
        return true;
    } else {
        return false;
    }
};
