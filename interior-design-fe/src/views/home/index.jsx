import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import BasicPage from "../../components/BasicPage";


function HomeView() {
  // 1. State to track when the element has been crossed
  const [hasCrossedElement, setHasCrossedElement] = useState(false);

  // 2. Ref to attach to the element you want to watch (the Image/Header)
  const targetRef = useRef(null);

  useEffect(() => {
    // Ensure the target element is available
    if (!targetRef.current) return;

    // Define the options for the observer
    const options = {
      root: null, 
      threshold: 0.0,
      rootMargin: "0px 0px 0px 0px" 
    };

    // The callback function that runs when the target intersects the root
    const callback = (entries) => {
      // 'entries' is an array of observed elements. We only have one (targetRef.current).
      entries.forEach(entry => {
        // entry.isIntersecting is true when the element is visible in the root
        // If entry.isIntersecting is FALSE, it means the element has scrolled completely out of view (past the top).
        if (!entry.isIntersecting) {
          // The element is completely off the screen
          setHasCrossedElement(true);
          console.log("🚀 Element crossed the top boundary! Fixed state activated.");
        } else {
          // The element is back on the screen
          setHasCrossedElement(false);
          console.log("🔽 Element is visible again. Fixed state deactivated.");
        }
      });
    };

    // Create the Intersection Observer instance
    const observer = new IntersectionObserver(callback, options);

    // Start observing the target element
    observer.observe(targetRef.current);

    // Cleanup function: stop observing when the component unmounts
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);


  return (
    <>
    <div 
      className={`
        fixed bottom-0 text-6xl text-[#C6A982] z-1
        transition-all duration-2000
        ${hasCrossedElement?"":"text-transparent"}
      `}
    >
      Ambiex
    </div>
    <div className="bg-[#FCECD2]">
      <BasicPage className="flex flex-col">
        <div ref={targetRef} className="
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
        <div
          className={`
            flex flex-col justify-top items-left
            bg-[#FCECD2]
            w-full h-[50svh]
          `}
        >
          <div 
            className={`
              px-5 py-5 text-left text-6xl text-[#C6A982] font-playfairDisplay
            `}
          >
            Ambiex
          </div>
          <hr className="w-[80vw] h-10"></hr>
          <div className="px-5">
            <span className="text-left text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut porro, rerum repudiandae reiciendis quam harum. Ducimus, fugiat distinctio nam omnis quod itaque perspiciatis, mollitia at culpa, aliquam earum accusantium minima.</span>
          </div>
        </div>
      </BasicPage>

      <BasicPage className="projects-container flex flex-col px-5">
        <div className="project-1 grid justify-center items-center mb-18">
          <img src="/img/office.png" className="w-[100vw] h-60 object-cover"/>
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
        </div>
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
    </>
  )
}

export default HomeView;