const express = require('express');
const boardModel = require('../model/boardModel');

exports.boardGet = async (req,res) => {
    
    const boards = await boardModel.find({}).sort({postId:-1});
    res.render('./board/board',{boards});
    
    console.log(boards);
}

exports.makeBoardGet = (req, res) => {
    res.render('./board/makeBoard');
}

exports.makeBoardPost = (req, res) => {

    let makeBoard = new boardModel();

    makeBoard.service = req.body.user_service;
    makeBoard.subject = req.body.user_title;
    makeBoard.content = req.body.user_content;
    makeBoard.auth_key = req.body.user_authKey;
    makeBoard.price = req.body.user_price;

    makeBoard.save();

    res.redirect('/board');
    
}
