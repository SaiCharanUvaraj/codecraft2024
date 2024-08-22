import React from "react";
import itradezone1 from "../assets/itradezone1.jpg";
import itradezone2 from "../assets/itradezone2.jpg";
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
          <div className="flex space-x-5 bg-white p-5 rounded-lg">
            <img
              src={itradezone1}
              alt="itradezone-logo"
              className="w-32 h-32 md:w-44 md:h-44 object-fill"
            />
            <img
              src={itradezone2}
              alt="itradezone-contact"
              className="w-32 h-32 md:w-44 md:h-44 object-fill"
            />
          </div>
          <img src={pizzahut} alt="sponsor" className=" h-36 rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default Sponsors;
