const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PatientScheduleSchema = new Schema({
    userID: {type: String , require: true},
    Time: {type: String, require: true},
    RoomNumber: {type: String, require: true},
    Dentist: {type: String, require: true},
    Patientnumber: {type: String, require: true},
    BookingType: {type: String, require: true}
});

module.exports =mongoose.model("patient_schedule", PatientScheduleSchema);


