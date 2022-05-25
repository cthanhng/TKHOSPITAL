const { response } = require('express');
const express = require('express');
const router = express.Router();

//Import models
const ServiceList = require('../models/service-list.js')

router.get('/',function (req, res) {
    res.send("Connect oke")
})

//Get all service list
router.get('/ServiceList', function (req, res) {
    ServiceList.find({}, function (err,data) {
        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})

//Get list by id
router.get('/:id', async function(req, res){
    
    try {

    let data = await ServiceList.findById(req.params.id);
    res.json(data);
    console.log(req.params.id)
}
    catch(err){
        res.json({message: err.message})
    }
})

//Insert new product


//Update product by id


//Delete product

module.exports=router;