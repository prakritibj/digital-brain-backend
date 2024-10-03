const mongoose = require("mongoose") 

const categorySchema= mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false, // Defaults to false when a category is created
    },
});
module.exports = mongoose.model("category", categorySchema)
