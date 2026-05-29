import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Award, Sparkles, Building2, Map } from 'lucide-react';

interface HeaderProps {
  onOpenQuote?: (initialType?: string) => void;
  onScrollToSection?: (sectionId: string) => void;
  onSelectServiceDirectly?: (serviceId: string) => void;
}

export default function Header({ onOpenQuote, onScrollToSection, onSelectServiceDirectly }: HeaderProps = {}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPhonePopupOpen, setIsPhonePopupOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const mainNavItems = [
    { label: 'Home', path: '/' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Services', path: '/services' },
  ];

  const servicesDropdownItems = [
    { label: 'Aluminum Signs', id: 'aluminum-signs' },
    { label: 'Monument Signs', id: 'monument-signs' },
    { label: 'Lobby Signs', id: 'lobby-signs' },
    { label: 'Window Graphics', id: 'window-graphics' },
  ];

  const handleServiceClick = (serviceId: string) => {
    setIsMobileMenuOpen(false);
    if (onSelectServiceDirectly) {
      onSelectServiceDirectly(serviceId);
    } else {
      navigate('/services', { state: { serviceId } });
    }
  };

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuoteClick = () => {
    setIsMobileMenuOpen(false);
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      navigate('/quote');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-neutral-200 shadow-xs" id="site-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        {/* Logo left */}
        <div
          onClick={() => handleNavClick('/')}
          className="flex items-center cursor-pointer select-none group"
          id="header-logo"
        >
          <img
            src="/signslogo.png"
            alt="Las Vegas Sign Company Logo"
            referrerPolicy="no-referrer"
            className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-103"
            id="header-logo-img"
          />
        </div>

        {/* Menu right */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-neutral-700 font-sans">
          {mainNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`cursor-pointer transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-600 outline-hidden hover:after:scale-x-100 after:transition-transform ${
                  isActive ? 'text-orange-600 after:scale-x-100' : 'hover:text-orange-600 after:scale-x-0'
                }`}
                id={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action icons + Call button */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Map trigger */}
          <a
            href="https://www.google.com/maps/dir//Las+Vegas+Sign+Company,+6225+Harrison+Dr,+Las+Vegas,+NV+89120%D8%8C+%D8%A7%D9%84%D9%88%D9%84%D8%A7%D9%8A%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%AF%D8%A9%E2%80%AD/@36.0768474,-115.1036509,1898m/data=!3m1!1e3!4m17!1m8!3m7!1s0x80c8c536cf1cf0a5:0xbe176bafce5f3421!2sLas+Vegas+Sign+Company!8m2!3d36.0768474!4d-115.1131789!15sCgdDb21wYW55WgkiB2NvbXBhbnmSAQlzaWduX3Nob3CaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUm9NMDlIY0hKUlJSQULgAQD6AQQIABBA!16s%2Fg%2F11jzsp92m1!4m7!1m0!1m5!1m1!1s0x80c8c536cf1cf0a5:0xbe176bafce5f3421!2m2!1d-115.1131789!2d36.0768474?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-orange-600 transition-colors cursor-pointer p-1"
            title="View on Google Maps"
            id="maps-icon-btn"
          >
            <Map className="w-5 h-5" />
          </a>

          {/* Phone call trigger */}
          <div className="relative">
            <button
              onClick={() => setIsPhonePopupOpen(!isPhonePopupOpen)}
              className="text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1 cursor-pointer font-sans text-sm font-bold p-1"
              title="Call Contractor Hotline"
              id="phone-icon-btn"
            >
              <Phone className="w-5 h-5 text-orange-600 mr-0.5" />
              <span>702.418.6174</span>
            </button>

            <AnimatePresence>
              {isPhonePopupOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-3 w-64 bg-white border border-neutral-200 shadow-xl rounded-md p-4 z-50 text-center"
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
            className={`font-display font-black uppercase tracking-widest text-xs px-5 py-3 rounded-md transition-all shadow-md active:scale-95 cursor-pointer ${
              location.pathname === '/quote'
                ? 'bg-neutral-900 text-white hover:bg-orange-600'
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
            id="header-cta-quote-btn"
          >
            GET A FREE QUOTE
          </button>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:7024186174"
            className="text-orange-600 hover:text-orange-700 p-2 border border-neutral-200 rounded-md"
            title="Call"
            id="mobile-phone-call-btn"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-neutral-700 hover:text-black p-2 border border-neutral-200 rounded-md cursor-pointer"
            id="mobile-menu-hamburger"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-white border-t border-neutral-200 px-4 py-4 space-y-4 shadow-inner z-50 overflow-hidden text-left"
            id="mobile-menu-drawer"
          >
            <div className="flex flex-col space-y-3 font-bold uppercase tracking-wider text-xs text-neutral-800">
              {mainNavItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="w-full text-left py-2 hover:text-orange-600 cursor-pointer"
                  id={`mob-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}

              <div className="border-t border-neutral-100 pt-3">
                <p className="text-[10px] text-neutral-400 tracking-wider font-semibold uppercase mb-1">
                  Our Specialties
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-bold">
                  {servicesDropdownItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleServiceClick(item.id)}
                      className="text-left py-2 text-neutral-600 hover:text-orange-600 cursor-pointer"
                      id={`mob-svc-${item.id}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-100 pt-4 flex flex-col gap-3">
              <a
                href="tel:7024186174"
                className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-100 text-neutral-850 rounded-md text-xs font-bold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                <span>Call Dispatch: 702.418.6174</span>
              </a>
              <button
                onClick={handleQuoteClick}
                className="w-full py-3 bg-red-600 hover:bg-neutral-900 text-white rounded-md text-xs font-black uppercase tracking-widest text-center shadow-md cursor-pointer"
                id="mob-cta-quote-btn"
              >
                GET A FREE QUOTE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
