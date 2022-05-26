const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminAccountSchema = new Schema({
    UserID:{type: String, require: true},
    email:{type: String, require: true},
    password:{type: String, require: true},
})

module.exports = mongoose.model("admin_account",AdminAccountSchema);