import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, ShieldAlert, Zap, Layers } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceInspectModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceItem | null;
  onOpenQuote: (serviceId: string) => void;
}

export default function ServiceInspectModal({ isOpen, onClose, service, onOpenQuote }: ServiceInspectModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            id="service-modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            id="service-modal-box"
          >
            {/* Emoji top banner */}
            <div className="relative h-48 md:h-56 w-full flex-shrink-0 bg-neutral-950 flex items-center justify-center overflow-hidden border-b border-orange-600/25">
              {/* Overlay abstract laser line grids */}
              <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] bg-[size:16px_16px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              
              <div className="relative text-6xl md:text-7xl drop-shadow-2xl select-none transform hover:scale-110 transition-transform duration-300">
                {service.emoji}
              </div>

              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors z-10"
                id="service-modal-close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 z-10 text-left">
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest bg-orange-950/60 px-2 py-0.5 rounded-sm border border-orange-800">
                  Services Highlight
                </span>
                <h4 className="text-lg md:text-xl font-display font-bold text-white uppercase tracking-wide mt-1.5 leading-tight">
                  {service.title}
                </h4>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-neutral-700" id="service-modal-content">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
                  Product Overview
                </h5>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {service.details && service.details.length > 0 && (
                <div className="space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Premium Technical Specifications
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="service-modal-details-grid">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start bg-neutral-50 p-2.5 rounded-md border border-neutral-100 text-xs">
                        <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-800 leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Regulatory Alert snippet */}
              <div className="bg-neutral-900 text-neutral-300 p-4 rounded-md space-y-2 border-l-4 border-orange-500">
                <div className="flex items-center gap-1.5 text-xs text-orange-400 font-bold uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>USA Structural Engineering Standards</span>
                </div>
                <p className="text-[11px] leading-relaxed text-neutral-400">
                  Manufactured strictly using corrosion-resistant aluminum backplates and 316-grade stainless steel assemblies. Engineered for severe US structural wind loads and municipal building code compliance in all 50 states.
                </p>
              </div>
            </div>

            {/* Foot actions */}
            <div className="bg-neutral-50 px-6 py-4 flex items-center justify-between border-t border-neutral-100">
              <span className="text-[11px] text-neutral-500 font-medium font-sans">
                Corporate Signage Service Registry
              </span>
              <button
                onClick={() => onOpenQuote(service.id)}
                className="bg-orange-600 hover:bg-orange-700 text-white font-display font-bold uppercase tracking-widest text-[11px] px-6 py-2.5 rounded-md transition-all active:scale-95 shadow-sm"
                id="service-modal-quote-btn"
              >
                Get Custom Price Quote
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
