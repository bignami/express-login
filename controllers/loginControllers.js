const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.urlencoded({extended:false}))

exports.loginPost = (req,res) => {

    console.log(req.body);
    res.send('hi');
}
