const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorListSchema = new Schema({
    Image: {type: String, require: true},
    DoctorID: {type: String, require: true},
    DoctorName: {type: String, require: true},
    Department: {type: String, require: true},
    Position: {type: String, require: true},
    Description: {type: String, require: true},
})

module.exports = mongoose.model("doctor_lists",DoctorListSchema);