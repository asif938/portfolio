import React, { useEffect, useRef } from 'react';
import hero from './assets/Hero-img.png';
import cv from './assets/cv(dev).pdf';
import { Typewriter } from 'react-simple-typewriter';

const HeroDark = () => {
  const orb1 = useRef(null);
  const orb2 = useRef(null);

  useEffect(() => {
    let t = 0;
    const animate = () => {
      t += 0.008;
      if (orb1.current) {
        orb1.current.style.transform = `translate(${Math.sin(t) * 30}px, ${Math.cos(t * 0.7) * 20}px)`;
      }
      if (orb2.current) {
        orb2.current.style.transform = `translate(${Math.cos(t * 0.9) * 25}px, ${Math.sin(t * 1.1) * 18}px)`;
      }
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap');

        .font-syne  { font-family: 'Syne', sans-serif; }
        .font-space { font-family: 'Space Grotesk', sans-serif; }

        /* Animated grid background */
        .hero-grid-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(181,56,227,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(181,56,227,0.06) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
          pointer-events: none;
        }

        /* Gradient text */
        .gradient-text {
          background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Animated ring around image */
        .image-ring {
          position: absolute;
          inset: -3px;
          border-radius: 28px;
          background: linear-gradient(135deg, #B538E3, #f97316, #B538E3);
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
          z-index: 0;
          filter: blur(1px);
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }

        /* Badge dot pulse */
        .badge-dot::before {
          content: '';
          display: inline-block;
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #B538E3;
          box-shadow: 0 0 8px #B538E3;
          animation: pulse 2s ease-in-out infinite;
          margin-right: 8px;
        }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        @keyframes logo-spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes scale-up-down {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2); 
          }
          100% {
            transform: scale(1); 
          }
        }

        /* Floating tech pills */
        @keyframes floatPill {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        .pill-react    { top: -80px; left: 50%; transform: translateX(-50%); animation: logo-spin infinite 15s linear; }
        .pill-js       { bottom: 20px; left: -80px;  animation: scale-up-down 2.5s infinite ease-in-out; }
        .pill-tailwind { bottom: -16px; right: -80px;  animation: floatPill 3s ease-in-out 1.6s infinite; }

        /* Scroll hint */
        .scroll-hint {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: #334155;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          animation: fadeInUp 1s ease 0.8s both;
        }
        .scroll-line {
          width: 1px; height: 40px;
          background: linear-gradient(to bottom, transparent, #B538E3);
          animation: scrollDrop 1.8s ease-in-out infinite;
        }
        @keyframes scrollDrop {
          0%   { transform: scaleY(0); transform-origin: top; }
          50%  { transform: scaleY(1); transform-origin: top; }
          51%  { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        @keyframes fadeInUp {
          from { opacity:0; transform: translateX(-50%) translateY(16px); }
          to   { opacity:1; transform: translateX(-50%) translateY(0); }
        }

        /* Entrance animations */
        .fade-up   { animation: fadeUp 0.7s ease both; }
        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.15s; }
        .fade-up-3 { animation-delay: 0.25s; }
        .fade-up-4 { animation-delay: 0.35s; }
        .fade-up-5 { animation-delay: 0.45s; }
        .fade-right { animation: fadeRight 0.8s ease 0.3s both; }
        @keyframes fadeUp {
          from { opacity:0; transform: translateY(24px); }
          to   { opacity:1; transform: translateY(0); }
        }
        @keyframes fadeRight {
          from { opacity:0; transform: translateX(30px); }
          to   { opacity:1; transform: translateX(0); }
        }

        /* Primary btn hover overlay */
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, #c94cf5 0%, #fb923c 100%);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .btn-primary:hover::before { opacity: 1; }
      `}</style>

      {/* ── Section ── */}
      <section id='home' className="hero-grid-bg relative min-h-screen bg-[#07080d] overflow-hidden flex items-center font-space">
        {/* bg-gradient-to-br from-[#0a0a0f] via-[#0f0c1f] to-[#1a0b2e] */}

        {/* Ambient orbs */}
        <div
          ref={orb1}
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(181,56,227,0.35) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '-100px',
            left: '-100px',
          }}
        />
        <div
          ref={orb2}
          className="absolute w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.25) 0%, transparent 70%)',
            filter: 'blur(80px)',
            bottom: '-80px',
            right: '-60px',
          }}
        />

        {/* Content grid */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 pt-24 pb-16 md:px-12 md:pt-10 md:pb-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-center">

          {/* ── Text column ── */}
          <div className="flex flex-col">

            {/* Badge */}
            <div className="fade-up fade-up-1 badge-dot inline-flex items-center bg-[rgba(181,56,227,0.12)] border border-[rgba(181,56,227,0.3)] rounded-full px-4 py-1.5 text-[11px] font-medium text-[#c96de8] tracking-[0.08em] uppercase w-fit mb-5">
              Available for opportunities
            </div>

            {/* Name */}
            <h1 className="fade-up fade-up-2 font-syne font-extrabold leading-[1.1] tracking-tight mb-2">
              <span className="block text-[clamp(1rem,3vw,1.4rem)] font-normal text-[#8892a4] mb-1.5">
                Hey, I'm
              </span>
              <span className="gradient-text text-[clamp(2rem,4vw,3rem)]">
                Sayyed Ahmad Asif
              </span>
            </h1>

            {/* Role typewriter */}
            <div className="fade-up fade-up-3 font-syne font-semibold text-[clamp(1.1rem,3.5vw,1.6rem)] text-[#94a3b8] flex items-center gap-2 flex-wrap min-h-[2em]">
              <span>A</span>
              <span className="text-[#B538E3]">
                <Typewriter
                  words={[
                    'MERN Stack Developer',
                    'Graphics Designer',
                    'Full Stack Developer',
                    'Cyber Security Enthusiast',
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={45}
                  delaySpeed={1200}
                />
              </span>
            </div>

            {/* Description */}
            <p className="fade-up fade-up-4 text-[clamp(0.9rem,2.5vw,1rem)] leading-[1.75] text-gray-400 mt-4 max-w-[560px]">
              I build modern web applications with <span className="text-purple-400 font-medium">clean code</span> and <span className="text-orange-400 font-medium"> scalable architecture </span>
              using the MERN stack. Passionate about graphics design, backend systems,
              and continuously expanding into <span className="text-cyan-400 font-medium">cybersecurity</span>.
              <br />Always learning. Always building.
            </p>

            {/* CTA buttons */}
            <div className="fade-up fade-up-5 flex flex-wrap gap-3.5 mt-6">
              <a
                href={cv}
                download
                className=" relative inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-br from-[#B538E3] to-[#f97316] text-white font-syne text-[0.95rem] font-bold rounded-[10px] no-underline overflow-hidden transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(181,56,227,0.35)] hover:shadow-[0_8px_32px_rgba(181,56,227,0.5)]"
              >
                <span className="relative z-[1]">↓ Download Resume</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#94a3b8] font-syne text-[0.95rem] font-semibold rounded-[10px] border border-[rgba(148,163,184,0.2)] no-underline transition-all duration-200 hover:border-[rgba(181,56,227,0.5)] hover:text-[#B538E3] hover:bg-[rgba(181,56,227,0.06)]"
              >
                View Projects →
              </a>
            </div>

            {/* Stats */}
            <div className="fade-up fade-up-5 flex flex-wrap gap-7 mt-5 pt-5 border-t border-white/[0.06]">
              {[
                { num: '1', label: 'Years Coding' },
                { num: '5', label: 'Projects Built' },
                { num: '2', label: 'Tech Stacks' },
              ].map(({ num, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="font-syne text-2xl font-extrabold text-white">
                    {num}<span className="text-[#B538E3]">+</span>
                  </span>
                  <span className="text-[0.75rem] text-[#475569] uppercase tracking-[0.08em]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Image column ── */}
          <div className="fade-right relative flex justify-center items-center">
            <div className="relative w-[min(340px,85vw)] md:w-full md:max-w-[440px]">

              {/* Animated gradient ring */}
              <div className="image-ring" />

              {/* Photo */}
              <div className="relative z-[1] rounded-[26px] overflow-hidden bg-[#0f1118]">
                <img src={hero} alt="Sayyed Ahmad Asif" className="block w-full h-auto object-cover" />
              </div>

              {/* Floating tech pills */}
              {[
                { cls: 'pill-react', src: 'https://www.programming-hero.com/banner/react.svg', label: 'React' },
                { cls: 'pill-js', src: 'https://www.programming-hero.com/banner/js.svg', label: 'JavaScript' },
                { cls: 'pill-tailwind', src: 'https://www.programming-hero.com/banner/tailwind.svg', label: 'Tailwind' },
              ].map(({ cls, src, label }) => (
                <div
                  key={label}
                  className={`${cls} absolute z-10`}
                >
                  <img src={src} alt={label} className="w-[160px] h-[160px]" />
                  {/* {label} */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-hint">
          <div className="scroll-line" />
          <span>scroll</span>
        </div>
      </section>
    </>
  );
};

export default HeroDark;