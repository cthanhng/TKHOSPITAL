const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    UserId: {type:Number, required:true},
    UserAccount: {type:String, required:true},
    Password: {type:String, required:true},
    Type:{type:String, required:true}
});
module.exports = mongoose.model('Userinfo', AccountSchema);