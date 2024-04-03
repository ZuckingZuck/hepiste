import React, { useEffect, useState, Suspense } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Parser } from "html-to-react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useSelector } from "react-redux";
import SingleProject from "../components/Home/SingleProject";

const ServiceDetail = () => {
  const { slugUrl } = useParams();
  const [serviceDetail, setServiceDetail] = useState({});
  const service = useSelector((state) => state.service);
  const [loading, setLoading] = useState(true);
  useDocumentTitle(`IPSS - ${serviceDetail.ServiceTitle}`);
  const projects = useSelector((state) => state.project.projects);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/client/service/${slugUrl}`
        );
        if (!response.ok) {
          throw new Error("Veri alınamadı");
        }
        const json = await response.json();
        setServiceDetail(json);
      } catch (error) {
        console.error("Hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [slugUrl]);

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const filteredProjects = projects?.filter(
    (project) => project.category === serviceDetail.ServiceTitle
  );

  return (
    <div className="mt-10 mb-16 flex flex-row-reverse gap-5 justify-center xl:p-0 p-3">
      <div className="bg-[#CD2147] mb-10 hidden lg:block p-3 ring-1 ring-blue-300 ring-opacity-70 text-white rounded h-[300px]">
            <h1 className="font-bold text-center text-lg">Tüm Çalışma Alanlarımız</h1>
            <div className="flex flex-col gap-1 p-2">
              {service?.services?.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    to={`/s/${item.SlugUrl}`}
                    className={`${
                      item.ServiceTitle === serviceDetail.ServiceTitle
                        ? "text-[#DAD317]"
                        : "text-white"
                    }`}
                  >
                    {item.ServiceTitle}
                  </NavLink>
                );
              })}
            </div>
          </div>
      <div className="flex flex-col bg-opacity-100 rounded shadow-lg max-w-[1000px] ipss-font">
        <div className="container mx-auto mt-8 flex justify-evenly items-center ">
          <div className="flex flex-col items-center p-8  ">
            <h1 className="text-3xl font-bold mb-4 text-[#CD2147]">
              {serviceDetail.ServiceTitle}
            </h1>
            <Suspense fallback={<div>Yükleniyor...</div>}>
              {!loading && (
                <>
                  <div className="rounded mb-5">
                    <img
                      className="rounded h-52 w-52 object-contain"
                      src={serviceDetail.ContentImageUrl}
                      alt=""
                    />
                  </div>
                </>
              )}
            </Suspense>
          </div>
        </div>
        <div className="container mx-auto text-lg px-10 md:px-12 mb-10 lg:px-28">
          <div>{Parser().parse(serviceDetail.ServiceDescription)}</div>
          
        </div>
        {/* <div
          id="projects"
          className="flex rounded flex-col items-center pb-20"
        >
          <div className="bg-white bg-opacity-60 text-center mt-10 text-gray-800 text-2xl py-3 px-6 lg:w-full font-bold rounded">
            {serviceDetail.ServiceTitle} Kapsamında Geliştirdiğimiz Projeler
          </div>
          <div className="mt-5 grid grid-cols-1 xl:grid-cols-3 gap-5">
            {filteredProjects?.map((project) => {
              return (
                <NavLink
                  key={project._id}
                  target="_blank"
                  to={project.RedirectUrl}
                >
                  <SingleProject
                    img={project.ImageUrl}
                    title={project.ProjectTitle}
                    desc={project.description}
                  />
                </NavLink>
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ServiceDetail;
