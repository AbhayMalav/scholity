import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Ensure this import is correct
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = ({ onPageChange }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleNavItemClick = (page) => {
    onPageChange(page);
    setMobileDrawerOpen(false); // Close mobile drawer on click
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="flex justify-center">
        <div className="container flex justify-between items-center relative text-sm">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-5" src={logo} alt="logo" />
            <button onClick={() => handleNavItemClick("home")}><span className="text-xl tracking-tight">Scholity Technologies</span></button>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
        
              <li className="relative group">
                <button
                  onClick={() => handleNavItemClick("Idea")}
                  className="relative z-10 bg-coborder-none cursor-pointer text-left"
                > Idea
                </button>
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </li>
              <li className="relative group">
                <button
                  onClick={() => handleNavItemClick('OurFuture')}
                  className="relative z-10 bg-coborder-none cursor-pointer text-left"
                > Our Future
                </button> 
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </li>
              <li className="relative group">
                <button
                  onClick={() => handleNavItemClick('AboutUs')}
                  className="relative z-10 bg-coborder-none cursor-pointer text-left"
                > About Us
                </button> 
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </li>
              

          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <button
              onClick={() => handleNavItemClick('ContactUs')}
              className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md"
            >
              Have an idea?
            </button>
          </div>
          <div className="lg:hidden md:flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col  lg:hidden">
          <ul>
             <li className="py-4">
                <button
                  onClick={() => handleNavItemClick("Idea")}
                  className="relative z-10 bg-coborder-none cursor-pointer text-left"
                > Idea
                </button>
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </li>
              <li className="py-4">
                <button
                  onClick={() => handleNavItemClick('OurFuture')}
                  className="relative z-10 bg-coborder-none cursor-pointer text-left"
                > Our Future
                </button> 
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </li>
              <li className="py-4">
                <button
                  onClick={() => handleNavItemClick('AboutUs')}
                  className="relative z-10 bg-coborder-none cursor-pointer text-left"
                > About Us
                </button> 
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </li>
          </ul>
          <div className="flex space-x-6">
            <button
              onClick={() => handleNavItemClick('ContactUs')}
              className="py-2 mb-2 mt-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800"
            >
              Have an idea?
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
