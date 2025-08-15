// Navbar.jsx
import React, { useState } from 'react';
import { FaGraduationCap } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className=" py-5 px-6 md:px-10 bg-blue-50  ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a
            href="#"
            className=" flex items-center gap-2 text-3xl font-extrabold bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent transition duration-300"
          >
            <FaGraduationCap className='text-blue-500 '/>UniRepo
          </a>
          <nav className="hidden lg:block ml-12">
            <ul className="flex space-x-8">
              <li><a href="#" className="font-medium bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent hover:from-blue-800 transition duration-300">Home</a></li>
              <li><a href="#" className="font-medium text-gray-700 hover:bg-gradient-to-tr hover:from-blue-700 hover:via-blue-500 hover:to-blue-300 hover:bg-clip-text hover:text-transparent transition duration-300">Projects</a></li>
              <li><a href="#" className="font-medium text-gray-700 hover:bg-gradient-to-tr hover:from-blue-700 hover:via-blue-500 hover:to-blue-300 hover:bg-clip-text hover:text-transparent transition duration-300">Forums</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-5">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-12 pr-5 py-2.5 rounded-full bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
            />
            <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition duration-300 flex items-center font-semibold">
            <CiCirclePlus className="mr-2 text-white text-2xl" />
            Ask Question
          </button>
          <a href="#" className="text-gray-700 hover:text-blue-500 transition duration-300 hidden md:block border p-2 rounded-full hover:bg-blue-100">
            <FaUser className="text-xl" />
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-500 text-3xl"
          >
            <FaBars />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <nav className={`lg:hidden mt-4 ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <ul className="flex flex-col space-y-2">
          <li><a href="#" className="block font-medium text-gray-700 hover:bg-gradient-to-tr hover:from-blue-700 hover:via-blue-500 hover:to-blue-300 hover:bg-clip-text hover:text-transparent transition duration-300 py-2">Home</a></li>
          <li><a href="#" className="block font-medium text-gray-700 hover:bg-gradient-to-tr hover:from-blue-700 hover:via-blue-500 hover:to-blue-300 hover:bg-clip-text hover:text-transparent transition duration-300 py-2">Projects</a></li>
          <li><a href="#" className="block font-medium text-gray-700 hover:bg-gradient-to-tr hover:from-blue-700 hover:via-blue-500 hover:to-blue-300 hover:bg-clip-text hover:text-transparent transition duration-300 py-2">Forums</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
