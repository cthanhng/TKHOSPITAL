const { response } = require('express');
const express = require('express');
const router = express.Router();

//Import models
const patientSchedule = require('../models/patient-schedule')


router.get('/patient-schedule/:id', function (req, res) {
    patientSchedule.findOne({userID: req.params.id}, function (err,data) {
        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})

module.exports=router;