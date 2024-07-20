import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FeatureBarands = () => {
  const brands = [
    {
      name: "Logitech",
      logo: "https://i.ibb.co/XYMX1TH/logi.jpg",
    },
    {
      name: "Razer",
      logo: "https://i.ibb.co/1dGxtbN/Razer-Emblem.jpg",
    },
    {
      name: "Corsair",
      logo: "https://i.ibb.co/0tC4htF/cossair.jpg",
    },
    {
      name: "SteelSeries",
      logo: "https://i.ibb.co/DrmDtdJ/Steel-Series1.jpg",
    },
    {
      name: "HyperX",
      logo: "https://i.ibb.co/zrDsYMZ/HyperX.png",
    },
    {
      name: "Ducky",
      logo: "https://i.ibb.co/FV6W3kG/duck.jpg",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="md:px-12 w-full   p-4 mt-16 rounded-md ">
      <h2 className="text-3xl mb-2 font-bold text-center">
        {" "}
        WELCOME TO FEATURED<span className="text-[#4A249D]"> BRANDS</span>
      </h2>

      <div className="flex justify-center mt-2">
        <div className="h-2 w-12  rounded-lg text-center bg-[#4A249D]"></div>
      </div>
      {/* all brands */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10">
        {brands?.map((brand, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            className="text-center"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="mx-auto rounded-lg mb-4 p-2 w-24 h-24  bg-gradient-to-r from-[#4A249D]  to-[#ECC500] md:w-36 md:h-36 "
            />
            <h3 className="text-lg font-medium">{brand.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBarands;
