const subcategory = require('./model.subcategory') 
const subcategoryService = {}

// Create subcategory
subcategoryService.createSubcategory = async ({ subcategoryName, categoryId }) => {
    const newSubcategory = await subcategory.create({ subcategoryName, categoryId })
    console.log(newSubcategory, "newSubcategory")
    return newSubcategory
}

// subcategory ko id se category id se 
subcategoryService.getSubcategoriesByCategoryId = async (categoryId) => {
    console.log(categoryId)
    let res = await subcategory.find({ categoryId });

    return res
};



//  get all subcategory
subcategoryService.getAllSubcategories = async (id) => {
    return await subcategory.find({id, isDeleted: false});
};
// singlesubcategory
subcategoryService.getSingleSubCategory = async (id) => {
    return await subcategory.findById(id);
};

// existsting subcategory 
subcategoryService.subcategoryExists = async (subcategoryName) => {
    return await subcategory.findOne({ subcategoryName })
}

// Delete subcategory by ID
subcategoryService.deleteSubcategory = async (id,updateField) => {
    return await subcategory.findByIdAndUpdate({_id: id}, {...updateField}, {new :true})
}

// Update a subcategory by ID
subcategoryService.updateSubcategory = async (id, updates) => {
    return await subcategory.findByIdAndUpdate(id, updates, { new: true })
}

module.exports = subcategoryService
