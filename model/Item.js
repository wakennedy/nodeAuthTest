const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
  },
  description: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  category: {
      type: String,
      required: true,
      max: 1024
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Item", itemSchema);
