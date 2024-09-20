const express = require('express');
const { getCategories,createCategory,getCategory ,updateCategory,deleteCategory} = require('../services/CategoryService');

const router = express.Router();

router.route('/').get(getCategories).post(createCategory);

router.route('/:id').get(getCategory).put(updateCategory).delete(deleteCategory);

module.exports = router; // Export the router