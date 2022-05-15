const express = require('express');
const app= express();
const port=3000;


//Http request logger
const morgan = require('morgan');
app.use(morgan('combined'));

const bodyParser= require('body-parser');
app.use(bodyParser.json());


//Enable CORS 
const cors = require('cors');
app.use(cors()); //enable all cors

//Connect db 
const db= require('./config/db')
db.connect();

const serviceRouter = require('./routes/services.routes.js');
app.use("/",serviceRouter)


app.listen(port,()=>{
    console.log(`My server is listening on port ${port}`)
})
