const mongoose = require('mongoose')
const Schema = mongoose.Schema
const infoSchema = new Schema({
    accountNum: {
        type: Integer,
        required: "Please enter Doctor's Account Number"
    },
    phoneNum: {
        type: Integer,
        required: "Please enter a phone number"
    },
    //Look into making this user using Schema.Types****
    doctorName: {
        type: String,
        required: "Please enter Doctor's full name"
    },
    office: {
        type: String,
        required: "Please enter Office Name"
    },
    patientLastName: {
        type: String,
        required: "Please enter Patient's last name'"
    },
    patientFirstName: {
        type: String,
        required: "Please enter Patient's first name'"
    },
    dateSent: {
        type: Integer,
        required: "Please enter the date the form is submitted"
    },
    dateDue: {
        type: Integer,
        required: "Please enter the date due in Office by 5pm"
    }
})
const InfoSection = mongoose.model('InfoSection', infoSchema)
module.exports = InfoSection