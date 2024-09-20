const mongoose = require('mongoose'); // Ensure mongoose is imported
const asyncHandler = require('express-async-handler'); // Corrected spelling of asyncHandler

const CategoryModel = require('../models/category_model');
const slugify = require('slugify');

const getCategories = async (req, res) => {

    const page =req.query.page*1 || 1;
    const limit=req.query.limit*1 || 10;
    const skip = (page - 1) * limit;

        const categories = await CategoryModel.find({}).skip(skip).limit(limit);
        res.status(200).json({ results: categories.length,page ,data: categories });

 
};

//get specific category
const getCategory =asyncHandler(async (req, res) => {
   const {id}=req.params;
    const category = await CategoryModel.findById(id);
if(!category){
    res.status(404).json({ message: 'Category not found' });
}
    res.status(200).json({ data: category });
});

//update category
 const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, videoLink } = req.body;
    const category = await CategoryModel.findByIdAndUpdate(
        {_id:id},
        { name, videoLink, slug: slugify(name) },
        { new: true }
    );
    if (!category) {
        res.status(404).json({ message: 'Category not found' });
    } else {
        res.status(200).json({ data: category });
    }
    
})

//delete category
const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await CategoryModel.findByIdAndDelete(id);
    if (!category) {
        res.status(404).json({ message: 'Category not found' });
    } else {
        res.status(200).json({ data: category });
    }
    
})


const createCategory = asyncHandler(async (req, res) => {
    const { name, videoLink } = req.body; 
  
        const category = await CategoryModel.create({ videoLink, name, slug: slugify(name) });
        res.status(201).json({ data: category });
});

module.exports = {
    deleteCategory,
    updateCategory,
    getCategory,
    getCategories,
    createCategory
};