const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Patient_schedule = new Schema({
    name: { type: String, required: true},
    address: { type: String, required: true},
    phone: {type: Number, required: true},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Patient_schedule', Patient_schedule);