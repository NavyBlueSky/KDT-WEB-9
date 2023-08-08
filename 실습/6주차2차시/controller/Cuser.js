const User = require('../model/User');

exports.main = (req, res) => {
    res.render('index');
};

exports.login = (req, res) => {
    User.login((result) => {
        res.render('login', {data: result});
    });
};

exports.Signup = (req, res) => {
    User.Signup((result));
};