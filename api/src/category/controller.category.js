const categoryService = require("./service.category");
const subcategoryService = require("../subcategorys/services.subcategory")
const categoryController = {};

// Create a newtransaction

categoryController.createCategory = async (req, res) => {
    const { categoryName } = req.body;
    if (!categoryName) {
        return res.send({
            status: false,
            msg: "categoryName is required",
            data: null
        });
    }
    
    try {
        // Check if the category exists
        const existingCategory = await categoryService.categoryExists(categoryName);
        console.log(existingCategory, "existingCategory");
        
        if (existingCategory) {
            if (existingCategory.isDeleted) {
                // If it exists and is marked as deleted, update it to "isDeleted: false"
                const restoredCategory = await categoryService.updateCategory(existingCategory._id, { isDeleted: false });
                return res.send({
                    status: true,
                    msg: "Category restored successfully",
                    data: restoredCategory
                });
            } else {
                // If it exists and is not deleted, return a message that it already exists
                return res.send({
                    status: false,
                    msg: "Category with this categoryName already exists",
                    data: null
                });
            }
        }

        // If category does not exist, create a new one
        const newCategory = await categoryService.createCategory({ categoryName });
        console.log(newCategory, "newCategory");
        return res.send({
            status: true,
            msg: "Category created successfully",
            data: newCategory
        });
        
    } catch (error) {
        console.error("Create category error:", error);
        return res.send({
            status: false,
            msg: "Error creating category",
            data: null
        });
    }
};


// get all category
categoryController.getAllCategory = async (req, res) => {
    try {
        const AllCategory = await categoryService.getAllcategory()
        console.log(AllCategory ,"hii")
        if (AllCategory.length) {
            return res.send({ status: true, msg:"all category data getted",data:AllCategory  })
        }
        return res.send({ msg: "category are not found", data: null, status: false })
    } catch (err) {
        console.log(err)
        return res.send({ status: false, data: [], error: err })
    }
}

// // /get all sub category
categoryController.getAllCategories = async (req, res) => {
    try {
        const allCategories = await categoryService.getAllcategory();
        const allSubCategory = await subcategoryService.getAllSubcategories();
        

        
        const finalArray =  allCategories.map((cat) => {
            // console.log(cat?._id.toString() , "allSubCategory"
            return {
                categoryId: cat._id,
                categoryName: cat.categoryName,
                subCategories: allSubCategory.filter(subCat=> subCat.categoryId.toString() === cat?._id?.toString()) // Adjust this as needed
            };
        });

        return res.send({
            status: true,
            msg: "All categories retrieved successfully",
            data: finalArray
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            status: false,
            data: [],
            error: err.message
        });
    }
};


// /getsingle

categoryController.getSingleCategory = async (req, res) =>{
    const { id } = req.params;
    try {
        const getSingleCategory = await categoryService.getSingleCategory(id)
        console.log(getSingleCategory ,"getsingle")
        if (getSingleCategory) {
            return res.send({ status: true, msg:" data getted",data: getSingleCategory })
        }
        return res.send({ msg: "category are not found", data: null, status: false })
    } catch (err) {
        console.log(err)
        return res.send({ status: false, data: [], error: err })
    }
  }



// Delete a category
categoryController.deletecategory = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.send({
            status: false,
            msg: "categoryID is required",
            data: null
        });
    }
    try {
        const deleteCategory = await categoryService.deletecategory(id,{$set : {isDeleted : true}});
        if (!deleteCategory) {
            return res.send({
                status: false,
                msg: "category not found",
                data: null
            });
        }
        return res.send({
            status: true,
            msg: "category deleted successfully",
            data: deleteCategory
        });
    } catch (error) {
        console.error('Delete category error:', error);
        return res.send({
            status: false,
            msg: "Error category ",
            data: null
        });
    }
};

// update

categoryController.updateCategory = async (req, res) => {
    const { id } = req.params;
    const updateData= req.body;

    if (!id) {
        return res.send({
            status: false,
            msg: "category ID is required",
            data: null
        });
    }
    try {
        const updatedcategory= await categoryService.updateCategory(id, updateData);
      
        if (!updatedcategory || updatedcategory.isDeleted) {
            return res.send({
                status: false,
                msg: "category not found",
                data: null
            })
        }
        return res.send({
            status: "Success",
            msg: "category updated successfully",
            data: updatedcategory,
            
        });
    } catch (error) {
        console.error('Update category error:', error);
        return res.send({
            status: false,
            msg: "Error updating category",
            data: null
        });
    }
};




module.exports = categoryController;
