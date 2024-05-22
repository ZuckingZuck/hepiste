import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/userSlice";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation().pathname;
  const [scrolled, setScrolled] = useState(false); // Scrolled durumunu tutmak için state ekleyin
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToProjects = () => {
    const projectsDiv = document.getElementById("projects");
    if (projectsDiv) {
      projectsDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBlog = () => {
    const blogDiv = document.getElementById("blog");
    if (blogDiv) {
      blogDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    dispatch(userLogout());
    navigate("/");
  };

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (isOpen) {
          toggleMenu();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Scrollun ne kadar kaydırıldığını kontrol etmek için bir eşik değeri belirleyebilirsiniz
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (
    location === "/login" ||
    location === "/register" ||
    location.startsWith("/admin")
  )
    return null;

  return (
    <header
      className={`top-0 w-full py-3 border-b text-black`}
    >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div>
        <div
          ref={wrapperRef}
          className="container mx-auto flex flex-wrap p-3 md:p-0 items-center justify-between"
        >
          <h1 className="md:mb-0">
            <NavLink
              className="flex items-center justify-center gap-2 text-xl"
              to="/"
            >
              <img
                className="h-14 w-14 object-contain"
                src="/assets/iste.jpeg"
                alt="logo"
              />
              <span className="font-bold">HEP<span className="text-[#CD2147]">İSTE</span></span>
            </NavLink>
          </h1>

          <div className="inline-block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex transition md:items-center max-md:mt-3 w-full max-md:text-white md:w-auto md:flex-row flex flex-col items-center`}
          >
            <NavLink
              to="/"
              className="transition max-md:bg-[#CD2147] py-3 max-md:w-full max-md:text-center underline-animation mr-4 md:mr-8 mb-2 md:mb-0"
            >
              Ana Sayfa
            </NavLink>
            <NavLink
              to={"/"}
              onClick={scrollToProjects}
              className="transition max-md:bg-[#CD2147] py-3 underline-animation max-md:border-b max-md:w-full max-md:text-center mr-4 md:mr-8 mb-2 md:mb-0"
            >
              Çalışma Alanlarımız
            </NavLink>
            <NavLink
              to={"/team"}
              onClick={scrollToProjects}
              className="transition max-md:bg-[#CD2147] py-3 underline-animation max-md:border-b max-md:w-full max-md:text-center mr-4 md:mr-8 mb-2 md:mb-0"
            >
              Yönetim ve Organizasyon
            </NavLink>
            <NavLink
              to={"/team-works"}
              onClick={scrollToProjects}
              className="transition max-md:bg-[#CD2147] py-3 underline-animation max-md:border-b max-md:w-full max-md:text-center mr-4 md:mr-8 mb-2 md:mb-0"
            >
              Takım Çalışmalarımız
            </NavLink>
            <NavLink
              to={"/team-application"}
              onClick={scrollToProjects}
              className="transition max-md:bg-[#CD2147] py-3 underline-animation max-md:border-b max-md:w-full max-md:text-center mr-4 md:mr-8 mb-2 md:mb-0"
            >
              Ekip Başvurusu
            </NavLink>
            <NavLink
              to="/"
              onClick={scrollToBlog}
              className="transition max-md:bg-[#CD2147] py-3 underline-animation max-md:border-b max-md:w-full max-md:text-center mr-4 md:mr-8 mb-2 md:mb-0"
            >
              Blog Yazıları
            </NavLink>
            <NavLink
              to="/contact"
              className="transition max-md:bg-[#CD2147] py-3 underline-animation max-md:border-b max-md:w-full max-md:text-center mr-4 md:mr-8 mb-2 md:mb-0"
            >
              İletişim
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
