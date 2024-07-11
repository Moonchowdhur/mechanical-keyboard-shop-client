import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { FaArrowRight } from "react-icons/fa";

import { GoDotFill } from "react-icons/go";

const keyboardBrands = [
  {
    name: "Logitech",
    image:
      "https://i.ibb.co/7Y3rTBz/yaroslav-kolodiy-6qx-THv-BUq-Eg-unsplash.jpg",
  },
  {
    name: "Corsair",
    image:
      "https://i.ibb.co/dcVcXLr/premium-photo-1664194583917-b0ba07c4ce2a.jpg",
  },
  {
    name: "Razer",
    image:
      "https://i.ibb.co/jw7SVSw/How-to-Clean-a-Computer-Keyboard1646149371308147.jpg",
  },
  //   {
  //     name: "SteelSeries",
  //     image: "https://i.ibb.co/hYzct7C/steel-Series.png",
  //   },
];

const CarouselImage = () => {
  return (
    <div className="md:px-12 w-full ">
      <Carousel>
        <CarouselContent>
          {keyboardBrands.map((brand) => (
            <CarouselItem key={brand.name}>
              <div className="bg-[#dbd3eb] p-4 mt-16 rounded-md md:flex items-center justify-between">
                {/* content */}
                <div className="md:flex justify-center  md:w-1/2 p-8 w-full ">
                  <div className="w-full">
                    <ul className="flex font-medium mb-2 text-[#695802] items-center gap-3">
                      <li className="text-lg">Simple </li>
                      <GoDotFill className="text-2xl" />
                      <li className="text-lg">Fast </li>
                      <GoDotFill className="text-2xl" />
                      <li className="text-lg">Affordable </li>
                    </ul>
                    <h2 className="tracking-widest mb-2 leading-snug text-3xl font-bold  w-full">
                      {" "}
                      The Best Choice For <br />{" "}
                      <span className="text-[#a58a00]">Keyboard</span> Repair
                    </h2>
                    <h2 className="font-normal mb-2 text-lg">
                      Explore <span>{brand.name}</span> wide range of keyboards.
                      Whether you are a gamer, content creator, or professional,
                      Logitech offers cutting-edge technology to enhance your
                      computing experience.
                    </h2>
                    {/* button */}
                    <div className="flex mt-4 gap-6 items-center">
                      <button className="bg-[#a58a00] text-lg shadow-xl font-medium px-3 py-2 rounded-lg">
                        View Services
                      </button>
                      <button className="text-lg shadow-md flex items-center gap-2 font-medium px-3 py-2 rounded-lg border-2 border-[#a58a00]">
                        Pricing Plans{" "}
                        <FaArrowRight className="text-[#a58a00] mt-1" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2  w-full md:p-8  ">
                  <img
                    src={brand?.image}
                    className="rounded-xl mx-auto w-[300px] h-[300px] md:w-[600px] md:h-[400px]"
                    alt=""
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#4A249D] text-white  md:mx-12" />
        <CarouselNext className="bg-[#4A249D] text-white  md:mx-12" />
      </Carousel>
    </div>
  );
};

export default CarouselImage;
