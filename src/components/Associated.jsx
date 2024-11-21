import React, { forwardRef } from "react";
import Image from "next/image";

import rotaryClubLogo from "../assets/AssociatedClubs/rotary-yellow-kathmandu.png";
import toastmasterClubLogo from "../assets/AssociatedClubs/Toastmasters Club-nepal.jpg";
import lionsClubLogo from "../assets/AssociatedClubs/Lions_Clubs_International_logo.svg.png";
import kiwabisClubOfRupandehi from "../assets/AssociatedClubs/Kiwanis Club of Rupandehi Lumbini.png";

const Associated = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="lg:h-[600px]  pb-10">
      <h2 className="font-bold text-2xl my-5 uppercase">Associated</h2>

      <div
        className="
        flex flex-col flex-wrap 
        lg:flex-row 
        gap-5
        xl:gap-16
        justify-center items-center
         "
      >
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
              src={rotaryClubLogo}
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
          hover:border
          "
        >
          <a href="">
            <Image
              src={toastmasterClubLogo}
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
          hover:border 
        "
        >
          <a href="">
            <Image
              src={lionsClubLogo}
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
          hover:border
          "
        >
          <a href="">
            <Image
              src={kiwabisClubOfRupandehi}
              alt="Sparkle kids academy"
              className="object-cover"
            />
          </a>
        </div>
      </div>

      <div className="my-5">
        <ul style={{ color: "var(--secondary-text)" }}>
          {/*adding underline animating when hover using before after*/}
          <li>
            <a href="">Rotary Club</a>
          </li>
          <li>
            <a href="">Toastmaster Club</a>
          </li>
          <li>
            <a href="">Lions Club</a>
          </li>
          <li>
            <a href=""> Kiwanis Club of Rupandehi Lumbini</a>
          </li>
        </ul>
      </div>
    </div>
  );
});

Associated.displayName = 'Associated';
export default Associated;
