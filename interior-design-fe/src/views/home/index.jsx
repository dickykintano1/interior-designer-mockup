import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll } from 'framer-motion';

import BasicPage from "../../components/BasicPage";


function HomeView() {
  const targetRef = useRef(null);
  const { scrollY } = useScroll();
  const isInView = useInView(targetRef, {amount: 0.9});
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
    <main>
    <motion.div 
      animate={{ 
        opacity: hasPassed ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "anticipate"}}
      className={`
        fixed bottom-0 text-left text-8xl font-playfairDisplay font-bold
      `}
    >
      Ambiex
    </motion.div>
    <div className="bg-[#FCECD2]">
      <BasicPage className="flex flex-col">
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
            flex flex-col justify-top items-left relative
            bg-[#FCECD2]
            w-full h-[50svh]

            md:flex-row
            md:items-center
          `}
        >
          <div className="py-3
            md:flex-1
          ">
            <span className='pl-5 text-left text-6xl font-playfairDisplay text-[#C6A982] border-b-2 border-black
              md:pl-[33%]
            '>Ambiex</span>
          </div>
          <div className="px-5 py-5
            md:flex-1
          ">
            <span className="text-left text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut porro, rerum repudiandae reiciendis quam harum. Ducimus, fugiat distinctio nam omnis quod itaque perspiciatis, mollitia at culpa, aliquam earum accusantium minima.</span>
          </div>
        </div>
      </BasicPage>

      <BasicPage className="projects-container flex flex-col px-5">
        <Projects/>
        {/* <div className="project-1 grid justify-center items-center mb-18">
          <img src="/img/office.png" className="w-[100vw] h-60 object-cover md:"/>
          <div className="flex flex-row w-full">
            <span className="flex-1 text-sm">Project Red<br/>2025</span>
            <span className="flex-1 text-sm text-left">Process<br/>Materials</span>
          </div>
        </div>
        <div className="project-1 grid justify-center items-center mb-18">
          <img src="/img/office2.png" className="w-[100vw] h-60 object-cover"/>
          <div className="flex flex-row w-full">
            <span className="flex-1 text-sm">Project Blue<br/>2025</span>
            <span className="flex-1 text-sm text-left">Process<br/>Materials</span>
          </div>
        </div>
        <div className="project-1 grid justify-center items-center mb-18">
          <img src="/img/livingRoom2.png" className="w-[100vw] h-60 object-cover"/>
          <div className="flex flex-row w-full">
            <span className="flex-1 text-sm">Project Green<br/>2025</span>
            <span className="flex-1 text-sm text-left">Process<br/>Materials</span>
          </div>
        </div>
        <div className="project-1 grid justify-center items-center mb-18">
          <img src="/img/livingRoom.png" className="w-[100vw] h-60 object-cover"/>
          <div className="flex flex-row w-full">
            <span className="flex-1 text-sm">Project White<br/>2025</span>
            <span className="flex-1 text-sm text-left">Process<br/>Materials</span>
          </div>
        </div>
        <div className='flex justify-center items-center mt-7 mb-25'>
          <Link to='/works'className='font-playfairDisplay text-3xl underline'>See all works</Link>
        </div> */}
      </BasicPage>

      <BasicPage className="bg-[#D8C8A5]">
        <div className="flex flex-row h-[80px] items-center justify-center">
          <hr className="flex-1 border-0 h-1 w-full bg-[#C6A982]"></hr>
          <span className="flex-2 text-3xl text-center font-playfairDisplay">About</span>
          <hr className="flex-1 border-0 h-1 w-full bg-[#C6A982]"></hr>
        </div>
        <div className="w-[100vw] px-10 flex">
          <span className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates, soluta repudiandae earum eveniet aperiam sequi numquam vero, odio voluptas est unde. Nisi, consequuntur vitae deserunt doloremque non dolores eius.</span>
        </div>
        <div className="flex justify-center items-center">
          <img src="/img/writing.png" className="py-10 max-w-60 h-100 object-cover"/>
        </div>
      </BasicPage>

      <BasicPage>
        <div className="flex flex-row h-[80px] items-center justify-center">
          <hr className="flex-1 border-0 h-1 w-full bg-[#D8C8A5]"></hr>
          <span className="flex-2 text-3xl text-center font-playfairDisplay">Services</span>
          <hr className="flex-1 border-0 h-1 w-full bg-[#D8C8A5]"></hr>
        </div>
        <div className="grid grid-cols-3 grid-rows-20 h-[100svh] mx-5">
          <div className="row-span-1">Layout Design</div>
          <div className="row-span-1 col-span-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div className="row-span-5"></div>
          <div className="row-span-5 col-span-2 bg-[url(/img/Layout.png)] bg-[80%_auto] bg-center bg-no-repeat"></div>

          <hr className="col-span-3 h-1 w-[100vw] border-none -mx-5" style={{ backgroundColor: '#D8C8A5' }}></hr>

          <div className="row-span-1">Material Selection</div>
          <div className="row-span-1 col-span-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div className="row-span-5"></div>
          <div className="row-span-5 col-span-2 bg-[url(/img/Materials.png)] bg-[80%_auto] bg-center bg-no-repeat"></div>

          <hr className="col-span-3 h-1 w-[100vw] border-none -mx-5" style={{ backgroundColor: '#D8C8A5' }}></hr>

          <div className="row-span-1">Management & Coordination</div>
          <div className="row-span-1 col-span-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div className="row-span-5"></div>
          <div className="row-span-5 col-span-2 bg-[url(/img/Management.png)] bg-[80%_auto] bg-center bg-no-repeat"></div>
        </div>
      </BasicPage>

      <BasicPage className="flex justify-center items-center py-20">
        <div className="flex flex-col w-70 h-100 bg-[#D8C8A5] justify-top items-center">
          <span className="h-15 w-full text-left text-3xl p-3 font-playfairDisplay">Contact</span>
          <div className="flex justify-center items-center w-full p-3"><img src='img/typing.png' className="max-w-40 h-50 object-cover"></img></div>
          <div className="flex justify-center items-center flex-1">
            <span className="h-15 w-full text-left text-sm p-3 flex items-center">We'd like to hear from you!</span>
            <button
              onClick={()=>nothing}
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

function Projects(){
  const projects = [
    { id: 1, name: "Project Red", year: "2025", img: "/img/office.png" },
    { id: 2, name: "Project Blue", year: "2025", img: "/img/office2.png" },
    { id: 3, name: "Project Green", year: "2025", img: "/img/livingRoom2.png" },
    { id: 4, name: "Project White", year: "2025", img: "/img/livingRoom.png" },
  ];
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-18 px-4">
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col group md:flex-row md:flex-1">
          {/* Image Container */}
          <div className="overflow-hidden mb-4 md:mb-0 md:w-200">
            <img 
              src={project.img} 
              alt={project.name}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105 md:h-120"
            />
          </div>

          {/* Details Row */}
          <div className="flex justify-between w-full md:flex-col md:justify-center md:ml-5">
            <div className="text-sm md:flex-1">
              <span className="font-medium">{project.name}</span>
              <br />
              <span className="text-gray-500">{project.year}</span>
            </div>
            <div className="text-sm text-right md:text-left md:flex-1">
              <span>Process</span>
              <br />
              <span className="text-gray-500">Materials</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeView;