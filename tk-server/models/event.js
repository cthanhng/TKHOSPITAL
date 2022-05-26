const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventsSchema = new Schema({

    Time: {type:String,required:true},
    Content: {type:String, required:true},
    
   

})
module.exports =mongoose.model("events",EventsSchema);