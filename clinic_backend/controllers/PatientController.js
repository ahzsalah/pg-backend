const { default: mongoose } = require('mongoose')

const Patient = require('../models/Patient');

const signUp = async(req, res) => {
    const {username, name, email, password, dob, gender, mobile_number, Efull_name, Emobile_number, relation} = req.body

    const emergency_contact = {full_name: Efull_name, mobile_number: Emobile_number, relation_to_the_patient: relation}

    const patient = new Patient({username, name, email, password, dob, gender, mobile_number, emergency_contact})

    await patient.save()

    res.status(200).json(patient)
}

module.exports = {
    signUp
}