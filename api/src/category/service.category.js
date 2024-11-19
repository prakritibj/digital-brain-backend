const category = require("./model.category")
const categoryService = {}


categoryService.createCategory = async ({categoryName,id})=>{
     const categories = await category.create({categoryName ,id})
     console.log(categories, "category")
     return categories
}

// Get all category
categoryService.getAllcategory = async (id) => {
        return await category.find({id, isDeleted: false})
}

categoryService.categoryExists = async (categoryName ,id) => {
    return await category.findOne({categoryName,id })
}

// // Delete a category by ID
categoryService.deletecategory = async (id,updateField) => {
        return await category.findByIdAndUpdate({_id: id}, {...updateField}, {new :true})
}

categoryService.getSingleCategory = async (id) => {
    return await category.findById(id)
}

// // update a category by ID
categoryService.updateCategory = async (id, updates) => {
    return await category.findByIdAndUpdate(id, updates, { new: true })
}
module.exports = categoryService

