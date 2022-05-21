const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const db = require('./config/db');
db.connect();

Patient_schedule.find({}, (error, data)=>{
    if(error){
        res.json({"Error": error.message})
    }else{
        res.json(data)
    }
})

app.listen(port, ()=>{
    console.log(`My server listening on port ${port}`)
})
