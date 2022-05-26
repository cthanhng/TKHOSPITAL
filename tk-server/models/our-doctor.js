const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OurDoctorSchema = new Schema({
    Image: {type: String, require: true},
    DoctorName: {type: String, require: true},
    Department: {type: String, require: true},
})

module.exports = mongoose.model("our_doctors",OurDoctorSchema);