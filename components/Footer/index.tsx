import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Our Process', 'Contact Us'],
    },
    {
      title: 'Services',
      links: [
        'CRM Development',
        'Web Development',
        'Business Automation',
        'SaaS Solutions',
        'Mobile App Development',
      ],
    },
    {
      title: 'Solutions',
      links: [
        'Zoho Solutions',
        'Salesforce Solutions',
        'Industry Solutions',
        'Integration Services',
      ],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Case Studies', 'FAQs', 'Support'],
    },
  ];

  const contactInfo = [
    { icon: '📞', text: '+971 50 123 4567' },
    { icon: '✉️', text: 'hello@bendra.ae' },
    { icon: '📍', text: 'Dubai, United Arab Emirates' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Email', href: '#' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        @import url('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css');

        .bendra-footer * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .bendra-footer {
          background: #050d1a;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          color: #fff;
        }

        .bendra-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        .bendra-footer-accent-line {
          height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6 30%, #60a5fa 60%, transparent);
          opacity: 0.6;
          position: relative;
          z-index: 2;
        }

        /* CTA Band */
        .bendra-cta-band {
          position: relative;
          z-index: 1;
          background: linear-gradient(100deg, #0a1628 0%, #0f1f3d 40%, #0d1b35 100%);
          border-bottom: 1px solid rgba(59,130,246,0.12);
          padding: 28px 40px;
        }

        .bendra-cta-glow {
          position: absolute;
          top: -60px;
          right: 15%;
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%);
          pointer-events: none;
        }

        .bendra-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .bendra-cta-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .bendra-cta-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 24px rgba(59,130,246,0.35);
        }

        .bendra-cta-icon-wrap i {
          font-size: 22px;
          color: #fff;
        }

        .bendra-cta-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 4px;
        }

        .bendra-cta-sub {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
        }

        .bendra-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(90deg, #3b82f6, #2563eb);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 12px 28px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(59,130,246,0.35);
          transition: all 0.3s ease;
          text-decoration: none;
          letter-spacing: 0.01em;
        }

        .bendra-cta-btn:hover {
          background: linear-gradient(90deg, #2563eb, #1d4ed8);
          box-shadow: 0 6px 28px rgba(59,130,246,0.5);
          transform: translateY(-2px);
        }

        /* Main Grid */
        .bendra-footer-main {
          position: relative;
          z-index: 1;
          padding: 52px 40px 40px;
          display: grid;
          grid-template-columns: 1.3fr 1fr 1.1fr 1fr 1fr 1.2fr;
          gap: 32px;
        }

        /* Brand */
        .bendra-brand-logo-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .bendra-brand-logo {
          height: 32px;
          width: auto;
          object-fit: contain;
        }

        .bendra-brand-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          color: #fff;
          letter-spacing: 2px;
        }

        .bendra-brand-tagline {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          font-weight: 300;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .bendra-social-row {
          display: flex;
          gap: 10px;
        }

        .bendra-social-btn {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          transition: all 0.3s ease;
          background: transparent;
          text-decoration: none;
          font-size: 0.8rem;
        }

        .bendra-social-btn:hover {
          background: #3b82f6;
          border-color: #3b82f6;
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(59,130,246,0.4);
        }

        /* Link columns */
        .bendra-link-col-title {
          font-family: 'Syne', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .bendra-link-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          list-style: none;
        }

        .bendra-link-list li a {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-weight: 300;
          transition: all 0.25s ease;
          display: inline-block;
          position: relative;
        }

        .bendra-link-list li a::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 1px;
          background: #3b82f6;
          transition: width 0.25s ease;
        }

        .bendra-link-list li a:hover {
          color: #fff;
          transform: translateX(4px);
        }

        .bendra-link-list li a:hover::after {
          width: 100%;
        }

        /* Contact */
        .bendra-contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          cursor: pointer;
          transition: color 0.25s ease;
          color: rgba(255,255,255,0.55);
        }

        .bendra-contact-item:hover {
          color: #60a5fa;
        }

        .bendra-contact-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }

        .bendra-contact-item:hover .bendra-contact-icon {
          background: rgba(59,130,246,0.2);
          border-color: rgba(59,130,246,0.4);
        }

        .bendra-contact-icon i {
          font-size: 15px;
          color: #3b82f6;
        }

        .bendra-contact-text {
          font-size: 0.85rem;
          font-weight: 300;
          color: inherit;
          line-height: 1.3;
        }

        /* Divider */
        .bendra-footer-divider {
          position: relative;
          z-index: 1;
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin: 0 40px;
        }

        /* Bottom bar */
        .bendra-footer-bottom {
          position: relative;
          z-index: 1;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .bendra-copyright {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.3);
          font-weight: 300;
        }

        .bendra-bottom-links {
          display: flex;
          gap: 24px;
        }

        .bendra-bottom-links a {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .bendra-bottom-links a:hover {
          color: rgba(255,255,255,0.7);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .bendra-footer-main {
            grid-template-columns: repeat(3, 1fr);
            padding: 40px 24px 32px;
          }

          .bendra-cta-band {
            padding: 24px;
          }

          .bendra-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .bendra-footer-main {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .bendra-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            padding: 16px 24px;
          }

          .bendra-footer-divider {
            margin: 0 24px;
          }
        }
      `}</style>

      <footer className="bendra-footer">
        <div className="bendra-footer-accent-line" />

        {/* CTA Band */}
        <div className="bendra-cta-band">
          <div className="bendra-cta-glow" />
          <div className="bendra-cta-inner">
            <div className="bendra-cta-left">
              <div className="bendra-cta-icon-wrap">
                <i className="ti ti-send" aria-hidden="true" />
              </div>
              <div>
                <div className="bendra-cta-title">Ready to build something amazing?</div>
                <div className="bendra-cta-sub">Let's turn your ideas into powerful digital solutions.</div>
              </div>
            </div>
            <a href="#" className="bendra-cta-btn">
              Get Started Today
              <i className="ti ti-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Main Grid */}
        <div className="bendra-footer-main">

          {/* Brand */}
          <div>
            <div className="bendra-brand-logo-row">
              <img src="/logo.png" alt="BENDRA Logo" className="bendra-brand-logo" />
              <span className="bendra-brand-name">BENDRA</span>
            </div>
            <div className="bendra-brand-tagline">Build Smarter Systems</div>
            <div className="bendra-social-row">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} className="bendra-social-btn" aria-label={s.label}>
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <div className="bendra-link-col-title">{col.title}</div>
              <ul className="bendra-link-list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <div className="bendra-link-col-title">Let's Talk</div>
            {contactInfo.map((info) => (
              <div key={info.text} className="bendra-contact-item">
                <div className="bendra-contact-icon">
                  <i
                    className={`ti ${
                      info.text.includes('+') ? 'ti-phone' :
                      info.text.includes('@') ? 'ti-mail' : 'ti-map-pin'
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <span className="bendra-contact-text">{info.text}</span>
              </div>
            ))}
          </div>

        </div>

        <div className="bendra-footer-divider" />

        {/* Bottom Bar */}
        <div className="bendra-footer-bottom">
          <span className="bendra-copyright">© 2024 Bendra Technologies. All rights reserved.</span>
          <div className="bendra-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;