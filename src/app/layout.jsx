import Image from "next/image";
import "./globals.css";


import goTop from '../assets/svg/arrow-top.svg'
import goBottom from '../assets/svg/arrow-bottom.svg'


export const metadata = {
  title: "Snehalata R Thapa",
  description: "Snehalata R Thapa, a dynamic entrepreneur, life skills and leadership trainer, and beauty pageant achiever, has earned accolades as Mrs. Bhairahawa 2019 and 2nd Runner-Up in Mrs. Nepal International 2019. With a passion for empowering others, she blends grace and expertise to inspire individuals and create meaningful impact in her community.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <div
          className='
          fixed bottom-5 left-0 md:left-5 
          flex gap-x-5 justify-center items-center 
          h-[100px] w-[100px] z-40'>
          <Image
            src={goTop}
            alt="goTop"
            className="
          h-[80px] w-[20px]
          md:h-[100px]
          cursor-pointer 
          transition-all duration-500 hover:-translate-y-5" />

          <Image
            src={goBottom}
            alt="goBottom"
            className="
          h-[80px] w-[20px]
          md:h-[100px]
          cursor-pointer 
          transition-all duration-500 hover:translate-y-5" />

        </div>
        {children}
      </body>
    </html>
  );
}
