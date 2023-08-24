import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Othercarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const images = document.querySelectorAll("div>div>div>img");
  const length = images.length;

  const nextSlide = () => {};
  const prevSlide = () => {};
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[600px] h-[400px] overflow-hidden relative">
          <div className="images h-[100%] ">
            <img
              src="/public/image4.jpg"
              className="h-[100%] absolute"
              id="image4"
            ></img>
            <img
              src="/public/image3.jpg"
              className="h-[100%] absolute"
              id="image3"
            ></img>
            <img
              src="/public/image2.jpg"
              className="h-[100%] absolute"
              id="image2"
            ></img>
            <img
              src="/public/image1.jpg"
              className="h-[100%] absolute"
              id="image1"
            ></img>
          </div>
          <div className="absolute left-0 top-0 flex items-center justify-center h-[100%] ">
            <button onClick={prevSlide}>
              <FaArrowLeft className=" text-white w-[20px] h-[20px]  " />
            </button>
          </div>
          <div className="absolute right-0 top-0 flex items-center justify-center h-[100%]">
            <button onClick={nextSlide} id="rightbtn">
              <FaArrowRight className="text-white w-[20px] h-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Othercarousel;
