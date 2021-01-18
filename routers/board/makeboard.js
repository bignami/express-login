const express = require('express');
const router = express.Router();
const {makeBoardGet, makeBoardPost} = require('../../controllers/boardControllers.js');

router.get('/', makeBoardGet);

router.post('/', makeBoardPost);

module.exports = router;