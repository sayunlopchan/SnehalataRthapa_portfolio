"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Main from "../Home/Main";

import goTop from "../assets/svg/arrow-top.svg";
import goBottom from "../assets/svg/arrow-bottom.svg";

const Page = () => {
  // Pre-loading
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Sections reference and active state
  const sections = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Lock scrolling during animation
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (callback) => {
    if (!isScrolling) {
      setIsScrolling(true);
      callback();
      setTimeout(() => setIsScrolling(false), 600); // Match duration of scroll animation
    }
  };

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
        <div className="fixed bottom-5 left-0 md:left-5 flex gap-x-5 justify-center items-center h-[100px] w-[100px] z-40">
          {/* Go Up Button */}
          <button
            onClick={() => handleScroll(clickUp)}
            disabled={activeIndex === 0 || isScrolling} // Disable if at the first section or scrolling
            className={`${activeIndex === 0 || isScrolling ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
          >
            <Image
              src={goTop}
              alt="goTop"
              className="h-[80px] w-[20px] md:h-[100px] cursor-pointer transition-all duration-500"
            />
          </button>

          {/* Go Down Button */}
          <button
            onClick={() => handleScroll(clickDown)}
            disabled={activeIndex === sections.current.length - 1 || isScrolling} // Disable if at the last section or scrolling
            className={`${activeIndex === sections.current.length - 1 || isScrolling ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
          >
            <Image
              src={goBottom}
              alt="goBottom"
              className="h-[80px] w-[20px] md:h-[100px] cursor-pointer transition-all duration-500"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
