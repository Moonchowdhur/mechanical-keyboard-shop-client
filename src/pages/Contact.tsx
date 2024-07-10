import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="md:px-12 w-full p-4 mt-12  rounded-md ">
      <div className="md:flex items-start gap-8  ">
        <div className="md:w-1/2 w-full rounded-lg   p-4">
          <div className=" w-full ">
            <h2 className="text-4xl tracking-widest mb-1 font-bold w-10/12 mx-auto text-center ">
              Visit Our Office
            </h2>
            <div className="flex justify-center mb-5 mt-3">
              <div className="bg-[#957c00] text-center h-2 w-11 rounded-lg "></div>
            </div>
            <h2 className=" tracking-widest mb-7  w-8/12 mx-auto">
              2,Ananda Mohan Bose Road, Sibitra Pally, Shymbazar Road,
              Dharmatala, Kolkata-700030
            </h2>
            <img
              src="https://i.ibb.co/DrrtPmx/googl-ED.jpg"
              className="rounded-lg md:w-[700px] md:h-[500px]"
              alt=""
            />
          </div>
        </div>
        <div className="md:w-1/2  w-full rounded-lg   p-4">
          <div className=" w-full ">
            <h2 className="text-4xl tracking-widest mb-1 font-bold w-10/12 ">
              Leave Us a Message
            </h2>
            <div className="flex justify-start mb-5 mt-3">
              <div className="bg-[#957c00] text-center h-2 w-11 rounded-lg "></div>
            </div>
            <h2 className=" tracking-widest mb-7  w-8/12 ">
              We value your feedback and inquiries. If you have any questions,
              concerns, or just want to share your thoughts, please leave us a
              message. Our team will get back to you as soon as possible. Your
              input helps us improve and serve you better.
            </h2>
            <div className="mt-12">
              <h2>Name*</h2>
              <div className="flex mt-3 justify-center">
                <hr className="w-full border-t border-slate-300 mt-2" />
              </div>
            </div>
            <div className="mt-5">
              <h2>Email*</h2>
              <div className="flex mt-3 justify-center">
                <hr className="w-full border-t border-slate-300 mt-2" />
              </div>
            </div>
            <div className="mt-5">
              <h2>Phone Number*</h2>
              <div className="flex mt-3 justify-center">
                <hr className="w-full border-t border-slate-300 mt-2" />
              </div>
            </div>
            <div className="mt-8">
              <textarea
                id="message"
                name="message"
                rows={4} // Adjust the number of rows as needed
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-lg"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button className="text-white text-lg mt-6 mx-auto  px-5 py-2 rounded-lg  bg-[#736100]">
              Send{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex items-center gap-5">
        {/* cart */}
        <div className="">
          <div className="bg-violet-500 w-6 h-6 rounded-full">
            <FaMapMarkerAlt/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
