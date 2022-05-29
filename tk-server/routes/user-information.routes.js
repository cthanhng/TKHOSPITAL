const { response, json } = require('express');
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
router.get('/user-informations', function (req, res) {
    userInfor.findOne({Email: req.query.Email}, function (err,data) {
        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})

router.post('/user-informations/', async function(req, res) {
    let user = new userInfor(req.body);
    try{
        await user.save();
        res.json('success')
    }
    catch(err){
        res.json({message:err.message});
    }
})

module.exports=router;