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
exports.detailBoardGet = async (req,res) => {
   
    await boardModel.find({'_id' : req.params.id }, (err, docs) => {
        if(docs.length>0) {
            
            res.render('./board/boardDetail',{docs});
        }
        else {
            res.status(404).send('잘못된 요청접근입니다.!');
        }
    } )
}

exports.detailBoardEditGet = async (req,res) => {
    
    await boardModel.find({'_id': req.params.id}, (err, docs) => {
        res.render('./board/boardDetailEdit',{docs});
    })
    
}
    

exports.detailBoardPost = async (req,res) => {
    
    console.log(req.params.id);


    boardModel.findByIdAndUpdate(req.params.id, {service : req.body.user_service,
        subject : req.body.user_title,
        content: req.body.user_content,
        auth_key: req.body.user_authKey,
        price : req.body.user_price}, (err,result) => {
            if(err) {
                console.error('에러발생');
            } else {
                console.log('정상변경',result);
                res.redirect('/board/detail/' +req.params.id);
            }
        })
}

exports.deleteDetailBoard = (req, res) => {
    console.log(req.params.id);

    boardModel.findByIdAndDelete(req.params.id, (err,result) => {
        if(err) {
            console.error('에러발생');
        } else {
            console.log('정상삭제');
            res.redirect('/board');
        }
    })
}