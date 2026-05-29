import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceInspectModal from '../components/ServiceInspectModal';
import { servicesData } from '../data';
import { ServiceItem } from '../types';

export default function ServicesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isServiceInspectOpen, setIsServiceInspectOpen] = useState(false);
  const [inspectedService, setInspectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const state = location.state as { serviceId?: string } | null;
    if (state && state.serviceId) {
      const svc = servicesData.find((s) => s.id === state.serviceId);
      if (svc) {
        setInspectedService(svc);
        setIsServiceInspectOpen(true);
      }
    }
  }, [location.state]);

  const handleInspectService = (service: ServiceItem) => {
    setInspectedService(service);
    setIsServiceInspectOpen(true);
  };

  const handleOpenQuoteFromService = (serviceId: string) => {
    setIsServiceInspectOpen(false);
    navigate('/quote', { state: { initialSignType: serviceId } });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased selection:bg-orange-600 selection:text-white"
    >
      <Header />

      {/* Hero section */}
      <section className="bg-neutral-900 py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ea580c_1px,transparent_1px),linear-gradient(to_bottom,#ea580c_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-3">
          <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest block font-sans">
            PREMIER NATIONWIDE CUSTOM FABRICATION
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-white mt-1">
            Zoning-Compliant Sign Solutions
          </h1>
          <p className="text-neutral-400 text-xs mt-3 max-w-lg mx-auto leading-relaxed">
            We leverage heavy industrial shop components, high-load LED controllers, and durable premium paints to manufacture weather-hardened business installations.
          </p>
        </div>
      </section>

      {/* 3-column / 6-item Service Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-cards-grid">
          {servicesData.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={service.id}
              onClick={() => handleInspectService(service)}
              className="group bg-zinc-950 rounded-lg border border-neutral-800 hover:border-orange-500/80 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-orange-600/10 hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer flex flex-col"
              id={`service-card-${service.id}`}
            >
              <div className="relative h-48 overflow-hidden bg-neutral-950 flex-shrink-0 flex items-center justify-center border-b border-zinc-800">
                <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#ea580c_1px,transparent_1px),linear-gradient(to_bottom,#ea580c_1px,transparent_1px)] bg-[size:16px_16px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-neutral-900/90" />
                
                <span className="text-5xl select-none transform group-hover:scale-110 transition-transform duration-300">
                  {service.emoji}
                </span>

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-40" />
                <div className="absolute bottom-3 right-3 text-[10px] font-bold uppercase tracking-widest bg-orange-600 text-white px-2 py-0.5 rounded-xs font-sans" id={`service-tag-${service.id}`}>
                  Specs
                </div>
              </div>

              <div className="p-6 md:p-7 flex-1 flex flex-col justify-between space-y-4 bg-zinc-950 text-left">
                <div className="space-y-2">
                  <h3 className="font-display font-black text-white text-sm uppercase tracking-wide group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-orange-500 font-sans">
                  <span>Inspect Specs &amp; Sizing</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <ServiceInspectModal
        isOpen={isServiceInspectOpen}
        onClose={() => setIsServiceInspectOpen(false)}
        service={inspectedService}
        onOpenQuote={handleOpenQuoteFromService}
      />

      <Footer />
    </motion.div>
  );
}
