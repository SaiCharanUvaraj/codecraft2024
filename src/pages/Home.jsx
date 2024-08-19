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
      <h1 className="text-center text-2xl font-semibold p-5">Only Students From Colleges Other Than Sairam Institution Are Allowed To Participate In The Event!</h1>
    </div>
  );
}
export default Home;
