import Image from "next/image";
import React from "react";

import aboutImg from "../../assets/user-images/about-img.jpg";
import aboutImg1 from "../../assets/user-images/about-img-1.jpg";
import aboutImg2 from "../../assets/user-images/about-img-2.jpg";
import aboutImg3 from "../../assets/user-images/about-img-3.jpg";

import aboutImg4 from "../../assets/user-images/team.jpg";
import aboutImg5 from "../../assets/user-images/imagetest1.jpg";


import a1 from "../../assets/user-images/hero-image-1.jpg";
import a2 from "../../assets/user-images/hero-image-2.jpg";
import a3 from "../../assets/user-images/Bhairahawa_Toastmasters_Club.jpg";
import a4 from "../../assets/user-images/Lions_Club_of_Siddharthanagar_Lady_Youth.jpg";
import a5 from "../../assets/user-images/Kiwanis_Rupandehi_Lumbini1.jpg";
import a6 from "../../assets/user-images/TKS.jpg";



import Nav from "../../components/Nav";




// arrays

const Achivements = [
  {
    title: 'Mrs. Nepal Bhairahawa',
    date: '2019',
    text: 'Honored with the title of Mrs. Nepal Bhairahawa, showcasing exceptional poise, talent, and commitment to representing my community with pride on a national stage.',
    image: a1
  },
  {
    title: 'Mrs. Nepal International 2nd runner-up',
    date: '2019',
    text: 'Earned the prestigious 2nd Runner-Up title at the Mrs. Nepal International 2019 pageant, organized by Ribbon Entertainment Pvt. Ltd. This recognition highlights my dedication, confidence, and ability to excel on a national platform, representing grace and talent.',
    image: a2
  },
  {
    title: 'V.P. Membership - Bhairahawa Toastmasters Club',
    date: '2018',
    text: 'Serving as the Vice President of Membership at the Bhairahawa Toastmasters Club, an organization committed to developing public speaking and leadership skills. My responsibilities include Overseeing membership growth and retention by creating a welcoming environment for new and existing members. Organizing membership drives and ensuring a seamless onboarding process for prospective members. Supporting the club\'s mission by fostering a culture of learning, collaboration, and personal development.',
    image: a3
  },
  {
    title: 'Joint Secretary - Lions Club of Siddharthanagar Lady Youth',
    date: '2021',
    text: 'Serving as the Joint Secretary of the Lions Club of Siddharthanagar Lady Youth, a dynamic organization dedicated to empowering communities and advancing humanitarian efforts. In this role, I am responsible for Supporting the club administrative functions, including record-keeping and communication. Assisting in planning and organizing community service projects and events. Collaborating with fellow members to drive impactful initiatives that address local needs and promote social welfare.',
    image: a4
  },
  {
    title: '2nd V.P. - Kiwanis Club of Rupandehi Lumbini',
    date: '2019',
    text: 'Actively contributing to the Kiwanis Club of Rupandehi Lumbini, a global organization focused on improving the world one child and one community at a time. As the 2nd Vice President, I play a pivotal role in Leading initiatives to promote education, health, and community development. Coordinating with team members and stakeholders to achieve organizational goals. Representing the club in national and international forums, fostering collaboration and networking opportunities.',
    image: a5
  },
  {
    title: 'Award winner at TKS Mrs. International 2019',
    date: '2019',
    text: 'Represented Nepal on the international stage at the prestigious TKS Mrs. International 2019, a pageant dedicated to married women.Competed in the Mrs. Category, with events held across Malaysia, Singapore, and Indonesia, and the grand finale hosted at the Orchid Country Club, Singapore, on November 8, 2019.Secured the Second Runner-Up position at Mrs. Nepal International 2019, organized by Ribbon Entertainment Pvt. Ltd., showcasing exceptional talent and grace.Proudly received training and coordination support from Ribbon Entertainment Pvt. Ltd.',
    image: a6
  },
  {
    title: 'Certified Life Skills and Leadership Trainer',
    date: '2019/00/00',
    text: 'As a Certified Life Skills and Leadership Trainer, my mission is to empower individuals to unlock their potential, foster essential skills, and embrace transformative leadership principles. With a focus on personal development and effective communication, I guide people in overcoming challenges, building resilience, and achieving success in both personal and professional domains.',
    image: aboutImg4
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
                      className="size-full object-cover object-right"
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
