const mongoose = require("mongoose");

const noteSchema= mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: null,
    }
});

module.exports = mongoose.model("note", noteSchema);
