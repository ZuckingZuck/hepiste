import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminProjects from "../pages/AdminProjects";
import Dashboard from "../pages/Dashboard";
import Services from "../pages/Services";
import AdminContacts from "../pages/AdminContacts";
import AdminTeamApplications from "../pages/AdminTeamApplications";
import AdminFaqs from "../pages/AdminFaqs";
import AdminSocials from "../pages/AdminSocials";
import AdminPosts from "../pages/AdminPosts";
import AdminUsers from "../pages/AdminUsers";
import AdminLogin from "../pages/AdminLogin";
import NotFound from "../pages/NotFound";
import AdminTeamWork from "../pages/AdminTeamWorks";

const AppRouter = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/services"
        element={user ? <Services /> : <Navigate to="/login" />}
      />
      <Route
        path="/projects"
        element={user ? <AdminProjects /> : <Navigate to="/login" />}
      />
      <Route
        path="/contacts"
        element={user ? <AdminContacts /> : <Navigate to="/login" />}
      />
      <Route
        path="/team-works"
        element={user ? <AdminTeamWork /> : <Navigate to="/login" />}
      />
      <Route
        path="/team-applications"
        element={user ? <AdminTeamApplications /> : <Navigate to="/login" />}
      />
      <Route
        path="/faqs"
        element={user ? <AdminFaqs /> : <Navigate to="/login" />}
      />
      <Route
        path="/socials"
        element={user ? <AdminSocials /> : <Navigate to="/login" />}
      />
      <Route
        path="/posts"
        element={user ? <AdminPosts /> : <Navigate to="/login" />}
      />
      <Route
        path="/users"
        element={user ? <AdminUsers /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<AdminLogin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
