import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0"
      }`}
    >
      <div className="flex flex-col justify-center items-center">
        <button
          className="p-2 bg-[#DD4416] text-white rounded-full shadow-lg hover:bg-[#e66e4a] transition duration-500 ease-in-out hover:scale-110"
          onClick={scrollToTop}
        >
          <ArrowUpwardIcon/>
        </button>
        <p className="font-xs font-Montserrat text-white">Back To Top</p>
      </div>
    </div>
  );
}

export default BackToTop;
