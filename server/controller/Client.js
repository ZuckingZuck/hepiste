const Service = require("../models/Service");
const Blog = require("../models/Blog");
const Social = require("../models/Social");
const Faq = require("../models/Faq");
const Contact = require("../models/Contact");
const TeamApplication = require("../models/TeamApplication");
const TraineeApplication = require("../models/Trainee");
const Project = require("../models/Project");

const GetServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ _id: -1 });
    res.status(200).json(services);
  } catch (error) {
    res.status(404).json({ error });
    console.log(error);
  }
};

const GetProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ _id: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json({ error });
    console.log(error);
  }
};

const GetProjectsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const projects = await Project.find({category: category}).sort({ _id: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json({ error });
    console.log(error);
  }
};


const GetServiceBySlugUrl = async (req, res) => {
  const slug = req.params.slug;
  try {
    const service = await Service.findOne({ SlugUrl: slug });
    res.status(200).json(service);
  } catch (error) {
    res.status(404).json({ error });
    console.log(error);
  }
};

const GetBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ _id: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({ error });
    console.log(error);
  }
};

const GetBlogBySlug = async (req, res) => {
  const slug = req.params.slug;

  try {
    const blog = await Blog.findOne({ SlugUrl: slug });
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json(error);
  }
};

const GetSocials = async (req, res) => {
  try {
    const socials = await Social.find().sort({ _id: -1 });
    res.status(200).json(socials);
  } catch (error) {
    res.status(404).json({ error });
    console.log(error);
  }
};

const GetFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find().sort({ _id: -1 });
    res.status(200).json(faqs);
  } catch (error) {
    res.status(404).json({ error });
    console.log(error);
  }
};

const PostContact = async (req, res) => {
  const { name, phone, email, subject, projectDetail } = req.body;

  try {
    const newContact = await new Contact({
      name,
      phone,
      email,
      subject,
      projectDetail,
    });
    newContact.save();
    res.status(200).json({ message: "Mesajınız başarıyla gönderildi!" });
  } catch (error) {
    res.status(404).json({ error: "Mesaj gönderilirken bir hata oluştu!" });
    console.log(error);
  }
};

const PostTeamApplication = async (req, res) => {
  const {
    fullName,
    phone,
    eduInfo,
    introduce,
    field,
    competence,
    extra,
    experience,
  } = req.body;

  try {
    const newApplication = await new TeamApplication({
      fullName,
      phone,
      eduInfo,
      introduce,
      field,
      competence,
      extra,
      experience,
    });
    newApplication.save();
    res.status(200).json({ message: "Başvurunuz başarıyla alındı!" });
  } catch (error) {
    res.status(404).json({ error: "Başvuru gönderilirken bir hata oluştu!" });
    console.log(error);
  }
};

const PostTraineeApplication = async (req, res) => {
  const { fullName, phone, eduInfo, introduce, field } = req.body;

  try {
    const newApplication = await new TraineeApplication({
      fullName,
      phone,
      eduInfo,
      introduce,
      field,
    });
    newApplication.save();
   
    res.status(200).json({ message: "Başvurunuz başarıyla alındı!" });
  } catch (error) {
    res.status(404).json({ error: "Başvuru gönderilirken bir hata oluştu!" });
    console.log(error);
  }
};

module.exports = {
  GetProjects,
  GetProjectsByCategory,
  GetServices,
  GetServiceBySlugUrl,
  GetBlogs,
  GetBlogBySlug,
  GetSocials,
  GetFaqs,
  PostContact,
  PostTeamApplication,
  PostTraineeApplication,
};
