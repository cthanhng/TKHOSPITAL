const { response, json } = require('express');
const express = require('express');
const router = express.Router();

//Import models
const userAccount = require('../models/user-account')


router.get('/user-account', function (req, res) {
    userAccount.findOne({email: req.query.email}, function (err,data) {

        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})

module.exports=router;