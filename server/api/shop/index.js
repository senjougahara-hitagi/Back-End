'use strict';

var express = require('express');
var controller = require('./shop.controller');
var auth = require('../auth/auth.service');

var router = express.Router();

router.get('/all', controller.findAll);
router.post('/add', controller.add);
router.post('/find', controller.find);

module.exports = router;
