/**
 * Animal Database Seeder
 * Author: Bishwas Adhikari
 * StudentID: 100932586
 * Date: April 14, 2025
 * 
 * This script generates and inserts 1000 random animal records into the MongoDB database
 */

const mongoose = require('mongoose');
require('dotenv').config({ path: './process.env' });
const Animal = require('./model/Animal');

// Connect to MongoDB using connection string from process.env
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected for seeding...'))
  .catch(err => {
    console.log('MongoDB connection error:', err);
    process.exit(1);
  });

// Sample data arrays for generating realistic animal records
const zoos = [
  'Toronto Zoo', 'San Diego Zoo', 'Bronx Zoo', 'Beijing Zoo', 'London Zoo',
  'Berlin Zoo', 'Sydney Zoo', 'Singapore Zoo', 'Moscow Zoo', 'Tokyo Zoo',
  'Vienna Zoo', 'Prague Zoo', 'Budapest Zoo', 'Melbourne Zoo', 'Auckland Zoo',
  'Cape Town Zoo', 'Amsterdam Zoo', 'Delhi Zoo', 'Madrid Zoo', 'Seoul Zoo'
];

const scientificNames = [
  'Panthera leo', 'Gorilla gorilla', 'Elephas maximus', 'Ursus arctos',
  'Phascolarctos cinereus', 'Giraffa camelopardalis', 'Ailuropoda melanoleuca',
  'Hippopotamus amphibius', 'Crocodylus niloticus', 'Rhinoceros unicornis',
  'Macropus rufus', 'Canis lupus', 'Loxodonta africana', 'Ursus maritimus',
  'Spheniscus demersus', 'Panthera tigris', 'Equus zebra', 'Vulpes vulpes',
  'Tursiops truncatus', 'Falco peregrinus', 'Ara ararauna', 'Camelus dromedarius',
  'Bison bison', 'Iguana iguana', 'Varanus komodoensis'
];

const commonNames = [
  'Lion', 'Gorilla', 'Asian Elephant', 'Brown Bear', 'Koala', 'Giraffe',
  'Giant Panda', 'Hippopotamus', 'Nile Crocodile', 'Indian Rhinoceros',
  'Red Kangaroo', 'Grey Wolf', 'African Elephant', 'Polar Bear',
  'African Penguin', 'Bengal Tiger', 'Mountain Zebra', 'Red Fox',
  'Bottlenose Dolphin', 'Peregrine Falcon', 'Blue-and-yellow Macaw', 'Dromedary Camel',
  'American Bison', 'Green Iguana', 'Komodo Dragon'
];

const names = [
  'Leo', 'Simba', 'Mufasa', 'Kong', 'Dumbo', 'Baloo', 'Kenny', 'Spots', 'Stripes',
  'Charlie', 'Panda', 'Hippy', 'Snappy', 'Horny', 'Fluffy', 'Buddy', 'Max', 'Bella', 
  'Luna', 'Lucy', 'Daisy', 'Rocky', 'Zeus', 'Tucker', 'Jack', 'Cooper', 'Bear', 'Duke',
  'Oliver', 'Milo', 'Henry', 'Lily', 'Coco', 'Ruby', 'Rosie', 'Stella', 'Lola', 'Penny'
];

const genders = ['Male', 'Female'];

/**
 * Generates a random animal object with all required fields
 * @returns {Object} Animal object with random but realistic data
 */
function generateAnimal() {
  // Choose a random animal type (same index for scientific and common name)
  const animalTypeIndex = Math.floor(Math.random() * scientificNames.length);
  
  // Generate a random age between 1 and 25
  const age = Math.floor(Math.random() * 25) + 1;
  
  // Calculate birth date by subtracting age from current date
  const today = new Date();
  const birthYear = today.getFullYear() - age;
  const birthMonth = Math.floor(Math.random() * 12);
  const birthDay = Math.floor(Math.random() * 28) + 1; // Avoid invalid dates
  const dateOfBirth = new Date(birthYear, birthMonth, birthDay);
  
  // Add a random number suffix to animal name to create unique given names
  const givenName = names[Math.floor(Math.random() * names.length)] + Math.floor(Math.random() * 100);
  
  // Create and return the animal object
  return {
    zoo: zoos[Math.floor(Math.random() * zoos.length)],
    scientificName: scientificNames[animalTypeIndex],
    commonName: commonNames[animalTypeIndex],
    givenName: givenName,
    gender: genders[Math.floor(Math.random() * genders.length)],
    dateOfBirth: dateOfBirth,
    age: age,
    isTransportable: Math.random() > 0.5 // 50% chance of being transportable
  };
}

/**
 * Seeds the database with 1000 random animal records
 * Clears existing data first
 */
async function seedDatabase() {
  try {
    // First clear the existing animals collection
    await Animal.deleteMany({});
    console.log('Existing animals cleared from database');
    
    // Generate 1000 random animal objects
    const animals = [];
    
    console.log('Generating 1000 animal records...');
    for (let i = 0; i < 1000; i++) {
      animals.push(generateAnimal());
      
      // Show progress every 100 records
      if ((i + 1) % 100 === 0) {
        console.log(`${i + 1} records generated`);
      }
    }
    
    // Insert all animals into the database
    console.log('Inserting records into database...');
    await Animal.insertMany(animals);
    console.log('Success! Database seeded with 1000 animal records');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    // Close the database connection when done
    mongoose.connection.close();
    console.log('Database connection closed');
  }
}

// Execute the seeding function
seedDatabase();