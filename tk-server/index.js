const express = require('express');
const app = express();
const port = 3000;


const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const db = require('./config/db');
db.connect();

/* const DoctorListRouter = require('./routes/doctor-list.routes')
app.use("/", DoctorListRouter) */

const ArticleListRouter = require('./routes/article-list.routes')
app.use("/article", ArticleListRouter)

const ServiceListRouter = require('./routes/services.routes')
app.use("/service", ServiceListRouter)
const DoctorListRouter = require('./routes/doctor-list.routes')
app.use("/doctor", DoctorListRouter)
// const ServiceRouter = require('./routes/services.routes.js');
// app.use("/",ServiceRouter)

// const PatientScheduleRouter = require('./routes/patient-schedule.routes.js');
// app.use("/",PatientScheduleRouter)

const UserInfoRouter = require('./routes/user-information');
app.use("/",UserInfoRouter)
const PatientScheduleRouter = require('./routes/patient-schedule');
app.use("/",PatientScheduleRouter)
const PaymentRouter = require('./routes/payment.router');
app.use("/",PaymentRouter)
const EventRouter = require('./routes/event.routes');
app.use("/",EventRouter)
const HealthDiagnosesRouter = require('./routes/health-diagnose');
app.use("/",HealthDiagnosesRouter)

const MedicalRecordRouter = require('./routes/medical-record');
app.use("/", MedicalRecordRouter)

const AdminAccountRouter = require('./routes/admin-account.routes');
app.use("/",AdminAccountRouter )


app.listen(port, ()=>{
    console.log(`My server listening on port ${port}`)
})
