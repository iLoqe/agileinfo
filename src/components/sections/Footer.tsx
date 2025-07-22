import Image from 'next/image';
import Link from 'next/link';

const companyLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#' },
];

const serviceLinks = [
  { label: 'Web Development', href: '#' },
  { label: 'Mobile App Development', href: '#' },
  { label: 'SEO Optimization', href: '#' },
  { label: 'Domain and Hosting Services', href: '#' },
  { label: 'General IT Consultations', href: '#' },
];

const contacts = [
  { icon: 'mail', text: 'info@agileinfoz.com' },
  { icon: 'location', text: 'AGILEINFOTECH, Thycaud, Thiruvananthapuram, 605014' },
  { icon: 'phone', text: '+91 7907248735' },
  { icon: 'support', text: '+91 9847301349 (Support)' },
];

const socialLinks = [
  { icon: '/facebook.svg', href: '#' },
  { icon: '/twitter.svg', href: '#' },
  { icon: '/instagram.svg', href: '#' },
  { icon: '/linkedin.svg', href: '#' },
  { icon: '/youtube.svg', href: '#' },
];

const iconMap = {
  mail: (
    <svg className="inline-block mr-2" width="18" height="18" fill="#ff4e9b" viewBox="0 0 24 24"><path d="M2 4h20v16H2V4zm2 2v12h16V6H4zm8 5.414L5.707 7.121 7.121 5.707 12 10.586l4.879-4.879 1.414 1.414L12 11.414z"/></svg>
  ),
  location: (
    <svg className="inline-block mr-2" width="18" height="18" fill="#ff4e9b" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
  ),
  phone: (
    <svg className="inline-block mr-2" width="18" height="18" fill="#ff4e9b" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.35.27 2.67.76 3.88a1 1 0 0 1-.21 1.11l-2.2 2.2z"/></svg>
  ),
  support: (
    <svg className="inline-block mr-2" width="18" height="18" fill="#ff4e9b" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-10 10v4a2 2 0 0 0 2 2h2v-6H4v-2a8 8 0 0 1 16 0v2h-2v6h2a2 2 0 0 0 2-2v-4a10 10 0 0 0-10-10zm-2 14v-4h4v4h-4z"/></svg>
  ),
};

const Footer = () => {
  return (
    <footer className="relative bg-[#18141c] pt-16 pb-6 px-4 md:px-0 overflow-hidden">
      <style>{`
        .footer-gradient {
          background: linear-gradient(180deg, #2d1936 0%, #18141c 100%);
        }
        .footer-gradient-text {
          background: linear-gradient(90deg, #ff4e9b 0%, #ff6ec4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .footer-social-icon {
          background: #23202a;
          border-radius: 50%;
          padding: 8px;
          margin-right: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .footer-social-icon:hover {
          background: #ff4e9b;
        }
        .floating-dot {
          position: absolute;
          border-radius: 50%;
          opacity: 0.6;
          z-index: 0;
        }
      `}</style>
      {/* Floating Dots/Shapes */}
      <span className="floating-dot" style={{width: '22px', height: '22px', background: '#ff4e9b', top: '8%', left: '10%'}}></span>
      <span className="floating-dot" style={{width: '14px', height: '14px', background: '#6ec6ff', top: '18%', left: '80%'}}></span>
      <span className="floating-dot" style={{width: '18px', height: '18px', background: '#ffb86c', top: '60%', left: '5%'}}></span>
      <span className="floating-dot" style={{width: '20px', height: '20px', background: '#c792ea', top: '80%', left: '30%'}}></span>
      <span className="floating-dot" style={{width: '30px', height: '30px', background: '#ff4e9b', top: '30%', right: '10%'}}></span>
      <span className="floating-dot" style={{width: '16px', height: '16px', background: '#6ec6ff', top: '70%', right: '15%'}}></span>
      <div className="footer-gradient w-full absolute top-0 left-0 h-full -z-10" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10 pb-8">
        {/* Logo and About */}
        <div className="flex-1 min-w-[220px] flex flex-col items-start mb-8 md:mb-0">
          <Image src="/logo.png" alt="AGILEINFOTECH Logo" width={90} height={60} className="mb-2" />
          <span className="text-lg font-bold text-white mb-2">AGILEINFOTECH</span>
          <p className="text-sm text-white/80 mb-4 max-w-xs">
            Join our community of innovators and stay updated with the latest trends, insights, and opportunities.
          </p>
          <div className="flex items-center mb-2">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} className="footer-social-icon" target="_blank" rel="noopener noreferrer">
                <Image src={s.icon} alt="social" width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
        {/* Company */}
        <div className="flex-1 min-w-[160px]">
          <h4 className="text-white font-bold mb-2">Company</h4>
          <ul>
            {companyLinks.map((link, i) => (
              <li key={i} className="mb-1">
                <Link href={link.href} className="text-white/80 hover:text-pink-400 transition-colors text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Services */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="text-white font-bold mb-2">Services</h4>
          <ul>
            {serviceLinks.map((link, i) => (
              <li key={i} className="mb-1">
                <Link href={link.href} className="text-white/80 hover:text-pink-400 transition-colors text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contacts */}
        <div className="flex-1 min-w-[220px]">
          <h4 className="text-white font-bold mb-2">Contacts</h4>
          <ul>
            {contacts.map((c, i) => (
              <li key={i} className="mb-1 text-white/80 text-sm flex items-start">
                {iconMap[c.icon as keyof typeof iconMap]}
                <span>{c.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-4 mt-4 text-center text-white/60 text-xs">
        © 2025 Agileinfo Techytern Solutions LLP. All rights reserved. Designed with <span className="text-pink-400">♥</span> for creating exceptional experiences.
      </div>
    </footer>
  );
};

export default Footer; 