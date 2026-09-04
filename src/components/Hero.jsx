import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Battery, 
  Eye, 
  Smartphone, 
  Layers, 
  Check,
  Rotate3d,
  Cpu,
  Clock
} from 'lucide-react';
export default function Hero({ onOpenPreorder, onScrollToSimulator, onScrollTo360 }) {
  return (
    <section id="overview" className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#FBF9F5] relative overflow-hidden border-b border-[#E5DDD1]">
      
      <div className="absolute top-10 right-10 w-[600px] h-[400px] bg-radial from-[#EDE4D8]/60 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />
      
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          <div className="lg:col-span-7 xl:col-span-7 text-left space-y-7">
            <h1 className="text-5xl sm:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold tracking-tight text-[#121212] leading-[1.02]">
              Information in <br />
              <span className="text-[#8C8275]">physical space.</span> <br />
              Distraction-free.
            </h1>

            <p className="text-base sm:text-lg text-[#5C5549] max-w-2xl font-normal leading-relaxed">
              A dedicated 7.5-inch ambient e-paper display crafted for desks, studios, and walls. 
              Managed seamlessly through your companion app, keeping calendar events, deep work 
              timers, and developer metrics visible in your periphery—without burning monitor screen 
              space or bombarding you with notification popups.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onScrollToSimulator}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#141414] text-[#FBF9F5] font-medium text-sm hover:bg-[#282828] transition-all duration-150 shadow-sm active:scale-98 cursor-pointer"
              >
                <span>Launch Live Simulator</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onScrollTo360}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#EFE9DF] text-[#141414] font-medium text-sm hover:bg-[#E3DBCF] border border-[#DFD5C6] transition-all duration-150 shadow-2xs active:scale-98 cursor-pointer"
              >
                <Rotate3d className="w-4 h-4 text-[#8C8275]" />
                <span>Revolve 360° in 3D</span>
              </button>

              <button
                type="button"
                onClick={onOpenPreorder}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#EBE4D8] text-[#141414] font-medium text-sm hover:bg-[#DFD5C6] border border-[#D5CCBD] transition-all duration-150 shadow-2xs active:scale-98 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#8C8275]" />
                <span>Reserve Unit ($149)</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#E8E1D5]">
              <div className="bg-[#F5EFE6] p-3 rounded-xl border border-[#E5DDD1]">
                <div className="flex items-center gap-1.5 text-xs text-[#7A7265] font-mono mb-1">
                  <Battery className="w-3.5 h-3.5 text-[#141414]" />
                  <span>BATTERY</span>
                </div>
                <div className="text-sm font-bold text-[#121212]">Up to 30 Days</div>
                <div className="text-[10px] text-[#736B5E]">0W static image hold</div>
              </div>

              <div className="bg-[#F5EFE6] p-3 rounded-xl border border-[#E5DDD1]">
                <div className="flex items-center gap-1.5 text-xs text-[#7A7265] font-mono mb-1">
                  <Eye className="w-3.5 h-3.5 text-[#141414]" />
                  <span>OPTICS</span>
                </div>
                <div className="text-sm font-bold text-[#121212]">300 DPI Carta</div>
                <div className="text-[10px] text-[#736B5E]">Zero glare / blue light</div>
              </div>

              <div className="bg-[#F5EFE6] p-3 rounded-xl border border-[#E5DDD1]">
                <div className="flex items-center gap-1.5 text-xs text-[#7A7265] font-mono mb-1">
                  <Smartphone className="w-3.5 h-3.5 text-[#141414]" />
                  <span>SYNC</span>
                </div>
                <div className="text-sm font-bold text-[#121212]">BLE 5.2 + Wi-Fi</div>
                <div className="text-[10px] text-[#736B5E]">Sub-50ms packet push</div>
              </div>

              <div className="bg-[#F5EFE6] p-3 rounded-xl border border-[#E5DDD1]">
                <div className="flex items-center gap-1.5 text-xs text-[#7A7265] font-mono mb-1">
                  <Layers className="w-3.5 h-3.5 text-[#141414]" />
                  <span>MOUNT</span>
                </div>
                <div className="text-sm font-bold text-[#121212]">Desk & Wall</div>
                <div className="text-[10px] text-[#736B5E]">35°/60° kickstand + magnets</div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-[#141414] text-[#FBF9F5] rounded-3xl p-5 sm:p-6 border border-[#2B2B2B] shadow-xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#262626]">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="AL" className="w-5 h-5 object-contain" />
                  <span className="text-xs font-mono font-bold text-[#FBF9F5]">PHYSICAL BENCHMARK</span>
                </div>
                <span className="text-[10px] font-mono bg-[#222222] text-emerald-400 px-2 py-0.5 rounded border border-[#333333]">
                  Constraint: Fixed 7.5"
                </span>
              </div>

              <div className="relative group rounded-2xl overflow-hidden border border-[#2E2E2E] bg-black">
                <img
                  src="/async-labs-prototype.png"
                  alt="Async Labs 7.5-inch Prototype Reference"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[10px] font-mono text-[#DCD6CC] flex items-center justify-between">
                  <span>Prototype Unit #04</span>
                  <button 
                    type="button" 
                    onClick={onScrollTo360}
                    className="text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Click to revolve in 3D</span>
                    <Rotate3d className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-xs font-mono text-[#A8A095]">
                <div className="flex justify-between border-b border-[#242424] pb-1">
                  <span>Screen Ratio:</span>
                  <strong className="text-white">16:9.7 (800 × 480 px)</strong>
                </div>
                <div className="flex justify-between border-b border-[#242424] pb-1">
                  <span>Enclosure:</span>
                  <strong className="text-white">Matte textured carbon composite</strong>
                </div>
                <div className="flex justify-between border-b border-[#242424] pb-1">
                  <span>Mounting:</span>
                  <strong className="text-white">Dual kickstand + 4× N52 magnets</strong>
                </div>
                <div className="flex justify-between">
                  <span>Candidate Status:</span>
                  <strong className="text-emerald-400">All T5 Deliverables Implemented</strong>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
