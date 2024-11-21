"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Main from "../Home/Main";

import goTop from "../assets/svg/arrow-top.svg";
import goBottom from "../assets/svg/arrow-bottom.svg";

const Page = () => {
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
    <div className="relative">
      {/* Pass refs to the Main component */}
      <Main sectionsRef={sections} />
      <div
        className="fixed bottom-5 left-0 md:left-5 flex gap-x-5 justify-center items-center h-[100px] w-[100px] z-40"
      >
        <button onClick={clickUp}>
          <Image
            src={goTop}
            alt="goTop"
            className="h-[80px] w-[20px] md:h-[100px] cursor-pointer transition-all duration-500 hover:-translate-y-5"
          />
        </button>

        <button onClick={clickDown}>
          <Image
            src={goBottom}
            alt="goBottom"
            className="h-[80px] w-[20px] md:h-[100px] cursor-pointer transition-all duration-500 hover:translate-y-5"
          />
        </button>
      </div>
    </div>
  );
};

export default Page;
