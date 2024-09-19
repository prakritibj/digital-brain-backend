const category = require("./model.category")
const categoryService = {}


categoryService.createCategory = async ({categoryName,id})=>{
     const categories = await category.create({categoryName ,id})
     console.log(categories, "category")
     return categories
}

// Get all category
categoryService.getAllcategory = async (id) => {
        return await category.find({id});
};

categoryService.categoryExists = async (categoryName) => {
    return await category.findOne({categoryName });
};

// // Delete a category by ID
categoryService.deletecategory = async (id) => {
        return await category.findByIdAndDelete(id)
};

// // update a category by ID
categoryService.updateCategory = async (id, updates) => {
    return await category.findByIdAndUpdate(id, updates, { new: true });
}
module.exports = categoryService

