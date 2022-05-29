const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ServiceListSchema = new Schema({
    ServiceName:{type:String},
    Department:{type:String},
    Price:{type:String},
    Description:{type:String},
    Image:{type:String},
}
)


module.exports =mongoose.model("services",ServiceListSchema);