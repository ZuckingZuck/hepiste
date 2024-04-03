const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  UserId: {
    type: String,
    required: true
  },
  UserName: {
    type: String,
    required: true,
  },
  category:{
    type: String,
    required: true
  },
  ProjectTitle: {
    type: String,
    required: true,
  },
  RedirectUrl: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  ImageUrl: {
    type: String,
    required: true,
  }
}, {timestamps: true});

module.exports = mongoose.model("Projects", ProjectSchema);