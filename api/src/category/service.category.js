const category = require("./model.category")
const categoryService = {}


categoryService.createCategory = async ({heading})=>{
     const categorys = await category.create({heading})
     console.log(categorys, "category")
     return categorys
}
// /////////////////////////////
// Get all category
categoryService.getAllcategory = async (id) => {
        return await category.find({id});
};

categoryService.categoryExists = async (heading) => {
    return await category.findOne({heading });
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

