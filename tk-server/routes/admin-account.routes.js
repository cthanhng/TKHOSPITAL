const { response, json } = require('express');
const express = require('express');
const router = express.Router();

//Import models
const AdminAccount = require('../models/admin-account')


router.get('/admin-account', function (req, res) {
    AdminAccount.findOne({email: req.query.email}, function (err,data) {
        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})

module.exports=router;