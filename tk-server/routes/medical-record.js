const { response } = require('express');
const express = require('express');
const router = express.Router();

//Import models
const medicalRecord = require('../models/medical-record')


router.get('/medical-records/:id', function (req, res) {
    medicalRecord.findOne({userID: req.params.id}, function (err,data) {
        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})

module.exports=router;