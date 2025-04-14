const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// Routes
router.get('/all-animals', animalController.getAllAnimals);
router.get('/entry-form', animalController.showEntryForm);
router.post('/add-animal', animalController.addAnimal);
router.get('/edit-animal/:id', animalController.showEditForm);
router.post('/update-animal/:id', animalController.updateAnimal);
router.post('/delete-animal/:id', animalController.deleteAnimal);

module.exports = router;