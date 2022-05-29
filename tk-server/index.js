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


const UserInfoRouter = require('./routes/user-information');
app.use("/", UserInfoRouter)

const BookingSchedules = require('./routes/schedule-list');
app.use("/booking-schedules/", BookingSchedules)


const UserInfoRouter = require('./routes/user-information.routes');
app.use("/",UserInfoRouter)

const PatientScheduleRouter = require('./routes/patient-schedule');
app.use("/", PatientScheduleRouter)

const PaymentRouter = require('./routes/payment.router');
app.use("/", PaymentRouter)

const EventRouter = require('./routes/event.routes');
app.use("/", EventRouter)
const HealthDiagnosesRouter = require('./routes/health-diagnose');
app.use("/", HealthDiagnosesRouter)

const MedicalRecordRouter = require('./routes/medical-record');
app.use("/", MedicalRecordRouter)

const AdminAccountRouter = require('./routes/admin-account.routes');





app.use("/",AdminAccountRouter )
const UserAccountRouter = require('./routes/user-account.routes');
app.use("/",UserAccountRouter )
const UserInformationRouter= require('./routes/user-information.routes');
app.use("/",  UserInformationRouter)

/* const ArticleListRouter = require('./routes/article-list.routes')
app.use("/", ArticleListRouter)

const ServiceListRouter = require('./routes/services.routes')
app.use("/", ServiceListRouter)
 */
/* const OurDoctorRouter = require('./routes/our-doctor.routes')
app.use("/", OurDoctorRouter)
 */



app.get("/", (req, res) => {
    res.send("OKASD")
})




app.listen(port, () => {
    console.log(`My server listening on port ${port}`)
})
// app.post("/upload", (req, res) => {
//     upload(req, res, async (err) => {
//         if (err) {
//             res.json({ message: err.message })
//         } else {

//             //Insert into DB
//             let patientSchelduleInfo = new scheduleInfo(req.body)
//             await patientSchelduleInfo.save()
//             res.json({ message: "Success!!" })
//         }
//     })
// })

// // BookingID: req.body.BookingID,
// Doctor: req.body.phone,
// // Department: req.body.email,
// PatientName: req.body.name,
// // BookingType: req.body.time,
// // Confirmation: req.body.time,
// Phone: req.body.phone,
// Email: req.body.Email,
// // District: req.body.time,
// // Platform: req.body.time,
// Date: req.body.Date,
// Time: req.body.time,
// // ConnectingWay: req.body.time,
// // TypeOfVisit: req.body.time,
// // thumbPath: req.file.filename