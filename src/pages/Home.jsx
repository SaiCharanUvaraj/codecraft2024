import React from "react";
import Count from "./Count";
import logo from "../assets/logo.png";
function Home() {
  return (
    <div className="text-white" id="Home">
      <div className="justify-center items-center  md:flex h-screen flex-col flex">
        <img className=" p-4 w-[99%] md:w-[80%]" src={logo} alt="" />
        <Count />
      </div>
      <h1 className="font-outfit text-justify md:text-2xl md:font-semibold md:mx-80">
        Note:{" "}
        <span className="font-thin">
          Participation in the event is exclusively open to students from
          colleges other than <b>Sairam Institutions</b>. However, rest assured
          that we'll be organizing events specifically for Sairam students in
          the near future.
        </span>
      </h1>
    </div>
  );
}
export default Home;
