const mongoose = require('mongoose');
require('dotenv/config');

async function connect() {
    try{
        await mongoose.connect(process.env.DB_URL_ACC,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connect successfully!")
    } catch (err){
        console.log("Error: ",err.message);
    }
}

module.exports={connect};