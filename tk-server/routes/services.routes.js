const { response } = require('express');
const express = require('express');
const router = express.Router();
const multer= require('multer');
const path= require('path');
const app = express();
app.use(express.static(path.join(__dirname,'/images')))


//Import models
const ServiceList = require('../models/service_list.js')


router.get('/',function (req, res) {
    res.send("Connect oke")
})

//Get all service list
router.get('/services', function (req, res) {
    ServiceList.find({}, function (err,data) {
        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})

//Get service by id
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

var storage =multer.diskStorage({
    destination: "images/service",
    filename: (req,file,cb)=>{
        cb(null,`${Date.now()}--${file.originalname}`)
    }
})

let maxSize=10*1024*1024
var upload =multer({
    storage:storage,
    limits:{
     fileSize:maxSize
    }

}).single("file")

//Insert new product 
router.post("/upload", (req, res)=>{
    upload (req, res,async(err) => {
        if (err){
            res.json({message: err.message})
        }
        else
        {
            console.log("file received: ", req.file.filename);
            //Insert into database
            let serviceNew = new ServiceList({
                ServiceName: req.body.name,
                Department: req.body.department,
                Price: req.body.price,
                Description: req.body.description,
                thumbPath:req.file.filename
            });
            await serviceNew.save();
           res.json({message: "Success!"})
       }}
       )
   })

//Update product by id
router.patch("/:serviceId",async (req, res) => {
    try{
    await ServiceList.updateOne({_id:req.params.serviceId},{
        $set:{ServiceName: req.body.name,
            Department: req.body.department,
            Department: req.body.department,
            Price: req.body.price,
            Description: req.body.description}
    })
    res.json({message:"success"})
    }
    catch(err){
        console.log(err.message)
        res.json({message:err.message})
    }
})

//Delete product
router.delete("/:serviceId",async (req, res) => {
    try{
    await ServiceList.deleteOne({_id:req.params.serviceId});
    res.json({message:"success"})
} catch(err){
    res.json ({status:400,message:err.message});
}

})
module.exports=router;
