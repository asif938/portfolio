import React from 'react';
import about from './assets/about-img.jpg';

const About = () => {
    return (
        <div className=' max-w-96 lg:max-w-7xl mx-auto mt-20 md:mt-32'>
            <h1 className='text-4xl font-bold mb-10 md:hidden text-center'>About Me</h1>
            <div className='flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-20'>
                <div>
                    <img className='w-[350px] md:w-[400px] rounded-3xl' src={about} alt="" />
                </div>
                <div>
                    <h1 className='text-4xl font-bold mb-10 hidden md:block'>About Me</h1>
                    <p className='mt-4 text-lg max-w-xl mx-auto'>
                        I am a passionate developer with a love for creating amazing web experiences.
                        My journey in web development has been fueled by curiosity and a desire to learn new technologies.
                        I enjoy working on projects that challenge me and allow me to grow as a developer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;



// import React, { useState } from 'react';
// import about from './assets/about-img.jpg';

// const skills = [
//   { label: 'React / Next.js', pct: 90, color: '#B538E3' },
//   { label: 'Node.js / Express', pct: 82, color: '#f97316' },
//   { label: 'MongoDB / SQL', pct: 75, color: '#06b6d4' },
//   { label: 'UI/UX & Graphics', pct: 85, color: '#B538E3' },
// ];

// const badges = [
//   { icon: '⚡', text: 'MERN Stack' },
//   { icon: '🎨', text: 'Graphics Design' },
//   { icon: '🔐', text: 'Cyber Security' },
//   { icon: '📦', text: 'REST APIs' },
//   { icon: '🌐', text: 'Full Stack' },
//   { icon: '🛠️', text: 'Problem Solver' },
// ];

// const About = () => {
//   const [imgLoaded, setImgLoaded] = useState(false);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap');

//         .about-section {
//           position: relative;
//           padding: 100px 20px;
//           background: #07080d;
//           overflow: hidden;
//           font-family: 'Space Grotesk', sans-serif;
//         }

//         /* Grid bg */
//         .about-section::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image:
//             linear-gradient(rgba(181,56,227,0.04) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(181,56,227,0.04) 1px, transparent 1px);
//           background-size: 50px 50px;
//           pointer-events: none;
//         }

//         /* Ambient orb */
//         .about-orb {
//           position: absolute;
//           width: 500px; height: 500px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%);
//           filter: blur(60px);
//           bottom: -100px; right: -100px;
//           pointer-events: none;
//         }

//         .about-inner {
//           position: relative;
//           z-index: 2;
//           max-width: 1100px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 56px;
//           align-items: center;
//         }
//         @media (min-width: 900px) {
//           .about-inner {
//             grid-template-columns: 1fr 1fr;
//             gap: 80px;
//           }
//         }

//         /* ── Image side ── */
//         .about-img-col {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .about-img-frame {
//           position: relative;
//           width: min(340px, 88vw);
//           flex-shrink: 0;
//         }
//         @media (min-width: 900px) {
//           .about-img-frame { width: 100%; max-width: 400px; }
//         }

//         /* Rotating border ring */
//         .about-img-ring {
//           position: absolute;
//           inset: -4px;
//           border-radius: 30px;
//           background: conic-gradient(
//             from 0deg,
//             #B538E3, #f97316, #06b6d4, #B538E3
//           );
//           animation: spin-ring 6s linear infinite;
//           z-index: 0;
//           opacity: 0.7;
//         }
//         @keyframes spin-ring {
//           to { transform: rotate(360deg); }
//         }

//         .about-img-inner {
//           position: relative;
//           z-index: 1;
//           border-radius: 28px;
//           overflow: hidden;
//           background: #0f1118;
//           line-height: 0;
//         }
//         .about-img-inner img {
//           display: block;
//           width: 100%;
//           height: auto;
//           object-fit: cover;
//           transition: transform 0.5s ease;
//           opacity: 0;
//           transition: opacity 0.5s, transform 0.5s;
//         }
//         .about-img-inner img.loaded {
//           opacity: 1;
//         }
//         .about-img-inner:hover img {
//           transform: scale(1.04);
//         }

//         /* Floating stat cards */
//         .img-stat {
//           position: absolute;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 10px 16px;
//           background: rgba(7,8,13,0.88);
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 12px;
//           backdrop-filter: blur(14px);
//           z-index: 10;
//           animation: float-stat 3.5s ease-in-out infinite;
//           box-shadow: 0 8px 24px rgba(0,0,0,0.5);
//         }
//         .img-stat-num {
//           font-family: 'Syne', sans-serif;
//           font-size: 1.3rem;
//           font-weight: 800;
//           color: #fff;
//           line-height: 1;
//         }
//         .img-stat-num span { color: #B538E3; }
//         .img-stat-label {
//           font-size: 0.7rem;
//           color: #64748b;
//           text-transform: uppercase;
//           letter-spacing: 0.07em;
//         }
//         .stat-top {
//           top: -18px; left: 16px;
//           animation-delay: 0s;
//         }
//         .stat-bottom {
//           bottom: -18px; right: 16px;
//           animation-delay: 1.2s;
//         }
//         @keyframes float-stat {
//           0%,100% { transform: translateY(0); }
//           50%      { transform: translateY(-7px); }
//         }

//         /* ── Text side ── */
//         .about-text-col {
//           display: flex;
//           flex-direction: column;
//           gap: 0;
//         }

//         .about-eyebrow {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: rgba(181,56,227,0.1);
//           border: 1px solid rgba(181,56,227,0.25);
//           border-radius: 100px;
//           padding: 6px 16px;
//           font-size: 0.72rem;
//           font-weight: 600;
//           color: #c96de8;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           width: fit-content;
//           margin-bottom: 18px;
//         }
//         .about-eyebrow::before {
//           content: '';
//           width: 6px; height: 6px;
//           border-radius: 50%;
//           background: #B538E3;
//           box-shadow: 0 0 6px #B538E3;
//           animation: dot-pulse 2s ease-in-out infinite;
//         }
//         @keyframes dot-pulse {
//           0%,100% { opacity:1; } 50% { opacity:0.2; }
//         }

//         .about-title {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(2rem, 4.5vw, 3rem);
//           font-weight: 800;
//           color: #fff;
//           letter-spacing: -0.02em;
//           line-height: 1.1;
//           margin: 0 0 20px;
//         }
//         .about-title span {
//           background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .about-desc {
//           font-size: 0.975rem;
//           color: #64748b;
//           line-height: 1.8;
//           margin: 0 0 28px;
//           max-width: 500px;
//         }
//         .about-desc strong {
//           color: #94a3b8;
//           font-weight: 600;
//         }

//         /* Skill bars */
//         .skills-list {
//           display: flex;
//           flex-direction: column;
//           gap: 14px;
//           margin-bottom: 28px;
//         }
//         .skill-row { display: flex; flex-direction: column; gap: 6px; }
//         .skill-meta {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }
//         .skill-name {
//           font-size: 0.8rem;
//           font-weight: 600;
//           color: #94a3b8;
//           font-family: 'Syne', sans-serif;
//         }
//         .skill-pct {
//           font-size: 0.75rem;
//           color: #475569;
//           font-family: 'Syne', sans-serif;
//         }
//         .skill-bar-bg {
//           height: 4px;
//           background: rgba(255,255,255,0.06);
//           border-radius: 100px;
//           overflow: hidden;
//         }
//         .skill-bar-fill {
//           height: 100%;
//           border-radius: 100px;
//           animation: bar-grow 1.2s cubic-bezier(0.4,0,0.2,1) both;
//           animation-delay: var(--delay);
//         }
//         @keyframes bar-grow {
//           from { width: 0 !important; }
//         }

//         /* Badges */
//         .badges-row {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 8px;
//           margin-bottom: 32px;
//         }
//         .badge-pill {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           padding: 7px 14px;
//           background: rgba(255,255,255,0.03);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 100px;
//           font-size: 0.78rem;
//           font-weight: 500;
//           color: #64748b;
//           transition: border-color 0.2s, color 0.2s, background 0.2s;
//           cursor: default;
//         }
//         .badge-pill:hover {
//           border-color: rgba(181,56,227,0.35);
//           color: #c96de8;
//           background: rgba(181,56,227,0.06);
//         }

//         /* CTA row */
//         .about-ctas {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 12px;
//         }
//         .btn-primary {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 12px 26px;
//           background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
//           color: white;
//           font-family: 'Syne', sans-serif;
//           font-size: 0.9rem;
//           font-weight: 700;
//           border-radius: 10px;
//           text-decoration: none;
//           transition: transform 0.2s, box-shadow 0.2s;
//           box-shadow: 0 4px 20px rgba(181,56,227,0.3);
//         }
//         .btn-primary:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 28px rgba(181,56,227,0.45);
//         }
//         .btn-ghost {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 11px 24px;
//           background: transparent;
//           color: #94a3b8;
//           font-family: 'Syne', sans-serif;
//           font-size: 0.9rem;
//           font-weight: 600;
//           border-radius: 10px;
//           border: 1px solid rgba(148,163,184,0.18);
//           text-decoration: none;
//           transition: border-color 0.2s, color 0.2s, background 0.2s;
//         }
//         .btn-ghost:hover {
//           border-color: rgba(181,56,227,0.45);
//           color: #B538E3;
//           background: rgba(181,56,227,0.06);
//         }

//         /* Entrance animations */
//         .fade-left  { animation: fadeLeft  0.7s ease 0.1s both; }
//         .fade-right-in { animation: fadeRightIn 0.7s ease 0.2s both; }
//         @keyframes fadeLeft {
//           from { opacity:0; transform: translateX(-28px); }
//           to   { opacity:1; transform: translateX(0); }
//         }
//         @keyframes fadeRightIn {
//           from { opacity:0; transform: translateX(28px); }
//           to   { opacity:1; transform: translateX(0); }
//         }
//       `}</style>

//       <section className="about-section">
//         <div className="about-orb" />

//         <div className="about-inner">
//           {/* ── Image Column ── */}
//           <div className="about-img-col fade-left">
//             <div className="about-img-frame">
//               <div className="about-img-ring" />
//               <div className="about-img-inner">
//                 <img
//                   src={about}
//                   alt="Sayyed Ahmad Asif"
//                   className={imgLoaded ? 'loaded' : ''}
//                   onLoad={() => setImgLoaded(true)}
//                 />
//               </div>

//               {/* Floating stat — top */}
//               <div className="img-stat stat-top">
//                 <div>
//                   <div className="img-stat-num">2<span>+</span></div>
//                   <div className="img-stat-label">Years exp.</div>
//                 </div>
//               </div>

//               {/* Floating stat — bottom */}
//               <div className="img-stat stat-bottom">
//                 <div>
//                   <div className="img-stat-num">15<span>+</span></div>
//                   <div className="img-stat-label">Projects done</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ── Text Column ── */}
//           <div className="about-text-col fade-right-in">
//             <div className="about-eyebrow">Get to know me</div>

//             <h2 className="about-title">
//               About <span>Me</span>
//             </h2>

//             <p className="about-desc">
//               I'm a <strong>passionate full-stack developer</strong> who loves crafting modern web experiences
//               with clean code and scalable architecture. My journey has been fueled by curiosity — from
//               building MERN stack apps to diving into <strong>graphics design</strong> and exploring
//               <strong> cybersecurity</strong>.
//               <br /><br />
//               I thrive on projects that challenge me, push boundaries, and leave a lasting impact.
//               Always learning. Always building.
//             </p>

//             {/* Skill bars */}
//             <div className="skills-list">
//               {skills.map(({ label, pct, color }, i) => (
//                 <div className="skill-row" key={label}>
//                   <div className="skill-meta">
//                     <span className="skill-name">{label}</span>
//                     <span className="skill-pct">{pct}%</span>
//                   </div>
//                   <div className="skill-bar-bg">
//                     <div
//                       className="skill-bar-fill"
//                       style={{
//                         width: `${pct}%`,
//                         background: `linear-gradient(90deg, ${color}, ${color}aa)`,
//                         '--delay': `${0.3 + i * 0.1}s`,
//                         boxShadow: `0 0 8px ${color}66`,
//                       }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Badges */}
//             <div className="badges-row">
//               {badges.map(({ icon, text }) => (
//                 <span className="badge-pill" key={text}>
//                   {icon} {text}
//                 </span>
//               ))}
//             </div>

//             {/* CTAs */}
//             <div className="about-ctas">
//               <a href="#contact" className="btn-primary">Let's Talk →</a>
//               <a href="#projects" className="btn-ghost">View Projects</a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;























