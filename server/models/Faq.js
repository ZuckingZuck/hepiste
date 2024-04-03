const mongoose = require("mongoose");

const FaqSchema = mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Faqs", FaqSchema);
