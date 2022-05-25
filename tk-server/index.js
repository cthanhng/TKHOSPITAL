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
app.use("/", ArticleListRouter)

const ServiceListRouter = require('./routes/services.routes')
app.use("/", ServiceListRouter)

app.listen(port, ()=>{
    console.log(`My server listening on port ${port}`)
})
