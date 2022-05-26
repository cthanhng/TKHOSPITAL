const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicalRecordSchema = new Schema({

    userID: {type:String,required:true},
    medicalRecord: {type:Array, required:true},
    
   

})
module.exports =mongoose.model("medical_records",MedicalRecordSchema);