const subcategory = require('./model.subcategory') 
const subcategoryService = {}

// Create subcategory
subcategoryService.createSubcategory = async ({ subcategoryName, categoryId }) => {
    const newSubcategory = await subcategory.create({ subcategoryName, categoryId })
    console.log(newSubcategory, "newSubcategory")
    return newSubcategory
}

// Get subcategories,category by id 
subcategoryService.getAllSubcategories = async (categoryId) => {
    if (categoryId) {
        return await subcategory.find({ categoryId })
    }
    return await subcategory.find({})
}

// existsting subcategory 
subcategoryService.subcategoryExists = async (subcategoryName) => {
    return await subcategory.findOne({ subcategoryName })
}

// Delete subcategory by ID
subcategoryService.deleteSubcategory = async (id) => {
    return await subcategory.findByIdAndDelete(id)
}

// Update a subcategory by ID
subcategoryService.updateSubcategory = async (id, updates) => {
    return await subcategory.findByIdAndUpdate(id, updates, { new: true })
}

module.exports = subcategoryService
