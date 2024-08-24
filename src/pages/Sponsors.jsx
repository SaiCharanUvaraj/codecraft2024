import React from "react";
import itz from "../assets/itz.jpg";
import technoengineers from "../assets/technoengineers.svg";
import pizzahut from "../assets/pizzahut.svg";

const Sponsors = () => {
  const images = [
    technoengineers,
    pizzahut
  ];
  
  return (
    <>
      <h1
        className="text-6xl font-semibold text-white pt-24 text-center"
        id="sponsors"
      >
        Our Sponsors
      </h1>
      <div className="mt-20 space-y-20">
        <img src={technoengineers} alt="sponsor" className="w-full md:w-[40%] mx-auto" />
        <div className="flex flex-col space-y-20 w-full items-center  mx-auto md:space-x-10 md:justify-between md:items-center md:w-[40%] md:flex-row md:space-y-0">
          <div className=" bg-white p-5 rounded-lg">
            <img
              src={itz}
              alt="itradezone-logo"
              className="w-full h-32 md:w-full md:h-44 object-fill"
            />
            
          </div>
          <img src={pizzahut} alt="sponsor" className=" h-36 rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default Sponsors;
