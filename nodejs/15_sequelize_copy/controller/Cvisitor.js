//const Visitor = require('../model/Visitor');
const models = require('../models');

exports.main = (req, res) => {
    res.render('index');
};

//전체 방명록 조회
exports.getVisitors = (req, res) => {
    //res.render('visitor', { data: Visitor.getVisitors() });
    // Visitor.getVisitors((result) => {
    //     res.render('visitor', { data: result });
    // });
    //select * from visitor
    models.Visitor.findAll().then((result) => {
        console.log('findAll', result);
        // res.render('visitor', { data: result });
        res.send({ hahaha: result, msg: 'ㅎㅇ', kdt: 9});
    });
};

exports.getVisitor = (req, res) => {
    // Visitor.getVisitor(req.query.id, (result) => {
    //     res.render('visitor', { data: result });
    // });
    models.Visitor.findOne({
        where: { id: req.query.id},
    }).then((result) => {
        res.render('visitor', {data: [result]});
    });
};

exports.postVisitor = (req, res) => {
    // Visitor.postVisitor(req.body, (result) => {
    //     res.send({ id: result.insertId, name: req.body.name, comment: req.body.comment });
    // });
    models.Visitor.create({
        name: req.body.name,
        comment: req.body.comment
    }).then((result) => {
        res.send({ id: result.dataValues.id, name: req.body.name, comment: req.body.comment })
    });
};

exports.patchVisitor = (req, res) => {
    // Visitor.patchVisitor(req.body, () => {
    //     res.send({ result: true });
    // });
    models.Visitor.update(
        {
            name: req.body.name,
            comment: req.body.comment,
        },
        {
            where: {id: req.body.id}
        }
    ).then( () => {
        res.send({ result: true});
    })
};

exports.deleteVisitor = (req, res) => {
    // Visitor.deleteVisitor(req.body, () => {
    //     res.send({ result: true });
    // });
    models.Visitor.destroy({
        where : {id: req.body.id}
    }).then(() => {
        res.send({ result: true });
    })
};
