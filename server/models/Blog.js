const mongoose = require("mongoose");
const slugify = require("slugify");

const BlogSchema = mongoose.Schema({
  UserId: {
    type: String,
    required: true
  },
  UserName: {
    type: String,
    required: true,
  },
  BlogTitle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  ImageUrl: {
    type: String,
    required: true,
  },
  SlugUrl: {
    type: String,
    unique: true,
  },
}, {timestamps: true});

BlogSchema.pre("save", async function (next) {
  this.SlugUrl = await this.generateSlugUrl(this.BlogTitle);
  next();
});

BlogSchema.methods.generateSlugUrl = async function (title) {
  const baseSlug = slugify(title, { lower: true });
  const existingBlogs = await this.constructor.find({ SlugUrl: { $regex: `^${baseSlug}` } });

  if (existingBlogs.length === 0) {
    return baseSlug;
  }
  let counter = 1;
  let newSlug = `${baseSlug}-${counter}`;
  while (existingBlogs.find(blog => blog.SlugUrl === newSlug)) {
    counter++;
    newSlug = `${baseSlug}-${counter}`;
  }

  return newSlug;
};

module.exports = mongoose.model("Blogs", BlogSchema);
