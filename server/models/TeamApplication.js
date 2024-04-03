const mongoose = require("mongoose");

const TeamApplicationSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  eduInfo: {
    type: String,
    required: true
  },
  introduce: {
    type: String,
    required: true
  },
  field: {
    type: String,
    required: true
  },
  competence: {
    type: String,
    required: true
  },
  extra: {
    type: String,
  },
  experience: {
    type: String
  }
});

module.exports = mongoose.model("TeamApplications", TeamApplicationSchema);
