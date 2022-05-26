const express = require('express');
const router = express.Router();

//Import models
const Article = require('../models/article')

router.get('/',function (req, res) {
    res.send("Connect được rồi đó")
})

//Get all article
router.get('/articles', function (req, res) {
    Article.find({}, function (err,data) {
        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})


module.exports=router;