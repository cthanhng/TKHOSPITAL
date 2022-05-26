const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentsSchema = new Schema({

    userID: {type:String,required:true},
    payment: {type:Array, required:true},
    
   

})
module.exports =mongoose.model("payments",PaymentsSchema);