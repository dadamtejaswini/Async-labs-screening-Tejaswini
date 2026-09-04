import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Cpu, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenPreorder, onScrollToSimulator }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: '360° Orbit', href: '#revolve-showcase' },
    { label: 'Simulator', href: '#simulator' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'App Sync', href: '#app-sync' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Tech Specs', href: '#specs' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E8E1D5] shadow-xs py-3.5'
          : 'bg-[#FBF9F5]/60 backdrop-blur-xs border-b border-transparent py-5'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between">
          <a
            href="#overview"
            className="flex items-center gap-3 group text-decoration-none"
            onClick={(e) => handleNavClick(e, '#overview')}
          >
            <div className="w-9 h-9 rounded-xl bg-[#141414] flex items-center justify-center shadow-xs overflow-hidden transition-transform duration-200 group-hover:scale-105 border border-[#222222]">
              <img
                src="/logo.png"
                alt="Async Labs Logo"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-tight text-[#141414] leading-tight flex items-center gap-1.5">
                Async Labs
              </span>
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#8C8275] -mt-0.5">
                7.5" Smart Workspace Display
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium text-[#5C5549] hover:text-[#121212] hover:bg-[#EFE9DF] transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-2.5">
            <button
              type="button"
              onClick={onScrollToSimulator}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#141414] bg-[#EFE9DF] hover:bg-[#E3DBCF] rounded-full border border-[#DFD5C6] transition-all duration-150 cursor-pointer"
            >
              <Cpu className="w-3.5 h-3.5 text-[#8C8275]" />
              <span>Simulate</span>
            </button>

            <button
              type="button"
              onClick={onOpenPreorder}
              className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-medium text-[#FBF9F5] bg-[#141414] hover:bg-[#262626] rounded-full shadow-sm transition-all duration-150 cursor-pointer active:scale-95"
            >
              <span>Reserve Prototype</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={onOpenPreorder}
              className="px-3 py-1 text-xs font-medium text-[#FBF9F5] bg-[#141414] rounded-full"
            >
              Reserve
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#141414] hover:bg-[#EFE9DF] rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-[#E8E1D5] bg-[#FBF9F5] rounded-2xl p-4 shadow-lg animate-in fade-in duration-200">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-xl text-sm font-medium text-[#5C5549] hover:text-[#121212] hover:bg-[#EFE9DF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-[#E8E1D5] flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onScrollToSimulator();
                  }}
                  className="w-full py-2.5 px-4 text-center text-xs font-medium text-[#141414] bg-[#EFE9DF] rounded-xl border border-[#DFD5C6]"
                >
                  Interactive Display Simulator
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPreorder();
                  }}
                  className="w-full py-2.5 px-4 text-center text-xs font-medium text-[#FBF9F5] bg-[#141414] rounded-xl shadow-xs"
                >
                  Reserve Prototype Unit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
