const express = require('express');
const router = express.Router();
const multer= require('multer');



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

//Get service by id
router.get('/:id', async function(req, res){
    
    try {

    let data = await DoctorList.findById(req.params.id);
    res.json(data);
    console.log(req.params.id)
}
    catch(err){
        res.json({message: err.message})
    }
})

var storage =multer.diskStorage({
    destination: "images/doctors",
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
            
            //Insert into databases
            let newDoctor = new DoctorList({
                DoctorID:req.body.doctorId,
                DoctorName: req.body.name,
                Department: req.body.department,
                Position: req.body.position,
                Description: req.body.description,
                Image:req.file.filename,
            });
            await newDoctor.save();
           res.json({message: "Success!"})
       }}
       )
   })

//Update doctor by id
// router.patch("/:doctorId",async (req, res) => {
//     try{
//     await DoctorList.updateOne({_id:req.params.doctorId},{
//         $set:{DoctorName: req.body.name,
//             Department: req.body.department,
//             Position: req.body.position,
//             Description: req.body.description,
//             Image:req.file.filename}
//     })
//     res.json({message:"success"})
//     }
//     catch(err){
//         console.log(err.message)
//         res.json({message:err.message})
//     }
// })

//Delete product
router.delete("/:doctorId",async (req, res) => {
    try{
    await DoctorList.deleteOne({_id:req.params.doctorId});
    res.json({message:"success"})
} catch(err){
    res.json ({status:400,message:err.message});
}

})


module.exports=router;