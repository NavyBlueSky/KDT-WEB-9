const model = require('../model/Model');

// exports.main = (req, res) => {
//     res.render('index');
// };

const main = (req, res) => {
    res.render('index');
};

const users = (req, res) => {
    res.render('users', {lists: model });
};

const user = (req, res) => {
    console.log(req.params);
    //{name: '50'}  :name 콜론 뒤에 붙은 변수가 key,  입력한 값이 value
    res.render('user', {data: model[Number(req.params.name) - 1]});
};

module.exports = {
    main: main,
    users,
    user,
};

//모듈 사용 방법
// module.exports.main = "함수, 변수, 문자열, 숫자"
// exports.main = null //위의 축약형

