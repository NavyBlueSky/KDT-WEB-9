const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/signup', controller.postSignup);

router.get('/signin', controller.postSignin);

router.get('/profile', controller.postSignin)

module.exports = router;