const mongoose = require("mongoose");

const SocialSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  accountUrl: {
    type: String,
    required: true
  },
  iconUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Socials", SocialSchema);
