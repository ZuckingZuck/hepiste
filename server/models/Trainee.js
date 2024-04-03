const mongoose = require("mongoose");

const TraineeApplicationSchema = mongoose.Schema({
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
  }
});

module.exports = mongoose.model("TraineeApplications", TraineeApplicationSchema);
