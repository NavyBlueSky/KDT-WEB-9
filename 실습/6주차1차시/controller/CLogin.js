// const Comment = require('../model/MLogin');

exports.main = (req, res) => {
    res.render('index');
};

exports.post = (req, res) => {
    res.render('post', {title: 'Axios get post'});
};

exports.axios = (req, res) => {
    let id = 'lyle';
    let pw = '1234';
    console.log('back', req.body);
    const {idid, pwpw} = req.body;
    if(id === idid && pw === pwpw)
        res.send(true);
    else res.send(false);
};