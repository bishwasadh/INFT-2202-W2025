/**
 * Animal Controller
 * Author: Bishwas Adhikari
 * StudentID: 100932586
 */

const Animal = require('../model/Animal');

// Controller for animal operations
const animalController = {
  /**
   * Show the entry form for adding a new animal
   */
  showEntryForm: (req, res) => {
    res.render('animals/entry-form', {
      pageTitle: 'Add Animal'
    });
  },

  /**
   * Add a new animal to the database
   */
  addAnimal: async (req, res) => {
    try {
      const newAnimal = new Animal({
        zoo: req.body.zoo,
        scientificName: req.body.scientificName,
        commonName: req.body.commonName,
        givenName: req.body.givenName,
        gender: req.body.gender,
        dateOfBirth: new Date(req.body.dateOfBirth),
        age: req.body.age,
        isTransportable: req.body.isTransportable === 'true'
      });

      await newAnimal.save();
      res.redirect('/animals/all-animals');
    } catch (err) {
      console.error(err);
      res.render('animals/entry-form', {
        pageTitle: 'Add Animal',
        error: 'Error adding animal',
        formData: req.body
      });
    }
  },

  // Other placeholder methods remain the same
  getAllAnimals: (req, res) => {
    res.send('Get all animals route - will be implemented soon');
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

module.exports = animalController;