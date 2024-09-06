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
});

module.exports = mongoose.model("note", noteSchema);
