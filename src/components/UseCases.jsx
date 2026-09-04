import React, { useState } from 'react';
import { 
  Terminal, 
  Briefcase, 
  Palette, 
  Building2, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function UseCases({ onScrollToSimulator }) {
  const [activeTab, setActiveTab] = useState('engineer');

  const cases = {
    engineer: {
      id: 'engineer',
      title: 'The Software Engineer',
      subtitle: 'Continuous build health, PR reviews, and zero alt-tabbing away from code.',
      icon: Terminal,
      quote: '"I stopped checking GitHub every 10 minutes to see if my CI passed. The 7.5-inch display lets me know from the corner of my eye while I stay locked in VS Code."',
      author: 'Marcus Vance, Principal Infrastructure Lead',
      features: [
        'Live pull request reviews awaiting your approval',
        'Staging & production deployment status indicators',
        'Pomodoro deep work timer with automated Slack DND trigger',
        'Zero distraction: No popups, no sound pings, no context switching',
      ],
      sampleLayout: {
        header: 'DEV OPS / GITHUB MAIN',
        mainText: 'PR #204: Ready for Review',
        subText: 'Branch build passed (4m 12s) • 0 Sentry regressions',
        badge: 'CI: 100% HEALTHY'
      }
    },
    executive: {
      id: 'executive',
      title: 'The Founder & Executive',
      subtitle: 'Schedule sovereignty, meeting countdowns, and glanceable daily focus.',
      icon: Briefcase,
      quote: '"Opening my calendar tab just invited Slack distraction rabbit holes. Having my agenda physically on my desk keeps me on time and present for my team."',
      author: 'Elena Rostova, Founder & CEO',
      features: [
        'Direct two-way sync with Google Calendar & Outlook',
        'Upcoming meeting countdown timer with room/link details',
        'Glanceable daily top 3 strategic priorities',
        'Desk presence status: "Focused until 2 PM"',
      ],
      sampleLayout: {
        header: 'EXECUTIVE AGENDA',
        mainText: 'Next: Investor Sync (11:30 AM)',
        subText: 'Room 302 • Followed by Product Roadmap at 1:00 PM',
        badge: 'ON SCHEDULE'
      }
    },
    creative: {
      id: 'creative',
      title: 'The Writer & Studio Artist',
      subtitle: 'Calm ambient stationery aesthetic, daily prose, and gentle flow cues.',
      icon: Palette,
      quote: '"Most digital screens feel aggressive and demanding. This display feels like an intentional piece of paper stationery that inspires rather than intrudes."',
      author: 'Julian Chen, Architectural Writer & Designer',
      features: [
        'Minimalist typography with high-contrast paper aesthetic',
        'Rotating literary excerpts, haikus, or minimalist artwork',
        'Word count & draft milestone progress bars',
        'Non-glare reflective screen blends into warm wooden desks',
      ],
      sampleLayout: {
        header: 'WRITER SESSION #03',
        mainText: '"Clarity comes from what you discard."',
        subText: 'Target: 1,500 words • Current: 1,120 words (74%)',
        badge: 'FOCUS FLOW'
      }
    },
    office: {
      id: 'office',
      title: 'The Modern Shared Office',
      subtitle: 'Room availability, corporate signage, and physical scheduling.',
      icon: Building2,
      quote: '"We mounted these outside our meeting rooms with the magnetic mount. Team members can see availability at a distance, and the battery lasts for weeks."',
      author: 'Sarah Jenkins, Workplace Operations Director',
      features: [
        'Flush magnetic wall mounting with zero visible cables',
        'Real-time meeting room occupancy and reservation schedule',
        'Guest Wi-Fi credentials and QR code instant scan',
        'Centralized fleet management via Async Cloud Dashboard',
      ],
      sampleLayout: {
        header: 'CONFERENCE SUITE B',
        mainText: 'Reserved: Client Pitch (until 3:00 PM)',
        subText: 'Available next: 3:00 PM - 5:00 PM • Tap NFC to book',
        badge: 'ROOM OCCUPIED'
      }
    }
  };

  const current = cases[activeTab];
  const Icon = current.icon;

  return (
    <section id="use-cases" className="py-20 lg:py-28 bg-[#FBF9F5] border-t border-[#E5DDD1]">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 text-left">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-10 border-b border-[#E8E1D5] gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DF] border border-[#DFD5C6] text-xs font-mono uppercase tracking-wider text-[#5C5549]">
              <Sparkles className="w-3.5 h-3.5 text-[#8C8275]" />
              <span>Tailored Workspace Scenarios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121212]">
              Adapted to How You Work
            </h2>
            <p className="text-sm sm:text-base text-[#5C5549] leading-relaxed">
              Whether engineered for personal deep work or deployed as cable-free meeting room signage, 
              Async Labs molds to the exact demands of your environment.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {Object.values(cases).map((c) => {
              const TabIcon = c.icon;
              const isActive = activeTab === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveTab(c.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#141414] text-[#FBF9F5] shadow-xs'
                      : 'bg-[#EFE9DF] text-[#5C5549] hover:text-[#121212] hover:bg-[#E3DBCF] border border-[#DFD5C6]'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span>{c.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-[#F5EFE6] rounded-3xl p-6 sm:p-10 border border-[#E5DDD1] shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#141414] text-white flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#121212] tracking-tight">
                    {current.title}
                  </h3>
                </div>
                <p className="text-sm text-[#5C5549]">
                  {current.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs text-[#3E382E] bg-[#EFE8DC] p-3 rounded-xl border border-[#DFD5C6]">
                    <div className="w-4 h-4 rounded-full bg-[#141414] text-white flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#EDE5DB] rounded-2xl border border-[#DFD5C6]">
                <p className="text-xs sm:text-sm text-[#443E34] italic font-serif leading-relaxed mb-2">
                  {current.quote}
                </p>
                <span className="text-xs font-mono font-medium text-[#7A7265] block">
                  — {current.author}
                </span>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onScrollToSimulator}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#121212] hover:text-[#5C5549] transition-colors cursor-pointer"
                >
                  <span>Test this preset in the live 7.5" simulator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#181818] p-5 rounded-2xl border-4 border-[#282828] shadow-xl text-left">
                
                <div className="text-[10px] font-mono text-[#777777] mb-2 flex items-center justify-between">
                  <span>PREVIEW: 7.5" DISPLAY</span>
                  <span className="text-emerald-400">0.00W HOLD</span>
                </div>

                <div className="bg-[#F2EFE9] text-[#111111] p-5 rounded-xl aspect-[800/480] flex flex-col justify-between shadow-inner border border-[#D5CDBC]">
                  <div>
                    <div className="flex items-center justify-between border-b border-[#D4CEBF] pb-1 text-[10px] font-mono text-[#5C5549] mb-3">
                      <span>{current.sampleLayout.header}</span>
                      <span className="px-1.5 py-0.5 bg-[#111111] text-white rounded font-bold text-[9px]">
                        {current.sampleLayout.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#111111] leading-tight mb-1">
                      {current.sampleLayout.mainText}
                    </h4>
                    <p className="text-xs text-[#5C5549] leading-snug">
                      {current.sampleLayout.subText}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#D4CEBF] pt-2 text-[10px] font-mono text-[#736B5E]">
                    <span>10:45 AM • BATTERY 88%</span>
                    <span>300 DPI CARTA</span>
                  </div>
                </div>

                <div className="text-[11px] font-medium text-[#444444] pt-2 flex items-center justify-center gap-1.5">
                  <img src="/logo.png" alt="AL" className="w-3 h-3 object-contain opacity-40" />
                  <span>Async Labs</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
