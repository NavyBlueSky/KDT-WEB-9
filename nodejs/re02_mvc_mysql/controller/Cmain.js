const model = require('../model/Model');

///////// get

const main = (req, res) => {
    res.render('index');
};
const signup = (req, res) => {
    res.render('signup');
};
const signin = (req, res) => {
    res.render('signin');
};

////////// post
const post_signup = (req, res) => {
    model.db_signup(req.body, () => {
        res.json({ result: true });
    });
};
// 로그인
const post_signin = (req, res) => {
    model.db_signin(req.body, (result) => {
        if( result.length > 0) {
            res.json({result: true, data: result[0]});
        } else {
            res.json({result: false});
        }
    });
};

module.exports = {
    main: main,
    signup,
    signin,
    post_signup,
    post_signin,
};

//모듈 사용 방법
//방법1
// module.exports.main = "함수, 변수, 문자열, 숫자"
// exports.main = null //위의것의 축약형
//방법2
// const test = () => {}
// module.exports = test
