import React from "react";
import Pic from "../assets/pic.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={Pic}
            alt="Dhanraj"
            className="w-72 h-80 rounded-full object-cover mb-8 mx-auto border-4 border-white shadow-lg"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate app developer with a focus on building modern and responsive app applications.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  App Developer
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Web Developer
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  UI/UX Designer
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              {/* Years Experience Card */}
              <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  1+
                </h3>
                <p className="mt-2">Years Experience</p>
              </div>
              {/* Projects Completed Card */}
              <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  5+
                </h3>
                <p className="mt-2">Projects Completed</p>
              </div>
              {/* Happy Clients Card */}
              <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  3+
                </h3>
                <p className="mt-2">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
