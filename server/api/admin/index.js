'use strict';
var router = require('express').Router();
var controller = require('./admin.controller');

router.get('/', controller.search);

module.exports = router;
