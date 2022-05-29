const express = require('express');
const router = express.Router();
const multer= require('multer');
const path= require('path');


//Import models
const ArticleList = require('../models/article-list')

router.get('/',function (req, res) {
    res.send("Connect okeee")
})

//Get all article list
router.get('/article-lists', function (req, res) {
    ArticleList.find({}, function (err,data) {
        if(err) {
            res.json({message:err.message})
        }
        else {
            res.json(data)
          
        }
    })
})

//Get service by id
router.get('/:articleId', async function(req, res){
    
    try {

    let data = await ArticleList.findById(req.params.articleId);
    res.json(data);
    console.log(req.params.id)
}
    catch(err){
        res.json({message: err.message})
    }
})

var storage =multer.diskStorage({
    destination: "images/article",
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
            let newArticle = new ArticleList({
               Title: req.body.title,
                Author: req.body.author,
               UpdateAt:req.body.updatedAt,
                Content: req.body.content,
                Image:req.file.filename,
                imageName: req.body.imageName
            });
            await newArticle.save();
           res.json({message: "Success!"})
       }}
       )
   })

//Update product by id
// router.patch("/:articleId",async (req, res) => {
//     try{
//     await ArticleList.updateOne({_id:req.params.articleId},{
//         $set:{Title: req.body.title,
//             Author: req.body.author,
//            TimeToRead: req.body.timeToRead,
//             Content: req.body.content,}
//     })
//     res.json({message:"success"})
//     }
//     catch(err){
//         console.log(err.message)
//         res.json({message:err.message})
//     }
// })

//Delete product
router.delete("/:articleId",async (req, res) => {
    try{
    await ArticleList.deleteOne({_id:req.params.articleId});
    res.json({message:"success"})
} catch(err){
    res.json ({status:400,message:err.message});
}

})


module.exports=router;