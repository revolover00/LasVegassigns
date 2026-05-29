import { useNavigate } from 'react-router-dom';
import { Building2, Sparkles, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenQuote?: () => void;
  onScrollToSection?: (sectionId: string) => void;
}

export default function Footer({ onOpenQuote, onScrollToSection }: FooterProps = {}) {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handlePartnerLink = (partner: string) => {
    alert(`Rerouting to verified partner portal: "${partner}"`);
  };

  const handlePolicyLink = (policy: string) => {
    alert(`Regulatory standard legal text: "${policy}" disclosure model.`);
  };

  const handleNavigation = (path: string, state?: any) => {
    navigate(path, { state });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400" id="site-footer text-left">
      {/* Upper banner with newsletter-style design or CTA */}
      <div className="border-b border-neutral-850 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-2">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block font-sans">
              READY TO BRAND YOUR SPACE?
            </span>
            <h4 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-wide">
              SHIPPING NATIONWIDE TO ALL 50 STATES
            </h4>
            <p className="text-xs text-neutral-400 max-w-xl">
              From custom hotel lobby signs to robust aluminum directional markers, we build, package, and ship your commercial signage directly to your site anywhere in the USA.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote ? onOpenQuote() : handleNavigation('/quote')}
            className="flex-shrink-0 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-display font-extrabold uppercase tracking-widest text-[11px] px-8 py-4 rounded-md transition-all active:scale-95 shadow-lg shadow-orange-950/40 cursor-pointer"
            id="footer-cta-quote-btn"
          >
            GET A FREE QUOTE
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12" id="footer-links-grid">
        {/* Col 1: Branding and Contact Info */}
        <div className="space-y-6 text-left">
          <div
            onClick={() => handleNavigation('/')}
            className="flex items-center cursor-pointer select-none group w-fit"
            id="footer-logo"
          >
            <img
              src="/signslogo.png"
              alt="Las Vegas Sign Company Logo"
              referrerPolicy="no-referrer"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-103 brightness-100"
              id="footer-logo-img"
            />
          </div>

          <p className="text-xs text-neutral-500 leading-relaxed">
            Premier corporate signage manufacturer shipping nationwide. Delivering flawless metal designs, massive pole mounts, and illuminated corporate graphics tailored to strict architectural guidelines.
          </p>

          <div className="space-y-3 font-sans text-xs">
            <div className="flex gap-2.5 items-center">
              <Phone className="w-4 h-4 text-orange-500" />
              <a href="tel:7024186174" className="hover:text-white transition-colors font-medium">
                702.418.6174
              </a>
            </div>
            <div className="flex gap-2.5 items-center text-neutral-500">
              <Mail className="w-4 h-4 text-orange-500" />
              <span>permits@lasvegassignments.online</span>
            </div>
            <div className="flex gap-2.5 items-start text-neutral-500">
              <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                6225 Harrison Street Suite 13,<br />
                Las Vegas, NV 89119 (by appointment only)
              </span>
            </div>
          </div>
        </div>

        {/* Col 2: Services Quick Links */}
        <div className="space-y-4 text-left">
          <h5 className="text-xs font-black text-neutral-250 uppercase tracking-widest border-b border-neutral-850 pb-2">
            Signage Solutions
          </h5>
          <ul className="space-y-2.5 text-xs font-sans">
            <li>
              <button
                onClick={() => handleNavigation('/services', { serviceId: 'lobby-signs' })}
                className="hover:text-orange-500 transition-colors cursor-pointer text-left font-semibold"
                id="footer-link-lobby"
              >
                Custom Lobby Signs
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/services', { serviceId: 'aluminum-signs' })}
                className="hover:text-orange-500 transition-colors cursor-pointer text-left font-semibold"
                id="footer-link-aluminum"
              >
                Aluminum Signs &amp; Posts
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/services', { serviceId: 'metal-signs' })}
                className="hover:text-orange-500 transition-colors cursor-pointer text-left font-semibold"
                id="footer-link-metal"
              >
                Metal &amp; Brushed Signs
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/services', { serviceId: 'monument-signs' })}
                className="hover:text-orange-500 transition-colors cursor-pointer text-left font-semibold"
                id="footer-link-pylon"
              >
                Pylon &amp; Monument Structures
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/services', { serviceId: 'window-graphics' })}
                className="hover:text-orange-500 transition-colors cursor-pointer text-left font-semibold"
                id="footer-link-window"
              >
                Window Graphic Decals
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Partners & Alliances */}
        <div className="space-y-4 text-left">
          <h5 className="text-xs font-black text-neutral-250 uppercase tracking-widest border-b border-neutral-850 pb-2">
            National Network
          </h5>
          <ul className="space-y-2.5 text-xs font-sans">
            <li>
              <button
                onClick={() => handlePartnerLink('National Building Code Alliance')}
                className="hover:text-orange-500 transition-colors cursor-pointer text-left font-semibold"
                id="footer-partner-cc"
              >
                US Contractor Hub
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePartnerLink('United Signage Association')}
                className="hover:text-orange-500 transition-colors cursor-pointer text-left font-semibold"
                id="footer-partner-nsc"
              >
                National Signage Guild
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePartnerLink('National Zoning & Design Council')}
                className="hover:text-orange-500 transition-colors cursor-pointer text-left font-semibold"
                id="footer-partner-zoning"
              >
                Zoning &amp; Design Standards
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePartnerLink('National Steel Erectors Union')}
                className="hover:text-orange-500 transition-colors cursor-pointer text-left font-semibold"
                id="footer-partner-erectors"
              >
                Erectors &amp; Riggers Guild
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Legislation & Permits */}
        <div className="space-y-4 text-left">
          <h5 className="text-xs font-black text-neutral-255 uppercase tracking-widest border-b border-neutral-850 pb-2">
            Legal &amp; Policy
          </h5>
          <ul className="space-y-2.5 text-xs font-sans">
            <li>
              <button
                onClick={() => handlePolicyLink('Privacy Policy')}
                className="hover:text-orange-500 transition-colors text-left cursor-pointer"
                id="footer-legal-privacy"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePolicyLink('Terms & National Construction Conditions')}
                className="hover:text-orange-500 transition-colors text-left cursor-pointer"
                id="footer-legal-terms"
              >
                Terms &amp; Conditions
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePolicyLink('National Contractor Licensing Disclosures')}
                className="hover:text-orange-500 transition-colors text-left cursor-pointer"
                id="footer-legal-licensing"
              >
                State License Disclosures
              </button>
            </li>
            <li>
              <button
                onClick={() => handlePolicyLink('Accessibility Sign Codes (ADA)')}
                className="hover:text-orange-500 transition-colors text-left cursor-pointer"
                id="footer-legal-ada"
              >
                ADA Signage Compliance Guidelines
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright details */}
      <div className="bg-neutral-980 text-[10px] text-neutral-600 py-6 px-6 border-t border-neutral-900 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p>
            &copy; {currentYear} Las Vegas Sign Company. All rights reserved. Delivering Nationwide across all 50 US States.
          </p>
          <div className="flex gap-4">
            <button onClick={() => handlePolicyLink('Terms')} className="hover:underline cursor-pointer">Terms of Use</button>
            <span>•</span>
            <button onClick={() => handlePolicyLink('Privacy')} className="hover:underline cursor-pointer">Privacy Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
