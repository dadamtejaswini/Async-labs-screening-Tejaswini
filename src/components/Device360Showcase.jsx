import React, { useState, useEffect, useRef } from 'react';
import { 
  Rotate3d, 
  Play, 
  Pause, 
  Layers, 
  BatteryCharging, 
  Eye, 
  Sliders, 
  Check, 
  Sparkles,
  Compass,
  Hammer,
  AlertCircle
} from 'lucide-react';

export default function Device360Showcase() {
  const [angle, setAngle] = useState(0);
  const [isAutoSpinning, setIsAutoSpinning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLinked, setScrollLinked] = useState(true);

  const [showExplodedNotice, setShowExplodedNotice] = useState(false);

  const sectionRef = useRef(null);
  const autoSpinRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollLinked || isAutoSpinning || isDragging) return;
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalDist = rect.height + windowHeight;
      const currentPos = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, currentPos / totalDist));

      const calculatedAngle = Math.round(progress * 360) % 360;
      setAngle(calculatedAngle);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollLinked, isAutoSpinning, isDragging]);

  useEffect(() => {
    if (isAutoSpinning) {
      autoSpinRef.current = setInterval(() => {
        setAngle((prev) => (prev + 1) % 360);
      }, 25);
    } else if (autoSpinRef.current) {
      clearInterval(autoSpinRef.current);
    }
    return () => {
      if (autoSpinRef.current) clearInterval(autoSpinRef.current);
    };
  }, [isAutoSpinning]);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setIsAutoSpinning(false);
    setScrollLinked(false);
    setStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const delta = clientX - startX;
    
    setAngle((prev) => {
      let next = Math.round(prev + delta * 0.8) % 360;
      if (next < 0) next += 360;
      return next;
    });
    setStartX(clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const getActiveFacet = (deg) => {
    if (deg >= 315 || deg < 45) return 'front';
    if (deg >= 45 && deg < 135) return 'right';
    if (deg >= 135 && deg < 225) return 'back';
    return 'left';
  };

  const currentFacet = getActiveFacet(angle);

  return (
    <section 
      id="revolve-showcase" 
      ref={sectionRef} 
      className="py-20 lg:py-28 bg-[#121212] text-[#FBF9F5] border-y border-[#262626] relative overflow-hidden select-none"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-[#28221A]/50 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
        
        {}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-10 border-b border-[#242424] gap-6">
          <div className="text-left max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F1F1F] border border-[#333333] text-xs font-mono uppercase tracking-wider text-[#A8A095]">
              <Rotate3d className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>360° Hardware Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FBF9F5]">
              Inspect Every Angle in 360°.
            </h2>
            <p className="text-sm sm:text-base text-[#8C8275] leading-relaxed">
              Scroll down to watch the 7.5" display revolve around its Y-axis in real time. 
              Inspect the front e-paper screen, the 11.2mm slim profile with USB-C, and the rear kickstand with magnetic wall mounts.
            </p>
          </div>

          {}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="bg-[#181818] px-4 py-2.5 rounded-2xl border border-[#2B2B2B] font-mono text-xs text-[#A8A095] flex items-center gap-3">
              <span>CURRENT ANGLE:</span>
              <span className="text-xl font-bold text-amber-400 font-mono">{angle}°</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#242424] text-[#8C8275] uppercase">
                {currentFacet} VIEW
              </span>
            </div>

            <button
              type="button"
              onClick={() => setShowExplodedNotice(!showExplodedNotice)}
              className="px-3.5 py-2.5 bg-[#1C1C1C] hover:bg-[#252525] rounded-2xl border border-[#333333] text-xs font-mono text-[#DCD6CC] flex items-center gap-2 cursor-pointer"
            >
              <Hammer className="w-3.5 h-3.5 text-amber-500" />
              <span>[WIP: Teardown Mode]</span>
            </button>
          </div>
        </div>

        {}
        {showExplodedNotice && (
          <div className="mb-8 p-4 bg-[#1C1608] border border-amber-500/40 rounded-2xl text-xs font-mono text-amber-200 flex items-start gap-3 animate-in fade-in duration-200">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong>Unfinished Feature Note (Candidate Log):</strong>
              <p className="text-amber-300/80 text-[11px] mt-0.5">
                "I started building an interactive exploded 3D CAD teardown showing the internal ESP32-S3 PCB, 3000mAh LiPo pouch, and e-paper FPC ribbon cable separated in space. Ran out of the 4-hour timebox to finish the Three.js mesh models, so it's currently flagged for v2! The 360° exterior orbit below is fully functional." — Tejaswini
              </p>
            </div>
          </div>
        )}

        {}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {}
          <div className="lg:col-span-5 space-y-6 text-left order-2 lg:order-1">
            
            {}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#8C8275] block">
                Snap to Hardware Facet:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => { setAngle(0); setIsAutoSpinning(false); setScrollLinked(false); }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    currentFacet === 'front'
                      ? 'bg-[#FBF9F5] text-[#121212] border-white shadow-md font-bold'
                      : 'bg-[#181818] text-[#8C8275] border-[#2A2A2A] hover:text-white'
                  }`}
                >
                  <div className="text-xs font-mono">0° Front Face</div>
                  <div className="text-[11px] opacity-80 mt-0.5 font-normal">7.5" Carta E-Paper</div>
                </button>

                <button
                  type="button"
                  onClick={() => { setAngle(90); setIsAutoSpinning(false); setScrollLinked(false); }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    currentFacet === 'right'
                      ? 'bg-[#FBF9F5] text-[#121212] border-white shadow-md font-bold'
                      : 'bg-[#181818] text-[#8C8275] border-[#2A2A2A] hover:text-white'
                  }`}
                >
                  <div className="text-xs font-mono">90° Profile</div>
                  <div className="text-[11px] opacity-80 mt-0.5 font-normal">USB-C & Wake Button</div>
                </button>

                <button
                  type="button"
                  onClick={() => { setAngle(180); setIsAutoSpinning(false); setScrollLinked(false); }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    currentFacet === 'back'
                      ? 'bg-[#FBF9F5] text-[#121212] border-white shadow-md font-bold'
                      : 'bg-[#181818] text-[#8C8275] border-[#2A2A2A] hover:text-white'
                  }`}
                >
                  <div className="text-xs font-mono">180° Rear Chassis</div>
                  <div className="text-[11px] opacity-80 mt-0.5 font-normal">Dual Kickstand & Magnets</div>
                </button>

                <button
                  type="button"
                  onClick={() => { setAngle(270); setIsAutoSpinning(false); setScrollLinked(false); }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    currentFacet === 'left'
                      ? 'bg-[#FBF9F5] text-[#121212] border-white shadow-md font-bold'
                      : 'bg-[#181818] text-[#8C8275] border-[#2A2A2A] hover:text-white'
                  }`}
                >
                  <div className="text-xs font-mono">270° Left Edge</div>
                  <div className="text-[11px] opacity-80 mt-0.5 font-normal">Matte Carbon Seam</div>
                </button>
              </div>
            </div>

            {}
            <div className="bg-[#181818] p-4 rounded-2xl border border-[#2A2A2A] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#A8A095]">
                <span>Scrub 360° Orbit:</span>
                <strong className="text-amber-400 font-mono">{angle}° / 360°</strong>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={angle}
                onChange={(e) => {
                  setAngle(Number(e.target.value));
                  setIsAutoSpinning(false);
                  setScrollLinked(false);
                }}
                className="w-full h-2 bg-[#282828] rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#666666]">
                <span>0° (Front)</span>
                <span>90° (Side)</span>
                <span>180° (Back)</span>
                <span>270°</span>
                <span>360°</span>
              </div>
            </div>

            {}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsAutoSpinning(!isAutoSpinning);
                  if (!isAutoSpinning) setScrollLinked(false);
                }}
                className="flex-1 py-2.5 px-4 bg-[#222222] hover:bg-[#2C2C2C] text-xs font-mono text-[#DCD6CC] rounded-xl border border-[#3A3A3A] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                {isAutoSpinning ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isAutoSpinning ? 'Pause Rotation' : 'Auto 360° Spin'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setScrollLinked(true);
                  setIsAutoSpinning(false);
                }}
                className={`flex-1 py-2.5 px-4 text-xs font-mono rounded-xl border transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                  scrollLinked 
                    ? 'bg-amber-950/40 text-amber-300 border-amber-500/40' 
                    : 'text-[#8C8275] border-[#333333] hover:text-white bg-[#181818]'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Link to Scroll</span>
              </button>
            </div>

            {}
            <div className="p-4 bg-[#181818] rounded-2xl border border-[#2E2E2E]">
              {currentFacet === 'front' && (
                <div className="space-y-1">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold block">
                    ● FRONT FACE: 7.5" CARTA 1200 PANEL
                  </span>
                  <p className="text-xs text-[#DCD6CC] leading-relaxed">
                    Zero backlight, paper-white reflective surface with 800×480 resolution (300 DPI). Readable under harsh sunlight with zero eye fatigue.
                  </p>
                </div>
              )}
              {currentFacet === 'right' && (
                <div className="space-y-1">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold block">
                    ● RIGHT PROFILE: 11.2MM SLIM RAIL
                  </span>
                  <p className="text-xs text-[#DCD6CC] leading-relaxed">
                    Ultra-thin chassis featuring a recessed USB-C Power Delivery port and tactile hardware wake/sync button.
                  </p>
                </div>
              )}
              {currentFacet === 'back' && (
                <div className="space-y-1">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold block">
                    ● REAR CHASSIS: DUAL KICKSTAND & MAGNETS
                  </span>
                  <p className="text-xs text-[#DCD6CC] leading-relaxed">
                    Integrated kickstand supporting 35° (seated desk) and 60° (standing desk). 4× flush Neodymium N52 magnets for wall-mount plate.
                  </p>
                </div>
              )}
              {currentFacet === 'left' && (
                <div className="space-y-1">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold block">
                    ● LEFT CHASSIS: 3D TEXTURED FRAME
                  </span>
                  <p className="text-xs text-[#DCD6CC] leading-relaxed">
                    Preserves the exact physical prototype's matte carbon texture and chamfered corner stress relief lines.
                  </p>
                </div>
              )}
            </div>

          </div>

          {}
          <div className="lg:col-span-7 flex flex-col items-center justify-center order-1 lg:order-2">
            
            <div 
              className="w-full max-w-[620px] aspect-[800/520] perspective-1200 cursor-grab active:cursor-grabbing relative flex items-center justify-center py-6"
              onPointerDown={handlePointerDown}
            >
              
              {}
              <div 
                className="w-full h-full relative preserve-3d transition-transform duration-100 ease-out"
                style={{
                  transform: `rotateY(${angle}deg) rotateX(${Math.sin(angle * Math.PI / 180) * 3}deg)`,
                }}
              >
                
                {}
                <div 
                  className="absolute inset-0 bg-[#161616] p-5 sm:p-6 rounded-[22px] border-4 border-[#252525] shadow-2xl flex flex-col justify-between backface-hidden"
                  style={{
                    transform: 'translateZ(7px)',
                    boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.7)',
                  }}
                >
                  {}
                  <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#383838]" />
                  <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#383838]" />
                  <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#383838]" />
                  <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#383838]" />

                  {}
                  <div className="p-1 bg-[#0D0D0D] rounded-[13px] shadow-inner flex-1 flex flex-col justify-between">
                    <div className="w-full h-full bg-[#F2EFE9] text-[#111111] rounded-[9px] p-4 flex flex-col justify-between select-none">
                      
                      <div className="flex items-center justify-between border-b border-[#D4CEBF] pb-1 font-mono text-[10px] text-[#4A453C]">
                        <div className="flex items-center gap-1.5">
                          <img src="/logo.png" alt="AL" className="w-3 h-3 object-contain invert brightness-0" />
                          <span className="font-bold">ASYNC OS 2.4</span>
                        </div>
                        <span>BATTERY 88% (24d)</span>
                      </div>

                      <div className="py-2 text-center space-y-1">
                        <div className="inline-block px-2 py-0.5 bg-[#E4DDD0] rounded text-[10px] font-mono text-[#5C5549]">
                          7.5" Smart Workspace Display
                        </div>
                        <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
                          Information in Physical Space
                        </div>
                        <p className="text-xs text-[#4A453C]">
                          300 DPI Carta HD • Zero Glare • 30-Day Battery
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-[#D4CEBF] pt-1 text-[9px] font-mono text-[#736B5E]">
                        <span>0.00W STATIC DRAW</span>
                        <span>BLE 5.2 / WI-FI 6</span>
                      </div>

                    </div>
                  </div>

                  {}
                  <div className="flex items-center justify-center gap-1.5 pt-2">
                    <img src="/logo.png" alt="Logo" className="w-4 h-4 object-contain opacity-70" />
                    <span className="font-medium text-xs tracking-wider text-[#484848]">
                      Async Labs
                    </span>
                  </div>
                </div>

                {}
                <div 
                  className="absolute inset-0 bg-[#151515] p-6 rounded-[22px] border-4 border-[#252525] shadow-2xl flex flex-col justify-between backface-hidden"
                  style={{
                    transform: 'rotateY(180deg) translateZ(7px)',
                  }}
                >
                  {}
                  <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-[#303030] border border-[#444444] shadow-inner" />
                  <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-[#303030] border border-[#444444] shadow-inner" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-[#303030] border border-[#444444] shadow-inner" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-[#303030] border border-[#444444] shadow-inner" />

                  <div className="flex items-center justify-between text-[10px] font-mono text-[#777777] border-b border-[#242424] pb-2">
                    <span>REAR CHASSIS INSPECTION</span>
                    <span className="text-amber-400">DUAL KICKSTAND (35°/60°)</span>
                  </div>

                  {}
                  <div className="my-auto mx-auto w-3/4 max-w-[340px] bg-[#1E1E1E] p-4 rounded-2xl border border-[#2D2D2D] shadow-inner text-center space-y-2">
                    <div className="w-16 h-1 bg-[#3A3A3A] rounded-full mx-auto" />
                    <div className="text-xs font-mono text-[#C5BDB2] font-semibold">
                      Foldable Zinc-Alloy Kickstand
                    </div>
                    <p className="text-[11px] text-[#7A7265] max-w-xs mx-auto">
                      Snaps flush into body or extends to 35° (seated desk) and 60° (standing desk).
                    </p>
                    <div className="flex items-center justify-center gap-3 pt-1">
                      <span className="px-2 py-0.5 bg-[#141414] rounded text-[10px] font-mono text-[#8C8275] border border-[#2A2A2A]">
                        4× Magnetic Anchors
                      </span>
                      <span className="px-2 py-0.5 bg-[#141414] rounded text-[10px] font-mono text-[#8C8275] border border-[#2A2A2A]">
                        Silicone Feet
                      </span>
                    </div>
                  </div>

                  {}
                  <div className="border-t border-[#242424] pt-2 text-center text-[9px] font-mono text-[#555555] space-y-0.5">
                    <div>ASYNC LABS INC. • MODEL AL-750 • 7.5" CARTA 1200 PANEL</div>
                    <div>5V 1A USB-C • FCC ID: 2A9AL-750 • TASK T5 SCREENING</div>
                  </div>
                </div>

                {}
                <div 
                  className="absolute top-4 bottom-4 right-0 w-[14px] bg-[#222222] border-y border-l border-[#333333] flex flex-col items-center justify-center gap-4 backface-hidden"
                  style={{
                    transform: 'rotateY(90deg) translateZ(280px)',
                  }}
                >
                  <div className="w-2 h-5 bg-[#101010] rounded-sm border border-[#444444]" />
                  <div className="w-1.5 h-3 bg-[#444444] rounded-full" />
                </div>

              </div>

              {}
              <div className="absolute -bottom-6 flex items-center gap-2 text-xs font-mono text-[#8C8275] pointer-events-none">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Drag directly with mouse or scroll page to revolve</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
