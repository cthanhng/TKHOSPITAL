const { response } = require('express');
const express = require('express');
const router = express.Router();

//Import models
const PatientSchedule = require('../models/Patient_schedule.js')

router.get('/',function (req, res) {
    res.send("Em ngồi đây và em  aaaaalalalaa")
})

//Get all service list
router.get('/PatientSchedule', function (req, res) {
    Patient_schedule.find({}, (error, data)=>{
        if(error){
            res.json({"Error": error.message})
        }else{
            res.json(data)
        }
    })
})

//Get list by id
// router.get('/ServiceList/:ListId', async function(req, res){
    
//     try {

//     let data = await ServiceList.findById(req.params.ListId);
//     res.json(data)
//     console.log(req.params.ListId)
// }
//     catch(err){
//         res.json({message: err.message})
//     }
// })

//Insert new product


//Update product by id


//Delete product

module.exports=router;