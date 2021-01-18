const express = require('express');
const router = express.Router();
const {boardGet} = require('../../controllers/boardControllers');

router.get('/', boardGet);
router.get('/');

module.exports = router;