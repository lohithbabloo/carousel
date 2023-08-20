import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center ">
        <div className="w-[600px] relative h-[400px]">
          <div className="w-full ">
            {slides.map((item, id) => {
              return (
                <div>
                  {currentSlide === id && (
                    <img
                      src={`${item.image}`}
                      key={id}
                      className="w-full absolute h-[100%]"
                    ></img>
                  )}
                </div>
              );
            })}
          </div>
          <div className=" absolute left-1 top-[50%]">
            <button onClick={prevSlide}>
              <FaArrowLeft className="text-white" />
            </button>
          </div>
          <div className=" absolute right-1 top-[50%]">
            <button className="" onClick={nextSlide}>
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
