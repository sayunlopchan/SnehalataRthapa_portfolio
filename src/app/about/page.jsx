import Image from "next/image";
import React from "react";

import aboutImg from "../../assets/user-images/about-img.jpg";
import aboutImg1 from "../../assets/user-images/about-img-1.jpg";
import aboutImg2 from "../../assets/user-images/about-img-2.jpg";
import aboutImg3 from "../../assets/user-images/about-img-3.jpg";
import Link from "next/link";

const page = () => {
  return (
    <div className="px-5 space-y-10">
      <nav className="w-full flex justify-center items-center">
        <ul className="flex gap-x-5 mt-5" style={{ color: "var(--secondary-text)" }}>
          <li><Link href={'/'} >Home</Link></li>
          <li><Link href={'/about'} >About</Link></li>
          <li><Link href={'/gallery'} >Gallery</Link></li>
          <li><Link href={'/blog'} >Blog</Link></li>
          <li><Link href={'/contact'} >Contact</Link></li>
        </ul>
      </nav>

      {/* TEXTS */}
      <div className="grid grid-cols-1 md:grid-cols-4 w-full lg:h-[300px] max-lg:space-y-5">

        <section className="bg-transparent max-md:hidden"></section>

        <section className="flex justify-center items-center">
          <h1 className="uppercase font-bold text-3xl">
            Know Snehalata R Thapa.
          </h1>
          <span className="border-gray-400 border-l-2 h-10 m-2 max-xl:hidden"></span>
        </section>

        <section className="flex justify-center items-center">
          <p className="text-sm" style={{ color: "var(--secondary-text)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            autem sapiente fugit nostrum provident quas mollitia eum, magni
            explicabo vel?
          </p>
        </section>

        <section className="bg-transparent max-md:hidden"></section>
      </div>
      {/* TEXTS */}

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[400px] max-lg:space-y-5">

        <section className="flex flex-col gap-y-3 justify-center items-center">
          <div className="bg-gray-300 h-[260px] w-[200px]">
            <Image src={aboutImg} alt="" className="object-cover size-full" />
          </div>
          <div className="bg-gray-300 w-[200px] h-10 flex justify-center items-center">
            <h2>LOREM LOREM</h2>
          </div>
        </section>

        <section className="flex flex-col gap-y-3 justify-center items-center lg:mt-10">
          <div className="bg-gray-300 h-[260px] w-[200px]">
            <Image src={aboutImg1} alt="" className="object-cover size-full" />
          </div>
          <div className="bg-gray-300 w-[200px] h-10 flex justify-center items-center">
            <h2>LOREM LOREM</h2>
          </div>
        </section>

        <section className="flex flex-col gap-y-3 justify-center items-center lg:mb-20">
          <div className="bg-gray-300 h-[260px] w-[200px]">
            <Image src={aboutImg2} alt="" className="object-cover size-full" />
          </div>
          <div className="bg-gray-300 w-[200px] h-10 flex justify-center items-center">
            <h2>LOREM LOREM</h2>
          </div>
        </section>

        <section className="flex flex-col gap-y-3 justify-center items-center lg:mt-20">
          <div className="bg-gray-300 h-[260px] w-[200px]">
            <Image src={aboutImg3} alt="" className="object-cover size-full" />
          </div>
          <div className="bg-gray-300 w-[200px] h-10 flex justify-center items-center">
            <h2>LOREM LOREM</h2>
          </div>
        </section>

      </div>
      {/* CARDS */}

      {/*Achivements Timeline */}
      <div className="space-y-10 lg:m-10">
        <h2 className="font-bold text-2xl my-5 uppercase">Achivements</h2>

        {/* One */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-md:space-y-10 max-md:py-10">
          <section>
            <span>Date:2019/00/00</span>
            <h3 className="font-bold text-xl">Title</h3>
            <p style={{ color: "var(--secondary-text)" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quis adipisci accusantium eum placeat repellendus ut voluptatibus, nobis cum voluptates ducimus omnis nam maxime quibusdam molestiae doloribus nostrum hic suscipit deleniti ab debitis! A corporis consequatur minima blanditiis nulla dicta ratione iusto, vel nisi natus sint nostrum itaque, vero incidunt ducimus placeat recusandae nesciunt! Vitae totam earum nisi magni, voluptas est soluta maxime facere eum quis tempore praesentium aliquid repudiandae ut officia illo odio quos quod! Doloremque odio dolore facilis.</p>
          </section>

          <section className="flex justify-center items-center">
            <div className="size-[280px] lg:size-[400px] bg-gray-300"></div>
          </section>
        </div>
        {/* One */}

        {/* One */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-md:space-y-10 max-md:py-10">
          <section>
            <span>Date:2019/00/00</span>
            <h3 className="font-bold text-xl">Title</h3>
            <p style={{ color: "var(--secondary-text)" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quis adipisci accusantium eum placeat repellendus ut voluptatibus, nobis cum voluptates ducimus omnis nam maxime quibusdam molestiae doloribus nostrum hic suscipit deleniti ab debitis! A corporis consequatur minima blanditiis nulla dicta ratione iusto, vel nisi natus sint nostrum itaque, vero incidunt ducimus placeat recusandae nesciunt! Vitae totam earum nisi magni, voluptas est soluta maxime facere eum quis tempore praesentium aliquid repudiandae ut officia illo odio quos quod! Doloremque odio dolore facilis.</p>
          </section>

          <section className="flex justify-center items-center">
            <div className="size-[280px] lg:size-[400px] bg-gray-300"></div>
          </section>
        </div>
        {/* One */}

        {/* One */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-md:space-y-10 max-md:py-10">
          <section>
            <span>Date:2019/00/00</span>
            <h3 className="font-bold text-xl">Title</h3>
            <p style={{ color: "var(--secondary-text)" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quis adipisci accusantium eum placeat repellendus ut voluptatibus, nobis cum voluptates ducimus omnis nam maxime quibusdam molestiae doloribus nostrum hic suscipit deleniti ab debitis! A corporis consequatur minima blanditiis nulla dicta ratione iusto, vel nisi natus sint nostrum itaque, vero incidunt ducimus placeat recusandae nesciunt! Vitae totam earum nisi magni, voluptas est soluta maxime facere eum quis tempore praesentium aliquid repudiandae ut officia illo odio quos quod! Doloremque odio dolore facilis.</p>
          </section>

          <section className="flex justify-center items-center">
            <div className="size-[280px] lg:size-[400px] bg-gray-300"></div>
          </section>
        </div>
        {/* One */}








      </div>
      {/*Achivements Timeline */}
    </div>
  );
};

export default page;
