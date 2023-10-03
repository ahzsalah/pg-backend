const express = require('express');
const router = express.Router();
const FamilyMember = require('../models/familyMember');

// Add family member
router.post('/add', async (req, res) => {
    try {
        const familyMember = new FamilyMember(req.body);
        await familyMember.save();
        res.status(201).send(familyMember);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get registered family members for a patient
router.get('/:patientID', async (req, res) => {
    try {
        const familyMembers = await FamilyMember.find({ patientID: req.params.patientID });
        res.status(200).send(familyMembers);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
