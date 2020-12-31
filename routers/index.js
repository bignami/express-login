const express = require('express');
const router = express.Router();

const main = require('./main.js');
const login = require('./login.js')

router.use('/', main);
router.use('/login', login);

module.exports = router;