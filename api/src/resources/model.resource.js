const mongoose = require('mongoose');

const resourceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(https?:\/\/)?([\w\d-]+\.)+[\w\d-]+(\/[\w\d-]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[;&a-z\d%_.~+=-]*)?$/i.test(v);
      },
      message: props => `${props.value} is not a valid URL!`
    }
  },
description: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false, 
  },
   subcategoryId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Subcategory', 
    required: true 
  }
},
 {
  timestamps: true,
});

module.exports = mongoose.model('Resource', resourceSchema);
