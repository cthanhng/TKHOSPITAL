const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
userID: {type:String,  require:true},
    Name: {type:String,  require:true},
    DateOfBirth: {type:String,  require:true},
    Gender:{type:String,  require:true},
    Phone:{type:String, require:true},
    IDNumber:{type:String,  require:true},
    Email:{type:String,  require:true},
    Nationality:{type:String,  require:true},
    Religion:{type:String, require:true},
    City:{type:String,  require:true},
    Ward:{type:String, require:true},
    Street:{type:String, require:true},
    Job:{type:String,  require:true},
    HealthInsuranceCardNumber:{type:String, require:true},
    Height:{type:String, require:true},
    Weight:{type:String,  require:true},
    image:{type:String, require:true},
    password:{type:String,  require:true}
});
module.exports = mongoose.model("Userinformations", UserInfoSchema);
