const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ScheduleInformationSchema = new Schema({
    Type: {type: String , require: true},
    Connect: {type: String},
    Place: {type: String},
    District: {type: String},
    Date: {type: String},
    Time: {type: String},
    Name: {type: String},
    Email: {type: String},
    Phone: {type: String},
    Doctor: {type: String},
    Address: {type: String},
    DateOfBirth: {type: String},
});

module.exports =mongoose.model("patient_schedules", ScheduleInformationSchema); //UserInformation: Collection


// BookingID: {type: String},
    // Doctor: {type: String},
    // Department: {type: String},
    
    // BookingType: {type: String},
    // Confirmation:{type: String},
    
    // email: {type: String},
    
    // ConnectingWay: {type: String},
    // TypeOfVisit: {type: String},