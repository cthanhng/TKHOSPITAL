const express = require('express');
const router = express.Router();

//Import models
const DoctorList = require('../models/doctor-list')

router.get('/',function (req, res) {
    res.send("Connect okie")
})

//Get all doctor list
router.get('/doctor-lists', function (req, res) {
    DoctorList.find({}, function (err,data) {
        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})


module.exports=router;