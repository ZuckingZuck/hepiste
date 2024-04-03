import React from "react";
import IntroductionCarousel from "./IntCarousel";
import CarouselTwo from "./CarouselTwo";

const Introduction = () => {
  return (
    <div className="bg-gradient">
      <div className="bg-gray-800 bg-opacity-45 text-center text-white text-2xl py-3 px-6 lg:w-full font-bold rounded">
        Biz Kimiz?
      </div>
      <div className="container text-white mx-auto lg:px-32 pb-20">
        <div className="p-3 text-xl rounded">
          <p className="bg-teal-800 bg-opacity-65 p-1 rounded text-center">
            <span className="font-bold">
              "Dijital Dünyanın Ustalarıyla Tanışın!"
            </span>{" "}
            <span className="font-bold">
              Siz hayalinizi kurun, biz gerçeğe dönüştürelim!
            </span>{" "}
            Müşteri memnuniyetini ilke edinmiş ekibimizle, projelerinizi en
            yüksek standartlarda hayata geçiriyoruz.
          </p>
          <IntroductionCarousel />
          <div className="mt-10">
            <div>
              <p className="bg-teal-800 bg-opacity-65 p-1 rounded text-center">
                <span className="font-bold">Dijital Çağın Mimarlarıyız!</span>{" "}
                Her bir üyemiz, yaratıcılık ve inovasyonun sınırlarını
                zorlayarak, dijital dünyada benzersiz çözümler sunma misyonunu
                taşımaktadır.
              </p>
              {/* <p className="mt-3 font-bold">Neden Biz?</p> */}
            </div>
            <CarouselTwo />
            <div className="grid mt-10 grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="bg-gray-700 bg-opacity-70 border border-gray-400 shadow-xl py-3 p-2 rounded">
                <h1 className="font-bold text-center">Vizyonumuz</h1>
                <p>
                  Enstitümüz, teknoloji dünyasında iz bırakacak, yola çıktığımız
                  genç ve dinç beyinleri küresel düzeyde rekabet avantajına
                  sahip kılacak, topluluğumuza değer katacak projelerin ve
                  liderlerin yetiştiği bir merkez olmayı hedeflemektedir.
                </p>
              </div>
              <div className="bg-gray-700 bg-opacity-70 border border-gray-400 shadow-xl py-3 p-2 rounded">
                <h1 className="font-bold text-center">Misyonumuz</h1>
                <p>
                  Düzenli olarak konferanslar, seminerler, atölyeler ve
                  workshoplar düzenleyerek öğrencilere güncel teknolojiler
                  hakkında bilgi vermek. IEEE üyeliği ve IEEE projelerine
                  katılım konusunda öğrencileri teşvik etmek. Teknoloji ve IEEE
                  alanlarında araştırma ve geliştirme
                  faaliyetlerini desteklemek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
