const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HealthDiagnoseSchema = new Schema({
    userID:{type:String, required:true},
    heart:{type:String, required:true},
    lungs:{type:String, required:true},
    stomach:{type:String, required:true},
    liver:{type:String, required:true},
    height:{type:String, required:true},
    weight:{type:String, required: true},
    bloodGroup:{type:String, required:true},
    bloodPressure:{type:String, required:true},
    bloodPressureDiagram:{type:String, required:true},
    heartRate:{type:String, required:true},
    spo2:{type:String, required:true},
    checkResults:{type:Object, required:true}
})
module.exports =mongoose.model("health_diagnoses",HealthDiagnoseSchema);