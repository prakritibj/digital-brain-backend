const subcategoryService = require('./services.subcategory')
const resourseService = require("../resources/services.resource")
const subcategoryController = {}

// Create a new subcategory
subcategoryController.createSubcategory = async (req, res) => {
    const { subcategoryName, categoryId } = req.body

if (!subcategoryName || !categoryId) {
    return res.send({
        status: "Err",
        msg: "subcategoryName and categoryId are required",
        data: null
    })
}
try {
    const exists = await subcategoryService.subcategoryExists(subcategoryName)
    if (exists) {
        if (exists.isDeleted) {
            // If it exists and is marked as deleted, update it to "isDeleted: false"
            const restoredSubcategory = await subcategoryService.updateSubcategory(existingCategory._id, { isDeleted: false });
            return res.send({
                status: true,
                msg: "subcategory restored successfully",
                data: restoredSubcategory
            });
        }
        return res.send({
            status: false,
            msg: "Subcategory with this name already exists",
            data: null
        })
    }

    const subcategoryId = await subcategoryService.createSubcategory({ subcategoryName, categoryId })
    return res.send({
        status:true,
        msg: "Subcategory created successfully",
        data: { id: subcategoryId, subcategoryName, categoryId }
    })
} catch (error) {
    console.error('Create subcategory error:', error)
    return res.send({
        status: false,
        msg: "Error creating subcategory",
        data: null
    })
}
}

subcategoryController.getAllSubcategories = async (req, res) => {
    try {
        // Fetch all subcategories
        const allSubcategories = await subcategoryService.getAllSubcategories();
        // Fetch all resources
        const allResources = await  resourseService.getAllResourse();

        // Map over all subcategories to construct the final array
        const finalArray = allSubcategories.map((subCat) => {
            console.log(subCat?._id.toString(), "allResources");

            return {
                subcategoryId: subCat._id,
                subcategoryName: subCat.subcategoryName,
                resources: allResources.filter(res => res.subcategoryId.toString() === subCat._id.toString()) // Adjust this as needed
            };
        }); 

        return res.send({
            status: true,
            msg: "All subcategories retrieved successfully",
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


// / Get single subcategory
subcategoryController.getSingleSubCategory = async (req, res) =>{
    const { id } = req.params;
    try {
        const getSingleSubcategory = await subcategoryService.getSingleSubCategory(id)
        console.log(getSingleSubcategory ,"getsingle subcategory")
        if (getSingleSubcategory) {
            return res.send({ status: true, msg:" data getted",data: getSingleSubcategory })
        }
        return res.send({ msg: "subategory are not found", data: null, status: false })
    } catch (err) {
        console.log(err)
        return res.send({ status: false, data: [], error: err })
    }
  }
// Delete a subcategory
subcategoryController.deleteSubcategory = async (req, res) => {
    const { id } = req.params

if (!id) {
    return res.send({
        status: false,
        msg: "Subcategory ID is required",
        data: null
    })
}

try {
    const deleted = await subcategoryService.deleteSubcategory(id ,{$set : {isDeleted : true}})
    if (!deleted) {
        return res.send({
            status: false,
            msg: "Subcategory not found",
            data: null
        })
    }
    return res.send({
        status:true,
        msg: "Subcategory deleted successfully",
        data: null
    })
} catch (error) {
    console.error('Delete subcategory error:', error)
    return res.send({
        status: false,
        msg: "Error deleting subcategory",
        data: null
    })
}
}

// Update a subcategory
subcategoryController.updateSubcategory = async (req, res) => {
    const { id } = req.params
    const updateData = req.body

if (!id) {
    return res.send({
        status: false,
        msg: "Subcategory ID is required",
        data: null
    })
}

try {
    const updated = await subcategoryService.updateSubcategory(id, updateData)
    if (!updated || updated.isDeleted) {
        return res.send({
            status: false,
            msg: "Subcategory not found",
            data: null
        })
    }
    return res.send({
        status:true,
        msg: "Subcategory updated successfully",
        data: null
    })
} catch (error) {
    console.error('Update subcategory error:', error)
    return res.send({
        status: false,
        msg: "Error updating subcategory",
        data: null
    })
}
}


// Get a single subcategory along with its resources
subcategoryController.getSubcategoryWithResources = async (req, res) => {
    const { id } = req.params;
    try {
        // Fetch the single subcategory
        const subcategory = await subcategoryService.getSingleSubCategory(id);
        if (!subcategory) {
            return res.send({ msg: "Subcategory not found", data: null, status: false });
        }
        
        // Fetch all resources
        const allResources = await resourseService.getAllResourse();

        // Filter resources related to the specific subcategory
        const relatedResources = allResources.filter(res => res.subcategoryId.toString() === subcategory._id.toString());

        return res.send({
            status: true,
            msg: "Subcategory and related resources retrieved successfully",
            data: {
                subcategory,
                resources: relatedResources
            }
        });
    } catch (err) {
        console.error(err);
        return res.send({
            status: false,
            data: [],
            error: err.message
        });
    }
};


module.exports = subcategoryController