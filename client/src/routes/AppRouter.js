import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Blog from "../components/Home/Blog";
import Home from "../pages/Home";
import Sss from "../pages/Sss";
import Contact from "../pages/Contact";
import PostDetail from "../pages/PostDetail";
import ServiceDetail from "../pages/ServiceDetail";
import ApplicationForm from "../pages/ApplicationForm";
import NotFound from "../pages/NotFound";
import Redirect from "./Redirect";
import TeamWorks from "../pages/TeamWorks";

const AppRouter = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sss" element={<Sss />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/p/:slugUrl" element={<PostDetail />} />
      <Route path="/s/:slugUrl" element={<ServiceDetail />} />
      <Route path="/team-works" element={<TeamWorks />} />
      <Route path="/team-application" element={<ApplicationForm />} />
      <Route path="/admin" element={<Redirect />} />
      <Route path="/login" element={<Redirect />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
