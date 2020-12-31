const express = require('express');
const loginModel = require('../model/loginModel');
const app = express();

exports.loginPost = (req,res) => {
    

    let userId = req.body.user_id;
    let userPw = req.body.user_pw;

    loginModel.findOne({ id : userId, password: userPw }).exec((err,result) => {
        if(result){
            res.send(`${userId}`);
        } else {
            res.send("login failed");
        }
    });
}