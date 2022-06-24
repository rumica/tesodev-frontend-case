import React, { useState } from "react";
import { slideData } from "../../../data/slideData";
import { Icon } from "../../../Icons";
import Slide from "./Slide";

const Slider = () => {
  return (
    <div className="slides">
      <button>
        <Icon name="leftArrow" />
      </button>
      <div className="total-slide">
        {slideData.map((slide, index) => (
          <Slide key={index} slide={slide} index={index} />
        ))}
      </div>
      <button>
        <Icon name="rightArrow" />
      </button>
    </div>
  );
};

export default Slider;
