const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
    UserId: {type:Number, required:true},
    Name: {type:String, required:true},
    DateOfBirth: {type:Number, required:true},
    Gender:{type:String, required:true},
    PhoneNumber:{type:String,required:true},
    IDNumber:{type:Number, required:true},
    Email:{type:String, required:true},
    Nationality:{type:String, required:true},
    Religion:{type:String,required:true},
    Province:{type:String, required:true},
    Ward:{type:String,required:true},
    Street:{type:String,required:true},
    Job:{type:String, required:true},
    HealthInsuarance:{type:Number,required:true},
    Height:{type:Number,required:true},
    Weight:{type:Number, required:true}
});
module.exports = mongoose.model('Userinfo', AccountSchema);///chưa đặt lại tên cho db