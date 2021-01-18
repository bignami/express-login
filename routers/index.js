const express = require('express');
const router = express.Router();

const main = require('./main.js');
const login = require('./login.js');
const borad = require('./board/board.js');
const makeBoard = require('./board/makeboard.js');



router.use('/', main);
router.use('/login', login);
router.use('/board', borad);
router.use('/makeboard', makeBoard);

module.exports = router;