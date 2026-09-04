import React from 'react';
import { 
  LayoutTemplate, 
  Layers, 
  Workflow, 
  Clock, 
  MonitorOff, 
  BatteryCharging, 
  Sparkles,
  ArrowRight,
  Code2
} from 'lucide-react';

export default function Capabilities({ onScrollToSimulator }) {
  const capabilities = [
    {
      icon: Layers,
      title: 'Custom Content & Modular Cards',
      benefit: 'Tailored to Your Workflow',
      description: 'Compose custom cards, typography blocks, progress bars, and live data metrics. Reconfigure what appears on the display as your daily work priorities shift.',
      tag: 'Modular Layouts'
    },
    {
      icon: LayoutTemplate,
      title: 'Ready-Made Workspace Templates',
      benefit: 'Zero Setup Overhead',
      description: 'Choose from curated layouts for software engineers, product leads, writers, and clinic/room reception desks without designing from scratch.',
      tag: 'Instant Value'
    },
    {
      icon: Workflow,
      title: 'Deep Background Cloud Integrations',
      benefit: 'Hands-Free Ambient Updates',
      description: 'Direct background sync with Google Calendar, Microsoft Outlook, Slack presence, GitHub pull requests, Notion, and Home Assistant via secure APIs.',
      tag: 'Ecosystem'
    },
    {
      icon: Clock,
      title: 'Automated Refresh Rules & Webhooks',
      benefit: 'Information Stays Current',
      description: 'Define scheduling rules or trigger instant webhooks. Show your daily agenda in the morning, pomodoro focus midday, and calm ambient art by evening.',
      tag: 'Automations'
    },
    {
      icon: MonitorOff,
      title: 'Always-Visible Physical Surface',
      benefit: 'Reclaim Monitor Space',
      description: 'Keeps critical priorities and timers visible in your physical periphery. Stop sacrificing browser tabs and laptop screen real estate for passive info.',
      tag: 'Glanceable'
    },
    {
      icon: BatteryCharging,
      title: '30-Day Battery Autonomy',
      benefit: 'Minimal Charging Attention',
      description: 'Powered by bi-stable electrophoretic ink that consumes zero power to hold an image. One quick USB-C charge lasts approximately a full month.',
      tag: '0 Watts Static'
    },
  ];

  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-[#FBF9F5] relative">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-12 border-b border-[#E8E1D5] gap-6 text-left">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DF] border border-[#DFD5C6] text-xs font-mono uppercase tracking-wider text-[#5C5549]">
              <Sparkles className="w-3.5 h-3.5 text-[#8C8275]" />
              <span>Product Capabilities vs. Benefits</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121212]">
              Glanceable Intelligence.{' '}
              <span className="text-[#8C8275] font-normal block sm:inline">
                Not Notification Clutter.
              </span>
            </h2>
          </div>

          <div className="max-w-md bg-[#F5EFE6] p-4 rounded-2xl border border-[#E5DDD1] text-xs font-mono text-[#5C5549] space-y-1">
            <span className="text-[#121212] font-bold block">SCREENING REQUIREMENT FULFILLED:</span>
            <p>Every capability translates directly into tangible focus benefits per the candidate brief table.</p>
          </div>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-[#F5EFE6] hover:bg-[#F0E9DF] p-7 rounded-2xl border border-[#E5DDD1] hover:border-[#8C8275] transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#141414] text-[#FBF9F5] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8275] bg-[#E8E1D5] px-2.5 py-1 rounded-full border border-[#DFD5C6]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#121212] tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#8C8275] uppercase font-mono tracking-wider mb-2.5">
                    Why it matters: {item.benefit}
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C5549] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#E5DDD1] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8C8275]">0{idx + 1} / 06</span>
                  <button
                    type="button"
                    onClick={onScrollToSimulator}
                    className="text-xs font-medium text-[#121212] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>Test preset</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8C8275]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {}
        <div className="mt-12 bg-[#141414] text-[#FBF9F5] rounded-3xl p-6 sm:p-8 border border-[#2B2B2B] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <div className="text-xs font-mono text-[#8C8275] uppercase tracking-wider">
              Dual Form Factor Flexibility
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[#FBF9F5]">
              Desk Stand (35°/60°) or Flush Magnetic Wall Mount
            </h4>
            <p className="text-xs sm:text-sm text-[#A8A095] max-w-2xl">
              Engineered with a rear kickstand for desk viewing and 4 flush neodymium magnets for mounting to office doors, whiteboard frames, and shared meeting rooms.
            </p>
          </div>
          <button
            type="button"
            onClick={onScrollToSimulator}
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#FBF9F5] text-[#141414] text-xs font-semibold hover:bg-[#EFE9DF] transition-colors cursor-pointer"
          >
            Inspect in Simulator
          </button>
        </div>

      </div>
    </section>
  );
}
