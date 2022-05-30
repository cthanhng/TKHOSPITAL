const express = require('express');
const router = express.Router();

//Import models
const OurDoctor = require('../models/our-doctor')

router.get('/',function (req, res) {
    res.send("Connect được rồi")
})

//Get all our doctor
router.get('/our-doctor', function (req, res) {
    OurDoctor.find({}, function (err,data) {
        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})


module.exports=router;