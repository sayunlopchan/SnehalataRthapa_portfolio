"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Main from "../Home/Main";
import goTop from "../assets/svg/arrow-top.svg";
import goBottom from "../assets/svg/arrow-bottom.svg";

const Page = () => {
  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Refs and state for section navigation
  const sections = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Go Down
  const clickDown = () => {
    if (activeIndex < sections.current.length - 1) {
      const nextIndex = activeIndex + 1;
      sections.current[nextIndex]?.scrollIntoView({ behavior: "smooth" });
      setActiveIndex(nextIndex);
    }
  };

  // Go Up
  const clickUp = () => {
    if (activeIndex > 0) {
      const prevIndex = activeIndex - 1;
      sections.current[prevIndex]?.scrollIntoView({ behavior: "smooth" });
      setActiveIndex(prevIndex);
    }
  };

  return (
    <div className="relative px-5 lg:px-10">
      {/* Pass refs to the Main component */}
      <Main sectionsRef={sections} />

      {isLoading && (
        <div
          className="fixed bottom-5 left-0 md:left-5 flex gap-x-5 justify-center items-center h-[100px] w-[100px] z-40"
        >
          <button
            onClick={clickUp}
            disabled={activeIndex === 0}
            className={`${activeIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
              } transition-all duration-300 ease-in-out`}
          >
            <Image
              src={goTop}
              alt="Go Top"
              className="h-[80px] w-[20px] md:h-[100px] cursor-pointer transition-all duration-500"
            />
          </button>

          <button
            onClick={clickDown}
            disabled={activeIndex === sections.current.length - 1}
            className={`${activeIndex === sections.current.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100"
              } transition-all duration-300 ease-in-out`}
          >
            <Image
              src={goBottom}
              alt="Go Bottom"
              className="h-[80px] w-[20px] md:h-[100px] cursor-pointer transition-all duration-500"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
