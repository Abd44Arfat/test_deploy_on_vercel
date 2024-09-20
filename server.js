const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dbConnection = require('./config/database');
const CategoryRoutes = require('./routes/categoryRoutes');

// Load environment variables
dotenv.config({ path: 'config.env' });

// Initialize Express app
const app = express();

// Database connection
dbConnection();

// Middleware
app.use(express.json()); // Middleware to parse JSON bodies

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    console.log(`Mode: ${process.env.NODE_ENV}`);
}

// Mount Routes 
app.use('/api/v1/categories', CategoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});