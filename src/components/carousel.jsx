import React from "react";
import "./carousel.css";
const Carousel = () => {
  return (
    <>
      <div className="container">
        <div className="image-container">
          <div className="images">
            <img src="/public/image1.jpg" className="image1" />
            <img src="/public/image2.jpg" className="image2" />
            <img src="/public/image3.jpg" className="image3" />
            <img src="/public/image4.jpg" className="image4" />
          </div>
          <div className="buttons"></div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
