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

  /**
   * Get all animals from the database
   */
  getAllAnimals: async (req, res) => {
    try {
      const animals = await Animal.find().lean();
      
      res.render('animals/all-animals', {
        pageTitle: 'All Animals',
        animals: animals
      });
    } catch (err) {
      console.error(err);
      res.render('animals/all-animals', {
        pageTitle: 'All Animals',
        error: 'Error retrieving animals',
        animals: []
      });
    }
  },
  
  /**
   * Show the edit form for an animal
   */
  showEditForm: async (req, res) => {
    try {
      const animal = await Animal.findById(req.params.id).lean();
      
      if (!animal) {
        return res.redirect('/animals/all-animals');
      }
      
      // Format date for the form
      animal.dateOfBirth = new Date(animal.dateOfBirth).toISOString().split('T')[0];
      
      res.render('animals/edit-animal', {
        pageTitle: 'Edit Animal',
        animal
      });
    } catch (err) {
      console.error(err);
      res.redirect('/animals/all-animals');
    }
  },

  /**
   * Update an animal in the database
   */
  updateAnimal: async (req, res) => {
    try {
      await Animal.findByIdAndUpdate(req.params.id, {
        zoo: req.body.zoo,
        scientificName: req.body.scientificName,
        commonName: req.body.commonName,
        givenName: req.body.givenName,
        gender: req.body.gender,
        dateOfBirth: new Date(req.body.dateOfBirth),
        age: req.body.age,
        isTransportable: req.body.isTransportable === 'true'
      });
      
      res.redirect('/animals/all-animals');
    } catch (err) {
      console.error(err);
      res.redirect(`/animals/edit-animal/${req.params.id}`);
    }
  },

  /**
   * Delete an animal from the database
   */
  deleteAnimal: async (req, res) => {
    try {
      await Animal.findByIdAndDelete(req.params.id);
      res.redirect('/animals/all-animals');
    } catch (err) {
      console.error(err);
      res.redirect('/animals/all-animals');
    }
  }
};

module.exports = animalController;