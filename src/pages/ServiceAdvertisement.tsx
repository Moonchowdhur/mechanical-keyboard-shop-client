import { MdLocalShipping } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { GrBusinessService } from "react-icons/gr";
import { FaSquareCaretUp } from "react-icons/fa6";
import { IconType } from "react-icons";

type Tservice = {
  name: string;
  desc: string;
  icon: IconType;
};

const ServiceFeatures = [
  {
    name: "Free Shipment",
    desc: "Free shipping on orders below $500, ensuring you save on delivery costs.",
    icon: MdLocalShipping,
  },
  {
    name: "Cashback",
    desc: "Get cashback on your purchases. Save more with every order below $500.",
    icon: BsCashCoin,
  },
  {
    name: "Quick Payment",
    desc: "Fast and secure payment options for orders below $500, making your shopping experience smooth.",
    icon: MdPayments,
  },
  {
    name: "Customer Support",
    desc: "Our customer support is available 24/7 to assist you with any queries, ensuring a seamless shopping experience.",
    icon: GrBusinessService,
  },
  {
    name: "Easy Returns",
    desc: "Hassle-free returns on orders below $500. Shop with confidence knowing you can easily return your items.",
    icon: FaSquareCaretUp,
  },
];
const ServiceAdvertisement = () => {
  return (
    <div className="md:px-12 w-full   p-4 mt-16 rounded-md ">
      <h2 className="text-[#4A249D] mb-2 text-lg   font-bold text-center">
        OUR SERVICES
      </h2>
      <h2 className="text-3xl mb-2 font-bold text-center">
        Quality Service is Our{" "}
        <span className="text-[#4A249D]"> Guarantee</span>
      </h2>

      <div className="flex justify-center">
        <div className="h-2 w-12 rounded-lg text-center bg-[#4A249D]"></div>
      </div>
      {/* card */}
      <div className="md:flex mt-10 items-center gap-5">
    
        {ServiceFeatures.map((service: Tservice, index: number) => (
          <div key={index} className="text-center bg-slate-100 mt-4 md:mt-0 rounded-md p-3 ">
            <div className="flex items-center  justify-center">
              <service.icon className="mb-2 text-center text-3xl" />
            </div>

            <h2 className="mb-1 text-lg font-medium">{service.name}</h2>
            <p className="mb-2 text-sm  text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAdvertisement;
