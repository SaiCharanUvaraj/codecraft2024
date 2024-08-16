import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center p-5 fixed bg-white/5 backdrop-blur-xl border-b-2 border-white/15 shadow-xl shadow-white/5 w-full z-10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <img width={250} src={logo} alt="Hackathon Logo" />
      <Sidebar />
    </div>
  );
};

export default Navbar;
