const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/signup', controller.signup);

router.get('/signin', controller.login);

// router.get('/profile', controller.postSignin)

module.exports = router;