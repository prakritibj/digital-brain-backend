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
    }
},{timestamps : true})
module.exports = mongoose.model("subcategory", subcategorySchema)