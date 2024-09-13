const subcategoryService = require('./services.subcategory');
const subcategoryController = {};

// Create a new subcategory
subcategoryController.createSubcategory = async (req, res) => {
    const { subcategoryName, categoryId } = req.body;

if (!subcategoryName || !categoryId) {
    return res.send({
        status: "Err",
        msg: "subcategoryName and categoryId are required",
        data: null
    });
}
try {
    const exists = await subcategoryService.subcategoryExists(subcategoryName);
    if (exists) {
        return res.send({
            status: false,
            msg: "Subcategory with this name already exists",
            data: null
        });
    }

    const subcategoryId = await subcategoryService.createSubcategory({ subcategoryName, categoryId });
    return res.send({
        status:true,
        msg: "Subcategory created successfully",
        data: { id: subcategoryId, subcategoryName, categoryId }
    });
} catch (error) {
    console.error('Create subcategory error:', error);
    return res.send({
        status: false,
        msg: "Error creating subcategory",
        data: null
    });
}
};

// Get all subcategories
subcategoryController.getAllSubcategories = async (req, res) => {
    try {
        const subcategories = await subcategoryService.getAllSubcategories();
        if (subcategories.length) {
            return res.send({ status:true, msg: "Subcategories retrieved successfully", data: subcategories });
        }
        return res.send({ status:true, msg: "No subcategories found", data: [] });
    } catch (error) {
        console.error('Get subcategories error:', error);
        return res.send({ status: false, msg: "Error retrieving subcategories", data: null });
    }
};

// Delete a subcategory
subcategoryController.deleteSubcategory = async (req, res) => {
    const { id } = req.params;

if (!id) {
    return res.send({
        status: false,
        msg: "Subcategory ID is required",
        data: null
    });
}

try {
    const deleted = await subcategoryService.deleteSubcategory(id);
    if (!deleted) {
        return res.send({
            status: false,
            msg: "Subcategory not found",
            data: null
        });
    }
    return res.send({
        status:true,
        msg: "Subcategory deleted successfully",
        data: null
    });
} catch (error) {
    console.error('Delete subcategory error:', error);
    return res.send({
        status: false,
        msg: "Error deleting subcategory",
        data: null
    });
}
};

// Update a subcategory
subcategoryController.updateSubcategory = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

if (!id) {
    return res.send({
        status: false,
        msg: "Subcategory ID is required",
        data: null
    });
}

try {
    const updated = await subcategoryService.updateSubcategory(id, updateData);
    if (!updated) {
        return res.send({
            status: false,
            msg: "Subcategory not found",
            data: null
        });
    }
    return res.send({
        status:true,
        msg: "Subcategory updated successfully",
        data: null
    });
} catch (error) {
    console.error('Update subcategory error:', error);
    return res.send({
        status: false,
        msg: "Error updating subcategory",
        data: null
    });
}
};

module.exports = subcategoryController;