const mongoose = require("mongoose") 

const subcategorySchema= mongoose.Schema({
    subcategoryName: {
        type: String,
        required: true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false, 
    },
},{timestamps : true})
module.exports = mongoose.model("subcategory", subcategorySchema)