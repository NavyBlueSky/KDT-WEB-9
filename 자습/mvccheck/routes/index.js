const express = require('express');
const router = express.Router();
const controller = require('../controller/CComment');

router.get('/', controller.main);

router.get('/recomCar', controller.recomCar);

//get /comments
router.get('/comments', controller.comments);

//get /comment/:id
router.get( '/comments/:id', controller.comment);

module.exports = router;