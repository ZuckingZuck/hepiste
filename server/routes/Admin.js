const express = require('express');
const router = express.Router();
const multer = require("multer")
const { UploadImage, PostService, UpdateService, DeleteService, PostBlog, UpdateBlog, DeleteBlog, PostSocial, UpdateSocial, DeleteSocial, PostFaq, UpdateFaq, DeleteFaq, GetContacts, GetUsers, DeleteUser, RoleBlogger, RoleAdmin, GetTeamApplications, GetTraineeApplications, GetCounts, SendNote, GetNotes, UploadImageGoogle, PostProject, DeleteProject, uploadImageLocal, PostTeamWork, DeleteTeamWork, GetTeamWorks } = require('../controller/Admin');
const { createUser } = require('../controller/Auth');
const requireAuth = require('../middleware/requireAuth');
const isSuperAdmin = require('../middleware/isSuperAdmin');
const isAdmin = require("../middleware/isAdmin");
const isBlogger = require("../middleware/isBlogger");

const multerMiddleware = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 15 * 1024 * 1024, // 5MB limit
  },
});

router.use(requireAuth);


//blogger yetkileri
router.use(isBlogger);
router.get("/teamwork", GetTeamWorks);
router.post("/upload", multerMiddleware.single("name"), uploadImageLocal);
router.post('/blog', PostBlog);
router.get('/counts', GetCounts);
router.post('/sendnote', SendNote);
router.get('/getnotes', GetNotes);



//AdminYetkileri
router.use(isAdmin)
router.post("/teamwork", PostTeamWork);
router.delete("/teamwork/:id", DeleteTeamWork);
router.post('/project', PostProject);
router.delete('/project/:id', DeleteProject);

router.post('/service', PostService);
router.put('/service/:id', UpdateService);
router.delete('/service/:id', DeleteService);


router.put('/blog/:id', UpdateBlog);
router.delete('/blog/:id', DeleteBlog);

router.post('/social', PostSocial);
router.put('/social/:id', UpdateSocial);
router.delete('/social/:id', DeleteSocial);

router.post('/faq', PostFaq);
router.put('/faq/:id', UpdateFaq);
router.delete('/faq/:id', DeleteFaq);

router.get('/contact', GetContacts);

router.get('/user', GetUsers);

router.post('/user/blogger/:id', RoleBlogger);

router.get('/team/applications', GetTeamApplications);
router.get('/trainee/applications', GetTraineeApplications);

//SuperAdminYetkileri

router.use(isSuperAdmin);

router.post('/user/admin/:id', RoleAdmin);
router.delete('/user/:id', DeleteUser);
router.post('/createuser', createUser);














//user eylemleri


module.exports = router;