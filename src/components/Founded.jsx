import React, { forwardRef } from "react";

import sparkleKidsAcadamyLogo from "../assets/FoundedOrg/Sparkle_Kids_Academy.jpg";
import cultivateYourCanvaLogo from "../assets/FoundedOrg/cultivate_your_canvas.png";
import snehYogaCenterLogo from "../assets/FoundedOrg/Sneh_yoga_center.png";
import Image from "next/image";

const Founded = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="lg:h-[600px]  pb-10">
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

          <li className="hover-border">
            <a href="https://sparklenepal.com/">Sparkle kids academy</a>
          </li>
          <li className="hover-border">
            <a href="">Cultivate your canvas</a>
          </li>
          <li className="hover-border">
            <a href="">Sneh yoga center</a>
          </li>
        </ul>
      </div>
    </div >
  );
});

Founded.displayName = 'Founded';
export default Founded;
