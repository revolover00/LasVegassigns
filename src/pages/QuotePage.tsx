import { useState, useRef, DragEvent, ChangeEvent, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, CheckCircle2, Shield, Loader2, FileText, Check, Sparkles, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function QuotePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [validationError, setValidationError] = useState('');
  
  // Sign specifications prefilled from gallery or services state
  const [selectedSignType, setSelectedSignType] = useState('Aluminum Signs');

  // Drag and drop upload state
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Submission stage
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const state = location.state as { initialSignType?: string } | null;
    if (state && state.initialSignType) {
      // Map initial ID or direct categories
      if (state.initialSignType.includes('aluminum')) setSelectedSignType('Aluminum Signs');
      else if (state.initialSignType.includes('monument')) setSelectedSignType('Monument Signs');
      else if (state.initialSignType.includes('lobby') || state.initialSignType.includes('interior')) setSelectedSignType('Interior Lobby Signs');
      else if (state.initialSignType.includes('window')) setSelectedSignType('Window Graphics');
      else setSelectedSignType(state.initialSignType);
    }
  }, [location.state]);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      const filesArr = Array.from(e.dataTransfer.files);
      setUploadedFiles(prev => [...prev, ...filesArr]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArr = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...filesArr]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone) {
      setValidationError('Please fill in all required contact details: First Name, Last Name, Email, and Phone.');
      return;
    }
    setValidationError('');
    setIsSubmitting(true);
    
    // Simulate API upload
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setValidationError('');
    setSelectedSignType('Aluminum Signs');
    setUploadedFiles([]);
    setIsSuccess(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased selection:bg-orange-600 selection:text-white"
    >
      <Header />

      {/* Page Header */}
      <section className="bg-neutral-900 py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ea580c_1px,transparent_1px),linear-gradient(to_bottom,#ea580c_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-2">
          <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest block font-sans">
            ESTIMATIONS & PROJECT PROPOSAL DESK
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-white mt-1">
            Get A Free Quote
          </h1>
          <p className="text-neutral-400 text-xs mt-3 max-w-lg mx-auto leading-relaxed">
            Fill in the specifications or drop in your workspace designs under our secure engineering file uploader for immediate quotation.
          </p>
        </div>
      </section>

      {/* Main content body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left">
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden" id="quote-main-card">
          <div className="bg-neutral-950 px-6 py-5 border-b border-orange-600/35 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-orange-600 rounded-full animate-ping" />
              <h3 className="text-sm font-display font-black uppercase tracking-wider text-white">
                Nationwide Commercial Estimator Sheet
              </h3>
            </div>
            <div className="inline-flex items-center gap-1 text-[10px] font-bold text-orange-400 uppercase tracking-wider font-sans">
              <Sparkles className="w-3 h-3" />
              <span>Free Layout File Proof</span>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-8" id="quote-fullpage-form">
                
                {/* Zoning Info Alert */}
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-md">
                  <p className="text-xs text-orange-850 leading-relaxed font-medium">
                    🛠️ <span className="font-bold text-orange-950">Nationwide Shipping &amp; Compliance Guaranteed:</span> Everything we build is packaged with tailored mounting layouts and complies with your local zoning laws, sign codes, and structural wind-load requirements in all 50 US states.
                  </p>
                </div>

                {validationError && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md">
                    <p className="text-xs text-red-800 font-bold">
                      ⚠️ {validationError}
                    </p>
                  </div>
                )}

                {/* Sign Specifications */}
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400 border-b border-neutral-200 pb-2">
                    1. Select Sign Category
                  </h4>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                      What Category of Sign are you looking for?
                    </label>
                    <select
                      value={selectedSignType}
                      onChange={(e) => setSelectedSignType(e.target.value)}
                      className="w-full px-3 py-2.5 border border-neutral-300 rounded-md text-sm bg-neutral-50 font-bold focus:outline-hidden focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-neutral-800"
                    >
                      <option value="Aluminum Signs">Aluminum Signs</option>
                      <option value="Apartment Signs">Apartment Signs</option>
                      <option value="Billboard Sign Refacing">Billboard Sign Refacing</option>
                      <option value="Custom Metal Signs">Custom Metal Signs</option>
                      <option value="Custom Wall Logo Signs">Custom Wall Logo Signs</option>
                      <option value="Interior Lobby Signs">Interior Lobby Signs</option>
                      <option value="Lobby Directory Signs">Lobby Directory Signs</option>
                      <option value="Monument Signs">Monument Signs</option>
                      <option value="Parking Lot Sign Posts">Parking Lot Sign Posts</option>
                      <option value="Window Graphics">Window Graphics</option>
                    </select>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400 border-b border-neutral-200 pb-2">
                    2. Contact Information
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                        Your First Name (required)
                      </label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="e.g. Robert"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm focus:outline-hidden focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-neutral-50"
                        id="quote-input-firstname"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                        Your Last Name (required)
                      </label>
                      <input
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="e.g. Smith"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm focus:outline-hidden focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-neutral-50"
                        id="quote-input-lastname"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                        Your Email (required)
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. robert@company.com"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm focus:outline-hidden focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-neutral-50"
                        id="quote-input-email"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1.5">
                        Your Phone Number (required)
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 702-555-0199"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm focus:outline-hidden focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-neutral-50"
                        id="quote-input-phone"
                      />
                    </div>
                  </div>
                </div>

                {/* Upload Files */}
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400 border-b border-neutral-200 pb-2">
                    3. Upload Your Files (optional)
                  </h4>
                  <p className="text-[11px] text-neutral-500">
                    Upload your project blueprint files or design templates to speed up our engineering evaluation.
                  </p>

                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={triggerFileInput}
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center ${
                      isDragging
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-neutral-300 bg-neutral-50 hover:bg-neutral-100 text-neutral-600'
                    }`}
                    id="quote-drag-drop-zone"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      multiple
                      className="hidden"
                      id="quote-file-input"
                    />
                    <Upload className={`w-10 h-10 mb-2 ${isDragging ? 'text-orange-600' : 'text-neutral-400'}`} />
                    <p className="text-xs font-bold text-neutral-700">
                      Drag &amp; Drop files here or <span className="text-orange-600 underline">Click to Browse</span>
                    </p>
                    <p className="text-[10px] text-neutral-400 mt-1">
                      Supports AI, EPS, PDF, DXF, PNG, JPG (Max 50MB total)
                    </p>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="bg-neutral-50 p-4 rounded-md border border-neutral-200 space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 flex items-center justify-between">
                        <span>Attached Elements ({uploadedFiles.length})</span>
                        <button
                          type="button"
                          onClick={() => setUploadedFiles([])}
                          className="text-red-600 hover:underline hover:text-red-700 text-[10px]"
                        >
                          Remove All
                        </button>
                      </p>
                      <div className="max-h-32 overflow-y-auto space-y-1.5">
                        {uploadedFiles.map((file, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-white px-3 py-2 rounded-sm border border-neutral-200 text-xs text-neutral-700">
                            <div className="flex items-center gap-2 truncate">
                              <FileText className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                              <span className="truncate">{file.name}</span>
                              <span className="text-[9px] text-neutral-400 font-mono">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFile(idx);
                              }}
                              className="text-neutral-400 hover:text-red-600 p-0.5"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Submission Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-neutral-200 gap-4">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>Data encrypted and processed safely</span>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-display font-black uppercase tracking-widest text-xs px-8 py-4 rounded-md transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                    id="quote-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <span>Submit Estimate Request</span>
                    )}
                  </button>
                </div>

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-6"
                id="quote-success-view"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 border-2 border-green-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="max-w-md space-y-2">
                  <h4 className="text-xl font-display font-bold text-neutral-900 uppercase tracking-wide">
                    Free Quote Request Received!
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Thank you, <span className="font-semibold text-neutral-900">{firstName} {lastName}</span>. Our nationwide signage estimation team has logged your build metrics and will ship to your location!
                  </p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 text-left text-xs text-neutral-700 max-w-lg space-y-3 font-sans">
                  <h5 className="font-bold text-neutral-800 uppercase tracking-wider border-b pb-1">
                    💡 WHAT TO EXPECT NEXT:
                  </h5>
                  <ul className="space-y-2.5">
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>An expert commercial estimate engineer will review your design parameters.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>We will send a granular custom mock-up and comprehensive material estimate sheet to <strong className="text-neutral-950">{email}</strong> within 2-4 business hours.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>For urgent inquiries, our dispatcher can call your line at <strong className="text-neutral-950">{phone}</strong> within the hour.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 flex gap-4">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 border border-neutral-300 text-neutral-700 font-bold uppercase tracking-wider text-xs rounded-md hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    Submit Another Project
                  </button>
                  <button
                    onClick={() => navigate('/')}
                    className="px-6 py-2.5 bg-neutral-950 hover:bg-neutral-900 text-white font-bold uppercase tracking-widest text-xs rounded-md transition-all shadow-md cursor-pointer"
                  >
                    Back to Commercial Home
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}
