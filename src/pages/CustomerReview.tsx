import { useState } from "react";

const testimonials = [
  {
    image: "https://i.ibb.co/KjDVMKQ/glorious.jpg",
    name: "John Doe",
    review:
      "Keyboard Repair Service provided excellent service! My keyboard is working perfectly now.",
  },
  {
    image: "https://i.ibb.co/KjDVMKQ/glorious.jpg",
    name: "Jane Smith",
    review: "Fast and reliable service. Highly recommend for repairs!",
  },
  {
    image: "https://i.ibb.co/KjDVMKQ/glorious.jpg",
    name: "Alice Johnson",
    review:
      "Affordable pricing and great customer support. Will definitely use their service again.",
  },
  {
    image: "https://i.ibb.co/KjDVMKQ/glorious.jpg",
    name: "Robert Brown",
    review: "Quick turnaround time and very professional. Highly satisfied!",
  },
  {
    image: "https://i.ibb.co/KjDVMKQ/glorious.jpg",
    name: "Emily White",
    review:
      "Exceptional service and knowledgeable staff. My keyboard is as good as new!",
  },
  {
    image: "https://i.ibb.co/KjDVMKQ/glorious.jpg",
    name: "Michael Green",
    review:
      "They fixed my keyboard in no time. Great job and reasonable prices!",
  },
  {
    image: "https://i.ibb.co/KjDVMKQ/glorious.jpg",
    name: "Sarah Wilson",
    review:
      "Very friendly service and excellent repair quality. Will come back for sure.",
  },
  {
    image: "https://i.ibb.co/KjDVMKQ/glorious.jpg",
    name: "David Johnson",
    review:
      "Highly recommend for any keyboard issues. They know what they're doing!",
  },
];

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="md:px-12 w-full   p-4 mt-16 rounded-md ">
      <div className="container mx-auto">
        <h2 className="text-3xl mb-2 font-bold text-center">
          {" "}
          CUSTOMER <span className="text-[#4A249D]"> REVIEWS</span>
        </h2>

        <div className="flex justify-center mt-2 ">
          <div className="h-2 w-12  rounded-lg text-center bg-[#4A249D]"></div>
        </div>
        <div className="relative mt-10">
          <div className="overflow-hidden">
            <div
              className="flex  transition-transform ease-out duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full  flex justify-center p-4"
                >
                  <div className="bg-[#dbd3eb]  rounded-lg shadow-lg p-6 flex flex-col items-center">
                    <div className="flex w-full justify-start mb-5 ">
                      <img src="https://i.ibb.co/4K88pCD/quotes.png" className="w-7 h-7" alt="" />
                    </div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <p className="text-xl font-semibold mb-2">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-center">
                      {testimonial.review}
                    </p>
                    <div className="flex w-full justify-end mt-5 ">
                      <img src="https://i.ibb.co/pRQRCWf/quote.png" className="w-9 h-9" alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2  left-0 transform -translate-y-1/2 bg-[#957c00] text-white rounded-full px-5 p-4"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#957c00] text-white rounded-full px-5 p-4"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
