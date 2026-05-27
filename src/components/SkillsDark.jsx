import React, { useState } from 'react';
import reactLogo from '../assets/react.svg';
import javascript from '../assets/JavaScript.svg';
import html from '../assets/HTML5.svg';
import css from '../assets/CSS3.svg';
import tailwind from '../assets/Tailwind CSS.svg';
import node from '../assets/Node.js.svg';
import express from '../assets/Express.svg';
import mongodb from '../assets/MongoDB.svg';
import github from '../assets/github-dark.svg';
import postman from '../assets/postman.svg';
import nextjs from '../assets/nextdotjs.svg';
import typescript from '../assets/typescript.svg';
import postgresql from '../assets/postgresql.svg';
import figma from '../assets/figma.svg';
import vscode from '../assets/visual-studio-code.svg';


const allSkills = [
  {
    icon: reactLogo,
    name: 'React',
    desc: 'Modern JavaScript library for building responsive and scalable UIs using component-based architecture.',
    category: 'frontend',
    accent: '#61DAFB',
  },
  {
    icon: javascript,
    name: 'JavaScript',
    desc: 'Core programming language of the web, enabling dynamic functionality and interactivity in web apps.',
    category: 'frontend',
    accent: '#F7DF1E',
  },
  {
    icon: typescript,
    name: 'TypeScript',
    desc: 'Strongly typed superset of JavaScript that improves code quality, scalability, and developer productivity.',
    category: 'frontend',
    accent: '#3178C6',
  },
  {
    icon: html,
    name: 'HTML5',
    desc: 'Markup language for structuring content on the web, essential for page layouts and SEO.',
    category: 'frontend',
    accent: '#E34F26',
  },
  {
    icon: css,
    name: 'CSS3',
    desc: 'Style sheet language for designing beautiful, responsive, and animated websites.',
    category: 'frontend',
    accent: '#1572B6',
  },
  {
    icon: tailwind,
    name: 'Tailwind CSS',
    desc: 'Utility-first CSS framework for rapidly building custom designs directly in your HTML/JSX.',
    category: 'frontend',
    accent: '#06B6D4',
  },
  {
    icon: node,
    name: 'Node.js',
    desc: 'Server-side runtime for building scalable backend services using JavaScript.',
    category: 'backend',
    accent: '#339933',
  },
  {
    icon: express,
    name: 'Express.js',
    desc: 'Minimal and flexible Node.js framework for building RESTful APIs and web applications.',
    category: 'backend',
    accent: '#ffffff',
  },
  {
    icon: mongodb,
    name: 'MongoDB',
    desc: 'NoSQL database for storing JSON-like documents with dynamic schemas and high scalability.',
    category: 'backend',
    accent: '#47A248',
  },
  {
    icon: postgresql,
    name: 'PostgreSQL',
    desc: 'Advanced open-source relational database known for reliability, performance, and powerful SQL features.',
    category: 'backend',
    accent: '#4169E1',
  },
  {
    icon: nextjs,
    name: 'Next.js',
    desc: 'React framework for building fast, SEO-friendly web applications with server-side rendering and routing.',
    category: 'frontend',
    accent: '#ffffff',
  },
  {
    icon: github,
    name: 'Git & GitHub',
    desc: 'Version control system for tracking code changes, collaboration, and project management.',
    category: 'tools',
    accent: '#F05032',
  },
  {
    icon: vscode,
    name: 'VS Code',
    desc: 'Powerful code editor with extensions, IntelliSense, and deep Git integration.',
    category: 'tools',
    accent: '#007ACC',
  },
  {
    icon: postman,
    name: 'Postman',
    desc: 'API testing and development platform for building, testing, and documenting REST APIs.',
    category: 'tools',
    accent: '#FF6C37',
    emoji: '📬',
  },
  {
    icon: figma,
    name: 'Figma',
    desc: 'Collaborative design tool for creating UI mockups, prototypes, and design systems.',
    category: 'tools',
    accent: '#B538E3',
    emoji: '🎨',
  },
];

const tabs = [
  { key: 'all', label: 'All Skills' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'tools', label: 'Tools' },
];

const SkillCard = ({ icon, name, desc, accent, emoji, index }) => (
  <div
    className="skill-card"
    style={{ '--accent': accent, animationDelay: `${index * 0.07}s` }}
  >
    <div className="skill-card-top-line" />
    <div className="skill-card-inner">
      <div className="skill-icon-wrap">
        {icon
          ? <img src={icon} alt={name} className="skill-icon-img" />
          : <span className="skill-icon-emoji">{emoji}</span>
        }
      </div>
      <div className="skill-info">
        <h3 className="skill-name">{name}</h3>
        <p className="skill-desc">{desc}</p>
      </div>
    </div>
    <div className="skill-card-glow" />
  </div>
);

const SkillsDark = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? allSkills
    : allSkills.filter(s => s.category === activeTab);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap');

        .skills-section {
          position: relative;
          padding: 100px 20px;
          background: #07080d;
          overflow: hidden;
          font-family: 'Space Grotesk', sans-serif;
        }

        /* Grid bg */
        .skills-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(181,56,227,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(181,56,227,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        /* Ambient orb */
        .skills-orb {
          position: absolute;
          width: 600px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(181,56,227,0.1) 0%, transparent 70%);
          filter: blur(80px);
          top: -100px; left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }

        .skills-inner {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Header */
        .skills-header {
          text-align: center;
          margin-bottom: 52px;
        }
        .skills-eyebrow {
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
        .skills-eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #B538E3;
          box-shadow: 0 0 6px #B538E3;
          animation: dot-pulse 2s ease-in-out infinite;
        }
        @keyframes dot-pulse {
          0%,100% { opacity:1; } 50% { opacity:0.2; }
        }
        .skills-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0 0 14px;
        }
        .skills-title span {
          background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .skills-subtitle {
          font-size: 0.975rem;
          color: #475569;
          max-width: 440px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Tabs */
        .skills-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-bottom: 48px;
        }
        .tab-btn {
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 9px 22px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.02em;
        }
        .tab-btn:hover {
          border-color: rgba(181,56,227,0.3);
          color: #94a3b8;
          background: rgba(181,56,227,0.05);
        }
        .tab-btn.active {
          background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
          border-color: transparent;
          color: #fff;
          box-shadow: 0 4px 20px rgba(181,56,227,0.35);
        }

        /* Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 600px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
          .skills-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* Card */
        .skill-card {
          position: relative;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 22px 20px;
          overflow: hidden;
          cursor: default;
          transition: transform 0.25s ease, border-color 0.25s, box-shadow 0.25s;
          animation: cardUp 0.5s ease both;
        }
        @keyframes cardUp {
          from { opacity:0; transform: translateY(20px); }
          to   { opacity:1; transform: translateY(0); }
        }
        .skill-card:hover {
          transform: translateY(-5px);
          border-color: color-mix(in srgb, var(--accent) 35%, transparent);
          box-shadow: 0 12px 40px color-mix(in srgb, var(--accent) 15%, transparent);
        }
        .skill-card:hover .skill-card-top-line {
          opacity: 1;
          transform: scaleX(1);
        }
        .skill-card:hover .skill-card-glow { opacity: 1; }
        .skill-card:hover .skill-icon-wrap {
          border-color: color-mix(in srgb, var(--accent) 45%, transparent);
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          box-shadow: 0 0 16px color-mix(in srgb, var(--accent) 25%, transparent);
        }

        /* Top line */
        .skill-card-top-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0;
          transform: scaleX(0.3);
          transform-origin: center;
          transition: opacity 0.3s, transform 0.4s;
        }

        /* Glow bg */
        .skill-card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 50% at 50% 0%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s;
        }

        /* Card inner */
        .skill-card-inner {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        /* Icon */
        .skill-icon-wrap {
          flex-shrink: 0;
          width: 52px; height: 52px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
        }
        .skill-icon-img {
          width: 28px; height: 28px;
          object-fit: contain;
        }
        .skill-icon-emoji {
          font-size: 1.4rem;
          line-height: 1;
        }

        /* Text */
        .skill-info { flex: 1; min-width: 0; }
        .skill-name {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #e2e8f0;
          margin: 0 0 6px;
          line-height: 1.2;
        }
        .skill-desc {
          font-size: 0.8rem;
          color: #475569;
          line-height: 1.65;
          margin: 0;
        }

        /* Count badge */
        .skills-count {
          text-align: center;
          margin-top: 40px;
          font-size: 0.78rem;
          color: #334155;
          font-family: 'Syne', sans-serif;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .skills-count span { color: #B538E3; }
      `}</style>

      <section className="skills-section">
        <div className="skills-orb" />

        <div className="skills-inner">
          {/* Header */}
          <div className="skills-header">
            <div className="skills-eyebrow">What I work with</div>
            <h2 className="skills-title">My <span>Skills</span></h2>
            <p className="skills-subtitle">
              A curated set of technologies I use to build fast, scalable, and beautiful products.
            </p>
          </div>

          {/* Tabs */}
          <div className="skills-tabs">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                className={`tab-btn${activeTab === key ? ' active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="skills-grid">
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} {...skill} index={i} />
            ))}
          </div>

          {/* Count */}
          <p className="skills-count">
            Showing <span>{filtered.length}</span> of <span>{allSkills.length}</span> skills
          </p>
        </div>
      </section>
    </>
  );
};

export default SkillsDark;