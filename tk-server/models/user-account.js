const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserAccountSchema = new Schema({
    UserID:{type: String, require: true},
    UserAccount:{type: String, require: true},
    Password:{type: String, require: true},
    Type:{type: String, require: true}
})

module.exports = mongoose.model("user_account",UserAccountSchema);