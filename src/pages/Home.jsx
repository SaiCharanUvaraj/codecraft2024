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
      <h1 className="text-center text-2xl p-5">Students From Sri Sairam Group Of Institution Are NOT ALLOWED To Paticipate !</h1>
    </div>
  );
}
export default Home;
