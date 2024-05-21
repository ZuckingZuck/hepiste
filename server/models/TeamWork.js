const mongoose = require("mongoose");

const TeamWorkSchema = mongoose.Schema({
  title: {
    type: String,
    default: Date.now()
  },
  imgUrl: {
    type: String,
    required: true
  }
}, {timestamps: true});

module.exports = mongoose.model("teamworks", TeamWorkSchema);
