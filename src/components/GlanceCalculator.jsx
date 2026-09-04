import React, { useState } from 'react';
import { Sliders, Sparkles, TrendingUp, Zap, Clock, ShieldCheck, Calculator } from 'lucide-react';

export default function GlanceCalculator({ onOpenPreorder }) {
  const [dailyChecks, setDailyChecks] = useState(45);

  const monthlySwitches = dailyChecks * 22; 
  const monthlyHoursReclaimed = ((dailyChecks * 1.5 * 22) / 60).toFixed(1); 
  const interruptionReduction = Math.min(88, Math.round(dailyChecks * 1.4));

  return (
    <section className="py-20 lg:py-24 bg-[#F5EFE6] border-t border-[#E5DDD1] relative overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 text-left">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-10 border-b border-[#E0D7C9] gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E1D5] border border-[#DFD5C6] text-xs font-mono uppercase tracking-wider text-[#5C5549]">
              <TrendingUp className="w-3.5 h-3.5 text-[#8C8275]" />
              <span>Cognitive Economics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121212]">
              The Cost of Window Hopping
            </h2>
            <p className="text-sm sm:text-base text-[#5C5549] leading-relaxed">
              Every time you Cmd+Tab to check your schedule or Slack status, your working memory reloads. 
              Keep ambient context in physical space and preserve deep flow state.
            </p>
          </div>

          <div className="bg-[#EBE4D8] p-3 rounded-2xl border border-[#DFD5C6] text-xs font-mono text-[#5C5549]">
            <span className="font-bold text-[#121212] block">INTERACTIVE CALCULATOR</span>
            <span>Drag slider below to calculate your hours reclaimed</span>
          </div>
        </div>

        <div className="bg-[#FBF9F5] rounded-3xl p-6 sm:p-10 border border-[#E5DDD1] shadow-md">
          
          <div className="mb-10 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label htmlFor="glance-slider" className="text-sm sm:text-base font-semibold text-[#121212]">
                Daily glances & tab switches to check calendar, tasks, or Slack:
              </label>
              <div className="px-4 py-1.5 rounded-full bg-[#141414] text-[#FBF9F5] font-mono text-sm font-bold w-fit">
                {dailyChecks} checks / workday
              </div>
            </div>

            <input
              id="glance-slider"
              type="range"
              min="10"
              max="100"
              step="5"
              value={dailyChecks}
              onChange={(e) => setDailyChecks(Number(e.target.value))}
              className="w-full h-2.5 bg-[#E8E1D5] rounded-lg appearance-none cursor-pointer accent-[#141414]"
            />
            
            <div className="flex justify-between text-[11px] font-mono text-[#8C8275]">
              <span>10 (Focus Monk)</span>
              <span>45 (Typical Engineer / PM)</span>
              <span>100+ (High Velocity Executive)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-[#E5DDD1] mb-8">
            
            <div className="bg-[#F5EFE6] p-6 rounded-2xl border border-[#DFD5C6]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#7A7265] uppercase mb-1">
                <Clock className="w-4 h-4 text-[#141414]" />
                <span>Deep Work Reclaimed</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-[#121212] tracking-tight font-mono">
                {monthlyHoursReclaimed} hrs
              </div>
              <p className="text-xs text-[#5C5549] mt-1.5">
                Saved every working month by eliminating micro-interruption latency.
              </p>
            </div>

            <div className="bg-[#F5EFE6] p-6 rounded-2xl border border-[#DFD5C6]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#7A7265] uppercase mb-1">
                <Zap className="w-4 h-4 text-[#141414]" />
                <span>Window Switches Averted</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-[#121212] tracking-tight font-mono">
                {monthlySwitches.toLocaleString()}
              </div>
              <p className="text-xs text-[#5C5549] mt-1.5">
                Fewer keystrokes pulling you out of your primary editor or canvas.
              </p>
            </div>

            <div className="bg-[#F5EFE6] p-6 rounded-2xl border border-[#DFD5C6]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#7A7265] uppercase mb-1">
                <ShieldCheck className="w-4 h-4 text-[#141414]" />
                <span>Distraction Exposure</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-700 tracking-tight font-mono">
                -{interruptionReduction}%
              </div>
              <p className="text-xs text-[#5C5549] mt-1.5">
                Reduced risk of accidentally tumbling into browser rabbit holes.
              </p>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-[#EDE5DB] rounded-2xl border border-[#DFD5C6]">
            <span className="text-xs sm:text-sm text-[#443E34] leading-relaxed">
              <strong>The takeaway:</strong> Eliminating tab-switching pays for the 7.5" display within your first 10 days of focused work.
            </span>
            <button
              type="button"
              onClick={onOpenPreorder}
              className="shrink-0 px-5 py-2.5 bg-[#141414] text-[#FBF9F5] text-xs font-semibold rounded-full hover:bg-[#282828] transition-colors cursor-pointer"
            >
              Reserve Unit ($149)
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
