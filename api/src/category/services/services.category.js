const Category = require('../models/categoryModel');

const CategoryService = {};

// Create a new category
CategoryService.createCategory = async ({ name }) => {
        return await Category.create({ name });
}

// Get all categories
CategoryService.getAllCategories = async () => {
  return await Category.find().populate('subcategories');
}

// Get a category by ID
CategoryService.getCategoryById = async (id) => {
   return await Category.findById(id).populate('subcategories');
    }

// Update a category by ID
CategoryService.updateCategory = async (id, updates) => {
        return await Category.findByIdAndUpdate(id, updates, { new: true });
};

// Delete a category by ID
CategoryService.deleteCategory = async (id) => {
// First delete associated subcategories
        return await Category.findByIdAndDelete(id);  
};

module.exports = CategoryService;
