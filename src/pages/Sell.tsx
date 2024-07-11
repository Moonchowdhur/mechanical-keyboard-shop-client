const Sell = () => {
  return (
    <div className=" md:mx-12  p-4 mt-16  ">
      <h2 className="text-3xl mb-2 font-bold text-center">
        {" "}
        SHOPPING KEYBOARD<span className="text-[#4A249D]"> DESTINATION</span>
      </h2>
      <div className="flex justify-center mt-2">
        <div className="h-2 w-12  rounded-lg text-center bg-[#4A249D]"></div>
      </div>
      <div className="bg-[#dbd3eb] md:flex items-center rounded-md  justify-between mt-10">
        {/* content */}
        <div className="md:flex justify-center  md:w-1/2 p-8 w-full ">
          <div className="w-full">
            <h2 className="flex text-xl font-medium mb-2 text-[#695802] items-center gap-3">
              shop
            </h2>
            <h2 className="tracking-widest mb-2 leading-snug text-3xl font-bold  w-full">
              {" "}
              Shopping in <br />{" "}
              <span className="text-[#a58a00]">Mechanical Keyboard</span> Shop
            </h2>
            <h2 className="font-normal tracking-wide mb-2 text-lg">
              We sell a wide range of Keyboard, Tech Products At mechanical
              keyboard shop , we pride ourselves on offering a diverse selection
              of the latest and greatest in Keyboard devices, and cutting-edge
              tech products. Whether you're looking for the newest smartphone, a
              powerful tablet, or essential accessories to enhance your tech
              experience, we've got you covered.
            </h2>
            {/* button */}
            <div className="flex mt-4 gap-6 items-center">
              <button className="bg-[#a58a00] text-lg shadow-xl font-medium px-3 py-2 rounded-lg">
                View Shop
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
    </div>
  );
};

export default Sell;
