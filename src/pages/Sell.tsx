const Sell = () => {
  return (
    <div className="bg-[#dbd3eb] p-4 mt-16 rounded-md flex items-center justify-between">
      {/* content */}
      <div className="flex justify-center  md:w-1/2 p-8 w-full ">
        <div className="w-full">
          <h2 className="flex font-medium mb-2 text-[#695802] items-center gap-3">
            shop
          </h2>

          <h2 className="font-normal mb-2 text-lg">
            We also sell a wide range of Mobiles, Tablets & Tech Products
          </h2>
          {/* button */}
          <div className="flex mt-4 gap-6 items-center">
            <button className="bg-[#a58a00] text-lg shadow-xl font-medium px-3 py-2 rounded-lg">
              View Services
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2  w-full p-8  ">
        <img
          src="https://i.ibb.co/bgN9TRR/ducky.jpg"
          className="rounded-xl w-[600px] h-[400px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Sell;
