import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Hammer, Clock, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedCounter from '../components/AnimatedCounter';
import useSEO from '../hooks/useSEO';

export default function HomePage({ handleOpenQuote }: any) {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useSEO({
    title: 'Las Vegas Sign Company | Custom Commercial Signage & Manufacturing',
    description: 'Las Vegas Sign Company designs, manufactures, and ships premium zoning-compliant signs, architectural lobby markers, massive pylons & monument structures nationwide.',
    canonicalPath: '/',
    keywords: 'custom signs, business signs, commercial signage, sign manufacturer, dimensional letters, lobby markers, shipping signs, pylon signs'
  });

  const faqs = [
    {
      q: "Do you ship and handle permits for all US states?",
      a: "Yes! We design, build, and ship to all 50 US states. We also provide full certified engineering drawings and support packages to coordinate smoothly with your local municipal zoning and building safety inspectors."
    },
    {
      q: "What materials do you recommend for outdoor Signs in the desert sun?",
      a: "We exclusively utilize heavy-gauge rust-free .080 aluminum backings, aircraft-grade structural steel posts, premium 3M UV-filtering reflective laminates, and dust-resistant high-efficiency LED modules to withstand summer temperatures."
    },
    {
      q: "Can you design a sign that matches my franchise's exact vector guidelines?",
      a: "Absolutely. Our local digital prepress operators ingest core AI, EPS, or CAD vector assets, match exact Pantone paint specifications, and laser-carve letterfaces to preserve brand continuity."
    }
  ];

  const handleCTAQuote = () => {
    navigate('/quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased selection:bg-orange-600 selection:text-white"
      id="main-layout-container"
    >
      <Header onOpenQuote={handleCTAQuote} />

      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center bg-neutral-950 overflow-hidden"
      >
        {/* Background structure with custom 1616.jpg backdrop */}
        <div className="absolute inset-0 z-0 bg-neutral-900 flex items-center justify-center overflow-hidden">
          {/* Realistic project scene background - highly responsive cover fit */}
          <img
            src="/1616.jpg"
            alt="Corporate Signage Showcase"
            className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover object-center scale-[1.01] opacity-[0.38] select-none pointer-events-none filter brightness-95 saturate-[0.85]"
            referrerPolicy="no-referrer"
          />

          {/* Laser engineering grid layout overlay */}
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#ea580c_1.5px,transparent_1.5px),linear-gradient(to_bottom,#ea580c_1.5px,transparent_1.5px)] bg-[size:40px_40px]" />
          
          {/* Neon orange background glow blobs for depth */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-500" />
          
          {/* Majestic background glowing emojis */}
          <div className="absolute inset-0 flex justify-between items-center px-12 md:px-24 pointer-events-none select-none">
            <div className="text-[120px] md:text-[160px] opacity-15 rotate-12 transform -translate-y-12 filter blur-[1px]">
              🏬
            </div>
            <div className="text-[120px] md:text-[160px] opacity-15 -rotate-12 transform translate-y-12 filter blur-[1px]">
              🏗️
            </div>
          </div>
          
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-[48px] opacity-10 animate-bounce">
            🔩
          </div>

          {/* Dual-optimized responsive overlay for maximum text readability across all viewport aspect ratios */}
          <div className="absolute inset-0 bg-neutral-950/40 md:bg-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/60 to-neutral-950/90 md:bg-[linear-gradient(to_right,rgba(10,10,10,0.95)_40%,rgba(10,10,10,0.8)_65%,rgba(10,10,10,0.4)_100%)]" />
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-neutral-50 via-neutral-50/85 to-transparent" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6 text-left"
            id="hero-content-block"
          >
            {/* Voted Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-600/90 border border-orange-500 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest leading-none shadow-md w-fit mx-auto md:mx-0">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Top-Rated Nationwide Custom Signage Manufacturer</span>
            </div>

            {/* Title display */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight leading-none drop-shadow-sm">
              ENGINEERED TO BE <span className="text-orange-500">VISIBLE</span>.
              <br />
              BUILT TO <span className="text-white relative inline-block after:absolute after:bottom-1 after:left-0 after:w-full after:h-2 after:bg-orange-600">LAST</span>.
            </h1>

            {/* Subheading & phone info */}
            <p className="text-neutral-200 text-lg sm:text-xl font-display font-medium tracking-wide flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center md:justify-start">
              <span className="text-orange-500 font-extrabold text-2xl animate-pulse" id="hero-phone-highlight">702.418.6174</span>
              <span className="hidden sm:inline text-neutral-500">|</span>
              <span className="text-neutral-100">Custom Interior &amp; Exterior Signs</span>
            </p>

            <p className="text-neutral-400 text-sm max-w-xl leading-relaxed">
              We design, fabricate, and ship heavy-duty aluminum signs, lobby markers, frosted window decals, and rugged pylon structures directly to your job site in any of the 50 US states.
            </p>

            {/* Quote redirection */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <button
                onClick={handleCTAQuote}
                className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-display font-black uppercase tracking-widest text-xs px-8 py-4 rounded-md transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                id="hero-cta-quote-btn"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/services')}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/15 border border-white/20 text-white font-display font-bold uppercase tracking-wider text-xs px-7 py-4 rounded-md transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                id="hero-secondary-services-btn"
              >
                <span>Explore Services</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-12 bg-white flex flex-col items-center">
        <div className="flex flex-col gap-1 w-full mx-auto">
          <img src="/1564.jpg" alt="Project 1" className="w-full h-auto" />
          <img src="/1565.jpg" alt="Project 2" className="w-full h-auto" />
          <img src="/1566.jpg" alt="Project 3" className="w-full h-auto" />
        </div>

        {/* Attractive Gallery Explore CTA */}
        <div className="mt-12 flex flex-col items-center text-center px-4 w-full max-w-2xl mx-auto">
          <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-3 font-sans">
            Our Completed Projects
          </p>
          <motion.button
            whileHover={{ scale: 1.03, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/gallery')}
            className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-neutral-950 to-neutral-900 hover:from-orange-600 hover:to-orange-500 text-white font-sans font-bold tracking-wider text-sm px-10 py-5 rounded-full shadow-2xl shadow-neutral-900/10 hover:shadow-orange-500/20 transition-all duration-300 border border-neutral-800 hover:border-orange-500/30 cursor-pointer"
            id="browse-gallery-mega-btn"
          >
            <Sparkles className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
            <span className="font-semibold text-base">Explore Our Full Portfolio</span>
            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-1.5 transition-transform duration-300" />
          </motion.button>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-40px]" id="trust-banner">
        <div className="bg-white rounded-2xl shadow-2xl shadow-neutral-200/50 p-8 md:p-10 border border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
          <div className="flex gap-4 items-start p-2 text-left group transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] cursor-default">
            <div className="bg-orange-50 p-3 rounded-lg text-orange-600 flex-shrink-0 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-neutral-900 text-sm uppercase tracking-wider transition-colors duration-300 group-hover:text-orange-600">
                Nationwide Certified
              </h4>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                Registered US General Contractor Network. Compliance, structural wind load engineering, and US-wide delivery coordination.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start sm:pl-6 p-2 text-left group transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] cursor-default">
            <div className="bg-orange-50 p-3 rounded-lg text-orange-600 flex-shrink-0 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
              <Hammer className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-neutral-900 text-sm uppercase tracking-wider transition-colors duration-300 group-hover:text-orange-600">
                Industrial Shop &amp; Rigging
              </h4>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                Expert in-house CNC routers, heavy metal bending, crane trucks, and union certified sign riggers.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start sm:pl-6 p-2 text-left group transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] cursor-default">
            <div className="bg-orange-50 p-3 rounded-lg text-orange-600 flex-shrink-0 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-neutral-900 text-sm uppercase tracking-wider transition-colors duration-300 group-hover:text-orange-600">
                Quick 24-48Hr Layouts
              </h4>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                Provide us details or artwork and receive structured vector placement templates and pricing structures.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Callouts / Direct Links to Pages */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-neutral-50">
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest block font-sans">
            OUR DEPARTMENTS
          </span>
          <h2 className="text-3xl font-display font-black text-neutral-950 uppercase tracking-tight">
            Comprehensive Corporate Offerings
          </h2>
          <p className="text-neutral-500 text-xs leading-relaxed max-w-md mx-auto">
            From heavy structural pylons to custom interior glass reception signs, browse our galleries and custom built-to-last products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Services Teaser Card */}
          <div className="group bg-white p-8 rounded-xl border border-neutral-200 shadow-sm text-left flex flex-col justify-between hover:shadow-2xl hover:shadow-orange-600/5 hover:border-orange-500/40 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 ease-out">
            <div>
              <div className="text-4xl mb-4 transform duration-300 group-hover:scale-115 group-hover:rotate-3 origin-left inline-block">🏬</div>
              <h3 className="text-lg font-display font-bold uppercase tracking-wide text-neutral-950 group-hover:text-orange-600 transition-colors duration-200">
                100% Zoning-Compliant Services
              </h3>
              <p className="text-neutral-500 text-xs mt-3 leading-relaxed">
                Heavy-duty aluminum signs, illuminated dimensional brass letters, custom frosted window layouts, and monolithic concrete monument pylon signs engineered to withstand high wind loads in all states.
              </p>
            </div>
            <button
              onClick={() => navigate('/services')}
              className="mt-8 flex items-center justify-between text-xs font-black uppercase text-orange-600 hover:text-orange-700 tracking-wider cursor-pointer group"
            >
              <span>Browse 6 Core Sizing & Specs</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          {/* Gallery Teaser Card */}
          <div className="group bg-white p-8 rounded-xl border border-neutral-200 shadow-sm text-left flex flex-col justify-between hover:shadow-2xl hover:shadow-orange-600/5 hover:border-orange-500/40 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 ease-out">
            <div>
              <div className="text-4xl mb-4 transform duration-300 group-hover:scale-115 group-hover:-rotate-3 origin-left inline-block">🌟</div>
              <h3 className="text-lg font-display font-bold uppercase tracking-wide text-neutral-950 group-hover:text-orange-600 transition-colors duration-200">
                Custom Fabricated Showcase
              </h3>
              <p className="text-neutral-500 text-xs mt-3 leading-relaxed">
                Explore our active nationwide corporate project showcase index! Real projects constructed from aircraft-grade metal, titanium-copped sheets, matte finishes, and warm backlit LED configurations.
              </p>
            </div>
            <button
              onClick={() => navigate('/gallery')}
              className="mt-8 flex items-center justify-between text-xs font-black uppercase text-orange-600 hover:text-orange-700 tracking-wider cursor-pointer group"
            >
              <span>Explore Installations Gallery</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Center 'About' Text Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white py-20 border-y border-neutral-200" id="about-section">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="w-12 h-1 bg-orange-600 mx-auto rounded-full" />
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block font-sans">
            LEADERS IN NATIONWIDE SIGN SYSTEM SUPPLY
          </span>
          
          <h2 className="text-2xl md:text-3.5xl font-display font-black text-neutral-950 tracking-tight uppercase leading-snug">
            "One-stop shop for all custom sign needs, shipping nationwide"
          </h2>

          <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Our state-of-the-art production facility combines architectural design mastery with high-efficiency heavy industrial shipping workflows. Whether you need a singular hand-polished glass lobby structure delivered to Boston, or 400 reflective parking lot posts distributed across multiple state supply channels, we operate with pristine manufacturing timelines.
          </p>

          {/* Metrics of scale */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-neutral-900 font-sans" id="about-metrics">
            <div className="group p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-center transition-all duration-300 hover:bg-neutral-900 hover:border-neutral-900 hover:scale-[1.03] hover:shadow-xl hover:shadow-neutral-950/10 hover:-translate-y-1.5 cursor-default">
              <span className="block font-display text-2xl font-black text-orange-600 transition-colors duration-300 group-hover:text-orange-500">
                <AnimatedCounter to={100} suffix="%" />
              </span>
              <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mt-0.5 transition-colors duration-300 group-hover:text-neutral-300">USA-Manufactured</span>
            </div>
            <div className="group p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-center transition-all duration-300 hover:bg-neutral-900 hover:border-neutral-900 hover:scale-[1.03] hover:shadow-xl hover:shadow-neutral-950/10 hover:-translate-y-1.5 cursor-default">
              <span className="block font-display text-2xl font-black text-orange-600 transition-colors duration-300 group-hover:text-orange-500">
                <AnimatedCounter to={5} suffix="-Star" />
              </span>
              <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mt-0.5 transition-colors duration-300 group-hover:text-neutral-300">Nationwide Service</span>
            </div>
            <div className="group p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-center transition-all duration-300 hover:bg-neutral-900 hover:border-neutral-900 hover:scale-[1.03] hover:shadow-xl hover:shadow-neutral-950/10 hover:-translate-y-1.5 cursor-default">
              <span className="block font-display text-2xl font-black text-orange-600 transition-colors duration-300 group-hover:text-orange-500">
                <AnimatedCounter to={15} suffix="+ Yrs" />
              </span>
              <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mt-0.5 transition-colors duration-300 group-hover:text-neutral-300">Engineering History</span>
            </div>
            <div className="group p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-center transition-all duration-300 hover:bg-neutral-900 hover:border-neutral-900 hover:scale-[1.03] hover:shadow-xl hover:shadow-neutral-950/10 hover:-translate-y-1.5 cursor-default">
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="block font-display text-2xl font-black text-orange-600 transition-colors duration-300 group-hover:text-orange-500"
              >
                Free
              </motion.span>
              <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider mt-0.5 transition-colors duration-300 group-hover:text-neutral-300">Prepress Proofing</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Extra Interactive Section: FAQ Accordion for high UX richness */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="faq-section">
        <div className="text-center space-y-2 mb-12">
          <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest block font-sans">
            KNOWLEDGE BASE
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-black text-neutral-950 uppercase tracking-tight">
            Zoning &amp; Placement Questions
          </h2>
        </div>

        <div className="space-y-4 text-left" id="faq-accordion-group">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="border border-neutral-200 bg-white rounded-lg overflow-hidden transition-colors"
                id={`faq-item-${idx}`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-hidden hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  <span className="font-display font-bold uppercase tracking-wide text-xs md:text-sm text-neutral-900 hover:text-orange-600">
                    {faq.q}
                  </span>
                  <span className="text-orange-600 font-bold text-lg leading-none select-none pl-4">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-neutral-200 overflow-hidden"
                    >
                      <div className="p-6 text-xs md:text-sm text-neutral-600 leading-relaxed bg-neutral-50/55">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>

      <Footer onOpenQuote={handleCTAQuote} />
    </motion.div>
  );
}
