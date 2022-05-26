const { response, json } = require('express');
const express = require('express');
const router = express.Router();

//Import models
const userAccount = require('../models/user-account')


router.get('/user-account', function (req, res) {
<<<<<<< HEAD
    userAccount.findOne({email: req.query.email}, function (err,data) {
=======
    userAccount.findOne({UserAccount: req.query.UserAccount}, function (err,data) {
>>>>>>> fd505ce7dd514a3e46eca4804b170b986bfbbf5b
        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})

module.exports=router;