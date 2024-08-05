import React from 'react';

const Resume = () => {
  return (
    <div className='bg-gray-100 text-black text-center py-16'>
      <h1 className='text-3xl font-bold mb-4'>Resume</h1>
      <p className='text-lg mb-8'>
        Here you can find my resume detailing my professional experience and skills.
      </p>
      <a
        href="Dhanraj Resume.pdf"
        download
        className='bg-gradient-to-r from-green-400 to-blue-500 text-white
        px-4 py-2 rounded-full inline-block transform transition-transform duration-300 hover:scale-105'>
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
