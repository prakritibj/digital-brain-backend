const mongoose = require("mongoose")
const userSchema = 
mongoose.Schema({
    name : {
        type : String,
        require : true
    },
   userName : {
        type : String,
        require : true
    },
    password: {
        type : String,
        require : true
    },
   confirmPassword : {
        type : String,
        require : true
    },
    isDeleted: {
        type: Boolean,
        default: false, // Defaults to false when a category is created
    },
})
module.exports = mongoose.model("user",userSchema)