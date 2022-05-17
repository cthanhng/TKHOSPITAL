const { response } = require('express');
const express = require('express');
const router = express.Router();

//Import models
const userInfor = require('../models/user-information')


router.get('/user-informations/:id', function (req, res) {
    userInfor.findOne({userID: req.params.id}, function (err,data) {
        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})

module.exports=router;