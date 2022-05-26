const express = require('express');
const router = express.Router();

//Import models
const ArticleList = require('../models/article-list')

router.get('/',function (req, res) {
    res.send("Connect okeee")
})

//Get all article list
router.get('/article-lists', function (req, res) {
    ArticleList.find({}, function (err,data) {
        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})


module.exports=router;