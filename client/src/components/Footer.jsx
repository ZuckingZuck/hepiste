import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const social = useSelector((state) => state.social);
  const services = useSelector((state) => state.service.services);
  const location = useLocation().pathname;

  const handleNavLinkClick = () => {
    // Sayfa geçişini gerçekleştirirken scroll pozisyonunu sıfırla
    window.scrollTo(0, 0);
  };

  if (
    location === "/login" ||
    location === "/register" ||
    location.startsWith("/admin")
  )
    return null;
  return (
    <div className="py-16 border-t border-[#CD2147]">
      <div className="container mx-auto px-32 flex flex-col md:flex-row items-center text-center max-2xl:px-10 md:items-start gap-5 md:gap-0 justify-between">
        <div className="footer-column">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide mb-4">
            Sosyal Medya
          </h4>
          <div className="footer-icons flex gap-3 items-center justify-center">
            {social?.socials?.map((item) => {
              return (
                <a
                  className="bg-[#CD2147] rounded-full"
                  key={item._id}
                  href={item?.accountUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    height={56}
                    width={56}
                    className="p-3 hover:scale-110 transition"
                    src={item.iconUrl}
                    alt={item.name}
                    loading="lazy"
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer-column">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide mb-4">
            Hepiste
          </h4>
          <ul>
            <li className="footer-hover text-xl mb-3">
              <NavLink
                to="/sss"
                className="text-gray-400 hover:text-[#CD2147]"
                onClick={handleNavLinkClick}
              >
                Hedeflerimiz
              </NavLink>
            </li>
            <li className="footer-hover text-xl mb-3">
              <NavLink to="/sss" className="text-gray-400 hover:text-[#CD2147]" onClick={handleNavLinkClick}>
                SSS
              </NavLink>
            </li>
            <li className="footer-hover text-xl mb-3">
              <NavLink to="/" className="text-gray-400 hover:text-[#CD2147]" onClick={handleNavLinkClick}>
                Blog Yazıları
              </NavLink>
            </li>
            <li className="footer-hover text-xl mb-3">
              <NavLink to="/contact" className="text-gray-400 hover:text-[#CD2147]" onClick={handleNavLinkClick}>
                İletişim
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide mb-4">
            Çalışma Alanlarımız
          </h4>
          <ul>
            {services?.map((item) => {
              return (
                <li key={item._id} className="footer-hover mb-3 text-xl">
                  <NavLink
                    to={`/s/${item.SlugUrl}`}
                    className="text-gray-400 hover:text-[#CD2147]"
                    onClick={handleNavLinkClick}
                  >
                    {item.ServiceTitle}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
