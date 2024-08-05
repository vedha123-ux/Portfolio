import React from 'react';
import { Link } from 'react-router-dom';
import Pic from "../assets/pic.jpg";

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      {/* Image section */}
      <img
        src={Pic}
        alt="Dhanraj"
        className="w-72 h-80 rounded-full object-cover mb-8 mx-auto border-4 border-white shadow-lg"
      />
      <h1 className='text-4xl font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500'>Dhanraj D</span>
        <br />
        <br />
        App Developer
      </h1>
      <p className='mt-4 text-lg text-gray-200'>
        I specialize in building modern and responsive app applications.
      </p>
      <div className='mt-8 space-x-4'>
        <Link to="/contact">
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Contact With Me
          </button>
        </Link>
        <Link to="/resume">
          <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Resume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
