import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <FaFacebookF />, href: 'https://facebook.com/sayyedahmad.asif', label: 'Facebook', color: '#1877F2' },
  { icon: <LuGithub />, href: 'https://github.com/asif938', label: 'GitHub', color: '#ffffff' },
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/sayyed-ahmad-asif-4088b9317/', label: 'LinkedIn', color: '#0A66C2' },
  // { icon: <FaXTwitter />, href: '#', label: 'Twitter', color: '#ffffff' },
];

const FooterDark = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap');

        .footer-root {
          position: relative;
          background: #07080d;
          overflow: hidden;
          font-family: 'Space Grotesk', sans-serif;
          border-top: 1px solid rgba(181,56,227,0.12);
        }

        /* Grid bg */
        .footer-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(181,56,227,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(181,56,227,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        /* Glow at top */
        .footer-glow {
          position: absolute;
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 250px;
          background: radial-gradient(ellipse, rgba(181,56,227,0.12) 0%, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
        }

        .footer-inner {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
          padding: 64px 24px 0;
        }

        /* Top section */
        .footer-top {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        @media (min-width: 768px) {
          .footer-top { grid-template-columns: 1.4fr 1fr 1fr; gap: 40px; }
        }

        /* Brand col */
        .footer-brand {}
        .footer-name {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          margin: 0 0 4px;
        }
        .footer-name span {
          background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-tagline {
          font-size: 0.8rem;
          color: #475569;
          margin: 0 0 20px;
          letter-spacing: 0.04em;
        }
        .footer-bio {
          font-size: 0.85rem;
          color: #334155;
          line-height: 1.7;
          max-width: 300px;
          margin: 0 0 24px;
        }

        /* Status badge */
        .footer-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(181,56,227,0.08);
          border: 1px solid rgba(181,56,227,0.2);
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 0.72rem;
          font-weight: 600;
          color: #c96de8;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .footer-status-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #B538E3;
          box-shadow: 0 0 6px #B538E3;
          animation: dot-pulse 2s ease-in-out infinite;
        }
        @keyframes dot-pulse { 0%,100%{opacity:1}50%{opacity:0.25} }

        /* Nav col */
        .footer-col-title {
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          color: #475569;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0 0 18px;
        }
        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
          list-style: none;
          padding: 0; margin: 0;
        }
        .footer-nav a {
          font-size: 0.875rem;
          color: #475569;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s, gap 0.2s;
        }
        .footer-nav a::before {
          content: '→';
          font-size: 0.7rem;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .footer-nav a:hover {
          color: #B538E3;
          gap: 10px;
        }
        .footer-nav a:hover::before { opacity: 1; }

        /* Contact col */
        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          color: #475569;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-contact-item:hover { color: #94a3b8; }
        .fc-icon {
          width: 28px; height: 28px;
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Socials row */
        .footer-socials {
          display: flex;
          gap: 10px;
          margin-top: 28px;
        }
        .footer-social-btn {
          width: 38px; height: 38px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
          font-size: 0.85rem;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .footer-social-btn:hover {
          color: var(--sc);
          border-color: color-mix(in srgb, var(--sc) 40%, transparent);
          background: color-mix(in srgb, var(--sc) 8%, transparent);
          transform: translateY(-3px);
        }

        /* Bottom bar */
        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 24px 0;
          text-align: center;
        }
        @media (min-width: 640px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }
        .footer-copy {
          font-size: 0.78rem;
          color: #475569;
        }
        .footer-copy span {
          background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }
        .footer-made {
          font-size: 0.75rem;
          color: #475569;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .footer-made .heart {
          color: #B538E3;
          animation: heartbeat 1.4s ease-in-out infinite;
        }
        @keyframes heartbeat {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.25); }
        }

        /* Back to top */
        .back-to-top {
          position: fixed;
          bottom: 28px;
          right: 24px;
          width: 42px; height: 42px;
          border-radius: 11px;
          background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
          border: none;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1rem;
          box-shadow: 0 4px 20px rgba(181,56,227,0.4);
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          z-index: 99;
        }
        .back-to-top:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(181,56,227,0.55);
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-glow" />

        <div className="footer-inner">
          <div className="footer-top">

            {/* ── Brand ── */}
            <div className="footer-brand">
              <h2 className="footer-name">
                Ahmad <span>Asif</span>
              </h2>
              <p className="footer-tagline">FULL Stack Developer · Designer</p>
              <p className="footer-bio">
                Building scalable web experiences with clean code and sharp design.
                Always learning. Always building.
              </p>
              <div className="footer-status">
                <span className="footer-status-dot" />
                Open to work
              </div>
            </div>

            {/* ── Nav ── */}
            <div>
              <p className="footer-col-title">Navigation</p>
              <ul className="footer-nav">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contact ── */}
            <div>
              <p className="footer-col-title">Contact</p>
              <div className="footer-contact-list">
                <a href="mailto:asifcse5581@gmail.com" className="footer-contact-item">
                  <span className="fc-icon" style={{ background: 'rgba(181,56,227,0.1)', color: '#B538E3' }}>✉</span>
                  asifcse5581@gmail.com
                </a>
                <a href="tel:+8801518984730" className="footer-contact-item">
                  <span className="fc-icon" style={{ background: 'rgba(249,115,22,0.1)', color: '#f97316' }}>📞</span>
                  +8801518984730
                </a>
                <span className="footer-contact-item">
                  <span className="fc-icon" style={{ background: 'rgba(6,182,212,0.1)', color: '#06b6d4' }}>📍</span>
                  Ashulia, Savar, Dhaka
                </span>
              </div>

              {/* Socials */}
              <div className="footer-socials">
                {socials.map(({ icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    className="footer-social-btn"
                    aria-label={label}
                    style={{ '--sc': color }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ── Bottom bar ── */}
          <div className="footer-bottom">
            <p className="footer-copy">
              © {year} All Rights Reserved by <span>Sayyed Ahmad Asif</span>
            </p>
            <p className="footer-made">
              Built with React & Tailwind
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <a href="#home" className="back-to-top" aria-label="Back to top">↑</a>
    </>
  );
};

export default FooterDark;