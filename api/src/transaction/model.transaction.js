const mongoose = require("mongoose");

const transactionSchema= mongoose.Schema({
    heading:{
        type: String,
        required: true, 
    },
    name:{
        type: String,
        required: true,        
    },
    category: {
        type: String,
        required: true,       
    },
    link: {
        type: String,
        required: true,  
        validate: {
            validator: function(v) {
                return /^https?:\/\/.+\..+/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    }
},{
    timestamps: true 
});

module.exports = mongoose.model("trasaction", transactionSchema);
