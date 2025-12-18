import React, { useState, useEffect, useRef } from 'react';

export default function PhilosophyView(){
  return(
    <>
      <div className='bg-[#F9EED2] !text-black px-6 py-12'>
        <span className="text-5xl -mx-6 pl-6 my-30 border-b border-black inline-block">Philosophy</span>

        <div className="space-y-3 mb-15 text-3xl font-playfairDisplay">
          <p>Space creates routine</p>
          <p>Routine creates habit</p>
          <p>Habit creates growth</p>
        </div>

        <div className="space-y-6 mb-15 pr-[25dvw]">
          <p>At Ambiex, we believe in nurturing progress in the space we design and create.</p>
          <p>We believe in the growth of the client after we part ways. Whether the space is meant for productivity or rest, we give our best to provide a place where anyone could belong.</p>
          <p>The surrounding around us, shapes us. Whether we notice it or not, whether is a large scale, or small. While many of our surrounding is outside of our control, in life, we control what we can.</p>
          <p>From the space we made, we hope that it leaves a good remark, pleasant to remember and to bring onto the next interactions. We hope that the space we designed not only enable greatness, but also gives good memories.</p>
        </div>
      </div>
    </>
  )
}