const { response } = require('express');
const express = require('express');
const router = express.Router();

//Import models
const payment = require('../models/payments')


router.get('/payments/:id', function (req, res) {
    payment.findOne({userID: req.params.id}, function (err,data) {
        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})

module.exports=router;