import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
import useDocumentTitle from "../hooks/useDocumentTitle";

const ApplicationForm = () => {
    useDocumentTitle("HEPİSTE - Ekip Başvuru Formu")
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    eduInfo: "",
    introduce: "",
    field: "",
    competence: "",
    extra: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/client/team-application`,
        formData
      );
      message.success("Başvurunuz başarıyla alındı!");

      setFormData({
        fullName: "",
        phone: "",
        eduInfo: "",
        introduce: "",
        field: "",
        competence: "",
        extra: "",
        experience: "",
      });
    } catch (error) {
      console.error("Başvuru gönderme hatası:", error);

      alert("Başvurunuz gönderilemedi. Lütfen daha sonra tekrar deneyin.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 mb-10 p-5 md:p-0">
      <h2 className="text-2xl font-bold mb-4">HEP<span className="text-[#CD2147]">İSTE</span> - Başvuru Formu</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="fullName" className="text-sm font-semibold mb-1">
            Ad Soyad
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-semibold mb-1">
            Telefon
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="eduInfo" className="text-sm font-semibold mb-1">
            Okuduğunuz Üniversite Bölüm ve Sınıf (Örnek: İskenderun Teknik
            Üniversitesi Makine Mühendisliği 2.sınıf)
          </label>
          <input
            type="text"
            id="eduInfo"
            name="eduInfo"
            value={formData.eduInfo}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="introduce" className="text-sm font-semibold mb-1">
            Kendinizi tanıtınız (bildiğiniz mühendislik,tasarım/simülasyon
            programları, ilgi alanlarınız, hobileriniz vs.)
          </label>
          <textarea
            id="introduce"
            name="introduce"
            rows="4"
            value={formData.introduce}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="field" className="text-sm font-semibold mb-1">
            Başvurulan Alan
          </label>
          <select
            id="field"
            name="field"
            value={formData.field}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          >
            <option value="" disabled>
              Seçiniz
            </option>
            <option value="Batarya">Batarya</option>
            <option value="Motor ve Sürücü">Motor ve Sürücü</option>
            <option value="Elektrikli Araç Yazılımı">Elektrikli Araç Yazılımı</option>
            <option value="Elektronik Aksam">Elektronik Aksam</option>
            <option value="Mekanik Aksam">Mekanik Aksam</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="competence" className="text-sm font-semibold mb-1">
            Seçtiğiniz Alandaki Yetenekleriniz ve Kullandığınız Programlar
          </label>
          <textarea
            id="competence"
            name="competence"
            rows="4"
            value={formData.competence}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="extra" className="text-sm font-semibold mb-1">
            Eklemek İstedikleriniz
          </label>
          <textarea
            id="extra"
            name="extra"
            rows="4"
            value={formData.extra}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="experience" className="text-sm font-semibold mb-1">
            Daha önceden yetkin olduğunuz bir konu üzerine (örnek: mekanik aksam)
            yapmış olduğunuz çalışmayı elinizde fotoğraf halinde varsa{" "}
            <a
              className="text-[#CD2147]"
              target="_blank"
              rel="noreferrer"
              href="https://hizliresim.com"
            >
              https://hizliresim.com
            </a>{" "}
            adresine yükleyip linkini buraya gönderirseniz, bize değerlendirme
            konusunda çok yardımcı olmuş olursunuz.
          </label>
          <textarea
            id="experience"
            name="experience"
            rows="4"
            value={formData.experience}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          ></textarea>
        </div>

        <div className="flex items-center">
          <button
            type="submit"
            className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
          >
            Başvur
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
