const mongoose = require("mongoose") 

const subcategorySchema= mongoose.Schema({
    subcategoryName: {
        type: String,
        required: true,
    },
    categoryId: {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model("subcategory", subcategorySchema)