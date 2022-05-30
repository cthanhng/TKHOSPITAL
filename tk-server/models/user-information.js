const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
    userID: {type:String, required:true},
    Name: {type:String, required:true},
    DateOfBirth: {type:String, required:true},
    Gender:{type:String, required:true},
    PhoneNumber:{type:String,required:true},
    IDNumber:{type:String, required:true},
    Email:{type:String, required:true},
    Nationality:{type:String, required:true},
    Religion:{type:String,required:true},
    Province:{type:String, required:true},
    Ward:{type:String,required:true},
    Street:{type:String,required:true},
    Job:{type:String, required:true},
    HealthInsurance:{type:String,required:true},
    Height:{type:String,required:true},
    Weight:{type:String, required:true},
    image:{type:String,required:true},
    password:{type:String, required:true}
});
module.exports = mongoose.model('user_information', UserInfoSchema);///chưa đặt lại tên cho db
