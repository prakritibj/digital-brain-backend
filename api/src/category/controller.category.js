
const categoryService = require("./service.category");
const categoryController = {};

// Create a newtransaction
categoryController.createCategory = async (req, res) => {
    const { heading } = req.body;
    if (!heading) {
        return res.send({
            status: "Err", msg: " heading is required", data: null
        })
    }
    try {
        const exists = await categoryService.categoryExists(heading);
        console.log(exists,"exist")
        if (exists) {
            return res.send({
                status: "Err",
                msg: "Category with this heading already exists",
                data: null
            });
        }
        const newCategory = await categoryService.createCategory({heading})
        console.log(newCategory, "newcategory")
        return res.send({
            status: "Ok", msg: " category created successfully", data: newCategory
        })
    } catch (error) {
        console.error('Creat category  error:', error)
        return res.send({
            status: "Err", msg: "Error creating category", data: null
        })

    }
}


// get all category
categoryController.getAllCategory = async (req, res) => {
    try {
        const AllCategory = await categoryService.getAllcategory()
        console.log(AllCategory ,"hii")
        if (AllCategory.length) {
            return res.send({ status: "OK", msg:"all notes data getted",data:AllCategory  })
        }
        return res.send({ msg: "notes are not found", data: null, status: false })
    } catch (err) {
        console.log(err)
        return res.send({ status: "ERR", data: [], error: err })
    }
}


// Delete a note
categoryController.deletecategory = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.send({
            status: "Err",
            msg: "categoryID is required",
            data: null
        });
    }
    try {
        const deleteCategory = await categoryService.deletecategory(id);
        if (!deleteCategory) {
            return res.send({
                status: "Err",
                msg: "category not found",
                data: null
            });
        }
        return res.send({
            status: "OK",
            msg: "category deleted successfully",
            data: deleteCategory
        });
    } catch (error) {
        console.error('Delete category error:', error);
        return res.send({
            status: "Err",
            msg: "Error category ",
            data: null
        });
    }
};


// 

categoryController.updateCategory = async (req, res) => {
    const { id } = req.params;
    const updateData= req.body;

    if (!id) {
        return res.send({
            status: "Err",
            msg: "category ID is required",
            data: null
        });
    }
    try {
        const updatedcategory= await categoryService.updateCategory(id, updateData);
        if (!updatedcategory) {
            return res.send({
                status: "Err",
                msg: "category not found",
                data: null
            })
        }
        return res.send({
            status: "Success",
            msg: "category updated successfully",
            data: updatedcategory
        });
    } catch (error) {
        console.error('Update category error:', error);
        return res.send({
            status: "Err",
            msg: "Error updating category",
            data: null
        });
    }
};


module.exports = categoryController;