import React, { useEffect, useState } from "react";
import "./carousel.css";
const Carousel = () => {
  const [count, setCount] = useState(0);
  const imageArr = document.querySelectorAll(".images > img");
  useEffect(() => {
    const images = document.querySelectorAll(".images > img");
    const leftbtn = document.getElementById("leftbtn");
    images.forEach((item, id) => {
      item.style.left = id * 600 + "px";
    });
    // if (count === 0) {
    //   leftbtn.style.visibility = "hidden";
    // } else {
    //   leftbtn.style.visibility = "visible";
    // }
  }, []);
  const moveleft = () => {};
  const moveRight = () => {
    if (count <= imageArr.length - 1) {
      const current = document.getElementById(`image${count}`);
      setCount(count + 1);
      const next = document.getElementById(`image${count}`);
      current.style.left = -count * 600 + "px";
      next.style.left = 0 + "px";
    } else {
      setCount(0);
    }
  };
  return (
    <>
      <div className="container">
        <div className="image-container">
          <div className="images" id="images">
            <img src="/public/image1.jpg" className="image1" id="image0" />
            <img src="/public/image2.jpg" className="image2" id="image1" />
            <img src="/public/image3.jpg" className="image3" id="image2" />
            <img src="/public/image4.jpg" className="image4" id="image3" />
          </div>
          <div className="btns">
            <div className="leftbtn" id="leftbtn" onClick={() => moveleft()}>
              <button>
                <img src="/public/left-arrow.png"></img>
              </button>
            </div>
            <div className="rightbtn" onClick={() => moveRight()}>
              <button>
                <img src="/public/right-arrow.png"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
