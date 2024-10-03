const mongoose = require("mongoose") 

const noteSchema= mongoose.Schema({
   
    tittle: {
        type: String,
        required: true,
    },
    writeNote: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false, // Defaults to false when a category is created
    },
});

module.exports = mongoose.model("note", noteSchema);
