import React, { useState } from 'react';
import about from '../assets/about-img.jpg';

const skills = [
  { label: 'React / Next.js',   pct: 90, color: '#B538E3' },
  { label: 'Node.js / Express', pct: 82, color: '#f97316' },
  { label: 'MongoDB / SQL',     pct: 75, color: '#06b6d4' },
  { label: 'UI/UX & Graphics',  pct: 85, color: '#B538E3' },
];

const badges = [
  { icon: '⚡', text: 'MERN Stack' },
  { icon: '🎨', text: 'Graphics Design' },
  { icon: '🔐', text: 'Cyber Security' },
  { icon: '📦', text: 'REST APIs' },
  { icon: '🌐', text: 'Full Stack' },
  { icon: '🛠️', text: 'Problem Solver' },
];

const AboutDark = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap');

        .font-syne  { font-family: 'Syne', sans-serif; }
        .font-space { font-family: 'Space Grotesk', sans-serif; }

        /* Grid bg */
        .about-grid-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(181,56,227,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(181,56,227,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        /* Gradient text */
        .gradient-text {
          background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Eyebrow dot */
        .eyebrow-dot::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #B538E3;
          box-shadow: 0 0 6px #B538E3;
          animation: dot-pulse 2s ease-in-out infinite;
          display: inline-block;
          margin-right: 8px;
        }
        @keyframes dot-pulse { 0%,100%{opacity:1} 50%{opacity:0.2} }

        /* ── Rotating SVG border ring ── */
        .ring-svg {
          position: absolute;
          inset: -10px;
          width: calc(100% + 20px);
          height: calc(100% + 20px);
          pointer-events: none;
          z-index: 2;
          animation: spin-ring 10s linear infinite;
        }
        @keyframes spin-ring {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Thinner stroke, more dots */
        .ring-rect {
          fill: none;
          stroke-width: 1;
          stroke-linecap: round;
          stroke-dasharray: 3 5;
        }

        /* Blobs behind the image */
        .blob-purple {
          position: absolute;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: rgba(181,56,227,0.2);
          filter: blur(50px);
          top: -40px; left: -40px;
          pointer-events: none;
          z-index: 0;
        }
        .blob-orange {
          position: absolute;
          width: 180px; height: 180px;
          border-radius: 50%;
          background: rgba(249,115,22,0.16);
          filter: blur(45px);
          bottom: -30px; right: -30px;
          pointer-events: none;
          z-index: 0;
        }

        /* Image */
        .about-img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .about-img.loaded { opacity: 1; }
        .about-img-wrap:hover .about-img { transform: scale(1.03); }

        /* Floating stat cards */
        .img-stat { position: absolute; z-index: 10; }
        .stat-top    { top: -20px;    left: -12px;  animation: floatStat 3.5s ease-in-out 0s   infinite; }
        .stat-bottom { bottom: -20px; right: -12px; animation: floatStat 3.5s ease-in-out 1.2s infinite; }
        @keyframes floatStat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }

        /* Skill bar */
        .skill-bar-fill {
          height: 100%;
          border-radius: 9999px;
          animation: barGrow 1.2s cubic-bezier(0.4,0,0.2,1) var(--delay) both;
        }
        @keyframes barGrow { from { width: 0 !important; } }

        /* Entrance */
        .fade-left     { animation: fadeLeft    0.7s ease 0.1s both; }
        .fade-right-in { animation: fadeRightIn 0.7s ease 0.2s both; }
        @keyframes fadeLeft    { from{opacity:0;transform:translateX(-28px)} to{opacity:1;transform:translateX(0)} }
        @keyframes fadeRightIn { from{opacity:0;transform:translateX(28px)}  to{opacity:1;transform:translateX(0)} }
      `}</style>

      <section id="about" className="about-grid-bg relative py-24 px-5 bg-[#07080d] overflow-hidden font-space">

        {/* Ambient orbs */}
        <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(181,56,227,0.08) 0%, transparent 70%)', filter: 'blur(80px)', top: '-120px', left: '-120px' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 70%)', filter: 'blur(70px)', bottom: '-80px', right: '-80px' }} />

        <div className="relative z-[2] max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* ── Image Column ── */}
          <div className="fade-left flex justify-center items-center">
            <div className="relative w-[min(320px,88vw)] md:w-full md:max-w-[380px]">

              {/* Background blobs */}
              <div className="blob-purple" />
              <div className="blob-orange" />

              {/* SVG rotating dashed border ring */}
              <svg
                className="ring-svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#B538E3" />
                    <stop offset="50%"  stopColor="#f97316" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <rect
                  className="ring-rect"
                  x="1" y="1" width="98" height="98"
                  rx="15" ry="15"
                  stroke="url(#ringGrad)"
                />
              </svg>

              {/* Image */}
              <div className="about-img-wrap relative z-[1] rounded-[24px] overflow-hidden bg-[#0f1118] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <img
                  src={about}
                  alt="Sayyed Ahmad Asif"
                  className={`about-img${imgLoaded ? ' loaded' : ''}`}
                  onLoad={() => setImgLoaded(true)}
                />
              </div>

              {/* Floating stat — top left */}
              <div className="img-stat stat-top flex items-center gap-2.5 px-4 py-2.5 bg-[rgba(7,8,13,0.9)] border border-[rgba(181,56,227,0.22)] rounded-2xl backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
                <div className="w-8 h-8 rounded-lg bg-[rgba(181,56,227,0.12)] flex items-center justify-center text-[#B538E3] text-sm flex-shrink-0">✦</div>
                <div>
                  <div className="font-syne text-[1.15rem] font-extrabold text-white leading-none">
                    1<span className="text-[#B538E3]">+</span>
                  </div>
                  <div className="text-[0.68rem] text-[#64748b] uppercase tracking-[0.07em] mt-0.5">Years exp.</div>
                </div>
              </div>

              {/* Floating stat — bottom right */}
              <div className="img-stat stat-bottom flex items-center gap-2.5 px-4 py-2.5 bg-[rgba(7,8,13,0.9)] border border-[rgba(249,115,22,0.22)] rounded-2xl backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
                <div className="w-8 h-8 rounded-lg bg-[rgba(249,115,22,0.1)] flex items-center justify-center text-[#f97316] text-sm flex-shrink-0">🚀</div>
                <div>
                  <div className="font-syne text-[1.15rem] font-extrabold text-white leading-none">
                    5<span className="text-[#f97316]">+</span>
                  </div>
                  <div className="text-[0.68rem] text-[#64748b] uppercase tracking-[0.07em] mt-0.5">Projects done</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Text Column ── */}
          <div className="fade-right-in flex flex-col">

            {/* Eyebrow */}
            <div className="eyebrow-dot inline-flex items-center bg-[rgba(181,56,227,0.1)] border border-[rgba(181,56,227,0.25)] rounded-full px-4 py-1.5 text-[0.72rem] font-semibold text-[#c96de8] tracking-[0.1em] uppercase w-fit mb-[18px]">
              Get to know me
            </div>

            {/* Title */}
            <h2 className="font-syne font-extrabold text-[clamp(2rem,4.5vw,3rem)] text-white tracking-tight leading-[1.1] mb-5">
              About <span className="gradient-text">Me</span>
            </h2>

            {/* Description */}
            <p className="text-[0.975rem] text-[#64748b] leading-[1.8] mb-7 max-w-[500px]">
              I'm a <strong className="text-[#94a3b8] font-semibold">passionate full-stack developer</strong> who
              loves crafting modern web experiences with clean code and scalable architecture. My journey has
              been fueled by curiosity — from building MERN stack apps to diving into{' '}
              <strong className="text-[#94a3b8] font-semibold">graphics design</strong> and exploring{' '}
              <strong className="text-[#94a3b8] font-semibold">cybersecurity</strong>.
              <br /><br />
              I thrive on projects that challenge me, push boundaries, and leave a lasting impact.
              Always learning. Always building.
            </p>

            {/* Skill bars */}
            <div className="flex flex-col gap-3.5 mb-7">
              {skills.map(({ label, pct, color }, i) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <span className="font-syne text-[0.8rem] font-semibold text-[#94a3b8]">{label}</span>
                    <span className="font-syne text-[0.75rem] text-[#475569]">{pct}%</span>
                  </div>
                  <div className="h-[4px] bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: `${pct}%`,
                        background: `linear-gradient(90deg, ${color}, ${color}aa)`,
                        '--delay': `${0.3 + i * 0.1}s`,
                        boxShadow: `0 0 8px ${color}66`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Badge pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {badges.map(({ icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/[0.03] border border-white/[0.08] rounded-full text-[0.78rem] font-medium text-[#64748b] cursor-default transition-all duration-200 hover:border-[rgba(181,56,227,0.35)] hover:text-[#c96de8] hover:bg-[rgba(181,56,227,0.06)]"
                >
                  {icon} {text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-[#B538E3] to-[#f97316] text-white font-syne text-[0.9rem] font-bold rounded-[10px] no-underline transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(181,56,227,0.3)] hover:shadow-[0_8px_28px_rgba(181,56,227,0.45)]"
              >
                Let's Talk →
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#94a3b8] font-syne text-[0.9rem] font-semibold rounded-[10px] border border-[rgba(148,163,184,0.18)] no-underline transition-all duration-200 hover:border-[rgba(181,56,227,0.45)] hover:text-[#B538E3] hover:bg-[rgba(181,56,227,0.06)]"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDark;