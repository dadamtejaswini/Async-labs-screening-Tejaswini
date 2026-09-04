import React, { useState } from 'react';
import { X, Check, Sparkles, ShieldCheck, ArrowRight, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PreOrderModal({ isOpen, onClose }) {
  const [variant, setVariant] = useState('monochrome');
  const [accessory, setAccessory] = useState('standard');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [useCase, setUseCase] = useState('desk');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#141414', '#C84B31', '#DFD5C6', '#8C8275']
        });
      } catch (err) {
      }
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FBF9F5] rounded-3xl border border-[#E5DDD1] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#5C5549] hover:text-[#121212] hover:bg-[#EFE9DF] rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#141414] text-[#FBF9F5] flex items-center justify-center mx-auto mb-2 shadow-md">
              <Check className="w-7 h-7 stroke-[3] text-emerald-400" />
            </div>

            <div className="inline-block px-3 py-1 bg-[#E8E1D5] text-[#141414] font-mono text-xs font-bold rounded-full">
              RESERVATION PASS: #AL-0842
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#121212] tracking-tight">
              Prototype Unit Reserved!
            </h3>

            <p className="text-sm text-[#5C5549] leading-relaxed max-w-sm mx-auto">
              Thank you, <strong>{name || 'Friend'}</strong>. A confirmation and VIP prototype status update has been dispatched to <strong>{email}</strong>.
            </p>

            <div className="p-4 bg-[#F5EFE6] rounded-2xl border border-[#E5DDD1] text-xs font-mono text-[#5C5549] text-left space-y-1.5">
              <div className="flex justify-between">
                <span>Selected Edition:</span>
                <strong className="text-[#121212]">{variant === 'monochrome' ? 'Monochrome Carta ($149)' : 'Tri-Color Spectra ($179)'}</strong>
              </div>
              <div className="flex justify-between">
                <span>Primary Workspace:</span>
                <strong className="text-[#121212] capitalize">{useCase}</strong>
              </div>
              <div className="flex justify-between">
                <span>Production Batch:</span>
                <strong className="text-emerald-700">Batch 02 (Screening Allocation)</strong>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-3 rounded-full bg-[#141414] text-[#FBF9F5] font-semibold text-sm hover:bg-[#262626] transition-colors cursor-pointer"
            >
              Back to Experience
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EFE9DF] text-[11px] font-mono text-[#5C5549] mb-2 border border-[#DFD5C6]">
                <Sparkles className="w-3 h-3 text-[#8C8275]" />
                <span>Limited Screening Prototype Batch</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#121212] tracking-tight">
                Reserve Your 7.5" Display
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5549] mt-1">
                Zero deposit required. Lock in prototype pricing and early companion app beta access.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#8C8275] block mb-2">
                  Choose Display Edition
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setVariant('monochrome')}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      variant === 'monochrome'
                        ? 'bg-[#141414] text-white border-[#141414] shadow-xs'
                        : 'bg-[#F5EFE6] text-[#121212] border-[#E5DDD1] hover:border-[#8C8275]'
                    }`}
                  >
                    <div className="text-xs font-bold">Monochrome Paper</div>
                    <div className="text-[11px] opacity-80 mt-0.5">300 DPI • 0.3s Waveform</div>
                    <div className="text-xs font-mono font-bold mt-2">$149 USD</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setVariant('tricolor')}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      variant === 'tricolor'
                        ? 'bg-[#C84B31] text-white border-[#C84B31] shadow-xs'
                        : 'bg-[#F5EFE6] text-[#121212] border-[#E5DDD1] hover:border-[#8C8275]'
                    }`}
                  >
                    <div className="text-xs font-bold">Tri-Color Spectra</div>
                    <div className="text-[11px] opacity-90 mt-0.5">B&W + Terracotta Accent</div>
                    <div className="text-xs font-mono font-bold mt-2">$179 USD</div>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[#8C8275] block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tejaswini"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F5EFE6] rounded-xl border border-[#E5DDD1] text-sm text-[#121212] focus:outline-hidden focus:border-[#141414] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[#8C8275] block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tejaswini@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F5EFE6] rounded-xl border border-[#E5DDD1] text-sm text-[#121212] focus:outline-hidden focus:border-[#141414] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#8C8275] block mb-1">
                  Intended Workspace Setup
                </label>
                <select
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#F5EFE6] rounded-xl border border-[#E5DDD1] text-sm text-[#121212] focus:outline-hidden focus:border-[#141414] transition-colors cursor-pointer"
                >
                  <option value="Personal Desk Setup">Personal Desk Setup (Focus & Agenda)</option>
                  <option value="Software Engineering">Software Engineering (GitHub & CI/CD)</option>
                  <option value="Executive & Founder">Executive & Founder (Schedule Sovereignty)</option>
                  <option value="Studio / Writer">Studio & Writer (Calm Ambience & Prose)</option>
                  <option value="Shared Meeting Room">Shared Meeting Room (Door Signage & Wifi)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 rounded-xl bg-[#141414] text-[#FBF9F5] font-semibold text-sm hover:bg-[#282828] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50 active:scale-98"
                >
                  {isLoading ? (
                    <span>Registering Reservation...</span>
                  ) : (
                    <>
                      <span>Reserve Unit Without Deposit</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8C8275] font-mono text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>No payment required today • Cancel anytime with one click</span>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
