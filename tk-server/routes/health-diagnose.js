const { response } = require('express');
const express = require('express');
const router = express.Router();

//Import models
const healthDiagnose = require('../models/health-diagnose')


router.get('/health-diagnoses/:id', function (req, res) {
    healthDiagnose.findOne({userID: req.params.id}, function (err,data) {
        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})

module.exports=router;