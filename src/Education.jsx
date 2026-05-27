import React, { useEffect, useRef, useState } from 'react';

const education = [
  {
    type: 'education',
    year: '2026 – Present',
    title: 'M.Sc in Computer Science & Engineering',
    institution: 'Jahangirnagar University',
    location: 'Savar, Dhaka, Bangladesh',
    desc: 'Studying core CS fundamentals including algorithms, data structures, networking, and software engineering. Active member of the programming club.',
    tags: ['DSA', 'OOP', 'Networking', 'OS'],
    accent: '#B538E3',
    icon: '🎓',
  },
  {
    type: 'education',
    year: '2022 – 2025',
    title: 'B.Sc in Computer Science & Engineering',
    institution: 'Daffodil International University',
    location: 'Dhaka, Bangladesh',
    desc: 'Studying core CS fundamentals including algorithms, data structures, networking, and software engineering. Active member of the programming club.',
    tags: ['DSA', 'OOP', 'Networking', 'OS'],
    accent: '#B538E3',
    icon: '🎓',
  },
  {
    type: 'education',
    year: '2019 – 2020',
    title: 'Higher Secondary Certificate (HSC)',
    institution: 'Cumila Shikkha Board Govt. Model College',
    location: 'Shaktala, Rammala, Cumilla',
    desc: 'Completed HSC in Science group with strong performance in Mathematics and Physics, laying the foundation for engineering studies.',
    tags: ['Science', 'Mathematics', 'Physics'],
    accent: '#06b6d4',
    icon: '📚',
  },
  {
    type: 'education',
    year: '2018',
    title: 'Secondary School Certificate (SSC)',
    institution: 'Cumila Shikkha Board Govt. Model College',
    location: 'Shaktala, Rammala, Cumilla',
    desc: 'Completed SSC with distinction in Science group, developing analytical thinking and problem-solving skills from an early stage.',
    tags: ['Science', 'General Math'],
    accent: '#f97316',
    icon: '🏫',
  },
];

const certifications = [
  // {
  //   type: 'cert',
  //   year: '2024',
  //   title: 'Complete Web Development',
  //   institution: 'Programming Hero',
  //   location: 'Online',
  //   desc: 'Completed an intensive full-stack MERN development course covering React, Node.js, Express, MongoDB, JWT, and deployment.',
  //   tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  //   accent: '#B538E3',
  //   icon: '🏆',
  //   credential: '#',
  // },
  // {
  //   type: 'cert',
  //   year: '2023',
  //   title: 'Responsive Web Design',
  //   institution: 'freeCodeCamp',
  //   location: 'Online',
  //   desc: 'Earned certification covering HTML5, CSS3, Flexbox, Grid, and responsive design principles with 300+ hours of coursework.',
  //   tags: ['HTML5', 'CSS3', 'Responsive'],
  //   accent: '#06b6d4',
  //   icon: '📜',
  //   credential: '#',
  // },
  // {
  //   type: 'cert',
  //   year: '2023',
  //   title: 'JavaScript Algorithms & Data Structures',
  //   institution: 'freeCodeCamp',
  //   location: 'Online',
  //   desc: 'Mastered ES6+, OOP, functional programming, and common algorithm patterns through hands-on challenges.',
  //   tags: ['JavaScript', 'ES6+', 'Algorithms'],
  //   accent: '#f97316',
  //   icon: '⚡',
  //   credential: '#',
  // },
];

const TimelineItem = ({ item, index, isLast }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`timeline-item ${isLeft ? 'left' : 'right'} ${visible ? 'visible' : ''}`}
      style={{ '--accent': item.accent, '--delay': `${index * 0.1}s` }}
    >
      {/* Card */}
      <div className="tl-card">
        <div className="tl-card-top-line" />

        <div className="tl-card-header">
          <span className="tl-icon">{item.icon}</span>
          <div className="tl-meta">
            <span className="tl-year">{item.year}</span>
            {item.type === 'cert' && (
              <span className="tl-cert-badge">Certificate</span>
            )}
          </div>
        </div>

        <h3 className="tl-title">{item.title}</h3>

        <div className="tl-institution">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          {item.institution}
          <span className="tl-location">· {item.location}</span>
        </div>

        <p className="tl-desc">{item.desc}</p>

        <div className="tl-tags">
          {item.tags.map(tag => (
            <span key={tag} className="tl-tag">{tag}</span>
          ))}
        </div>

        {item.credential && (
          <a href={item.credential} target="_blank" rel="noreferrer" className="tl-credential-btn">
            View Credential
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        )}

        <div className="tl-card-glow" />
      </div>

      {/* Connector dot */}
      <div className="tl-dot">
        <div className="tl-dot-inner" />
      </div>

      {/* Vertical line (not on last) */}
      {!isLast && <div className="tl-line" />}
    </div>
  );
};

const Education = () => {
  const allItems = [...education, ...certifications];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap');

        .edu-section {
          position: relative;
          padding: 100px 20px;
          background: #07080d;
          overflow: hidden;
          font-family: 'Space Grotesk', sans-serif;
        }
        .edu-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(181,56,227,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(181,56,227,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }
        .edu-orb {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%);
          filter: blur(80px);
          top: 0; right: -100px;
          pointer-events: none;
        }

        .edu-inner {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Header */
        .edu-header {
          text-align: center;
          margin-bottom: 72px;
        }
        .edu-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(181,56,227,0.1);
          border: 1px solid rgba(181,56,227,0.25);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 0.72rem;
          font-weight: 600;
          color: #c96de8;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .edu-eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #B538E3;
          box-shadow: 0 0 6px #B538E3;
          animation: dot-pulse 2s ease-in-out infinite;
        }
        @keyframes dot-pulse { 0%,100%{opacity:1}50%{opacity:0.2} }
        .edu-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0 0 14px;
        }
        .edu-title span {
          background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .edu-subtitle {
          font-size: 0.975rem;
          color: #475569;
          max-width: 440px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Tab switcher */
        .edu-tabs {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 64px;
        }
        .edu-tab {
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 9px 22px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
        }
        .edu-tab:hover {
          border-color: rgba(181,56,227,0.3);
          color: #94a3b8;
        }
        .edu-tab.active {
          background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
          border-color: transparent;
          color: #fff;
          box-shadow: 0 4px 20px rgba(181,56,227,0.35);
        }

        /* ── TIMELINE ── */
        .timeline-wrap {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        /* Center spine */
        .timeline-spine {
          position: absolute;
          left: 50%;
          top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(181,56,227,0.3) 10%, rgba(181,56,227,0.3) 90%, transparent);
          transform: translateX(-50%);
        }
        /* Mobile spine */
        @media (max-width: 767px) {
          .timeline-spine {
            left: 20px;
          }
        }

        /* Timeline item */
        .timeline-item {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 32px 1fr;
          gap: 0;
          margin-bottom: 48px;
          align-items: start;
        }

        /* Card goes left or right */
        .timeline-item.left .tl-card  { grid-column: 1; grid-row: 1; padding-right: 32px; }
        .timeline-item.right .tl-card { grid-column: 3; grid-row: 1; padding-left: 32px; }
        .timeline-item.left  .tl-card { text-align: right; align-items: flex-end; }
        .timeline-item.right .tl-card { text-align: left;  align-items: flex-start; }

        /* Dot always in center col */
        .tl-dot {
          grid-column: 2;
          grid-row: 1;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 20px;
          position: relative;
          z-index: 2;
        }
        .tl-dot-inner {
          width: 14px; height: 14px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 3px rgba(7,8,13,1), 0 0 0 5px color-mix(in srgb, var(--accent) 35%, transparent), 0 0 16px var(--accent);
          transition: transform 0.3s;
        }
        .timeline-item:hover .tl-dot-inner {
          transform: scale(1.3);
        }

        /* Vertical connector line */
        .tl-line {
          grid-column: 2;
          grid-row: 1;
          width: 1px;
          background: linear-gradient(to bottom, var(--accent), transparent);
          margin: 0 auto;
          opacity: 0.25;
          pointer-events: none;
          height: 100%;
          margin-top: 34px;
        }

        /* Mobile: all cards on right */
        @media (max-width: 767px) {
          .timeline-spine { left: 20px; }
          .timeline-item {
            grid-template-columns: 40px 1fr;
            grid-template-rows: auto;
          }
          .timeline-item.left .tl-card,
          .timeline-item.right .tl-card {
            grid-column: 2; grid-row: 1;
            padding-left: 16px; padding-right: 0;
            text-align: left; align-items: flex-start;
          }
          .tl-dot { grid-column: 1; grid-row: 1; padding-top: 20px; }
          .tl-line { grid-column: 1; }
          .tl-institution { justify-content: flex-start !important; }
          .tl-tags { justify-content: flex-start !important; }
          .tl-card-header { flex-direction: row !important; }
        }

        /* Card */
        .tl-card {
          position: relative;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 22px 22px 20px;
          display: flex;
          flex-direction: column;
          gap: 0;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
          opacity: 0;
          transform: translateY(20px);
        }
        .timeline-item.left  .tl-card { transform: translateX(-20px); }
        .timeline-item.right .tl-card { transform: translateX(20px); }
        .timeline-item.visible .tl-card {
          animation: slideIn 0.55s ease var(--delay) both;
        }
        @keyframes slideIn {
          from { opacity:0; transform: translateY(20px); }
          to   { opacity:1; transform: translateY(0) translateX(0); }
        }
        .tl-card:hover {
          border-color: color-mix(in srgb, var(--accent) 35%, transparent);
          box-shadow: 0 12px 40px color-mix(in srgb, var(--accent) 12%, transparent);
          transform: translateY(-3px);
        }
        .tl-card:hover .tl-card-top-line {
          opacity: 1;
          transform: scaleX(1);
        }
        .tl-card:hover .tl-card-glow { opacity: 1; }

        /* Top accent line */
        .tl-card-top-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0;
          transform: scaleX(0.3);
          transform-origin: center;
          transition: opacity 0.3s, transform 0.4s;
        }
        .tl-card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 50% at 50% 0%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 70%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s;
        }

        /* Card contents */
        .tl-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          position: relative; z-index: 1;
        }
        .timeline-item.left .tl-card-header { flex-direction: row-reverse; }

        .tl-icon {
          font-size: 1.3rem;
          line-height: 1;
          flex-shrink: 0;
        }

        .tl-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .tl-year {
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent);
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
          border-radius: 100px;
          padding: 3px 10px;
          letter-spacing: 0.06em;
          white-space: nowrap;
        }
        .tl-cert-badge {
          font-size: 0.65rem;
          font-weight: 700;
          font-family: 'Syne', sans-serif;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #f97316;
          background: rgba(249,115,22,0.1);
          border: 1px solid rgba(249,115,22,0.25);
          border-radius: 100px;
          padding: 2px 9px;
        }

        .tl-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          color: #e2e8f0;
          margin: 0 0 8px;
          line-height: 1.3;
          position: relative; z-index: 1;
        }

        .tl-institution {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: #64748b;
          margin-bottom: 10px;
          position: relative; z-index: 1;
        }
        .timeline-item.left .tl-institution { justify-content: flex-end; }
        .tl-location { color: #334155; }

        .tl-desc {
          font-size: 0.82rem;
          color: #475569;
          line-height: 1.7;
          margin: 0 0 14px;
          position: relative; z-index: 1;
        }

        .tl-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 14px;
          position: relative; z-index: 1;
        }
        .timeline-item.left .tl-tags { justify-content: flex-end; }
        .tl-tag {
          font-size: 0.65rem;
          font-weight: 600;
          font-family: 'Syne', sans-serif;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--accent);
          background: color-mix(in srgb, var(--accent) 8%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
          border-radius: 100px;
          padding: 3px 10px;
        }

        .tl-credential-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Syne', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent);
          text-decoration: none;
          border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
          border-radius: 7px;
          padding: 5px 12px;
          background: color-mix(in srgb, var(--accent) 6%, transparent);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          position: relative; z-index: 1;
          width: fit-content;
        }
        .tl-credential-btn:hover {
          background: color-mix(in srgb, var(--accent) 14%, transparent);
          border-color: color-mix(in srgb, var(--accent) 50%, transparent);
          transform: translateY(-1px);
        }
      `}</style>

      <section className="edu-section">
        <div className="edu-orb" />

        <div className="edu-inner">
          {/* Header */}
          <div className="edu-header">
            <div className="edu-eyebrow">My journey</div>
            <h2 className="edu-title">Education & <span>Certifications</span></h2>
            <p className="edu-subtitle">
              A timeline of my academic background and professional certifications that shaped my skills.
            </p>
          </div>

          {/* Timeline */}
          <div className="timeline-wrap">
            <div className="timeline-spine" />
            {allItems.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                index={i}
                isLast={i === allItems.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;