// const Subcategory = require('../models/subcategoryModel');
// const Category = require('../models/categoryModel');

// const SubcategoryService = {};

// Create a new subcategory
// SubcategoryService.createSubcategory = async ({ name, categoryId }) => {
//     try {
//         // Create subcategory
//         const subcategory = await Subcategory.create({ name, category: categoryId });

//         // Add the subcategory to the category's list of subcategories
//         await Category.findByIdAndUpdate(categoryId, { $push: { subcategories: subcategory._id } });

//         console.log(subcategory, "subcategory");
//         return subcategory;
//     } catch (error) {
//         console.error("Error creating subcategory:", error);
//         throw error;
//     }
// };

// // Get all subcategories
// SubcategoryService.getAllSubcategories = async () => {
//     try {
//         return await Subcategory.find().populate('category');
//     } catch (error) {
//         console.error("Error fetching subcategories:", error);
//         throw error;
//     }
// };

// // Get a subcategory by ID
// SubcategoryService.getSubcategoryById = async (id) => {
//     try {
//         return await Subcategory.findById(id).populate('category');
//     } catch (error) {
//         console.error("Error fetching subcategory by ID:", error);
//         throw error;
//     }
// };

// // Update a subcategory by ID
// SubcategoryService.updateSubcategory = async (id, updates) => {
//     try {
//         return await Subcategory.findByIdAndUpdate(id, updates, { new: true });
//     } catch (error) {
//         console.error("Error updating subcategory:", error);
//         throw error;
//     }
// };

// // Delete a subcategory by ID
// SubcategoryService.deleteSubcategory = async (id) => {
//     try {
//         const subcategory = await Subcategory.findById(id);
//         if (subcategory) {
//             // Remove subcategory reference from its parent category
//             await Category.findByIdAndUpdate(subcategory.category, { $pull: { subcategories: id } });
//             return await Subcategory.findByIdAndDelete(id);
//         }
//         return null;
//     } catch (error) {
//         console.error("Error deleting subcategory:", error);
//         throw error;
//     }
// };

// module.exports = SubcategoryService;
