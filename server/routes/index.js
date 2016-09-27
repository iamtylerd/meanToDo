'use strict';

const { Router } = require('express')
const router = Router()

const Create = require('../models/newTodo')

router.use(require('./rootRoute'))

module.exports = router;
