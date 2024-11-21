import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Founded from "../components/Founded";
import Associated from "../components/Associated";
import Contact from "../components/Contact";
import MoreLinks from "../components/MoreLinks";
import Welcome from "../components/Welcome";

const Main = ({ sectionsRef }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Welcome />
      ) : (
        <div className="md:space-y-5 bg-red-400">
          <Navigation />
          <Hero ref={(el) => (sectionsRef.current[0] = el)} />
          <Introduction ref={(el) => (sectionsRef.current[1] = el)} />
          <Founded ref={(el) => (sectionsRef.current[2] = el)} />
          <Associated ref={(el) => (sectionsRef.current[3] = el)} />
          <Contact ref={(el) => (sectionsRef.current[4] = el)} />
          <MoreLinks ref={(el) => (sectionsRef.current[5] = el)} />
        </div>
      )}
    </>
  );
};

export default Main;
