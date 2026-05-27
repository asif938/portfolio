import React, { useState } from 'react';
import Lottie from 'lottie-react';
import contact from '../assets/contact2.json';
import Swal from 'sweetalert2';
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    label: 'Call Me',
    value: '+8801518984730',
    accent: '#f97316',
    href: 'tel:+8801518984730',
  },
  {
    icon: <MdEmail />,
    label: 'Email Me',
    value: 'asifcse5581@gmail.com',
    accent: '#B538E3',
    href: 'mailto:asifcse5581@gmail.com',
  },
  {
    icon: <FaLocationDot />,
    label: 'Location',
    value: 'Ashulia, Savar, Dhaka',
    accent: '#06b6d4',
    href: null,
  },
];

const socials = [
  { icon: <FaFacebookF />, href: 'https://facebook.com/sayyedahmad.asif', label: 'Facebook', color: '#1877F2' },
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/sayyed-ahmad-asif-4088b9317/', label: 'LinkedIn', color: '#0A66C2' },
  { icon: <FaGithub />, href: 'https://github.com/asif938', label: 'GitHub', color: '#ffffff' },
];

const ContactDark = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "ed31fac3-70cf-4736-a6db-4c26478d0144");
    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
      }).then(r => r.json());

      if (res.success) {
        event.target.reset();
        Swal.fire({ title: "Sent!", text: "Message sent successfully!", icon: "success", background: '#0f1118', color: '#e2e8f0', confirmButtonColor: '#B538E3' });
      } else {
        Swal.fire({ title: "Error", text: "Something went wrong, please try again.", icon: "error", background: '#0f1118', color: '#e2e8f0', confirmButtonColor: '#B538E3' });
      }
    } catch {
      Swal.fire({ title: "Error", text: "Network error, please try again.", icon: "error", background: '#0f1118', color: '#e2e8f0', confirmButtonColor: '#B538E3' });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap');

        .contact-section {
          position: relative;
          padding: 100px 20px;
          background: #07080d;
          overflow: hidden;
          font-family: 'Space Grotesk', sans-serif;
        }
        .contact-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(181,56,227,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(181,56,227,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }
        .contact-orb-1 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(181,56,227,0.1) 0%, transparent 70%);
          filter: blur(80px);
          top: -100px; left: -100px;
          pointer-events: none;
        }
        .contact-orb-2 {
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%);
          filter: blur(80px);
          bottom: -80px; right: -80px;
          pointer-events: none;
        }

        .contact-inner {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Header */
        .contact-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .contact-eyebrow {
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
        .contact-eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #B538E3;
          box-shadow: 0 0 6px #B538E3;
          animation: dot-pulse 2s ease-in-out infinite;
        }
        @keyframes dot-pulse { 0%,100%{opacity:1}50%{opacity:0.2} }

        .contact-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0 0 14px;
        }
        .contact-title span {
          background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact-subtitle {
          font-size: 0.975rem;
          color: #475569;
          max-width: 440px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Layout */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (min-width: 900px) {
          .contact-grid { grid-template-columns: 1fr 1fr; gap: 60px; }
        }

        /* Left col */
        .contact-left { display: flex; flex-direction: column; gap: 0; }

        .contact-lottie {
          width: min(300px, 80vw);
          margin: 0 auto 32px;
        }

        /* Info cards */
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }
        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .contact-info-card:hover {
          border-color: color-mix(in srgb, var(--accent) 40%, transparent);
          background: color-mix(in srgb, var(--accent) 5%, transparent);
          transform: translateX(4px);
        }
        .info-icon-wrap {
          width: 44px; height: 44px;
          border-radius: 11px;
          border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          font-size: 1.1rem;
          flex-shrink: 0;
          transition: box-shadow 0.2s;
        }
        .contact-info-card:hover .info-icon-wrap {
          box-shadow: 0 0 16px color-mix(in srgb, var(--accent) 35%, transparent);
        }
        .info-label {
          font-size: 0.72rem;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-family: 'Syne', sans-serif;
          margin-bottom: 3px;
        }
        .info-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: #cbd5e1;
          font-family: 'Syne', sans-serif;
        }

        /* Socials */
        .contact-socials {
          display: flex;
          gap: 10px;
        }
        .social-btn {
          width: 40px; height: 40px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .social-btn:hover {
          color: var(--sc);
          border-color: color-mix(in srgb, var(--sc) 40%, transparent);
          background: color-mix(in srgb, var(--sc) 8%, transparent);
          transform: translateY(-3px);
        }

        /* ── Form ── */
        .contact-form-wrap {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 36px 28px;
          animation: fadeUp 0.7s ease 0.2s both;
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .form-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          color: #e2e8f0;
          margin: 0 0 6px;
        }
        .form-subtitle {
          font-size: 0.82rem;
          color: #475569;
          margin: 0 0 28px;
        }

        .form-group { display: flex; flex-direction: column; gap: 7px; margin-bottom: 18px; }
        .form-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: #64748b;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .form-input,
        .form-textarea {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 12px 16px;
          color: #e2e8f0;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.92rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          box-sizing: border-box;
        }
        .form-input::placeholder,
        .form-textarea::placeholder { color: #334155; }
        .form-input:focus,
        .form-textarea:focus {
          border-color: rgba(181,56,227,0.5);
          background: rgba(181,56,227,0.04);
          box-shadow: 0 0 0 3px rgba(181,56,227,0.1);
        }
        .form-textarea { resize: vertical; min-height: 130px; }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }
        @media (min-width: 500px) {
          .form-row { grid-template-columns: 1fr 1fr; gap: 0 16px; }
        }

        .btn-submit {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #B538E3 0%, #f97316 100%);
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          margin-top: 8px;
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
          box-shadow: 0 4px 20px rgba(181,56,227,0.3);
        }
        .btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(181,56,227,0.45);
        }
        .btn-submit:disabled { opacity: 0.65; cursor: not-allowed; }

        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <section id='contact' className="contact-section">
        <div className="contact-orb-1" />
        <div className="contact-orb-2" />

        <div className="contact-inner">
          {/* Header */}
          <div className="contact-header">
            <div className="contact-eyebrow">Get in touch</div>
            <h2 className="contact-title">Let's Work <span>Together</span></h2>
            <p className="contact-subtitle">
              Have a project in mind or just want to say hello? My inbox is always open.
            </p>
          </div>

          {/* Grid */}
          <div className="contact-grid">

            {/* ── Left ── */}
            <div className="contact-left">
              <div className="contact-lottie">
                <Lottie animationData={contact} loop autoplay />
              </div>

              <div className="contact-info-list">
                {contactInfo.map(({ icon, label, value, accent, href }) => (
                  <a
                    key={label}
                    href={href || undefined}
                    className="contact-info-card"
                    style={{ '--accent': accent }}
                    onClick={!href ? e => e.preventDefault() : undefined}
                  >
                    <div className="info-icon-wrap">{icon}</div>
                    <div>
                      <div className="info-label">{label}</div>
                      <div className="info-value">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Socials */}
              <div className="contact-socials">
                {socials.map(({ icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    className="social-btn"
                    aria-label={label}
                    style={{ '--sc': color }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Form ── */}
            <div className="contact-form-wrap">
              <h3 className="form-title">Send a Message</h3>
              <p className="form-subtitle">I'll get back to you within 24 hours.</p>

              <form onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    className="form-textarea"
                    required
                  />
                </div>

                <button type="submit" className="btn-submit" disabled={sending}>
                  {sending ? (
                    <><div className="spinner" /> Sending...</>
                  ) : (
                    <>Send Message ✦</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactDark;