import React, { useState, useEffect } from "react";

const Slide = ({ current, slide, index }) => {

  const [currentIndex, setCurrentIndex] = useState(index)
  
  useEffect(() => {
    setCurrentIndex(index + 1)
  },[currentIndex])

  return (  
    <div className={currentIndex === current ? "slide active" : "active"} key={index}>
        <img src={slide?.image} alt="" />
        <div>
          <h2>{slide?.title}</h2>
          <p>{slide?.info}</p>
        </div>
    </div>
  );
};

export default Slide;
