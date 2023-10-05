const mongoose = require('mongoose')

const Schema = mongoose.Schema

const patientSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    dob: {
        type: Date,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    mobile_number: {
        type: String,
        required: true
    },

    emergency_contact: {
        required:true,
        
        full_name:{
            type: String,
            required: true
        },

        mobile_number: {
            type: String,
            required: true
        },

        relation_to_the_patient: {
            type: String,
            required: true
        }
    }
}, {timestamps: true})

module.exports = mongoose.model('Patient', patientSchema)