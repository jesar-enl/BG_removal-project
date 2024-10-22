import { useState } from "react";
import { assets } from "../assets/assets";

export default function Slider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSlider = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <section className="mx-2 pb-10 md:py-20">
      <h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Remove Background With High <br />
        Quality and Accuracy
      </h1>
      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
        <img
          src={assets.image_w_bg}
          style={{
            clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)`,
          }}
          alt=""
        />
        <img
          src={assets.image_wo_bg}
          style={{
            clipPath: `inset(0 0 0 ${100.2 - sliderPosition}%)`,
          }}
          alt=""
          className="absolute top-0 left-0 w-full h-full"
        />
        <input
          type="range"
          name=""
          id=""
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSlider}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
        />
      </div>
    </section>
  );
}