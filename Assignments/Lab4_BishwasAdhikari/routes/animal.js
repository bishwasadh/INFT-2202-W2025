const express = require('express');
const router = express.Router();

// Placeholder for controller - we'll implement this in the next step
const animalController = {
  getAllAnimals: (req, res) => {
    res.send('Get all animals route - will be implemented soon');
  },
  showEntryForm: (req, res) => {
    res.send('Show entry form route - will be implemented soon');
  },
  addAnimal: (req, res) => {
    res.send('Add animal route - will be implemented soon');
  },
  showEditForm: (req, res) => {
    res.send('Show edit form route - will be implemented soon');
  },
  updateAnimal: (req, res) => {
    res.send('Update animal route - will be implemented soon');
  },
  deleteAnimal: (req, res) => {
    res.send('Delete animal route - will be implemented soon');
  }
};

// Routes
router.get('/all-animals', animalController.getAllAnimals);
router.get('/entry-form', animalController.showEntryForm);
router.post('/add-animal', animalController.addAnimal);
router.get('/edit-animal/:id', animalController.showEditForm);
router.post('/update-animal/:id', animalController.updateAnimal);
router.post('/delete-animal/:id', animalController.deleteAnimal);

module.exports = router;