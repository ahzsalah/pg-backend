const mongoose = require('mongoose');

const familyMemberSchema = new mongoose.Schema({
    patientID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Patient' 
    },
    name: {
        type: String,
        required: true
    },
    nationalID: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female'] 
    },
    relation: {
        type: String,
        required: true,
        enum: ['Wife', 'Husband', 'Child']
    }
});

module.exports = mongoose.model('FamilyMember', familyMemberSchema);
