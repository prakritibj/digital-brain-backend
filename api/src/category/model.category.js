const mongoose = require("mongoose") 

const categorySchema= mongoose.Schema({
    heading: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("category", categorySchema);
