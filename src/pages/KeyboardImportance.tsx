import { FaCheckCircle, FaKeyboard, FaClock, FaCogs } from "react-icons/fa";

const features = [
  {
    icon: FaCheckCircle,
    title: "Durability & Longevity",
    description:
      "Mechanical keyboards are built to last, with individual mechanical switches rated for tens of millions of keystrokes.",
  },

  {
    icon: FaClock,
    title: "Faster Accurate Typing",
    description:
      "Mechanical keyboards can help improve typing speed and accuracy due to the precise actuation of each key.",
  },
  {
    icon: FaCogs,
    title: "Customization Options",
    description:
      "Mechanical keyboards offer a wide range of customization options, including key switch types, keycap designs, and programmable keys.",
  },
  {
    icon: FaKeyboard,
    title: "Better for Gaming",
    description:
      "Many gamers prefer mechanical keyboards due to their fast response times and durability under heavy use.",
  },
];

const KeyboardImportance = () => {
  return (
    <div className="md:px-12 w-full p-4 mt-16 rounded-md ">
      <h2 className="text-3xl mb-2 font-bold text-center">
        {" "}
        IMPORTANCE OF MECHANCAL<span className="text-[#4A249D]"> KEYBOARD</span>
      </h2>

      <div className="flex justify-center mt-2">
        <div className="h-2 w-12  rounded-lg text-center bg-[#4A249D]"></div>
      </div>

      <div className="md:flex gap-5 mt-10">
        {features?.map((feature, index) => (
          <div key={index} className="text-center bg-slate-100 rounded-md p-3 ">
            <div className="flex items-center justify-center">
              <feature.icon className="mb-2 text-center text-3xl" />
            </div>

            <h2 className="mb-1 text-lg font-medium">{feature?.title}</h2>
            <p className="mb-2 text-sm  text-gray-400">
              {feature?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyboardImportance;
