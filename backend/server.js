


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();
const farmerRoutes = require('./routes/farmerRoutes');
// const Farmer = require('./models/Farmer');  // Make sure you import the model!
const authRoutes = require('./routes/authRoutes');



const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('uploads'));
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/farmer', farmerRoutes);
app.use('/api/auth', authRoutes);






// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/farmersMarketplace')
.then(async () => {
  console.log('MongoDB Connected');

  // Create a test farmer
//   const testFarmer = new Farmer({
//     name: 'Test Farmer',
//     location: 'Test Village',
//     products: ['Wheat', 'Rice'],
//     phone: '1234567890'
//   });

//   await testFarmer.save();
//   console.log('Test farmer saved successfully!');

})
.catch(err => console.error('MongoDB connection error:', err));


// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Farmers Marketplace Backend!');
});

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
