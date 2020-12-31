const express = require('express');
const router = express.Router();
const {loginPost} = require("../controllers/loginControllers.js");

router.get('/', (req, res) => {
    res.send('hi');
})


router.post('/', loginPost)

module.exports = router;
