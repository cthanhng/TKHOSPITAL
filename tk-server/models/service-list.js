const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceListSchema = new Schema({

    _id: {type:String,required:true},
    Department: {type:String, required:true},
    DepartId: {type:String, required:true},
    List: {type:Object, required:true},
   

})
module.exports =mongoose.model("Services",ServiceListSchema);