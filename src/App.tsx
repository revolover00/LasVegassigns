import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import QuotePage from './pages/QuotePage';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedQuoteType, setSelectedQuoteType] = useState('');
  
  const handleOpenQuote = (initialSignType = '') => {
    setSelectedQuoteType(initialSignType);
    setIsQuoteOpen(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage handleOpenQuote={handleOpenQuote} />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialSignType={selectedQuoteType}
      />
    </BrowserRouter>
  );
}
