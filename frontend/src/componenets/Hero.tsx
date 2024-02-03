import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className=" max-h-[500px] relative">
        <div className="absolute h-full w-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1>
            The <span>Best</span>
          </h1>
          <h1>
            Food <span>Delivered</span>
          </h1>
        </div>
        <img className="w-full h-[500px]" src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </div>
    </div>
  );
};

export default Hero;
