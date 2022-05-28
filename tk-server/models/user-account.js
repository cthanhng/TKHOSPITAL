const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserAccountSchema = new Schema({

    userID:{type: String, require: true},
    email:{type: String, require: true},
    password:{type: String, require: true},
    Type:{type: String, require: true}
})

module.exports = mongoose.model("user_account",UserAccountSchema);