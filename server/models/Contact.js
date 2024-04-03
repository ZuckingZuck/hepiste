const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  projectDetail: {
    type: String,
    required: true
  },
  
});

module.exports = mongoose.model("Contacts", ContactSchema);
