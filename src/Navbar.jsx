// import React from 'react';
// import logo from './assets/logo-asif.png';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <div className='flex items-center justify-between max-w-7xl mx-auto'>
            
//             <div>
//                 <img className='w-16' src={logo} alt="" />
//             </div>

//             <div className='space-x-6 text-lg font-semibold'>
//                 <NavLink to="/">Home</NavLink>
//                 <NavLink to="/about">About</NavLink>
//                 <NavLink to="/projects">Projects</NavLink>
//                 <NavLink to="/contact">Contact</NavLink>
//             </div>

//         </div>
//     );
// };

// export default Navbar;
import React, { useState } from 'react';
import logo from './assets/logo-asif.png';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white md:bg-transparent relative z-50">
      {/* Main Navbar Container */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        
        {/* Left Side (Mobile: Menu icon, Desktop: Logo) */}
        <div className="flex items-center gap-4">
          {/* Mobile: Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={28} />
            </button>
          </div>

          {/* Logo (left on large, right on small) */}
          <div className="md:block hidden">
            <img src={logo} alt="Logo" className="w-16" />
          </div>
        </div>

        {/* Logo (Right side on small screen) */}
        <div className="block md:hidden ml-auto">
          <img src={logo} alt="Logo" className="w-16" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-14 text-lg font-semibold ml-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col items-center px-6 space-y-8 mt-5 text-lg font-medium font-space">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
