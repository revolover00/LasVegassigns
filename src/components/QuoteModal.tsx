import { useState, useRef, DragEvent, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, CheckCircle2, Shield, Loader2, FileText, Check } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSignType?: string;
}

export default function QuoteModal({ isOpen, onClose, initialSignType = '' }: QuoteModalProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [validationError, setValidationError] = useState('');
  
  // Drag and drop upload state
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Submission stage
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    setUploadedFiles([]);
    setIsSuccess(false);
  };

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
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            id="quote-modal-backdrop"
          />

          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            id="quote-modal-container"
          >
            {/* Header banner */}
            <div className="bg-neutral-900 px-6 py-4 flex items-center justify-between border-b border-orange-600/30">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-orange-600 rounded-full animate-pulse" />
                <h3 className="text-lg font-display uppercase tracking-wider font-bold text-white">
                  Request A Free Project Quote
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white transition-colors p-1 rounded-md hover:bg-neutral-800"
                aria-label="Close dialog"
                id="close-quote-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8" id="quote-modal-body">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6" id="quote-request-form">
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

                  {/* Step 1: Contact Info */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-100 pb-1">
                      1. Contact &amp; Business Information
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

                  {/* Step 2: Design / Reference Photo Upload */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-100 pb-1">
                      2. Upload Your Files (optional)
                    </h4>
                    <p className="text-[11px] text-neutral-500">
                      Upload your project files to speed up evaluation.
                    </p>

                    {/* Drag and Drop Container */}
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={triggerFileInput}
                      className={`border-2 border-dashed rounded-lg p-5 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center ${
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
                      <Upload className={`w-8 h-8 mb-2 ${isDragging ? 'text-orange-600' : 'text-neutral-400'}`} />
                      <p className="text-xs font-bold text-neutral-700">
                        Drag &amp; Drop files here or <span className="text-orange-600 underline">Click to Browse</span>
                      </p>
                      <p className="text-[10px] text-neutral-400 mt-1">
                        Supports AI, EPS, PDF, DXF, PNG, JPG (Max 50MB total)
                      </p>
                    </div>

                    {/* Selected files preview */}
                    {uploadedFiles.length > 0 && (
                      <div className="bg-neutral-50 p-3 rounded-md border border-neutral-200 space-y-2">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 flex items-center justify-between">
                          <span>Attached Elements ({uploadedFiles.length})</span>
                          <button
                            type="button"
                            onClick={() => setUploadedFiles([])}
                            className="text-red-600 hover:underline hover:text-red-700 text-[10px]"
                            id="quote-clear-files-btn"
                          >
                            Remove All
                          </button>
                        </p>
                        <div className="max-h-32 overflow-y-auto space-y-1.5" id="uploaded-files-list">
                          {uploadedFiles.map((file, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-white px-2 py-1.5 rounded-sm border border-neutral-150 text-xs text-neutral-700">
                              <div className="flex items-center gap-2 truncate">
                                <FileText className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                                <span className="truncate">{file.name}</span>
                                <span className="text-[9px] text-neutral-400">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                              </div>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeFile(idx);
                                }}
                                className="text-neutral-400 hover:text-red-600 p-0.5"
                                id={`remove-file-${idx}`}
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Submission Row */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-150">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span>Data protected with bank-grade security</span>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-orange-600 hover:bg-orange-700 text-white font-display font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-md transition-all shadow-md active:scale-95 flex items-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                      id="quote-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Generating Request...</span>
                        </>
                      ) : (
                        <span>Send Free Quote Request</span>
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
                      Quote Request Lodged Successfully!
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Thank you, <span className="font-semibold text-neutral-900">{firstName} {lastName}</span>. Your quote request has been successfully submitted.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-200 text-left text-xs text-neutral-700 max-w-lg space-y-3">
                    <h5 className="font-bold text-neutral-800 uppercase tracking-wider border-b pb-1">
                      💡 WHAT TO EXPECT NEXT:
                    </h5>
                    <ul className="space-y-2.5">
                      <li className="flex gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>Our senior nationwide pricing estimation engineer will review your design parameters.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>We will send a granular custom mock-up and comprehensive material estimate sheet to <strong className="text-neutral-950">{email}</strong> within 2-4 business hours.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>For urgent needs, our dispatcher can call your line at <strong className="text-neutral-950">{phone}</strong> within the hour.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 flex gap-4">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 border border-neutral-300 text-neutral-700 font-bold uppercase tracking-wider text-xs rounded-md hover:bg-neutral-100 transition-colors"
                      id="quote-reset-btn"
                    >
                      Submit Another
                    </button>
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 bg-neutral-900 hover:bg-neutral-850 text-white font-bold uppercase tracking-widest text-xs rounded-md transition-all shadow-md"
                      id="quote-success-close-btn"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
