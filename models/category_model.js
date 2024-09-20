const mongoose = require('mongoose');



// 1- Define Schema
const categorySchema = new mongoose.Schema({
    name: { type: String,
        
        required: [true, 'Please enter category name'],
        unique: [true, 'Category name must be unique'],
        minLenght: [3, 'Name must be at least 3 characters'],
    maxLenght: [32, 'Name must not exceed 32 characters'],
    },



    slug:{
type: String,
lowercase: true,
    },
    videoLink: {
        type: String,
        required: [true, 'Please enter video link'],
    },



},{timestamps: true});


// Create model
const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;