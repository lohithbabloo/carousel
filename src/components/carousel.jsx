import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    const firstSlide = currentSlide === 0;
    setCurrentSlide(firstSlide ? slides.length - 1 : currentSlide - 1);
  };
  const nextSlide = () => {
    const lastSlide = currentSlide === slides.length - 1;
    setCurrentSlide(lastSlide ? 0 : currentSlide + 1);
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="max-w-[90%] w-[600px] h-[400px] overflow-hidden relative group ">
        <div className="w-full h-full flex">
          {slides.map((item, id) => {
            return (
              currentSlide === id && (
                <img src={item.image} key={id} className="w-full h-full" />
              )
            );
          })}
        </div>
        <FaArrowLeft
          className="absolute top-0 h-full left-2 text-white cursor-pointer group-hover:block hidden "
          size={20}
          onClick={prevSlide}
        />
        <FaArrowRight
          className="absolute top-0 h-full right-2 text-white cursor-pointer group-hover:block hidden"
          size={20}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Carousel;
