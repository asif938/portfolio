import React, { useRef, useEffect, useState } from 'react';
import graphics from '../assets/graphics.json';
import web from '../assets/web.json';
import application from '../assets/Coding.json';
import Lottie from 'lottie-react';

const cards = [
  {
    anim: application,
    title: 'Web Application Development',
    desc: 'Scalable, performant MERN stack apps with clean architecture and modern UX.',
    accent: '#B538E3',
    glow: 'rgba(181,56,227,0.18)',
    border: 'rgba(181,56,227,0.22)',
    tag: 'React · Node · MongoDB',
  },
  {
    anim: graphics,
    title: 'Graphics Design & Branding',
    desc: 'Memorable brand identities, logos, and visual systems that stand out.',
    accent: '#f97316',
    glow: 'rgba(249,115,22,0.15)',
    border: 'rgba(249,115,22,0.22)',
    tag: 'Figma · Illustrator · Branding',
  },
  {
    anim: web,
    title: 'Full Stack Web Development',
    desc: 'End-to-end solutions from pixel-perfect frontends to robust backend APIs.',
    accent: '#06b6d4',
    glow: 'rgba(6,182,212,0.15)',
    border: 'rgba(6,182,212,0.22)',
    tag: 'Express · REST · Tailwind',
  },
];

const OfferCard = ({ anim, title, desc, accent, glow, border, tag, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="offer-card"
      style={{
        '--accent': accent,
        '--glow': glow,
        '--border': border,
        animationDelay: `${index * 0.12}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top glow line */}
      <div className="card-top-line" />

      {/* Lottie */}
      <div className="card-lottie">
        <Lottie animationData={anim} loop autoplay />
      </div>

      {/* Tag */}
      <span className="card-tag">{tag}</span>

      {/* Text */}
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{desc}</p>

      {/* Bottom CTA */}
      <div className="card-cta">
        <span>Learn more</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Hover glow bg */}
      <div className="card-hover-glow" />
    </div>
  );
};

const OfferDark = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap');

        .offer-section {
          position: relative;
          padding: 100px 20px;
          background: #07080d;
          overflow: hidden;
          font-family: 'Space Grotesk', sans-serif;
        }

        /* Grid bg */
        .offer-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(181,56,227,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(181,56,227,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        /* Section header */
        .offer-header {
          text-align: center;
          margin-bottom: 64px;
          position: relative;
          z-index: 2;
        }
        .offer-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(181,56,227,0.1);
          border: 1px solid rgba(181,56,227,0.25);
          border-radius: 100px;
          padding: 6px 18px;
          font-size: 0.72rem;
          font-weight: 600;
          color: #c96de8;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .offer-eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #B538E3;
          box-shadow: 0 0 6px #B538E3;
          animation: dot-pulse 2s ease-in-out infinite;
        }
        @keyframes dot-pulse {
          0%,100% { opacity: 1; } 50% { opacity: 0.2; }
        }

        .offer-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0 0 16px;
        }
        .offer-title span {
          background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .offer-subtitle {
          font-size: 1rem;
          color: #475569;
          max-width: 440px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Cards grid */
        .offer-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .offer-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* Card */
        .offer-card {
          position: relative;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 0;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, border-color 0.3s, box-shadow 0.3s;
          animation: cardFadeUp 0.6s ease both;
        }
        @keyframes cardFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .offer-card:hover {
          transform: translateY(-6px);
          border-color: var(--border);
          box-shadow: 0 16px 48px var(--glow), 0 0 0 1px var(--border);
        }
        .offer-card:hover .card-hover-glow {
          opacity: 1;
        }
        .offer-card:hover .card-top-line {
          opacity: 1;
          transform: scaleX(1);
        }
        .offer-card:hover .card-cta {
          color: var(--accent);
          gap: 8px;
        }

        /* Top accent line */
        .card-top-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0;
          transform: scaleX(0.4);
          transform-origin: center;
          transition: opacity 0.3s, transform 0.4s;
          border-radius: 2px;
        }

        /* Hover glow */
        .card-hover-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, var(--glow), transparent 70%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s;
          z-index: 0;
        }

        /* Lottie */
        .card-lottie {
          position: relative;
          z-index: 1;
          width: 160px;
          margin: 0 auto 16px;
        }
        @media (min-width: 768px) {
          .card-lottie { width: 180px; }
        }

        /* Tag */
        .card-tag {
          position: relative;
          z-index: 1;
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent);
          background: color-mix(in srgb, var(--accent) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
          border-radius: 100px;
          padding: 4px 12px;
          width: fit-content;
          margin-bottom: 12px;
        }

        .card-title {
          position: relative;
          z-index: 1;
          font-family: 'Syne', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #e2e8f0;
          line-height: 1.3;
          margin: 0 0 10px;
        }

        .card-desc {
          position: relative;
          z-index: 1;
          font-size: 0.875rem;
          color: #475569;
          line-height: 1.7;
          margin: 0 0 20px;
          flex: 1;
        }

        .card-cta {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          font-family: 'Syne', sans-serif;
          color: #334155;
          transition: color 0.2s, gap 0.2s;
          margin-top: auto;
        }

        /* Bottom divider */
        .offer-divider {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 64px;
        }
        .divider-line {
          height: 1px;
          width: 80px;
          background: linear-gradient(90deg, transparent, rgba(181,56,227,0.3));
        }
        .divider-line:last-child {
          background: linear-gradient(90deg, rgba(181,56,227,0.3), transparent);
        }
        .divider-text {
          font-size: 0.75rem;
          color: #334155;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: 'Syne', sans-serif;
        }
      `}</style>

      <section className="offer-section">
        {/* Header */}
        <div className="offer-header">
          <div className="offer-eyebrow">What I offer</div>
          <h2 className="offer-title">
            I Can Do <span>For You</span>
          </h2>
          <p className="offer-subtitle">
            From concept to deployment — I bring ideas to life with clean code, sharp design, and real-world thinking.
          </p>
        </div>

        {/* Cards */}
        <div className="offer-grid">
          {cards.map((card, i) => (
            <OfferCard key={i} {...card} index={i} />
          ))}
        </div>

        {/* Bottom divider */}
        <div className="offer-divider">
          <div className="divider-line" />
          <span className="divider-text">Always building</span>
          <div className="divider-line" />
        </div>
      </section>
    </>
  );
};

export default OfferDark;