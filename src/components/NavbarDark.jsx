// import React, { useState, useEffect } from 'react';
// import logo from '../assets/logo-asif.png';
// import { NavLink } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import { FiSun, FiMoon } from 'react-icons/fi';
// import { useTheme } from '../providers/ThemeContext';
// // import { useTheme } from './providers/ThemeContext';

// const links = [
//   { to: '/',        label: 'Home' },
//   { to: '/about',   label: 'About' },
//   { to: '/projects',label: 'Projects' },
//   { to: '/contact', label: 'Contact' },
// ];

// const NavbarDark = () => {
//   const [isOpen, setIsOpen]   = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { theme, setTheme }   = useTheme();
//   const isDark = theme === 'dark';

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : '';
//     return () => { document.body.style.overflow = ''; };
//   }, [isOpen]);

//   const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Space+Grotesk:wght@400;500;600&display=swap');

//         .font-syne  { font-family: 'Syne', sans-serif; }
//         .font-space { font-family: 'Space Grotesk', sans-serif; }

//         /* ── Navbar scroll state ── */
//         .nav-root {
//           position: fixed;
//           top: 0; left: 0; right: 0;
//           z-index: 100;
//           border-bottom: 1px solid transparent;
//           transition: background 0.3s, backdrop-filter 0.3s, border-color 0.3s, box-shadow 0.3s;
//         }
//         .nav-root.scrolled {
//           background: rgba(7,8,13,0.85);
//           backdrop-filter: blur(18px);
//           -webkit-backdrop-filter: blur(18px);
//           border-color: rgba(181,56,227,0.12);
//           box-shadow: 0 4px 32px rgba(0,0,0,0.4);
//         }

//         /* Desktop nav links */
//         .nav-link {
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
//         }
//         .nav-link:hover {
//           color: #cbd5e1;
//           background: rgba(255,255,255,0.04);
//           border-color: rgba(255,255,255,0.07);
//         }
//         .nav-link.active {
//           color: #B538E3;
//           background: rgba(181,56,227,0.08);
//           border-color: rgba(181,56,227,0.25);
//         }

//         /* Theme toggle button */
//         .theme-btn {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 36px; height: 36px;
//           border-radius: 8px;
//           border: 1px solid rgba(255,255,255,0.1);
//           background: rgba(255,255,255,0.03);
//           color: #94a3b8;
//           cursor: pointer;
//           transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
//           flex-shrink: 0;
//         }
//         .theme-btn:hover {
//           color: #B538E3;
//           border-color: rgba(181,56,227,0.4);
//           background: rgba(181,56,227,0.06);
//         //   transform: rotate(15deg);
//         }
//         .theme-btn svg { width: 16px; height: 16px; }

//         /* Hamburger */
//         .hamburger {
//           display: none;
//           align-items: center;
//           justify-content: center;
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
//         .sidebar-overlay.open { opacity: 1; pointer-events: all; }

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
//           transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
//           display: flex;
//           flex-direction: column;
//         }
//         .sidebar.open { transform: translateX(0); }

//         .sidebar-link {
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
//         .sidebar-link::before {
//           content: '';
//           width: 4px; height: 4px;
//           border-radius: 50%;
//           background: currentColor;
//           opacity: 0.5;
//           flex-shrink: 0;
//         }
//         .sidebar-link:hover {
//           color: #cbd5e1;
//           background: rgba(255,255,255,0.04);
//           border-color: rgba(255,255,255,0.07);
//           transform: translateX(4px);
//         }
//         .sidebar-link.active {
//           color: #B538E3;
//           background: rgba(181,56,227,0.08);
//           border-color: rgba(181,56,227,0.22);
//         }

//         /* Sidebar theme toggle row */
//         .sidebar-theme-row {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 12px 18px;
//           margin: 0 16px 8px;
//           background: rgba(255,255,255,0.02);
//           border: 1px solid rgba(255,255,255,0.06);
//           border-radius: 10px;
//           font-family: 'Space Grotesk', sans-serif;
//           font-size: 0.8rem;
//           color: #475569;
//         }
//         .sidebar-theme-pill {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           padding: 5px 12px;
//           border-radius: 100px;
//           background: rgba(181,56,227,0.1);
//           border: 1px solid rgba(181,56,227,0.22);
//           color: #c96de8;
//           font-size: 0.75rem;
//           font-weight: 600;
//           cursor: pointer;
//           transition: background 0.2s, border-color 0.2s;
//         }
//         .sidebar-theme-pill:hover {
//           background: rgba(181,56,227,0.18);
//           border-color: rgba(181,56,227,0.4);
//         }

//         /* Status dot */
//         .status-dot {
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background: #B538E3;
//           box-shadow: 0 0 6px #B538E3;
//           animation: pulse-dot 2s ease-in-out infinite;
//           flex-shrink: 0;
//         }
//         @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.3} }

//         @media (max-width: 768px) {
//           .nav-links-desktop { display: none !important; }
//           .nav-cta-desktop    { display: none !important; }
//           .hamburger          { display: flex; }
//         }
//       `}</style>

//       {/* ── Navbar ── */}
//       <nav className={`nav-root${scrolled ? ' scrolled' : ''}`}>
//         <div className="max-w-[1280px] mx-auto px-6 h-[70px] flex items-center justify-between">

//           {/* Logo */}
//           <NavLink to="/" className="flex-shrink-0 group">
//             <img
//               src={logo}
//               alt="Asif Logo"
//               className="w-[52px] h-auto transition-all duration-200 group-hover:scale-105"
//               style={{ filter: 'brightness(0) invert(1)' }}
//               onMouseEnter={e => e.currentTarget.style.filter = 'brightness(0) invert(1) drop-shadow(0 0 8px #B538E3)'}
//               onMouseLeave={e => e.currentTarget.style.filter = 'brightness(0) invert(1)'}
//             />
//           </NavLink>

//           {/* Desktop links */}
//           <ul className="nav-links-desktop flex items-center gap-2 list-none m-0 p-0">
//             {links.map(({ to, label }) => (
//               <li key={to}>
//                 <NavLink
//                   to={to}
//                   className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
//                 >
//                   {label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           {/* Right actions */}
//           <div className="flex items-center gap-2.5">

//             {/* Theme toggle — desktop */}
//             <button
//               className="theme-btn nav-links-desktop"
//               onClick={toggleTheme}
//               aria-label="Toggle theme"
//               title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
//             >
//               {isDark ? <FiSun /> : <FiMoon />}
//             </button>

//             {/* Hire Me CTA — desktop */}
//             <NavLink
//               to="/contact"
//               className="nav-cta-desktop font-syne text-[0.85rem] font-bold px-5 py-2 rounded-[8px] bg-gradient-to-br from-[#B538E3] to-[#f97316] text-white no-underline transition-all duration-200 hover:-translate-y-px shadow-[0_2px_16px_rgba(181,56,227,0.3)] hover:shadow-[0_6px_24px_rgba(181,56,227,0.5)] hover:opacity-90"
//             >
//               Hire Me
//             </NavLink>

//             {/* Hamburger — mobile */}
//             <button
//               className="hamburger"
//               onClick={() => setIsOpen(true)}
//               aria-label="Open menu"
//             >
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

//       {/* ── Sidebar ── */}
//       <aside className={`sidebar${isOpen ? ' open' : ''}`}>

//         {/* Header */}
//         <div className="flex items-center justify-between px-5 py-[18px] border-b border-white/[0.06]">
//           <img
//             src={logo}
//             alt="Logo"
//             className="w-[44px]"
//             style={{ filter: 'brightness(0) invert(1)' }}
//           />
//           <button
//             className="flex items-center justify-center p-1.5 bg-white/[0.04] border border-white/[0.08] rounded-lg text-[#64748b] transition-all duration-200 hover:text-[#B538E3] hover:border-[rgba(181,56,227,0.35)] hover:bg-[rgba(181,56,227,0.06)] cursor-pointer"
//             onClick={() => setIsOpen(false)}
//             aria-label="Close menu"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         {/* Status badge */}
//         <div className="flex items-center gap-2 mx-4 my-4 px-[18px] py-2.5 bg-[rgba(181,56,227,0.06)] border border-[rgba(181,56,227,0.15)] rounded-[8px] font-space text-[0.72rem] text-[#7c3aed] tracking-[0.06em] uppercase">
//           <span className="status-dot" />
//           Available for work
//         </div>

//         {/* Nav links */}
//         <nav className="flex flex-col px-4 gap-1.5 flex-1">
//           {links.map(({ to, label }) => (
//             <NavLink
//               key={to}
//               to={to}
//               onClick={() => setIsOpen(false)}
//               className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
//             >
//               {label}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Theme toggle row */}
//         <div className="sidebar-theme-row mx-4 mb-3">
//           <span>{isDark ? '🌙 Dark mode' : '☀️ Light mode'}</span>
//           <button className="sidebar-theme-pill" onClick={toggleTheme}>
//             {isDark ? <FiSun size={13} /> : <FiMoon size={13} />}
//             {isDark ? 'Light' : 'Dark'}
//           </button>
//         </div>

//         {/* Footer CTA */}
//         <div className="px-4 pb-5 pt-2 border-t border-white/[0.06]">
//           <NavLink
//             to="/contact"
//             className="block text-center font-syne text-[0.9rem] font-bold py-3.5 rounded-[10px] bg-gradient-to-br from-[#B538E3] to-[#f97316] text-white no-underline shadow-[0_4px_20px_rgba(181,56,227,0.3)] transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
//             onClick={() => setIsOpen(false)}
//           >
//             Hire Me ✦
//           </NavLink>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default NavbarDark;








import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-asif.png';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../providers/ThemeContext';

const links = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const NavbarDark = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';


  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Space+Grotesk:wght@400;500;600&display=swap');

        .font-syne  { font-family: 'Syne', sans-serif; }
        .font-space { font-family: 'Space Grotesk', sans-serif; }

        /* ── Navbar scroll state ── */
        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          border-bottom: 1px solid transparent;
          transition: background 0.3s, backdrop-filter 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        .nav-root.scrolled {
          background: rgba(7,8,13,0.85);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-color: rgba(181,56,227,0.12);
          box-shadow: 0 4px 32px rgba(0,0,0,0.4);
        }

        /* Desktop nav links */
        .nav-link {
          font-family: 'Syne', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #64748b;
          text-decoration: none;
          padding: 7px 16px;
          border-radius: 8px;
          border: 1px solid transparent;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .nav-link:hover {
          color: #cbd5e1;
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.07);
        }
        .nav-link.active {
          color: #B538E3;
          background: rgba(181,56,227,0.08);
          border-color: rgba(181,56,227,0.25);
        }

        /* Theme toggle button */
        .theme-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px; height: 36px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: #94a3b8;
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
          flex-shrink: 0;
        }
        .theme-btn:hover {
          color: #B538E3;
          border-color: rgba(181,56,227,0.4);
          background: rgba(181,56,227,0.06);
        }
        .theme-btn svg { width: 16px; height: 16px; }

        /* Hamburger — always hidden on desktop, flex on mobile */
        .hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          background: none;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 7px;
          cursor: pointer;
          color: #94a3b8;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .hamburger:hover {
          border-color: rgba(181,56,227,0.4);
          color: #B538E3;
          background: rgba(181,56,227,0.06);
        }

        /* Sidebar link */
        .sidebar-link {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #64748b;
          text-decoration: none;
          padding: 13px 18px;
          border-radius: 10px;
          border: 1px solid transparent;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.2s, background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .sidebar-link::before {
          content: '';
          width: 4px; height: 4px;
          border-radius: 50%;
          background: currentColor;
          opacity: 0.5;
          flex-shrink: 0;
        }
        .sidebar-link:hover {
          color: #cbd5e1;
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.07);
          transform: translateX(4px);
        }
        .sidebar-link.active {
          color: #B538E3;
          background: rgba(181,56,227,0.08);
          border-color: rgba(181,56,227,0.22);
        }

        /* Sidebar theme toggle row */
        .sidebar-theme-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          margin: 0 16px 8px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.8rem;
          color: #475569;
        }
        .sidebar-theme-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 100px;
          background: rgba(181,56,227,0.1);
          border: 1px solid rgba(181,56,227,0.22);
          color: #c96de8;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .sidebar-theme-pill:hover {
          background: rgba(181,56,227,0.18);
          border-color: rgba(181,56,227,0.4);
        }

        /* Status dot */
        .status-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #B538E3;
          box-shadow: 0 0 6px #B538E3;
          animation: pulse-dot 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.3} }

        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop    { display: none !important; }
          .theme-btn-desktop  { display: none !important; }
          .hamburger          { display: flex !important; }
        }
      `}</style>

      {/* ── Navbar ── */}
      <nav className={`nav-root${scrolled ? ' scrolled' : ''}`}>
        <div className="max-w-[1280px] mx-auto px-6 h-[70px] flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0 group">
            <img
              src={logo}
              alt="Asif Logo"
              className="w-[52px] h-auto transition-all duration-200 group-hover:scale-105"
              style={{ filter: 'brightness(0) invert(1)' }}
              onMouseEnter={e => e.currentTarget.style.filter = 'brightness(0) invert(1) drop-shadow(0 0 8px #B538E3)'}
              onMouseLeave={e => e.currentTarget.style.filter = 'brightness(0) invert(1)'}
            />
          </NavLink>

          {/* Desktop links */}
          <ul className="nav-links-desktop flex items-center gap-2 list-none m-0 p-0">
            {links.map(({ to, label }) => (
              <li key={to}>
                {/* <NavLink
                  to={to}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {label}
                </NavLink> */}
                <button
                  onClick={() => scrollToSection(to)}
                  className="nav-link"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2.5">

            {/* Theme toggle — desktop only */}
            {/* <button
              className="theme-btn theme-btn-desktop"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button> */}

            {/* Hire Me CTA — desktop only */}
            {/* <NavLink
              to="/contact"
              className="nav-cta-desktop font-syne text-[0.85rem] font-bold px-5 py-2 rounded-[8px] bg-gradient-to-br from-[#B538E3] to-[#f97316] text-white no-underline transition-all duration-200 hover:-translate-y-px shadow-[0_2px_16px_rgba(181,56,227,0.3)] hover:shadow-[0_6px_24px_rgba(181,56,227,0.5)] hover:opacity-90"
            >
              Hire Me
            </NavLink> */}
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-cta-desktop font-syne text-[0.85rem] font-bold px-5 py-2 rounded-[8px] bg-gradient-to-br from-[#B538E3] to-[#f97316] text-white no-underline transition-all duration-200 hover:-translate-y-px shadow-[0_2px_16px_rgba(181,56,227,0.3)] hover:shadow-[0_6px_24px_rgba(181,56,227,0.5)] hover:opacity-90"
            >
              Hire Me
            </button>

            {/* Hamburger — mobile only */}
            <button
              className="hamburger"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Overlay — controlled via inline styles ── */}
      <div
        onClick={() => setIsOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.65)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          zIndex: 200,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'all' : 'none',
          transition: 'opacity 0.3s',
        }}
      />

      {/* ── Sidebar — controlled via inline styles ── */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          width: 'min(280px, 78vw)',
          background: '#0b0c14',
          borderRight: '1px solid rgba(181,56,227,0.15)',
          zIndex: 300,
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-[18px] border-b border-white/[0.06]">
          <img
            src={logo}
            alt="Logo"
            className="w-[44px]"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <button
            className="flex items-center justify-center p-1.5 bg-white/[0.04] border border-white/[0.08] rounded-lg text-[#64748b] transition-all duration-200 hover:text-[#B538E3] hover:border-[rgba(181,56,227,0.35)] hover:bg-[rgba(181,56,227,0.06)] cursor-pointer"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Status badge */}
        <div className="flex items-center gap-2 mx-4 my-4 px-[18px] py-2.5 bg-[rgba(181,56,227,0.06)] border border-[rgba(181,56,227,0.15)] rounded-[8px] font-space text-[0.72rem] text-[#7c3aed] tracking-[0.06em] uppercase">
          <span className="status-dot" />
          Available for work
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-4 gap-1.5 flex-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Theme toggle row */}
        {/* <div className="sidebar-theme-row">
          <span>{isDark ? '🌙 Dark mode' : '☀️ Light mode'}</span>
          <button className="sidebar-theme-pill" onClick={toggleTheme}>
            {isDark ? <FiSun size={13} /> : <FiMoon size={13} />}
            {isDark ? 'Light' : 'Dark'}
          </button>
        </div> */}

        {/* Footer CTA */}
        <div className="px-4 pb-5 pt-2 border-t border-white/[0.06]">
          <NavLink
            to="/contact"
            className="block text-center font-syne text-[0.9rem] font-bold py-3.5 rounded-[10px] bg-gradient-to-br from-[#B538E3] to-[#f97316] text-white no-underline shadow-[0_4px_20px_rgba(181,56,227,0.3)] transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
            onClick={() => setIsOpen(false)}
          >
            Hire Me ✦
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default NavbarDark;