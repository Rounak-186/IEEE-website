"use client";

import React from 'react';
import ieeeImage from '../../assets/image.png';

export default function AboutPage() {
  return (
    <div className='w-full flex flex-col justify-center'>
      {/* main heading */}
      <div className='flex flex-col items-center justify-center p-25 bg-[var(--primary)] gap-2'>
        <h1 className='text-5xl font-bold text-white'>
          About IEEE
        </h1>
        <h4 className='text-center text-xl  text-white px-10'>
          The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
        </h4>
      </div>
      {/* Mission */}
      <div className='flex justify-center gap-5 p-20'>
        {/* mission para */}
        <div>
          <h1 className='text-4xl'>OUR MISSION</h1>
          {/* writing */}
          <div className='flex flex-col justify-center gap-4 mt-6 text-lg'>
            <p>
              IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity. We serve professionals involved in all aspects of the electrical, electronic, and computing fields and related areas of science and technology.
            </p>
            <p>
              Through our global network of members, volunteers, and staff, we create, develop, integrate, share, and apply knowledge about electrical and information technologies and sciences for the benefit of humanity and the profession.
            </p>
          </div>
        </div>
        {/* Image */}
        <div className='w-full'>
          <img src={ieeeImage.src} alt="IEEEimage" className='rounded-md '/>
        </div>
      </div>
    </div>
  )
}
