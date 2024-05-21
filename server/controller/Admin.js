const Service = require("../models/Service");
const Blog = require("../models/Blog");
const Social = require("../models/Social");
const Faq = require("../models/Faq");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const Contact = require("../models/Contact");
const User = require("../models/User");
const TeamApplication = require("../models/TeamApplication");
const Trainee = require("../models/Trainee");
const Note = require("../models/Note");
const TeamWork = require("../models/TeamWork");
const Project = require("../models/Project");
const fs = require('fs-extra');

const GetTeamWorks = async (req, res) => {
  try {
    const teamworks = await TeamWork.find();
    res.status(200).json(teamworks);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

const PostTeamWork = async (req, res) => {
  try {
    const teamWork = req.body.addTeamWork;
    const newTeamWork = await new TeamWork(teamWork);
    await newTeamWork.save();
    res.status(200).json(newTeamWork);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

const DeleteTeamWork = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTeamWork = await TeamWork.deleteOne({ _id: id });
    if(deletedTeamWork){
      res.status(200).json({ message: "Takım çalışması görseli silindi. "});
    }else {
      res.status(404).json({ message: "Takım çalışması görseli bulunamadı. "});
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
}

const PostService = async(req, res) => {
    const { addService } = req.body;
    try {
        const newService = await new Service(addService);
        newService.save();
        res.status(200).json(newService);
    } catch (error) {
        console.log(error);
    }
}

const UpdateService = async(req, res) => {
  const id = req.params.id;
  const { updateService } = req.body;
  try {
    const updatedService = await Service.findByIdAndUpdate(id, updateService, { new: true });
    if(!updatedService){
      return res.status(404).json({ error: 'Servis bulunamadı' });
    }
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
}

const DeleteService = async(req, res) => {
  const id = req.params.id;
  try {
    await Service.findByIdAndDelete(id);
    res.status(200).json({message: "Servis başarıyla silindi!"});
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
}


//Blog işlemleri
const PostBlog = async (req, res) => {
  try {
    const UserId = req.user._id;
    const UserName = req.user.username;
    const { addBlog } = req.body;
    const newBlog = await new Blog({...addBlog, UserId, UserName});
    newBlog.save();
    res.status(200).json(newBlog);
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
}

const PostProject = async (req, res) => {
  try {
    const UserId = req.user._id;
    const UserName = req.user.username;
    const { addProject } = req.body;
    const newProject = await new Project({...addProject, UserId, UserName});
    newProject.save();
    res.status(200).json(newProject);
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
}

const DeleteProject = async(req, res) => {
  const id = req.params.id;
  try {
    await Project.findByIdAndDelete(id);
    res.status(200).json({message: "Servis başarıyla silindi!"});
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
}

const UpdateBlog = async(req, res) => {
  const id = req.params.id;
  const { updateBlog } = req.body;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, updateBlog, { new: true });
    if(!updatedBlog){
      return res.status(404).json({ error: 'Blog bulunamadı' });
    }
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
}

const DeleteBlog = async(req, res) => {
  const id = req.params.id;
  try {
    await Blog.findByIdAndDelete(id);
    res.status(200).json({message: "Servis başarıyla silindi!"});
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
}

//Social işlemleri

const PostSocial = async(req, res) => {
  const { addSocial } = req.body;
  try {
      const newSocial = await new Social(addSocial);
      newSocial.save();
      res.status(200).json(newSocial);
  } catch (error) {
      console.log(error);
  }
}

const UpdateSocial = async(req, res) => {
  const id = req.params.id;
  const { updateSocial } = req.body;
  try {
    const updatedSocial = await Social.findByIdAndUpdate(id, updateSocial, { new: true });
    if(!updatedSocial){
      return res.status(404).json({ error: 'Blog bulunamadı' });
    }
    res.status(200).json(updatedSocial);
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
}

const DeleteSocial = async(req, res) => {
  const id = req.params.id;
  try {
    await Social.findByIdAndDelete(id);
    res.status(200).json({message: "Sosyal medya hesabı başarıyla silindi!"});
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
}


//Faq işlemleri
const PostFaq = async(req, res) => {
  const { addFaq } = req.body;
  try {
      const newFaq = await new Faq(addFaq);
      newFaq.save();
      res.status(200).json(newFaq);
  } catch (error) {
      console.log(error);
  }
}

const UpdateFaq = async(req, res) => {
  const id = req.params.id;
  const { updateFaq } = req.body;
  try {
    const updatedFaq = await Faq.findByIdAndUpdate(id, updateFaq, { new: true });
    if(!updatedFaq){
      return res.status(404).json({ error: 'Blog bulunamadı' });
    }
    res.status(200).json(updatedFaq);
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
}

const DeleteFaq = async(req, res) => {
  const id = req.params.id;
  try {
    await Faq.findByIdAndDelete(id);
    res.status(200).json({message: "Sosyal medya hesabı başarıyla silindi!"});
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
}

//contact işlemleri
const GetContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({_id: -1});
    res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
    res.status(404).json({error: "Mesajlar getirilirken hata oluştu!"});
  }
}

//user işlemleri

const GetUsers = async(req, res) => {
  try {
    const users = await User.find().select('username email role').sort({_id: -1});
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(404).json({error: "Kullanıcılar alınırken bir hata oluştu!"});
  }
}

const DeleteUser = async(req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({message: "Kullanıcı hesabı başarıyla silindi!"});
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
}

const RoleBlogger = async(req, res) => {
  const id = req.params.id;
  const SuperAdmin = req.user;
  try {
    const user = await User.findById(id);
    if(SuperAdmin.role === "SuperAdmin" || user.role === "user"){
      user.role = "Blogger";
      user.save();
      res.status(200).json({message:"Rol başarıyla verildi!"});
    }else{
      res.status(404).json({error: "Bu kullanıcıya bu rol verilemez!"});
    }
  } catch (error) {
    console.log(error);
  }
}

const RoleAdmin = async(req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if(user.role === "user" || user.role === "Blogger"){
      user.role = "Admin";
      user.save();
      res.status(200).json({message:"Rol başarıyla verildi!"});
    }else{
      res.status(404).json({error: "Bu kullanıcıya bu rol verilemez!"});
    }
  } catch (error) {
    console.log(error);
  }
}

//team-applications
const GetTeamApplications = async (req, res) => {
  try {
    const applications = await TeamApplication.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(404).json({error: "Başvurular alınırken bir hata oluştu!"});
  }
}

const GetTraineeApplications = async (req, res) => {
  try {
    const applications = await Trainee.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(404).json({error: "Başvurular alınırken bir hata oluştu!"});
  }
}

//count eylemleri
const GetCounts = async (req, res) => {
  try {
    const projectCount = await Project.countDocuments({});
    const teamAppCount = await TeamApplication.countDocuments({});
    const infos = { projectCount, teamAppCount};
    res.status(200).json(infos)
  } catch (error) {
    
  }
}

const SendNote = async(req, res) => {
  const { receiver, message } = req.body;
  const username = req.user.username;
  try {
    const newNote = await new Note({sender: username, receiver, message});
    newNote.save();
    res.status(200).json({message: "Mesajınız iletildi!"});
  } catch (error) {
    res.status(404).json({error: "Bir hata oluştu!"});
    console.log(error);
  }
}

const GetNotes = async(req, res) => {
  const username = req.user.username;

  try {
    const notes = await Note.find({receiver: username});
    res.status(200).json(notes);
  } catch (error) {
    res.status(404).json({error: "Notlar alınırken hata oluştu!"});
    console.log(error);
  }
}







//Image Upload işlemi
const UploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Dosya sağlanmadı" });
    }

    const file = req.file;
    const uniqueSuffix = uuidv4();
    const originalname = file.originalname;
    const fileName =
      path.parse(originalname).name +
      "-" +
      uniqueSuffix +
      path.extname(originalname);

    // Görseli Imgur'a yükleme
    const clientId = "d86d2e1daa51251"; // Imgur API Anahtarınız
    const apiUrl = "https://api.imgur.com/3/";

    const imageBuffer = file.buffer; // req.file.buffer içinde resim verisi bulunmalı
    const imageBase64 = imageBuffer.toString("base64");

    const response = await axios.post(
      `${apiUrl}image`,
      {
        image: imageBase64,
      },
      {
        headers: {
          Authorization: `Client-ID ${clientId}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.success) {
      console.log("Görsel yüklendi. URL:", response.data.data.link);
      res.status(200).json({
        message: "Görsel başarıyla yüklendi",
        imgUrl: response.data.data.link,
      });
    } else {
      console.error("Imgur API hatası:", response.data.data.error);
      res
        .status(500)
        .json({ message: "Imgur API hatası", error: response.data.data.error });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Görsel yüklenirken hata oluştu",
      error: error.message,
    });
  }

};


const uploadImageLocal = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Dosya sağlanmadı" });
    }

    const file = req.file;
    const originalname = file.originalname;
    const uniqueSuffix = uuidv4();
    const fileName = `${path.parse(originalname).name}-${uniqueSuffix}${path.extname(originalname)}`;

    // Resmi belirli bir klasöre kaydet (örneğin, sunucunun kök dizinindeki "img" klasörüne)
    const uploadPath = path.join(__dirname, '..', 'img', fileName);
    fs.writeFileSync(uploadPath, file.buffer);

    const publicUrl = `https://apiiste.mithatsarsu.com/img/${fileName}`; // Resmin erişim URL'si
    res.status(200).json({ imgUrl: publicUrl });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "İç Sunucu Hatası" });
  }
};



module.exports = {
  GetTeamWorks,
  PostTeamWork,
  DeleteTeamWork,
  PostProject,
  DeleteProject,
  UploadImage,
  PostService,
  UpdateService,
  DeleteService,
  PostBlog,
  UpdateBlog,
  DeleteBlog,
  PostSocial,
  UpdateSocial,
  DeleteSocial,
  PostFaq,
  UpdateFaq,
  DeleteFaq,
  GetContacts,
  GetUsers,
  DeleteUser,
  RoleBlogger,
  RoleAdmin,
  GetTeamApplications,
  GetTraineeApplications,
  GetCounts,
  SendNote,
  GetNotes,
  uploadImageLocal
};