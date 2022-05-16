const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const db = require('./config/db');
db.connect();


const ServiceRouter = require('./routes/services.routes.js');
app.use("/",ServiceRouter)

const PatientScheduleRouter = require('./routes/patient-schedule.routes.js');
app.use("/",PatientScheduleRouter)

app.listen(port, ()=>{
    console.log(`My server listening on port ${port}`)
})
