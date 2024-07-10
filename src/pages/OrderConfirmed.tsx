import { FaCheck } from "react-icons/fa";

const OrderConfirmed = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div>
        <div className="flex justify-center  items-center bg-[#dbd3eb] rounded-full w-32 h-32">
          <FaCheck className="text-black  text-4xl" />
        </div>
        <h2 className="text-xl font-medium">Order confirmed</h2>
      </div>
    </div>
  );
};

export default OrderConfirmed;
