import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

import BasicPage from "../../components/BasicPage";
import ProjectList from '../../components/ProjectList';


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
    <main className=''>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{opacity: hasPassed ? 1 : 0}}
      transition={{ duration: 1, ease: "anticipate"}}
      className={`
        sticky top-[calc(100vh-6rem)] text-left text-8xl font-playfairDisplay font-bold z-1 h-0
      `}
    >
    Ambiex
    </motion.div>
    
    <div className="bg-[#FCECD2]">
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
            flex flex-col justify-top items-left relative
            bg-[#FCECD2]
            w-full h-[50svh]
            z-0
            

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
      </section>

      <BasicPage className="projects-container flex flex-col px-5">
        <ProjectList/>
        <div className='flex justify-center items-center my-25 md:my-40'>
          <Link to='/works'className='font-playfairDisplay text-3xl underline'>See all works</Link>
        </div>
      </BasicPage>

      <BasicPage className="flex justify-center z-2">
        <div className='bg-[#D8C8A5] flex flex-col'>
          <div className="flex flex-row h-[80px] items-center justify-center md:mx-[10%]">
            <hr className="flex-1 border-0 h-1  bg-[#C6A982]"></hr>
            <span className="flex-1 text-3xl text-center font-playfairDisplay">About</span>
            <hr className="flex-1 border-0 h-1 bg-[#C6A982]"></hr>
          </div>
          <div className='flex flex-col w-full justify-center items-center md:flex-row'>
            <div className="px-[12.5%] flex-1 md:max-w-[50%]">
              <span className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates, soluta repudiandae earum eveniet aperiam sequi numquam vero, odio voluptas est unde. Nisi, consequuntur vitae deserunt doloremque non dolores eius.</span>
            </div>
            <div className="flex justify-center items-center flex-1 md:self-end md:px-[12.5%] md:w-[50%]">
              <img src="/img/writing.png" className="py-10 max-w-60 h-100 object-cover"/>
            </div>
          </div>
        </div>
      </BasicPage>

      <BasicPage className="z-2">
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

      <BasicPage className="flex justify-center items-center py-20 z-2">
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


export default HomeView;