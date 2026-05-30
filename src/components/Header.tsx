import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Map } from 'lucide-react';

interface HeaderProps {
  onOpenQuote?: (initialType?: string) => void;
  onScrollToSection?: (sectionId: string) => void;
  onSelectServiceDirectly?: (serviceId: string) => void;
}

export default function Header({ onOpenQuote, onScrollToSection, onSelectServiceDirectly }: HeaderProps = {}) {
  const [isPhonePopupOpen, setIsPhonePopupOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const mainNavItems = [
    { label: 'Home', path: '/' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Services', path: '/services' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuoteClick = () => {
    navigate('/quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-neutral-200 shadow-sm" id="site-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative gap-4">
        {/* Logo left */}
        <div
          onClick={() => handleNavClick('/')}
          className="flex items-center cursor-pointer select-none group flex-shrink-0"
          id="header-logo"
        >
          <img
            src="/signslogo.png"
            alt="Las Vegas Sign Company Logo"
            referrerPolicy="no-referrer"
            className="h-10 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            id="header-logo-img"
          />
        </div>

        {/* Menu middle - visible on both mobile and desktop now */}
        <nav className="flex items-center gap-3 sm:gap-6 lg:gap-8 text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-wider text-neutral-700 font-sans">
          {mainNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`cursor-pointer transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-600 outline-hidden hover:after:scale-x-100 after:transition-transform ${
                  isActive ? 'text-orange-600 after:scale-x-100' : 'hover:text-orange-600 after:scale-x-0'
                }`}
                id={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action icons + Call button + CTA - visible on both mobile and desktop */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 flex-shrink-0">
          {/* Map trigger - visible on all screens */}
          <a
            href="https://www.google.com/maps/dir//Las+Vegas+Sign+Company,+6225+Harrison+Dr,+Las+Vegas,+NV+89120%D8%8C+%D8%A7%D9%84%D9%88%D9%84%D8%A7%D9%8A%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%AF%D8%A9%E2%80%AD/@36.0768474,-115.1036509,1898m/data=!3m1!1e3!4m17!1m8!3m7!1s0x80c8c536cf1cf0a5:0xbe176bafce5f3421!2sLas+Vegas+Sign+Company!8m2!3d36.0768474!4d-115.1131789!15sCgdDb21wYW55WgkiB2NvbXBhbnmSAQlzaWduX3Nob3CaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUm9NMDlIY0hKUlJSQULgAQD6AQQIABBA!16s%2Fg%2F11jzsp92m1!4m7!1m0!1m5!1m1!1s0x80c8c536cf1cf0a5:0xbe176bafce5f3421!2m2!1d-115.1131789!2d36.0768474?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-orange-600 transition-colors cursor-pointer p-1"
            title="View on Google Maps"
            id="maps-icon-btn"
          >
            <Map className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          {/* Phone call trigger */}
          <div className="relative">
            <button
              onClick={() => setIsPhonePopupOpen(!isPhonePopupOpen)}
              className="text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1 cursor-pointer font-sans text-[10px] sm:text-xs lg:text-sm font-bold p-1"
              title="Call Contractor Hotline"
              id="phone-icon-btn"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-600" />
              <span className="hidden xs:inline">702.418.6174</span>
            </button>

            <AnimatePresence>
              {isPhonePopupOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-3 w-64 bg-white border border-neutral-200 shadow-xl rounded-md p-4 z-50 text-center text-neutral-900"
                  id="header-phone-popup"
                >
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">
                    Nationwide Dispatch Hot Line
                  </p>
                  <p className="font-display font-black text-lg text-neutral-900 mt-1">
                    702.418.6174
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">
                    Call now to reach our commercial project dispatch desk. Available Mon-Fri 8am-6pm PST.
                  </p>
                  <a
                    href="tel:7024186174"
                    className="mt-3 block w-full py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-md text-center"
                  >
                    Dial Now
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 'GET A FREE QUOTE' red button */}
          <button
            onClick={handleQuoteClick}
            className={`font-display font-black uppercase tracking-widest text-[9px] sm:text-[10px] lg:text-xs px-2.5 py-2 sm:px-4 sm:py-3 rounded-md transition-all shadow-md active:scale-95 cursor-pointer ${
              location.pathname === '/quote'
                ? 'bg-neutral-900 text-white hover:bg-orange-600'
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
            id="header-cta-quote-btn"
          >
            GET A FREE QUOTE
          </button>
        </div>
      </div>
    </header>
  );
}
