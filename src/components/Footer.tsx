import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Sparkles, Phone, Mail, MapPin, X, Shield, Globe } from 'lucide-react';

interface FooterProps {
  onOpenQuote?: () => void;
  onScrollToSection?: (sectionId: string) => void;
}

export default function Footer({ onOpenQuote, onScrollToSection }: FooterProps = {}) {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const [infoDialog, setInfoDialog] = useState<{ title: string; content: string; type: 'partner' | 'policy' } | null>(null);

  const handlePartnerLink = (partner: string) => {
    const infoMap: Record<string, string> = {
      'National Building Code Alliance': 'Our general contractor network partners with certified local engineers and building code experts to review structural concrete footers, local zoning ordinances, and electrical feeds for heavy exterior signs.',
      'United Signage Association': 'We coordinate within the National Signage Guild to align materials supply chains, guarantee metal standards (H32 marine-grade alloys), and follow cutting-edge fabrication advancements.',
      'National Zoning & Design Council': 'We work diligently with municipal developers, surveyors, and county inspectors to clear sign dimensions, setback ratios, and street safety clearance rules across all 50 states.',
      'National Steel Erectors Union': 'For major rigging projects like regional pylons, hotel signs, or complex building-front frameworks, we dispatch and coordinate licensed local union crane crews.'
    };
    
    const content = infoMap[partner] || `Verified alliance registry supporting localized general construction operations for our commercial business signage systems.`;
    setInfoDialog({ title: partner, content, type: 'partner' });
  };

  const handlePolicyLink = (policy: string) => {
    const infoMap: Record<string, string> = {
      'Privacy Policy': 'Your proprietary blueprint files, vector logo assets (.ai, .eps, .dxf), site photos, and contact metrics are guarded under strict enterprise-grade security. Las Vegas Sign Company guarantees all client artwork is utilized solely for private CNC pathing and scale modeling.',
      'Terms & Conditions': 'All custom signage layouts, acrylic structures, and welded metal posts are fully customized to clients specification requirements. Physical production begins immediately upon layout proof approval. High-wind guarantees apply to all structural steel assemblies.',
      'National Contractor Licensing Disclosures': 'Las Vegas Sign Company designs, packages, and supplies engineering-stamped hardware to all 50 states. Local installation, concrete pouring, and final connection rigging are executed under authorized local licensed specialists adhering to municipal safety conditions.',
      'Accessibility Sign Codes (ADA)': 'Our ADA-compliant tactile structures feature grade II sub-beaded braille lettering, exact 1/32-inch raised characters, high contrast satin backgrounds, and standard architectural mounting heights to satisfy state inspects perfectly.',
      'Terms': 'Our customer agreements emphasize clear design signoffs, verified vector paths, upfront hardware estimates, and fast insured global shipping.',
      'Privacy': 'Your personal details, phone dispatch lines, and corporate metrics are encrypted. We never lease or sell client profiles to retail marketing lists.'
    };
    
    const content = infoMap[policy] || `Official legal disclosure and regulatory guidelines. Contact our dispatch office for certified copys of local documentation.`;
    setInfoDialog({ title: policy, content, type: 'policy' });
  };

  const handleNavigation = (path: string, state?: any) => {
    navigate(path, { state });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 text-left" id="site-footer">
      {/* Upper banner with newsletter-style design or CTA */}
      <div className="border-b border-neutral-800 py-12 px-6">
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
            onClick={() => handleNavigation('/quote')}
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
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-100"
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
          <h5 className="text-xs font-black text-neutral-200 uppercase tracking-widest border-b border-neutral-800 pb-2">
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
          <h5 className="text-xs font-black text-neutral-200 uppercase tracking-widest border-b border-neutral-800 pb-2">
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
          <h5 className="text-xs font-black text-neutral-200 uppercase tracking-widest border-b border-neutral-800 pb-2">
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
      <div className="bg-neutral-950 text-[10px] text-neutral-600 py-6 px-6 border-t border-neutral-900 font-sans">
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

      {/* Dynamic Info Dialogue Modal */}
      <AnimatePresence>
        {infoDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInfoDialog(null)}
              className="fixed inset-0 bg-black/65 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-md bg-white text-neutral-900 rounded-lg p-6 shadow-2xl border border-neutral-200 z-10"
              id="footer-info-dialog"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-4">
                <span className="flex items-center gap-2 font-display font-medium text-xs uppercase tracking-widest text-orange-600">
                  {infoDialog.type === 'partner' ? <Globe className="w-4 h-4" /> : <Shield className="w-4 h-4" />}
                  <span>{infoDialog.type === 'partner' ? 'Alliance Resource' : 'Legal Disclosure'}</span>
                </span>
                <button
                  onClick={() => setInfoDialog(null)}
                  className="text-neutral-400 hover:text-neutral-900 p-1 rounded-sm hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <h4 className="text-sm font-sans font-black uppercase tracking-wider text-neutral-950 mb-2">
                {infoDialog.title}
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {infoDialog.content}
              </p>
              <div className="mt-5 flex justify-end">
                <button
                  onClick={() => setInfoDialog(null)}
                  className="bg-neutral-900 hover:bg-orange-600 text-white font-sans text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-sm transition-colors cursor-pointer"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
