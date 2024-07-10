import { IconType } from "react-icons";
import {
  FaRegCheckCircle,
  FaTruck,
  FaMoneyCheckAlt,
  FaShieldAlt,
  FaUndoAlt,
  FaTags,
  FaGift,
  FaLock,
} from "react-icons/fa";
import { MdOutlinePriceChange, MdOutlinePayment } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

type TAbout = {
  name: string;
  description: string;
  icon: IconType;
};

const aboutFeatures = [
  {
    name: "Qualified team",
    icon: FaRegCheckCircle,
    description: "Our team is highly skilled and certified.",
  },
  {
    name: "Affordable pricing",
    icon: MdOutlinePriceChange,
    description: "We offer competitive prices on all services and products.",
  },
  {
    name: "Quick Payment",
    icon: MdOutlinePayment,
    description: "Secure and fast payment options.",
  },
  {
    name: "Free Shipment",
    icon: FaTruck,
    description: "Free shipping on all orders above a certain amount.",
  },
  {
    name: "Cashback Offers",
    icon: FaMoneyCheckAlt,
    description: "Earn cashback on every purchase.",
  },
  {
    name: "Extended Warranty",
    icon: FaShieldAlt,
    description: "Get extended warranty on all our products.",
  },
  {
    name: "Easy Returns",
    icon: FaUndoAlt,
    description: "Hassle-free returns within a specified period.",
  },
  {
    name: "Exclusive Discounts",
    icon: FaTags,
    description: "Enjoy exclusive discounts and offers.",
  },
  {
    name: "Loyalty Rewards",
    icon: FaGift,
    description: "Earn rewards with our loyalty program.",
  },
  {
    name: "Secure Transactions",
    icon: FaLock,
    description: "Your transactions are safe with our secure payment gateway.",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="md:px-12 w-full p-4 mt-12  rounded-md ">
      <div className="md:flex items-start gap-8  ">
        <div className="md:w-1/2 w-full rounded-lg   p-4">
          <div className=" w-full ">
            <img
              src="https://i.ibb.co/wg2Mb0c/logitech1.jpg"
              className="rounded-lg bg-gradient-to-r from-[#4A249D]  to-[#ECC500] p-4 md:w-[700px] md:h-[500px]"
              alt=""
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-3  w-full">
          <h2 className="text-lg  font-bold mb-2  tracking-widest text-[#957c00] text-center ">
            ABOUT US
          </h2>
          <h2 className="text-4xl tracking-widest mb-1 font-bold w-10/12 mx-auto text-center ">
            Repairs are our Passion
          </h2>
          <div className="flex justify-center mt-3">
            <div className="bg-[#957c00] text-center h-2 w-11 rounded-lg "></div>
          </div>
          <div className="flex justify-center mt-10">
            <h2 className="tracking-widest  w-8/12  text-lg text-center   ">
              Our expertise in mechanical keyboards ensures that your
              high-performance peripherals are always in top condition. We
              understand the intricate details and precision required to
              maintain and repair these devices. Whether it's key switches, RGB
              lighting, or firmware updates, our team is equipped with the
              skills and knowledge to handle all your mechanical keyboard needs.
              Trust us to keep your typing experience smooth and responsive.
            </h2>
          </div>
        </div>
      </div>
      <div className="md:grid-cols-5 grid gap-5 grid-cols-1 mt-16">
        {/* <div className="bg-[#dbd3eb]  h-36 w-36 rounded-xl">
          <FaRegCheckCircle className=" text-center mx-14 mt-9 text-2xl" />
          <h2 className="text-lg text-[#957c00]  font-medium mb-2 mt-2 text-center ">
            Qualified team
          </h2>
        </div> */}
        {aboutFeatures?.map((service: TAbout, index: number) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            className="text-center bg-[#f8f6fc] rounded-md p-3 "
          >
            <div className="flex items-center justify-center">
              <service.icon className="mb-2 text-center text-xl" />
            </div>

            <h2 className="mb-1 text-lg ">{service?.name}</h2>
            <p className="mb-2 text-sm w-10/12 mx-auto text-gray-400">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
