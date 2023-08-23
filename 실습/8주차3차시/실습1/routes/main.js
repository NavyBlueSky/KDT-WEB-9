const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// router.get('/', controller.main);

router.get('/', controller.main);
// 전체목록보기
router.get('/users', controller.users);
//상세보기
router.get('/user/:name', controller.user);

module.exports = router;