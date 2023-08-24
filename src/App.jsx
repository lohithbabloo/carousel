import React from "react";
import Carousel from "./components/carousel";
import images from "./components/imageData";
import Othercarousel from "./components/othercarousel";

const App = () => {
  return (
    <div>
      <Carousel slides={images} />
      {/* <Othercarousel /> */}
    </div>
  );
};

export default App;
