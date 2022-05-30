const { response, json } = require('express');
const express = require('express');
const router = express.Router();

//Import models
const userInfor = require('../models/user-information')

router.get('/user-informations', function (req, res) {
    userInfor.find({}, function (err,data) {
        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})

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

router.post('/user-informations', async function(req, res) {
    let user = new userInfor(req.body);
    try{
        await user.save();
        res.json('success');
        console.log(user)
    }
    catch(err){
        res.json({message:err.message});
    }
})

router.patch("/user-informations/:id", async (req, res)=>{
    try{
        await userInfor.updateOne({userID: req.params.id},{
            $set: {Name: req.body.Name, 
                DateOfBirth: req.body.DateOfBirth, 
                Phone: req.body.Phone,
                IDNumber: req.body.IDNumber, 
                Email: req.body.Email, 
                Nationality:req.body.Nationality, 
                Religion: req.body.Religion, 
                Street: req.body.Street, 
                Job: req.body.Job, 
                HealthInsuranceCardNumber: req.body.HealthInsuranceCardNumber, 
                Height: req.body.Height, 
                Weight: req.body.Weight, 
                City: req.body.City, 
                Ward:req.body.Ward}})
            res.json({status: 200, message :"success"})
        }  
    catch(err){
        res.json({message: err.message})
    }
})

module.exports=router;