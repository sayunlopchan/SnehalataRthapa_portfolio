import React from "react";

import sparkleKidsAcadamyLogo from "../assets/FoundedOrg/Sparkle_Kids_Academy.jpg";
import cultivateYourCanvaLogo from "../assets/FoundedOrg/cultivate_your_canvas.png";
import snehYogaCenterLogo from "../assets/FoundedOrg/Sneh_yoga_center.png";
import Image from "next/image";

const Founded = () => {
  return (
    <div className="lg:h-[600px]  pb-10">
      <h2 className="font-bold text-2xl my-5 uppercase">Founded</h2>

      <div className="flex flex-col lg:flex-row flex-wrap gap-5 justify-center items-center ">
        <div
          className="
          size-[130px]
          md:size-[180px]
          flex justify-center items-center
          hover:border
        "
        >
          <a href="">
            <Image
              src={sparkleKidsAcadamyLogo}
              alt="Sparkle kids academy"
              className="object-cover"
            />
          </a>
        </div>
        <div
          className="
          size-[130px]
          md:size-[180px]
          flex justify-center items-center
          hover:border">
          <a href="">
            <Image
              src={cultivateYourCanvaLogo}
              alt="Sparkle kids academy"
              className="object-fill"
            />
          </a>
        </div>
        <div
          className="
          size-[130px]
          md:size-[180px]
          flex justify-center items-center
          hover:border
          ">
          <a href="">
            <Image
              src={snehYogaCenterLogo}
              alt="Sparkle kids academy"
              className="object-cover"
            />
          </a>
        </div>
      </div>
      <div className="my-5">
        <ul
          className="text-base lg:text-lg"
          style={{ color: "var(--secondary-text)" }}>
          {/* adding underline animating when hover using before after */}
          <li>
            <a href="">Sparkke kids acadamy</a>
          </li>
          <li>
            <a href="">Cultivate your canva</a>
          </li>
          <li>
            <a href="">Sneh yoga center</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Founded;
