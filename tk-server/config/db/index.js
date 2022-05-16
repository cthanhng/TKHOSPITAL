const mongoose = require('mongoose');
require('dotenv/config')


module.exports = {connect}
const cors = require('cors')
require('dotenv/config');

async function connect() {
    try{
        await mongoose.connect(process.env.DB_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connect successfully!")
    } catch (err){
        console.log("Error: ",err.message);
    }
}
