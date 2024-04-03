import React from "react";
import { NavLink } from "react-router-dom";
import SingleProject from "./SingleProject";
import { useSelector } from "react-redux";
const Projects = (props) => {
  const service = useSelector((state) => state.service);
  return (
    <div id="projects" className="flex bg-gray-400 container mx-auto rounded-b mb-10 flex-col items-center pb-10">
      <div className="bg-[#cd2147] container mx-auto text-center text-white text-2xl py-3 px-6 w-full font-bold rounded">
        Çalışma Alanlarımız
      </div>
      <div className="comps-group items-center mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-5">
      {service?.services?.map((item) => {
          return (
            <NavLink key={item._id} to={`/s/${item.SlugUrl}`} className="banner-card">
              <img
                className="h-10 w-10"
                src={item.ImageUrl}
                alt="webcode"
              />
              <h1>{item.ServiceTitle}</h1>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
