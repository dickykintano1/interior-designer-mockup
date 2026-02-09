import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

import BasicPage from "../../components/BasicPage";
import ProjectList from '../../components/ProjectList';


function HomeView() {
  const targetRef = useRef(null);
  const { scrollY } = useScroll();
  const isInView = useInView(targetRef, { amount: 0.9 });
  const [hasPassed, setHasPassed] = useState(false);

  useEffect(() => {
    // If it was in view, but now it's not, and we are further down the page...
    if (!isInView && scrollY.get() > targetRef.current?.offsetTop) {
      setHasPassed(true);
    } else {
      setHasPassed(false);
    }
  }, [isInView, scrollY]);

  return (
    <main className='relative'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hasPassed ? 1 : 0 }}
        transition={{ duration: 1, ease: "anticipate" }}
        className={`
        sticky top-[calc(100vh-6rem)] lg:top-[calc(100vh-8rem)] text-8xl lg:text-9xl font-playfairDisplay font-bold z-1
      `}
      >
        Ambiex
      </motion.div>

      <div className="bg-[#FCECD2] -mt-[60px]">
        <section className="flex flex-col text-black">
          <div className="
            bg-[url(/img/livingRoom.png)] bg-no-repeat bg-center
            w-full 
            h-[50svh]
            bg-top
            bg-cover
            bg-no-repeat

            transition-all
            translate-opacity-0

            md:bg-cover
            md:bg-bottom
          ">
          </div>
          <div ref={targetRef}
            className={`
            flex flex-col justify-top items-left relative overflow-hidden
            bg-[#FCECD2]
            w-full h-[calc(50svh-80px)]
            z-0
            

            md:flex-row
            md:items-center
          `}
          >
            {/* <div className="py-3
              md:flex-1
            ">
              <span className='pl-5 text-left text-6xl font-playfairDisplay text-[#C6A982] border-b-2 border-black
                md:pl-70
              '>Ambiex</span>
            </div> */}
            <div className="relative flex ml-5 justify-end w-1/2 md:w-1/3">
              <div className="pt-3 font-serif text-6xl md:text-7xl lg:text-8xl text-[#c2b280] ">
                Ambiex
              </div>
              <div className="absolute bottom-0 right-0 h-[2px] w-[100svw] bg-black -translate-x-[calc(50svw-50%)]" />
            </div>
            <div className="px-5 py-5
              md:flex-1 md:ml-20 md:mr-[12.5svw] md:flex
            ">
              <span className="text-left  text-xl">Design that breathes with you. We curate quiet, intentional spaces that turn the chaos of the outside world into a distant memory. Welcome home to calm.</span>
            </div>
          </div>
        </section>

        <BasicPage className="projects-container flex flex-col">
          <ProjectList />
          <div className='flex justify-center items-center my-25 md:my-40'>
            <Link to='/works' className='font-playfairDisplay text-3xl underline'>See all works</Link>
          </div>
        </BasicPage>

        <BasicPage className="flex justify-center z-2">
          <div className='bg-[#D8C8A5] flex flex-col'>
            <div className="flex flex-row h-[80px] items-center justify-center">
              <hr className="flex-1 border-0 h-1  bg-[#C6A982] md:flex-2"></hr>
              <span className="flex-2 text-3xl text-center font-playfairDisplay md:flex-1">About</span>
              <hr className="flex-1 border-0 h-1 bg-[#C6A982] md:flex-2"></hr>
            </div>
            <div className='flex flex-col w-full justify-center items-center md:flex-row'>
              <div className="px-[12.5%] flex-1 md:max-w-[50%]">
                <span className="text-start">
                  Ambiex is an interior design company specializing in living and working space. We design, manage, and cooperate on projects.
                  <br /><br />
                  We are experienced in this field for over a decade. We strive for space efficiency, aesthetic appeal, and ergonomic comfort.
                </span>
              </div>
              <div className="flex justify-center items-center flex-1 md:self-end md:px-[12.5%] md:w-[50%]">
                <img src="/img/writing.png" className="py-10 max-w-60 h-100 object-cover" />
              </div>
            </div>
          </div>
        </BasicPage>

        <BasicPage className="mt-25 z-2">
          {/* <Services/> */}
          <ServicesSection />
        </BasicPage>

        <BasicPage className="flex justify-center items-center py-50 z-2">
          <div className="flex flex-col w-70 h-100 bg-[#D8C8A5] justify-top items-center">
            <span className="h-15 w-full text-left text-3xl p-3 font-playfairDisplay">Contact</span>
            <div className="flex justify-center items-center w-full p-3"><img src='img/typing.png' className="max-w-40 h-50 object-cover"></img></div>
            <div className="flex justify-center items-center flex-1">
              <span className="h-15 w-full text-left text-sm p-3 flex items-center">We'd like to hear from you!</span>
              <button
                onClick={() => nothing}
                className="!bg-transparent !p-0"
              >
                <img src="/img/arrow.png" className="w-8 h-8" alt="menu" />
              </button>
            </div>
          </div>
        </BasicPage>
      </div>
    </main>
  )
}


function ServiceCard({ title, desc, icon }) {
  return (
    <div className="w-full max-w-sm rounded-2xl shadow-lg overflow-hidden">

      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 bg-[#DCCFB0]">
        <img
          src={icon}
          alt={title}
          className="w-6 h-6 object-contain"
        />
        <h3 className="text-lg font-medium text-[#2A2A2A]">
          {title}
        </h3>
      </div>

      {/* Body */}
      <div className="
        px-5 py-6
        bg-white/35
        backdrop-blur-xs
        border border-white/30
        h-full
      ">
        <p className="text-sm leading-relaxed text-[#3A3A3A]">
          {desc}
        </p>
      </div>
    </div>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Layout Design",
      desc: "Thoughtful spatial planning that balances aesthetics, flow, and functionality.",
      icon: "/img/icons/design.png",
    },
    {
      title: "Material Selection",
      desc: "Carefully curated materials that align with the project’s concept and budget.",
      icon: "/img/icons/materials.png",
    },
    {
      title: "Project Management",
      desc: "End-to-end coordination to ensure timelines, quality, and execution are aligned.",
      icon: "/img/icons/management.png",
    },
  ];

  return (
    <>
      <div className="flex flex-row h-[80px] mb-5 items-center justify-center">
        <span className="flex-2 text-3xl text-center font-playfairDisplay md:flex-1">Services</span>
      </div>
      <div className="grid gap-10 lg:grid-cols-3 justify-items-center">
        {services.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
          />
        ))}
      </div>
    </>
  )
}


export default HomeView;