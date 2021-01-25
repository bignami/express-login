const express = require('express');
const router = express.Router();
const {boardGet, detailBoardGet, detailBoardEditGet, detailBoardPost,deleteDetailBoard } = require('../../controllers/boardControllers');

router.get('/', boardGet);
router.get('/');
router.get('/detail/:id',detailBoardGet);
router.get('/detail/:id/edit',detailBoardEditGet);
router.post('/detail/delete/:id',deleteDetailBoard );
router.post('/detail/:id',detailBoardPost);

module.exports = router;