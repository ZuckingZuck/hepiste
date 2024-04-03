import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { userLogout } from "../redux/userSlice";
import { UseDispatch, useDispatch } from "react-redux";
const AdminNavbar = () => {
  const location = useLocation().pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
    window.location.reload();
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`bg-gray-800 w-[250px] h-screen overflow-hidden box-border flex flex-col`}
    >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-..."
        crossOrigin="anonymous"
      />
      <div className="mt-6 mb-6 px-3">
        <NavLink
          to="/"
          className="text-white text-3xl font-bold text-center logo ml-8"
          onClick={handleMenuToggle}
        >
          <i className="fa-solid fa-arrow-left-long"></i>HEPİSTE
        </NavLink>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <ul
            className={`flex flex-col ml-8 text-xl gap-3 lg:gap-0 ${
              menuOpen ? "menu-open" : ""
            }`}
          >
            <li className="mb-4">
              <NavLink to="/" className="text-white" onClick={handleMenuToggle}>
                <i className="fas fa-home"></i> Genel
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/users"
                className="text-white"
                onClick={handleMenuToggle}
              >
                <i className="fas fa-users"></i> Kullanıcılar
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/projects"
                className="text-white"
                onClick={handleMenuToggle}
              >
                <i className="fa-solid fa-diagram-project"></i> Projeler
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/team-applications"
                className="text-white"
                onClick={handleMenuToggle}
              >
                <i className="fa-solid fa-user-plus"></i> Ekip Başvuruları
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/posts"
                className="text-white"
                onClick={handleMenuToggle}
              >
                <i className="fa-solid fa-list"></i> Blog
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/contacts"
                className="text-white"
                onClick={handleMenuToggle}
              >
                <i className="fa-regular fa-message"></i> Mesajlar
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/services"
                className="text-white"
                onClick={handleMenuToggle}
              >
                <i className="fa-solid fa-server"></i> Çalışma Alanlarımız
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/socials"
                className="text-white"
                onClick={handleMenuToggle}
              >
                <i className="fa-solid fa-hashtag"></i> Sosyal Medya
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/faqs"
                className="text-white"
                onClick={handleMenuToggle}
              >
                <i className="fa-solid fa-question"></i> S.S.S.
              </NavLink>
            </li>
            <li className="mb-4">
              <button className="text-white" onClick={handleLogout}>
                <i className="fa-solid fa-left-long"></i> Çıkış Yap
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button className="lg:hidden menu-toggle" onClick={handleMenuToggle}>
        <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>
    </nav>
  );
};

export default AdminNavbar;
