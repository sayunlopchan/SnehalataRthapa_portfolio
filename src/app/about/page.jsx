import Image from "next/image";
import React from "react";

import aboutImg from "../../assets/user-images/about-img.jpg";
import aboutImg1 from "../../assets/user-images/about-img-1.jpg";
import aboutImg2 from "../../assets/user-images/about-img-2.jpg";
import aboutImg3 from "../../assets/user-images/about-img-3.jpg";
import Nav from "../../components/Nav";



// arrays

const Achivements = [
  {
    title: 'Mrs. Nepal Bhairahawa',
    date: '2019/00/00',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quis adipisci accusantium eum placeat repellendus ut voluptatibus, nobis cum voluptates ducimus omnis nam maxime quibusdam molestiae doloribus nostrum hic suscipit deleniti ab debitis! A corporis consequatur minima blanditiis nulla dicta ratione iusto, vel nisi natus sint nostrum itaque, vero incidunt ducimus placeat recusandae nesciunt! Vitae totam earum nisi magni, voluptas est soluta maxime facere eum quis tempore praesentium aliquid repudiandae ut officia illo odio quos quod! Doloremque odio dolore facilis.',
    image: aboutImg
  },
  {
    title: 'Mrs. Nepal International 2nd runner-up',
    date: '2019/00/00',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quis adipisci accusantium eum placeat repellendus ut voluptatibus, nobis cum voluptates ducimus omnis nam maxime quibusdam molestiae doloribus nostrum hic suscipit deleniti ab debitis! A corporis consequatur minima blanditiis nulla dicta ratione iusto, vel nisi natus sint nostrum itaque, vero incidunt ducimus placeat recusandae nesciunt! Vitae totam earum nisi magni, voluptas est soluta maxime facere eum quis tempore praesentium aliquid repudiandae ut officia illo odio quos quod! Doloremque odio dolore facilis.',
    image: aboutImg1
  },
  {
    title: 'Title',
    date: '2019/00/00',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quis adipisci accusantium eum placeat repellendus ut voluptatibus, nobis cum voluptates ducimus omnis nam maxime quibusdam molestiae doloribus nostrum hic suscipit deleniti ab debitis! A corporis consequatur minima blanditiis nulla dicta ratione iusto, vel nisi natus sint nostrum itaque, vero incidunt ducimus placeat recusandae nesciunt! Vitae totam earum nisi magni, voluptas est soluta maxime facere eum quis tempore praesentium aliquid repudiandae ut officia illo odio quos quod! Doloremque odio dolore facilis.',
    image: aboutImg2
  },
  {
    title: 'Title',
    date: '2019/00/00',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quis adipisci accusantium eum placeat repellendus ut voluptatibus, nobis cum voluptates ducimus omnis nam maxime quibusdam molestiae doloribus nostrum hic suscipit deleniti ab debitis! A corporis consequatur minima blanditiis nulla dicta ratione iusto, vel nisi natus sint nostrum itaque, vero incidunt ducimus placeat recusandae nesciunt! Vitae totam earum nisi magni, voluptas est soluta maxime facere eum quis tempore praesentium aliquid repudiandae ut officia illo odio quos quod! Doloremque odio dolore facilis.',
    image: aboutImg3
  },
]




const page = () => {
  return (
    <div>
      <Nav />

      <div className="px-5">
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
              An entrepreneur, model, and mentor empowering children and others to grow with confidence and strong personalities.
            </p>
          </section>

          <section className="bg-transparent max-md:hidden"></section>
        </div>
        {/* TEXTS */}

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[400px] max-lg:space-y-5">

          <section className="flex flex-col gap-y-3 justify-center items-center">
            <div className="hover-effect-wrapper w-[200px]">
              <div className="bg-gray-300 h-[260px] w-[200px]">
                <Image src={aboutImg} alt="" className="object-cover size-full" />
              </div>
              <div className="hover-effect w-[200px] h-10 flex justify-center items-center relative">
                <h2 className="text-black uppercase transition-colors duration-300">Entrepreneur</h2>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-y-3 justify-center items-center lg:mt-10">
            <div className="hover-effect-wrapper w-[200px]">
              <div className="bg-gray-300 h-[260px] w-[200px]">
                <Image src={aboutImg1} alt="" className="object-cover size-full" />
              </div>
              <div className="hover-effect w-[200px] h-10 flex justify-center items-center relative">
                <h2 className="text-black uppercase transition-colors duration-300">Personality</h2>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-y-3 justify-center items-center lg:mb-20">
            <div className="hover-effect-wrapper w-[200px]">
              <div className="bg-gray-300 h-[260px] w-[200px]">
                <Image src={aboutImg2} alt="" className="object-cover size-full" />
              </div>
              <div className="hover-effect w-[200px] h-10 flex justify-center items-center relative">
                <h2 className="text-black uppercase transition-colors duration-300">Model</h2>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-y-3 justify-center items-center lg:mt-20">
            <div className="hover-effect-wrapper w-[200px]">
              <div className="bg-gray-300 h-[260px] w-[200px]">
                <Image src={aboutImg3} alt="" className="object-cover size-full" />
              </div>
              <div className="hover-effect w-[200px] h-10 flex justify-center items-center relative">
                <h2 className="text-black uppercase transition-colors duration-300">Mother</h2>
              </div>
            </div>
          </section>


        </div>
        {/* CARDS */}

        {/*Achivements Timeline */}
        <div className="space-y-10 lg:m-10">
          <h2 className="font-bold text-2xl my-5 uppercase">Achievements</h2>

          {
            Achivements.map((text, idx) => {
              return <div key={idx} className="grid grid-cols-1 md:grid-cols-2 max-md:space-y-10 max-md:py-10">
                <section>
                  <span>Date:{text.date}</span>
                  <h3 className="font-bold text-xl">{text.title}</h3>
                  <p style={{ color: "var(--secondary-text)" }}>
                    {text.text}
                  </p>
                </section>

                <section className="flex justify-center items-center">
                  <div className="size-[280px] lg:size-[400px] bg-gray-300 overflow-hidden">
                    <Image
                      src={text.image}
                      alt={text.title}
                      className="object-cover"
                    />
                  </div>
                </section>
              </div>
            })
          }


        </div>
        {/*Achivements Timeline */}
      </div>
    </div >
  );
};

export default page;
