const express = require('express');
const router = express.Router();
const { GetServices, GetServiceBySlugUrl, GetBlogs, GetBlogBySlug, GetSocials, GetFaqs, PostContact, PostTeamApplication, PostTraineeApplication, GetProjects } = require('../controller/Client');

//service eylemleri

router.get('/project', GetProjects);

router.get('/service', GetServices);
router.get('/service/:slug', GetServiceBySlugUrl);

//blog eylemleri
router.get("/blog", GetBlogs);
router.get("/blog/:slug", GetBlogBySlug);

//social eylemleri
router.get("/social", GetSocials);

//faq eylemleri
router.get("/faq", GetFaqs);

//contact eylemleri
router.post('/contact', PostContact);

//application eylemleri
router.post('/team-application', PostTeamApplication);
router.post('/trainee-application', PostTraineeApplication);

module.exports = router;