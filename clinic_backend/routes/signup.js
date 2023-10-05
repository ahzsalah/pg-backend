const express = require('express')

const router = express.Router()

//Controllers
const {
    signUp
} = require('../controllers/PatientController')

//Sign up Patient
router.post('/signup', signUp)

module.exports =router