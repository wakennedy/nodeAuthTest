const mongoose = require("mongoose");
const itemSchema = require("model/Item.js")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  books: [ itemSchema ],
  date: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("User", userSchema);
