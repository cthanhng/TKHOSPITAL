const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserAccountSchema = new Schema({
<<<<<<< HEAD
    userID:{type: String, require: true},
    email:{type: String, require: true},
    password:{type: String, require: true},
=======
    UserID:{type: String, require: true},
    UserAccount:{type: String, require: true},
    Password:{type: String, require: true},
>>>>>>> fd505ce7dd514a3e46eca4804b170b986bfbbf5b
    Type:{type: String, require: true}
})

module.exports = mongoose.model("user_account",UserAccountSchema);