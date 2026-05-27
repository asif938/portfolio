import React from 'react';
import hero from './assets/Hero-img.png';
import cv from './assets/cv(dev).pdf'
import { Typewriter } from 'react-simple-typewriter'
// import reactLogo from './assets/react.svg'

const Hero = () => {

    // const handleType = (count: number) => {
    //     // access word count number
    //     console.log(count);
    // }

    // const handleDone = () => {
    //     console.log(`Done after 5 loops!`)
    // }

    return (
        <div className="hero-bg">
            <div className='flex flex-col md:flex-row md:items-center md:justify-between max-w-96 lg:max-w-7xl mx-auto gap-3 md:gap-0 pt-20'>
                <div className=''>
                    <h1 className='text-3xl md:text-4xl font-bold font-space'>Hey, I am </h1>
                    <h2 className='text-4xl md:text-5xl font-bold mt-3 font-space'>Sayyed Ahmad Asif</h2>
                    <h1 className='text-3xl font-semibold mt-5'>
                        A{' '}
                        <span className='text-[#B538E3] font-semibold font-space'>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['MERN Stack Developer', 'Graphics Designer', 'Full Stack Developer', 'Cyber Security Enthusiast', 'MERN Stack Developer']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            // onLoopDone={handleDone}
                            // onType={handleType}
                            />
                        </span>
                    </h1>
                    <p className='hidden md:block mt-4 text-lg md:w-[650px] font-space'>I build modern web applications with clean code and scalable architecture using the MERN stack.
                        I'm also passionate about graphics design and continuously expanding my skills.
                        Currently diving deeper into backend systems, and Cyber security.
                        Always learning. Always building.</p>
                    <p className='md:hidden mt-4 text-lg md:w-[650px]'>I build scalable MERN apps, design graphics, and explore backend systems and cybersecurity passionately.
</p>
                    <button className='border-2 mt-5 px-6 py-3 rounded-lg bg-gradient-to-r from-fuchsia-600 to-orange-400  text-white text-lg font-semibold font-space'><a href={cv} download>My Resume</a></button>
                </div>
                <div>
                    <img className='w-[630px]' src={hero} alt="Hero Image" />
                </div>
                {/* <div className="absolute top-36 right-36">
                    <img src={reactLogo} className="logo react w-[100px]" alt="React logo" />
                </div> */}
                <div className="absolute top-[100px] left-[700px]">
                    <img src="https://www.programming-hero.com/banner/react.svg" className="logo react w-[300px]" alt="React logo" />
                </div>
                <div className="absolute top-[500px] right-[50px]">
                    <img src="https://www.programming-hero.com/banner/html.svg" className="logo html w-[150px]" alt="React logo" />
                </div>
                <div className="absolute top-[650px] right-[300px] md:top-[100px] md:right-[150px]">
                    <img src="https://www.programming-hero.com/banner/js.svg" className="js w-[200px]" alt="React logo" />
                </div>
                <div className="absolute top-[450px] left-[650px]">
                    <img src="https://www.programming-hero.com/banner/tailwind.svg" className="tailwind w-[200px]" alt="React logo" />
                </div>

            </div>
        </div>
    );
};

export default Hero;







// import React, { useEffect, useRef } from 'react';
// import hero from './assets/Hero-img.png';
// import cv from './assets/cv(dev).pdf';
// import { Typewriter } from 'react-simple-typewriter';

// const Hero = () => {
//   const orb1 = useRef(null);
//   const orb2 = useRef(null);

//   useEffect(() => {
//     let t = 0;
//     const animate = () => {
//       t += 0.008;
//       if (orb1.current) {
//         orb1.current.style.transform = `translate(${Math.sin(t) * 30}px, ${Math.cos(t * 0.7) * 20}px)`;
//       }
//       if (orb2.current) {
//         orb2.current.style.transform = `translate(${Math.cos(t * 0.9) * 25}px, ${Math.sin(t * 1.1) * 18}px)`;
//       }
//       requestAnimationFrame(animate);
//     };
//     const id = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(id);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap');

//         .hero-section {
//           position: relative;
//           min-height: 100vh;
//           background: #07080d;
//           overflow: hidden;
//           display: flex;
//           align-items: center;
//           font-family: 'Space Grotesk', sans-serif;
//         }

//         /* Animated grid background */
//         .hero-section::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image:
//             linear-gradient(rgba(181, 56, 227, 0.06) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(181, 56, 227, 0.06) 1px, transparent 1px);
//           background-size: 50px 50px;
//           mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
//           pointer-events: none;
//         }

//         /* Glowing orbs */
//         .orb {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(80px);
//           pointer-events: none;
//           transition: transform 0.1s ease-out;
//         }
//         .orb-1 {
//           width: 400px; height: 400px;
//           background: radial-gradient(circle, rgba(181,56,227,0.35) 0%, transparent 70%);
//           top: -100px; left: -100px;
//         }
//         .orb-2 {
//           width: 350px; height: 350px;
//           background: radial-gradient(circle, rgba(251,146,60,0.25) 0%, transparent 70%);
//           bottom: -80px; right: -60px;
//         }

//         /* Content wrapper */
//         .hero-inner {
//           position: relative;
//           z-index: 10;
//           width: 100%;
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 100px 20px 60px;
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 40px;
//           align-items: center;
//         }

//         @media (min-width: 900px) {
//           .hero-inner {
//             grid-template-columns: 1fr 1fr;
//             gap: 60px;
//             padding: 0 48px;
//           }
//         }

//         /* Text side */
//         .hero-text { display: flex; flex-direction: column; gap: 0; }

//         .hero-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: rgba(181,56,227,0.12);
//           border: 1px solid rgba(181,56,227,0.3);
//           border-radius: 100px;
//           padding: 6px 16px;
//           font-size: 12px;
//           font-weight: 500;
//           color: #c96de8;
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           width: fit-content;
//           margin-bottom: 20px;
//         }
//         .hero-badge::before {
//           content: '';
//           width: 7px; height: 7px;
//           border-radius: 50%;
//           background: #B538E3;
//           box-shadow: 0 0 8px #B538E3;
//           animation: pulse 2s ease-in-out infinite;
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.3; }
//         }

//         .hero-name {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(2rem, 6vw, 3.6rem);
//           font-weight: 800;
//           line-height: 1.1;
//           color: #ffffff;
//           margin: 0 0 8px;
//           letter-spacing: -0.02em;
//         }
//         .hero-name .greeting {
//           display: block;
//           font-size: clamp(1rem, 3vw, 1.4rem);
//           font-weight: 400;
//           color: #8892a4;
//           letter-spacing: 0;
//           margin-bottom: 6px;
//         }
//         .name-highlight {
//           background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .hero-role {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(1.1rem, 3.5vw, 1.6rem);
//           font-weight: 600;
//           color: #94a3b8;
//           margin: 16px 0 0;
//           min-height: 2.2em;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           flex-wrap: wrap;
//         }
//         .role-prefix { color: #94a3b8; }
//         .role-typed { color: #B538E3; }

//         .hero-desc {
//           font-size: clamp(0.9rem, 2.5vw, 1rem);
//           line-height: 1.75;
//           color: #64748b;
//           margin: 20px 0 0;
//           max-width: 560px;
//         }

//         /* CTA buttons */
//         .hero-ctas {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 14px;
//           margin-top: 32px;
//         }
//         .btn-primary {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 13px 28px;
//           background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
//           color: white;
//           font-family: 'Syne', sans-serif;
//           font-size: 0.95rem;
//           font-weight: 700;
//           border-radius: 10px;
//           text-decoration: none;
//           border: none;
//           cursor: pointer;
//           position: relative;
//           overflow: hidden;
//           transition: transform 0.2s, box-shadow 0.2s;
//           box-shadow: 0 4px 24px rgba(181,56,227,0.35);
//         }
//         .btn-primary::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg, #c94cf5 0%, #fb923c 100%);
//           opacity: 0;
//           transition: opacity 0.2s;
//         }
//         .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(181,56,227,0.5); }
//         .btn-primary:hover::before { opacity: 1; }
//         .btn-primary span { position: relative; z-index: 1; }

//         .btn-ghost {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 12px 26px;
//           background: transparent;
//           color: #94a3b8;
//           font-family: 'Syne', sans-serif;
//           font-size: 0.95rem;
//           font-weight: 600;
//           border-radius: 10px;
//           border: 1px solid rgba(148,163,184,0.2);
//           cursor: pointer;
//           transition: border-color 0.2s, color 0.2s, background 0.2s;
//           text-decoration: none;
//         }
//         .btn-ghost:hover {
//           border-color: rgba(181,56,227,0.5);
//           color: #B538E3;
//           background: rgba(181,56,227,0.06);
//         }

//         /* Divider stat row */
//         .hero-stats {
//           display: flex;
//           gap: 28px;
//           margin-top: 36px;
//           padding-top: 28px;
//           border-top: 1px solid rgba(255,255,255,0.06);
//           flex-wrap: wrap;
//         }
//         .stat { display: flex; flex-direction: column; gap: 2px; }
//         .stat-num {
//           font-family: 'Syne', sans-serif;
//           font-size: 1.5rem;
//           font-weight: 800;
//           color: #fff;
//         }
//         .stat-num span { color: #B538E3; }
//         .stat-label { font-size: 0.75rem; color: #475569; text-transform: uppercase; letter-spacing: 0.08em; }

//         /* Image side */
//         .hero-visual {
//           position: relative;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .image-frame {
//           position: relative;
//           width: min(340px, 85vw);
//         }

//         @media (min-width: 900px) {
//           .image-frame { width: 100%; max-width: 440px; }
//         }

//         /* Glowing border ring */
//         .image-ring {
//           position: absolute;
//           inset: -3px;
//           border-radius: 28px;
//           background: linear-gradient(135deg, #B538E3, #f97316, #B538E3);
//           background-size: 200% 200%;
//           animation: gradientShift 4s ease infinite;
//           z-index: 0;
//           filter: blur(1px);
//         }
//         @keyframes gradientShift {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         .image-wrap {
//           position: relative;
//           z-index: 1;
//           border-radius: 26px;
//           overflow: hidden;
//           background: #0f1118;
//         }
//         .image-wrap img {
//           display: block;
//           width: 100%;
//           height: auto;
//           object-fit: cover;
//         }

//         /* Floating tech pills */
//         .tech-pill {
//           position: absolute;
//           display: flex;
//           align-items: center;
//           gap: 7px;
//           padding: 8px 14px;
//           background: rgba(7,8,13,0.85);
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 100px;
//           font-size: 0.75rem;
//           font-weight: 600;
//           color: #cbd5e1;
//           backdrop-filter: blur(12px);
//           white-space: nowrap;
//           z-index: 10;
//           animation: floatPill 3s ease-in-out infinite;
//           box-shadow: 0 8px 24px rgba(0,0,0,0.4);
//         }
//         .tech-pill img { width: 18px; height: 18px; object-fit: contain; }

//         .pill-react  { top: -16px; left: 50%; transform: translateX(-50%); animation-delay: 0s; }
//         .pill-js     { bottom: 20px; left: -20px; animation-delay: 0.8s; }
//         .pill-tailwind { bottom: -16px; right: 10%; animation-delay: 1.6s; }

//         @keyframes floatPill {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-6px); }
//         }
//         .pill-react { top: -16px; left: 50%; transform: translateX(-50%); }
//         .pill-react:hover { transform: translateX(-50%) translateY(-4px); }
//         .pill-js { bottom: 20px; left: -20px; }
//         .pill-tailwind { bottom: -16px; right: 10%; }

//         /* Scroll indicator */
//         .scroll-hint {
//           position: absolute;
//           bottom: 30px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 6px;
//           color: #334155;
//           font-size: 0.7rem;
//           letter-spacing: 0.12em;
//           text-transform: uppercase;
//           animation: fadeInUp 1s ease 0.8s both;
//         }
//         .scroll-line {
//           width: 1px;
//           height: 40px;
//           background: linear-gradient(to bottom, transparent, #B538E3);
//           animation: scrollDrop 1.8s ease-in-out infinite;
//         }
//         @keyframes scrollDrop {
//           0% { transform: scaleY(0); transform-origin: top; }
//           50% { transform: scaleY(1); transform-origin: top; }
//           51% { transform: scaleY(1); transform-origin: bottom; }
//           100% { transform: scaleY(0); transform-origin: bottom; }
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateX(-50%) translateY(16px); }
//           to   { opacity: 1; transform: translateX(-50%) translateY(0); }
//         }

//         /* Entrance animations */
//         .fade-up { animation: fadeUp 0.7s ease both; }
//         .fade-up-1 { animation-delay: 0.05s; }
//         .fade-up-2 { animation-delay: 0.15s; }
//         .fade-up-3 { animation-delay: 0.25s; }
//         .fade-up-4 { animation-delay: 0.35s; }
//         .fade-up-5 { animation-delay: 0.45s; }
//         .fade-right { animation: fadeRight 0.8s ease 0.3s both; }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(24px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeRight {
//           from { opacity: 0; transform: translateX(30px); }
//           to   { opacity: 1; transform: translateX(0); }
//         }
//       `}</style>

//       <section className="hero-section">
//         {/* Ambient orbs */}
//         <div className="orb orb-1" ref={orb1} />
//         <div className="orb orb-2" ref={orb2} />

//         <div className="hero-inner">
//           {/* ── Text column ── */}
//           <div className="hero-text">
//             <div className="hero-badge fade-up fade-up-1">Available for opportunities</div>

//             <h1 className="hero-name fade-up fade-up-2">
//               <span className="greeting">Hey, I'm</span>
//               <span className="name-highlight">Sayyed Ahmad Asif</span>
//             </h1>

//             <div className="hero-role fade-up fade-up-3">
//               <span className="role-prefix">A</span>
//               <span className="role-typed">
//                 <Typewriter
//                   words={[
//                     'MERN Stack Developer',
//                     'Graphics Designer',
//                     'Full Stack Developer',
//                     'Cyber Security Enthusiast',
//                   ]}
//                   loop={0}
//                   cursor
//                   cursorStyle="|"
//                   typeSpeed={70}
//                   deleteSpeed={45}
//                   delaySpeed={1200}
//                 />
//               </span>
//             </div>

//             <p className="hero-desc fade-up fade-up-4">
//               I build modern web applications with clean code and scalable architecture
//               using the MERN stack. Passionate about graphics design, backend systems,
//               and continuously expanding into cybersecurity.
//               <br />Always learning. Always building.
//             </p>

//             <div className="hero-ctas fade-up fade-up-5">
//               <a href={cv} download className="btn-primary">
//                 <span>↓ Download Resume</span>
//               </a>
//               <a href="#projects" className="btn-ghost">
//                 View Projects →
//               </a>
//             </div>

//             <div className="hero-stats fade-up fade-up-5">
//               <div className="stat">
//                 <span className="stat-num">2<span>+</span></span>
//                 <span className="stat-label">Years Coding</span>
//               </div>
//               <div className="stat">
//                 <span className="stat-num">15<span>+</span></span>
//                 <span className="stat-label">Projects Built</span>
//               </div>
//               <div className="stat">
//                 <span className="stat-num">4<span>+</span></span>
//                 <span className="stat-label">Tech Stacks</span>
//               </div>
//             </div>
//           </div>

//           {/* ── Image column ── */}
//           <div className="hero-visual fade-right">
//             <div className="image-frame">
//               <div className="image-ring" />
//               <div className="image-wrap">
//                 <img src={hero} alt="Sayyed Ahmad Asif" />
//               </div>

//               {/* Floating tech pills */}
//               <div className="tech-pill pill-react" style={{ animation: 'floatPill 3s ease-in-out infinite' }}>
//                 <img src="https://www.programming-hero.com/banner/react.svg" alt="React" />
//                 React
//               </div>
//               <div className="tech-pill pill-js" style={{ animation: 'floatPill 3s ease-in-out 0.8s infinite' }}>
//                 <img src="https://www.programming-hero.com/banner/js.svg" alt="JS" />
//                 JavaScript
//               </div>
//               <div className="tech-pill pill-tailwind" style={{ animation: 'floatPill 3s ease-in-out 1.6s infinite' }}>
//                 <img src="https://www.programming-hero.com/banner/tailwind.svg" alt="Tailwind" />
//                 Tailwind
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="scroll-hint">
//           <div className="scroll-line" />
//           <span>scroll</span>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;

