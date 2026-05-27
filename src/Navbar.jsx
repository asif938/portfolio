// // import React from 'react';
// // import logo from './assets/logo-asif.png';
// // import { NavLink } from 'react-router-dom';

// // const Navbar = () => {
// //     return (
// //         <div className='flex items-center justify-between max-w-7xl mx-auto'>
            
// //             <div>
// //                 <img className='w-16' src={logo} alt="" />
// //             </div>

// //             <div className='space-x-6 text-lg font-semibold'>
// //                 <NavLink to="/">Home</NavLink>
// //                 <NavLink to="/about">About</NavLink>
// //                 <NavLink to="/projects">Projects</NavLink>
// //                 <NavLink to="/contact">Contact</NavLink>
// //             </div>

// //         </div>
// //     );
// // };

// // export default Navbar;








import React, { useState } from 'react';
import logo from './assets/logo-asif.png';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent relative z-50">
      {/* Main Navbar Container */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">

        {/* Left Side — Mobile: Hamburger + ThemeToggle | Desktop: Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile: Hamburger + ThemeToggle */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={28} />
            </button>
            {/* <ThemeToggle /> */}
          </div>

          {/* Desktop: Logo */}
          <div className="hidden md:block">
            <img src={logo} alt="Logo" className="w-16" />
          </div>
        </div>

        {/* Mobile: Logo on the right */}
        <div className="block md:hidden ml-auto">
          <img src={logo} alt="Logo" className="w-16" />
        </div>

        {/* Desktop: ThemeToggle + Nav Links */}
        <div className="hidden md:flex items-center space-x-14 text-lg font-semibold ml-auto">
          {/* <ThemeToggle /> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-white dark:bg-gray-900 shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
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




// import React, { useState, useEffect } from 'react';
// import logo from './assets/logo-asif.png';
// import { NavLink } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import ThemeToggle from './ThemeToggle';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   // Lock body scroll when sidebar open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : '';
//     return () => { document.body.style.overflow = ''; };
//   }, [isOpen]);

//   const links = [
//     { to: '/', label: 'Home' },
//     { to: '/about', label: 'About' },
//     { to: '/projects', label: 'Projects' },
//     { to: '/contact', label: 'Contact' },
//   ];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Space+Grotesk:wght@400;500;600&display=swap');

//         .nav-root {
//           position: fixed;
//           top: 0; left: 0; right: 0;
//           z-index: 100;
//           transition: background 0.3s, backdrop-filter 0.3s, border-color 0.3s, box-shadow 0.3s;
//           border-bottom: 1px solid transparent;
//         }
//         .nav-root.scrolled {
//           background: rgba(7, 8, 13, 0.85);
//           backdrop-filter: blur(18px);
//           -webkit-backdrop-filter: blur(18px);
//           border-color: rgba(181, 56, 227, 0.12);
//           box-shadow: 0 4px 32px rgba(0,0,0,0.4);
//         }

//         .nav-inner {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 24px;
//           height: 70px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }

//         /* Logo */
//         .nav-logo img {
//           width: 52px;
//           height: auto;
//           filter: brightness(0) invert(1);
//           transition: filter 0.2s, transform 0.2s;
//         }
//         .nav-logo img:hover {
//           filter: brightness(0) invert(1) drop-shadow(0 0 8px #B538E3);
//           transform: scale(1.05);
//         }

//         /* Desktop links */
//         .nav-links {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           list-style: none;
//           margin: 0; padding: 0;
//         }
//         .nav-links a {
//           font-family: 'Syne', sans-serif;
//           font-size: 0.9rem;
//           font-weight: 600;
//           letter-spacing: 0.04em;
//           color: #64748b;
//           text-decoration: none;
//           padding: 7px 16px;
//           border-radius: 8px;
//           border: 1px solid transparent;
//           transition: color 0.2s, border-color 0.2s, background 0.2s;
//           position: relative;
//         }
//         .nav-links a:hover {
//           color: #cbd5e1;
//           background: rgba(255,255,255,0.04);
//           border-color: rgba(255,255,255,0.07);
//         }
//         .nav-links a.active {
//           color: #B538E3;
//           background: rgba(181,56,227,0.08);
//           border-color: rgba(181,56,227,0.25);
//         }

//         /* CTA button */
//         .nav-cta {
//           font-family: 'Syne', sans-serif;
//           font-size: 0.85rem;
//           font-weight: 700;
//           padding: 8px 20px;
//           border-radius: 8px;
//           background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
//           color: #fff;
//           text-decoration: none;
//           border: none;
//           cursor: pointer;
//           transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
//           box-shadow: 0 2px 16px rgba(181,56,227,0.3);
//           margin-left: 8px;
//         }
//         .nav-cta:hover {
//           transform: translateY(-1px);
//           box-shadow: 0 6px 24px rgba(181,56,227,0.5);
//           opacity: 0.92;
//         }

//         /* Hamburger */
//         .hamburger {
//           display: none;
//           background: none;
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 8px;
//           padding: 7px;
//           cursor: pointer;
//           color: #94a3b8;
//           transition: border-color 0.2s, color 0.2s, background 0.2s;
//         }
//         .hamburger:hover {
//           border-color: rgba(181,56,227,0.4);
//           color: #B538E3;
//           background: rgba(181,56,227,0.06);
//         }

//         /* Overlay */
//         .sidebar-overlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(0,0,0,0.65);
//           backdrop-filter: blur(4px);
//           z-index: 200;
//           opacity: 0;
//           pointer-events: none;
//           transition: opacity 0.3s;
//         }
//         .sidebar-overlay.open {
//           opacity: 1;
//           pointer-events: all;
//         }

//         /* Sidebar */
//         .sidebar {
//           position: fixed;
//           top: 0; left: 0;
//           height: 100%;
//           width: min(280px, 78vw);
//           background: #0b0c14;
//           border-right: 1px solid rgba(181,56,227,0.15);
//           z-index: 300;
//           transform: translateX(-100%);
//           transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
//           display: flex;
//           flex-direction: column;
//         }
//         .sidebar.open { transform: translateX(0); }

//         .sidebar-header {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 18px 20px;
//           border-bottom: 1px solid rgba(255,255,255,0.06);
//         }
//         .sidebar-header img {
//           width: 44px;
//           filter: brightness(0) invert(1);
//         }
//         .sidebar-close {
//           background: rgba(255,255,255,0.04);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 8px;
//           padding: 6px;
//           cursor: pointer;
//           color: #64748b;
//           transition: color 0.2s, border-color 0.2s, background 0.2s;
//         }
//         .sidebar-close:hover {
//           color: #B538E3;
//           border-color: rgba(181,56,227,0.35);
//           background: rgba(181,56,227,0.06);
//         }

//         .sidebar-links {
//           display: flex;
//           flex-direction: column;
//           padding: 28px 16px;
//           gap: 6px;
//           flex: 1;
//         }
//         .sidebar-links a {
//           font-family: 'Syne', sans-serif;
//           font-size: 1rem;
//           font-weight: 600;
//           color: #64748b;
//           text-decoration: none;
//           padding: 13px 18px;
//           border-radius: 10px;
//           border: 1px solid transparent;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           transition: color 0.2s, background 0.2s, border-color 0.2s, transform 0.2s;
//         }
//         .sidebar-links a:hover {
//           color: #cbd5e1;
//           background: rgba(255,255,255,0.04);
//           border-color: rgba(255,255,255,0.07);
//           transform: translateX(4px);
//         }
//         .sidebar-links a.active {
//           color: #B538E3;
//           background: rgba(181,56,227,0.08);
//           border-color: rgba(181,56,227,0.22);
//         }
//         .sidebar-links a::before {
//           content: '';
//           width: 4px; height: 4px;
//           border-radius: 50%;
//           background: currentColor;
//           opacity: 0.5;
//           flex-shrink: 0;
//         }

//         .sidebar-footer {
//           padding: 20px 16px;
//           border-top: 1px solid rgba(255,255,255,0.06);
//         }
//         .sidebar-cta {
//           display: block;
//           text-align: center;
//           font-family: 'Syne', sans-serif;
//           font-size: 0.9rem;
//           font-weight: 700;
//           padding: 13px;
//           border-radius: 10px;
//           background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
//           color: #fff;
//           text-decoration: none;
//           box-shadow: 0 4px 20px rgba(181,56,227,0.3);
//           transition: opacity 0.2s, transform 0.2s;
//         }
//         .sidebar-cta:hover { opacity: 0.88; transform: translateY(-1px); }

//         /* Status badge in sidebar */
//         .sidebar-status {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 10px 18px;
//           margin: 0 16px 16px;
//           background: rgba(181,56,227,0.06);
//           border: 1px solid rgba(181,56,227,0.15);
//           border-radius: 8px;
//           font-family: 'Space Grotesk', sans-serif;
//           font-size: 0.72rem;
//           color: #7c3aed;
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//         }
//         .status-dot {
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background: #B538E3;
//           box-shadow: 0 0 6px #B538E3;
//           animation: pulse 2s ease-in-out infinite;
//           flex-shrink: 0;
//         }
//         @keyframes pulse {
//           0%,100% { opacity: 1; }
//           50% { opacity: 0.3; }
//         }

//         @media (max-width: 768px) {
//           .nav-links, .nav-cta { display: none !important; }
//           .hamburger { display: flex; }
//         }
//       `}</style>

//       {/* Navbar */}
//       <nav className={`nav-root${scrolled ? ' scrolled' : ''}`}>
//         <div className="nav-inner">
//           {/* Logo */}
//           <NavLink to="/" className="nav-logo">
//             <img src={logo} alt="Asif Logo" />
//           </NavLink>

//           {/* Desktop Links */}
//           <ul className="nav-links">
//             {links.map(({ to, label }) => (
//               <li key={to}>
//                 <NavLink to={to} className={({ isActive }) => isActive ? 'active' : ''}>
//                   {label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//             {/* Desktop CTA */}
//             <NavLink to="/contact" className="nav-cta">
//               Hire Me
//             </NavLink>

//             {/* Hamburger — visible on mobile via CSS */}
//             <button className="hamburger" onClick={() => setIsOpen(true)} aria-label="Open menu">
//               <Menu size={20} />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Overlay */}
//       <div
//         className={`sidebar-overlay${isOpen ? ' open' : ''}`}
//         onClick={() => setIsOpen(false)}
//       />

//       {/* Sidebar */}
//       <aside className={`sidebar${isOpen ? ' open' : ''}`}>
//         <div className="sidebar-header">
//           <img src={logo} alt="Logo" />
//           <button className="sidebar-close" onClick={() => setIsOpen(false)} aria-label="Close menu">
//             <X size={18} />
//           </button>
//         </div>

//         <div className="sidebar-status">
//           <span className="status-dot" />
//           Available for work
//         </div>

//         <nav className="sidebar-links">
//           {links.map(({ to, label }) => (
//             <NavLink
//               key={to}
//               to={to}
//               onClick={() => setIsOpen(false)}
//               className={({ isActive }) => isActive ? 'active' : ''}
//             >
//               {label}
//             </NavLink>
//           ))}
//         </nav>

//         <div className="sidebar-footer">
//           <NavLink to="/contact" className="sidebar-cta" onClick={() => setIsOpen(false)}>
//             Hire Me ✦
//           </NavLink>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Navbar;