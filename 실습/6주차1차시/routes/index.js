const express = require('express');
const router = express.Router();
const controller = require('../controller/CLogin');

//router
router.get('/', controller.main);

router.get('/post', controller.post);

//axios
router.post('/axios', controller.axios);

module.exports = router;