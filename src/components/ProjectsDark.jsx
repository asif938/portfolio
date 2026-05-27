import React, { useState } from 'react';
import project1 from '../assets/7.svg';
import project2 from '../assets/arzooq.svg';

const projects = [
  {
    img: project1,
    title: 'Pet Nest',
    desc: 'Pet Nest is a full-stack MERN web application designed to make pet adoption easier, faster, and more transparent. Users can add their own pets for adoption, explore pets added by others, and send adoption requests — all in one seamless platform.',
    tags: ['React', 'Node.js', 'MongoDB'],
    live: 'https://petnestbd.netlify.app/',
    github: 'https://github.com/asif938/pet-nest',
    accent: '#B538E3',
  },
  {
    img: project2,
    title: 'ARZOOQ',
    desc: 'ARZOOQ is a modern full-stack e-commerce platform built for showcasing and selling customized Islamic lifestyle products. The platform includes product browsing, advanced filtering, shopping cart functionality, secure Stripe payment integration, and a powerful admin dashboard for managing products, orders, and inventory efficiently.',
    tags: ['Next.js', 'Express', 'Tailwind'],
    live: 'https://arzooqbd.com/',
    github: '#',
    accent: '#f97316',
  },
];

const ProjectCard = ({ img, title, desc, tags, live, github, accent, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card"
      style={{ '--accent': accent, animationDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="project-img-wrap">
        <img src={img} alt={title} className={`project-img${hovered ? ' hovered' : ''}`} />

        {/* Overlay on hover */}
        <div className={`project-img-overlay${hovered ? ' visible' : ''}`}>
          <a href={live} className="overlay-btn" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5A6.5 6.5 0 1 1 1.5 8 6.507 6.507 0 0 1 8 1.5zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0z" fill="currentColor"/>
              <path d="M8 4l4 4-4 4M4 8h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Live Preview
          </a>
        </div>

        {/* Top accent line */}
        <div className="project-top-line" />
      </div>

      {/* Body */}
      <div className="project-body">
        {/* Tags */}
        <div className="project-tags">
          {tags.map(tag => (
            <span key={tag} className="project-tag" style={{ '--accent': accent }}>{tag}</span>
          ))}
        </div>

        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{desc}</p>

        {/* Buttons */}
        <div className="project-btns">
          <a href={live} target="_blank" rel="noreferrer" className="btn-primary" style={{ '--accent': accent }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Visit Site
          </a>
          <a href={github} target="_blank" rel="noreferrer" className="btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* Hover glow */}
      <div className="project-glow" />
    </div>
  );
};

const ProjectsDark = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap');

        .projects-section {
          position: relative;
          padding: 100px 20px;
          background: #07080d;
          overflow: hidden;
          font-family: 'Space Grotesk', sans-serif;
        }
        .projects-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(181,56,227,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(181,56,227,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }
        .projects-orb {
          position: absolute;
          width: 600px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%);
          filter: blur(80px);
          bottom: -100px; right: -100px;
          pointer-events: none;
        }

        .projects-inner {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Header */
        .projects-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .projects-eyebrow {
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
        .projects-eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #B538E3;
          box-shadow: 0 0 6px #B538E3;
          animation: dot-pulse 2s ease-in-out infinite;
        }
        @keyframes dot-pulse { 0%,100%{opacity:1}50%{opacity:0.2} }

        .projects-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0 0 14px;
        }
        .projects-title span {
          background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .projects-subtitle {
          font-size: 0.975rem;
          color: #475569;
          max-width: 440px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 768px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* Card */
        .project-card {
          position: relative;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s, box-shadow 0.3s;
          animation: cardUp 0.6s ease both;
        }
        @keyframes cardUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: color-mix(in srgb, var(--accent) 35%, transparent);
          box-shadow: 0 20px 60px color-mix(in srgb, var(--accent) 12%, transparent);
        }
        .project-card:hover .project-glow { opacity: 1; }
        .project-card:hover .project-top-line {
          opacity: 1;
          transform: scaleX(1);
        }

        /* Glow */
        .project-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 40% at 50% 0%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 70%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s;
          z-index: 0;
        }

        /* Image */
        .project-img-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16/9;
          background: #0f1118;
        }
        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .project-img.hovered { transform: scale(1.06); }

        /* Top accent line */
        .project-top-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0;
          transform: scaleX(0.3);
          transform-origin: center;
          transition: opacity 0.3s, transform 0.4s;
          z-index: 5;
        }

        /* Overlay */
        .project-img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(7,8,13,0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
          backdrop-filter: blur(2px);
          z-index: 4;
        }
        .project-img-overlay.visible {
          opacity: 1;
          pointer-events: all;
        }
        .overlay-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          backdrop-filter: blur(8px);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .overlay-btn:hover {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.35);
          transform: scale(1.04);
        }

        /* Body */
        .project-body {
          position: relative;
          z-index: 1;
          padding: 24px 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Tags */
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 14px;
        }
        .project-tag {
          font-size: 0.68rem;
          font-weight: 600;
          font-family: 'Syne', sans-serif;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--accent);
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
          border-radius: 100px;
          padding: 3px 11px;
        }

        .project-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: #e2e8f0;
          margin: 0 0 10px;
          line-height: 1.3;
        }
        .project-desc {
          font-size: 0.875rem;
          color: #475569;
          line-height: 1.7;
          margin: 0 0 22px;
        }

        /* Buttons */
        .project-btns {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 20px;
          background: linear-gradient(135deg, var(--accent) 0%, color-mix(in srgb, var(--accent) 60%, #f97316) 100%);
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          border-radius: 9px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px color-mix(in srgb, var(--accent) 30%, transparent);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px color-mix(in srgb, var(--accent) 45%, transparent);
        }
        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 18px;
          background: transparent;
          color: #64748b;
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 9px;
          border: 1px solid rgba(255,255,255,0.08);
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .btn-ghost:hover {
          border-color: rgba(181,56,227,0.4);
          color: #B538E3;
          background: rgba(181,56,227,0.06);
        }

        /* Bottom CTA */
        .projects-cta {
          text-align: center;
          margin-top: 56px;
        }
        .projects-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 32px;
          background: transparent;
          border: 1px solid rgba(181,56,227,0.35);
          border-radius: 12px;
          color: #B538E3;
          font-family: 'Syne', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .projects-cta-btn:hover {
          background: rgba(181,56,227,0.08);
          border-color: rgba(181,56,227,0.6);
          box-shadow: 0 0 24px rgba(181,56,227,0.2);
          transform: translateY(-2px);
        }
      `}</style>

      <section id='projects' className="projects-section">
        <div className="projects-orb" />

        <div className="projects-inner">
          {/* Header */}
          <div className="projects-header">
            <div className="projects-eyebrow">What I've built</div>
            <h2 className="projects-title">My <span>Projects</span></h2>
            <p className="projects-subtitle">
              A selection of real-world projects built with modern tools and a focus on clean, scalable code.
            </p>
          </div>

          {/* Grid */}
          <div className="projects-grid">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} index={i} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="projects-cta">
            <a href="https://github.com/asif938" target="_blank" rel="noreferrer" className="projects-cta-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View All on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsDark;