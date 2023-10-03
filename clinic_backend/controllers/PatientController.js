const { default: mongoose } = require('mongoose')

const Patient = require('../models/Patient');

const signUp = async(req, res) => {
    const {username, name, email, password, dob, gender, mobile_number, Efull_name, Emobile_number} = req.body

    const emergency_contact = {Efull_name, Emobile_number}

    const patient = new Patient(username, name, email, password, dob, gender, mobile_number, emergency_contact)

    await patient.save()

    res.status(200).json(patient)
}

module.exports = {
    signUp
}