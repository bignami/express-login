const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('hi');
})


/*router.post('/login', (req, res) => {

    res.send('hi');
})*/

module.exports = router;
