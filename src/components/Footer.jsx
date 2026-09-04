import React from 'react';
import { ArrowUp, Heart, Sparkles, Cpu, Layers, Hammer } from 'lucide-react';

export default function Footer({ onOpenPreorder, onScrollToSimulator }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] text-[#FBF9F5] pt-16 pb-12 border-t border-[#262626] text-left">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#242424]">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1E1E1E] flex items-center justify-center overflow-hidden border border-[#333333]">
                <img
                  src="/logo.png"
                  alt="Async Labs Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-[#FBF9F5]">
                Async Labs
              </span>
            </div>
            
            <p className="text-sm text-[#8C8275] max-w-sm leading-relaxed">
              Dedicated ambient hardware for intentional workspaces. 
              The 7.5-inch smart e-paper display keeps your life and work glanceable at 0 Watts static retention.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs font-mono text-[#A8A095]">
              <span className="flex items-center gap-1.5 bg-[#1C1C1C] px-3 py-1.5 rounded-full border border-[#2D2D2D]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Firmware v2.4 Active</span>
              </span>
              <span className="bg-[#1C1C1C] px-3 py-1.5 rounded-full border border-[#2D2D2D]">
                300 DPI Carta HD
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A8A095]">
              Hardware & App
            </h4>
            <ul className="space-y-2 text-sm text-[#736B5E]">
              <li>
                <a href="#revolve-showcase" className="hover:text-white transition-colors">
                  360° Hardware Orbit
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onScrollToSimulator}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Interactive Simulator
                </button>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Display Capabilities
                </a>
              </li>
              <li>
                <a href="#app-sync" className="hover:text-white transition-colors">
                  Companion App Sync
                </a>
              </li>
              <li>
                <a href="#use-cases" className="hover:text-white transition-colors">
                  Workspace Scenarios
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-white transition-colors">
                  Engineering Specs
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A8A095]">
              Integrations
            </h4>
            <ul className="space-y-2 text-sm text-[#736B5E]">
              <li><span className="text-[#8C8275]">Google Calendar</span></li>
              <li><span className="text-[#8C8275]">Microsoft Outlook</span></li>
              <li><span className="text-[#8C8275]">Slack & Teams Presence</span></li>
              <li><span className="text-[#8C8275]">GitHub Actions CI/CD</span></li>
              <li><span className="text-[#8C8275]">Home Assistant & MQTT</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666666]">
          <div>
            © 2026 Async Labs, Inc. 
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-[#8C8275] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
