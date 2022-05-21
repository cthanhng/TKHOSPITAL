const { response } = require('express');
const express = require('express');
const router = express.Router();

//Import models
const events = require('../models/event')

router.get('/events',function(req,res){
    events.find({},function(err,data){
        if(err){
            res.json({message:err.message})
        } else {
            res.json(data)
        }
    })
})

module.exports=router;