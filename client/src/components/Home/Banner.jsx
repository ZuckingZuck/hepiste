import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Banner = () => {
  const service = useSelector((state) => state.service);

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mx-auto text-black items-center mt-10 flex gap-10 flex-col md:flex-row md:justify-evenly">
      <div className="flex flex-col gap-5 max-w-[700px] text-center">
        <h1 className="text-2xl font-bold">HEP<span className="text-[#CD2147]">İSTE</span></h1>
        <p className="text-lg">
          "Elektrikli araç teknolojisinin öncüsü olarak, batarya, motor ve
          sürücü sistemleri üzerine odaklanan bir ekip olarak çalışıyoruz.
          Elektrikli araçlar yazılımı, mekanik aksam ve üretim süreçleri
          konusunda uzmanlaşmış bir ekip olarak, geleceğin taşımacılığını
          şekillendiriyoruz."
        </p>
      </div>
      <div>
        <div>
          <img className="hidden md:block w-96 h-96 object-contain" src="/assets/engineer.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
