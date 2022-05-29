const express = require('express');
const app = express();
const port = 3000;


const path= require('path');
app.use(express.static(path.join(__dirname,'/images/doctors')))
app.use(express.static(path.join(__dirname,'/images/article')))
app.use(express.static(path.join(__dirname,'/images/service')))
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const db= require('./config/db/index')
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

const UserInfoRouter = require('./routes/user-information.routes');
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
const UserAccountRouter = require('./routes/user-account.routes');
app.use("/",UserAccountRouter )
const UserInfomationRouter= require('/routes/user-information.routes');
app.use("/", UserInfomationRouter)

/* const ArticleListRouter = require('./routes/article-list.routes')
app.use("/", ArticleListRouter)

const ServiceListRouter = require('./routes/services.routes')
app.use("/", ServiceListRouter)
 */
/* const OurDoctorRouter = require('./routes/our-doctor.routes')
app.use("/", OurDoctorRouter)
 */


app.listen(port, ()=>{
    console.log(`My server listening on port ${port}`)
})
