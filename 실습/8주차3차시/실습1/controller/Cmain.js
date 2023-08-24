const model = require('../model/Model');

exports.main = (req, res) => {
    res.render('index', { users: model });
};

exports.register = (req, res) => {
    //req.body.name, req.body.gender, req.body.major
    const { who, gender, major } = req.body;
    model.push({
        id: model.length + 1,
        who,
        gender,
        major,
    });
    res.json({ result: true });
};

//모듈 사용 방법
// module.exports.main = "함수, 변수, 문자열, 숫자"
// exports.main = null //위의 축약형

