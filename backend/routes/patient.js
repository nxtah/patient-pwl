const express = require('express');
const router = express.Router();
const { Patient } = require('../models');

// Create Patient
router.post('/', async (req, res) => {
  try {
    const newPatient = await Patient.create(req.body);
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.json(patients);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update Patient
router.put('/:id', async (req, res) => {
  try {
    const updatedPatient = await Patient.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(updatedPatient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Patient
router.delete('/:id', async (req, res) => {
  try {
    await Patient.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
