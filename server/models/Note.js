const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  sender: {
    type: String,
    required: true
  },
  receiver: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Notes", NoteSchema);
