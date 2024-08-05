import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/icon.webp";

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4 md:px-8 lg:px-16'>
      <div className='container mx-auto py-2 flex items-center justify-between'>
       
        <Link to="/">
          <img src={Logo} alt="Logo" className='w-10 h-10 rounded-full object-cover' />
        </Link>
        
        <div className='flex space-x-4 md:space-x-6'>
          <Link to="/" className="block px-3 py-1 md:px-4 md:py-2 text-gray-200 hover:bg-gray-700 rounded">Home</Link>
          <Link to="/about" className="block px-3 py-1 md:px-4 md:py-2 text-gray-200 hover:bg-gray-700 rounded">About</Link>
          <Link to="/projects" className="block px-3 py-1 md:px-4 md:py-2 text-gray-200 hover:bg-gray-700 rounded">Projects</Link>
          <Link to="/services" className="block px-3 py-1 md:px-4 md:py-2 text-gray-200 hover:bg-gray-700 rounded">Services</Link>
          <Link to="/contact" className="block px-3 py-1 md:px-4 md:py-2 text-gray-200 hover:bg-gray-700 rounded">Contact Us</Link>
        </div>
        
        <Link to="/contact">
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
