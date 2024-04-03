const mongoose = require("mongoose");
const slugify = require("slugify");

const ServiceSchema = mongoose.Schema({
  UserId: {
    type: String,
    default: "admin"
  },
  UserName: {
    type: String,
    default: "admin"
  },
  ServiceTitle: {
    type: String,
    required: true,
  },
  ServiceDescription: {
    type: String,
    required: true,
  },
  ContentImageUrl: {
    type: String,
    required: true
  },
  ImageUrl: {
    type: String,
    required: true
  },
  SlugUrl: {
    type: String,
    unique: true,
  },
});


ServiceSchema.pre("save", async function (next) {
  this.SlugUrl = await this.generateSlugUrl(this.ServiceTitle);
  next();
});

ServiceSchema.methods.generateSlugUrl = async function (title) {
  const baseSlug = slugify(title, { lower: true });
  const existingServices = await this.constructor.find({ SlugUrl: { $regex: `^${baseSlug}` } });

  if (existingServices.length === 0) {
    return baseSlug;
  }
  let counter = 1;
  let newSlug = `${baseSlug}-${counter}`;
  while (existingServices.find(blog => blog.SlugUrl === newSlug)) {
    counter++;
    newSlug = `${baseSlug}-${counter}`;
  }

  return newSlug;
};


module.exports = mongoose.model("Services", ServiceSchema);
