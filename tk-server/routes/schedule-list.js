const { response, json } = require('express');
const express = require('express');
const router = express.Router();
const multer= require('multer');
const path= require('path');
const app = express();

//Import models
const schedulesList = require('../models/schedule-list')

router.get('/patient_schedules', function (req, res) {
    schedulesList.find({}, 
    function (err, data) {
        if (err) {
            res.json({ message: err.message })
        }
        else {
            res.json(data)
        }
    })
})

var upload =multer()

// router.get('/:id', function (req, res) {
//     schedulesList.find({ userID: req.params.id }, function (err, data) {
//         if (err) {
//             res.json({ message: err.message })
//         }
//         else {
//             res.json(data)
//         }
//     })
// })

router.post("/upload", async function (req, res) {

    let newSchedule = new schedulesList(
        // req.body
        {
            Type: req.body.type,
            Connect: req.body.connect,
            Place: req.body.place,
            District: req.body.district,
            Date: req.body.date,
            Time: req.body.time,
            Name: req.body.name,
            Email: req.body.email,
            Phone: req.body.phone,
            Doctor: req.body.doctor,
            Address: req.body.address,
            DateOfBirth: req.body.dateOfBirth
        }
    )

    try {
        console.log(req.body)
        p = await newSchedule.save();
        res.json({ message: "success 123123" })
    }
    catch (err) {
        res.json({ message: err.message })
    }
})
module.exports = router;


