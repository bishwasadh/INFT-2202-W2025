/**
 * Animal Database MVC Application
 * Author: Bishwas Adhikari
 * StudentID: 100932586
 * Date Completed: April 14, 2025
 */

// Import required modules
const express = require('express');
const { engine } = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: './process.env' });

// Initialize app
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

// Set up view engine
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  // Add these helpers
  helpers: {
    eq: function (a, b) {
      return a === b;
    },
    not: function (value) {
      return !value;
    }
  }
}));
app.set('view engine', 'hbs');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'Animal Database - Home'
  });
});

// Import and use animal routes
const animalRoutes = require('./routes/animal');
app.use('/animals', animalRoutes);

// Start server
const PORT = process.env.PORT || 3031;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});