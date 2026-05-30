import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ChevronDown, ArrowRight, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { portfolioData } from '../data';
import { PortfolioItem } from '../types';
import useSEO from '../hooks/useSEO';

const PORTFOLIO_CATEGORIES = [
  { name: 'All', emoji: '🌟' },
  { name: 'Aluminum Signs', emoji: '🛑' },
  { name: 'Apartment Signs', emoji: '🏢' },
  { name: 'Billboard Sign Refacing', emoji: '📢' },
  { name: 'Custom Metal Signs', emoji: '🔩' },
  { name: 'Custom Wall Logo Signs', emoji: '🎨' },
  { name: 'Interior Lobby Signs', emoji: '🛋️' },
  { name: 'Lobby Directory Signs', emoji: '📋' },
  { name: 'Monument Signs', emoji: '🏗️' },
  { name: 'Parking Lot Sign Posts', emoji: '🅿️' },
  { name: 'Window Graphics', emoji: '🪟' }
];

export default function GalleryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePortfolioItem, setActivePortfolioItem] = useState<PortfolioItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [portfolioSearch, setPortfolioSearch] = useState('');
  const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(false);

  useSEO({
    title: 'Our Custom Sign Portfolio & Gallery | Las Vegas Sign Company',
    description: 'Explore our extensive gallery of custom fabricated business signs, 3D lobby directories, corporate monument towers, window vinyls, and architectural retail markers.',
    canonicalPath: '/gallery',
    keywords: 'sign gallery, portfolio, custom signage, monument signs, lobby directories, commercial signs gallery'
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (location.state && (location.state as any).category) {
      setSelectedCategory((location.state as any).category);
    }
  }, [location.state]);

  const handleOpenQuoteWithSign = (category: string) => {
    navigate('/quote', { state: { initialSignType: category } });
  };

  const filteredPortfolio = portfolioData.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(portfolioSearch.toLowerCase()) ||
      (item.materials && item.materials.toLowerCase().includes(portfolioSearch.toLowerCase())) ||
      item.category.toLowerCase().includes(portfolioSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased selection:bg-orange-600 selection:text-white"
    >
      <Header />

      {/* Decorative Top Segment */}
      <div className="bg-neutral-950 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ea580c_1px,transparent_1px),linear-gradient(to_bottom,#ea580c_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block">
            NATIONWIDE CUSTOM SHOWCASE & INSTALLATIONS
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-black text-white uppercase mt-2">
            Custom Fabricated Showcase
          </h1>
          <p className="text-neutral-400 text-xs mt-3 max-w-lg mx-auto leading-relaxed">
            Browse through our portfolio of custom-engineered aluminum signs, acrylic hotel lobby listings, warning markers, and structural towers.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center border-b border-neutral-200 pb-5 mb-8 gap-4" id="portfolio-header-row">
          <div className="text-left">
            <h2 className="text-xl font-display font-black text-neutral-950 uppercase tracking-tight">
              Galvanized Sign Solutions
            </h2>
          </div>
          
          {/* Quick Search Bar */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search specs, categories..."
              value={portfolioSearch}
              onChange={(e) => setPortfolioSearch(e.target.value)}
              className="w-full bg-white text-xs text-neutral-900 pl-9 pr-10 py-2.5 rounded-lg border border-neutral-300 focus:outline-hidden focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors placeholder:text-neutral-400"
              id="portfolio-search-input"
            />
            {portfolioSearch && (
              <button
                onClick={() => setPortfolioSearch('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-neutral-400 hover:text-neutral-600 font-bold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Collapsible Departments Drawer / Categories */}
        <div className="mb-10 animate-none" id="portfolio-categories-container">
          <div className="bg-white rounded-xl border border-neutral-200 p-4 mb-4 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 transition-all hover:border-neutral-300">
            <div className="flex items-center gap-3 text-left">
              <div className="p-3 bg-neutral-950 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Filter className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block">
                  Filter by Sign Department
                </span>
                <span className="text-sm font-display font-bold text-neutral-950 block">
                  Selected: <span className="text-orange-600 font-extrabold">{selectedCategory === 'All' ? 'Showing All Works' : selectedCategory}</span>
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsCategoriesExpanded(!isCategoriesExpanded)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-neutral-950 hover:bg-neutral-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-neutral-800"
              id="toggle-departments-btn"
            >
              <span>{isCategoriesExpanded ? 'Hide Departments' : 'Browse Departments'}</span>
              <motion.div
                animate={{ rotate: isCategoriesExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center"
              >
                <ChevronDown className="w-4 h-4 text-orange-500" />
              </motion.div>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {isCategoriesExpanded && (
              <motion.div
                key="departments-drawer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="bg-neutral-50/50 rounded-xl p-4 md:p-6 border border-neutral-200 shadow-inner space-y-3 mb-2 text-left">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">
                    Select a Category to Filter Gallery:
                  </span>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {PORTFOLIO_CATEGORIES.map((cat) => {
                      const count = cat.name === 'All'
                        ? portfolioData.length
                        : portfolioData.filter(p => p.category === cat.name).length;

                      const isSelected = selectedCategory === cat.name;

                      return (
                        <button
                          key={cat.name}
                          onClick={() => {
                            setSelectedCategory(cat.name);
                          }}
                          className={`flex items-center gap-3 p-3.5 text-xs font-bold uppercase tracking-normal rounded-lg transition-all duration-200 cursor-pointer border text-left ${
                            isSelected
                              ? 'bg-orange-600 text-white shadow-md shadow-orange-600/10 border-orange-500'
                              : 'bg-white text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 border-neutral-200'
                          }`}
                          id={`portfolio-tab-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <span className="text-xl select-none leading-none">{cat.emoji}</span>
                          <div className="flex-1 min-w-0">
                            <span className="text-[11px] font-sans font-black block truncate leading-tight">
                              {cat.name}
                            </span>
                          </div>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono font-medium flex-shrink-0 ${
                            isSelected ? 'bg-orange-700/65 text-orange-100' : 'bg-neutral-100 text-neutral-500'
                          }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Highlighted Results Count */}
        <div className="mb-6 flex justify-between items-center text-xs text-neutral-500 font-bold uppercase tracking-wider">
          <div>
            Showing <span className="text-neutral-900 font-mono font-bold">
              {filteredPortfolio.length}
            </span> items of <span className="text-neutral-900 font-mono font-bold">{portfolioData.length}</span> total
          </div>
          {(selectedCategory !== 'All' || portfolioSearch) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setPortfolioSearch('');
              }}
              className="text-[10px] text-orange-600 hover:text-orange-700 underline cursor-pointer font-sans"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Portfolio Cards Grid */}
        {filteredPortfolio.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-xl border p-10 max-w-xl mx-auto">
            <p className="text-3xl">🧩</p>
            <p className="mt-4 text-sm font-bold text-neutral-800 uppercase tracking-wider">Zero results found</p>
            <p className="text-neutral-500 text-xs mt-1 leading-relaxed">
              No project contains the letters or parameters you entered. Try typing 'aluminum', 'monument', or browse categories directly.
            </p>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            id="portfolio-cards-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  key={item.id}
                  onClick={() => setActivePortfolioItem(item)}
                  className="group bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-orange-600/5 hover:border-orange-500/30 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 ease-out cursor-pointer flex flex-col"
                  id={`portfolio-card-${item.id}`}
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-neutral-900/95 flex-shrink-0 flex items-center justify-center border-b border-neutral-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-neutral-900/10 to-neutral-950/35" />
                    
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <span className="text-6xl select-none transform group-hover:scale-115 transition-transform duration-300">
                        {item.emoji}
                      </span>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white text-[10px] font-bold uppercase tracking-widest bg-orange-600/90 px-2.5 py-1 rounded-sm">
                        Inspect Materials
                      </span>
                    </div>
                    <div className="absolute top-3 left-3 bg-neutral-950/95 backdrop-blur-md rounded-sm border border-neutral-800 px-2.5 py-1">
                      <span className="text-white text-[9px] font-bold uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left">
                    <div className="space-y-1.5">
                      <h3 className="font-display font-bold text-neutral-950 text-sm uppercase tracking-wide leading-snug group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </h3>
                      {item.dimensions && (
                        <p className="text-[11px] text-neutral-500 font-sans">
                          <strong className="text-neutral-700">Dim:</strong> {item.dimensions}
                        </p>
                      )}
                      {item.materials && (
                        <p className="text-[11px] text-neutral-500 font-sans truncate" title={item.materials}>
                          <strong className="text-neutral-700">Mat:</strong> {item.materials}
                        </p>
                      )}
                    </div>

                    <div className="pt-2 border-t border-neutral-100 flex justify-between items-center text-[10px] uppercase font-bold tracking-wider text-orange-600 font-sans">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </main>

      {/* Portfolio Showcase Lightbox Overlay */}
      <AnimatePresence>
        {activePortfolioItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePortfolioItem(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xs cursor-pointer"
              id="portfolio-lightbox-backdrop"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-neutral-950 rounded-lg shadow-2xl overflow-hidden flex flex-col border border-neutral-800"
              id="portfolio-lightbox-container"
            >
              <div className="relative aspect-16/9 bg-neutral-950 overflow-hidden flex-shrink-0 flex items-center justify-center border-b border-neutral-900">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                
                {activePortfolioItem.image ? (
                   <img 
                      src={activePortfolioItem.image} 
                      alt={activePortfolioItem.title} 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                   />
                ) : (
                   <span className="text-7xl md:text-8xl select-none transform hover:scale-110 transition-transform duration-300">
                     {activePortfolioItem.emoji}
                   </span>
                )}

                <button
                  onClick={() => setActivePortfolioItem(null)}
                  className="absolute top-4 right-4 bg-black/75 hover:bg-black text-white rounded-full p-2 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-4 text-white text-left">
                <div>
                  <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest bg-orange-950/60 px-2 py-0.5 rounded-sm border border-orange-800 font-sans">
                    Featured Project Spec
                  </span>
                  <h4 className="text-xl font-display font-black uppercase tracking-wide text-white mt-1.5 leading-snug">
                    {activePortfolioItem.title}
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-sans border-t border-neutral-900 pt-4">
                  <div>
                    <span className="text-neutral-500 block font-bold uppercase tracking-wider mb-0.5">Sizing &amp; Bounds</span>
                    <span className="text-neutral-200">{activePortfolioItem.dimensions || "Custom specifications"}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block font-bold uppercase tracking-wider mb-0.5">Structural Elements</span>
                    <span className="text-neutral-200">{activePortfolioItem.materials || "Premium USA Architectural Grade"}</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-end gap-3 border-t border-neutral-900 font-sans">
                  <button
                    onClick={() => setActivePortfolioItem(null)}
                    className="px-5 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 font-bold uppercase tracking-widest text-[11px] rounded-md hover:bg-neutral-800 cursor-pointer"
                  >
                    Back to Showcase
                  </button>
                  <button
                    onClick={() => {
                      setActivePortfolioItem(null);
                      handleOpenQuoteWithSign(activePortfolioItem.category);
                    }}
                    className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-display font-bold uppercase tracking-widest text-[11px] rounded-md transition-all active:scale-95 shadow-md shadow-orange-950/40 cursor-pointer"
                  >
                    Request Similar Build Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </motion.div>
  );
}
