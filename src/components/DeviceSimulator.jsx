import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Timer, 
  GitPullRequest, 
  MessageSquare, 
  Clock, 
  Feather, 
  DoorClosed, 
  RefreshCw, 
  BatteryCharging, 
  Wifi, 
  Palette, 
  Sparkles,
  Sliders,
  BellOff,
  Cpu,
  Activity,
  HardDrive,
  Hammer
} from 'lucide-react';

export default function DeviceSimulator() {
  const [activePreset, setActivePreset] = useState('calendar');
  const [variant, setVariant] = useState('monochrome');
  const [mounting, setMounting] = useState('desk'); 
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState('Just now');
  const [currentTime, setCurrentTime] = useState('10:45');
  const [showWipCanvas, setShowWipCanvas] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      hours = hours % 12 || 12;
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const triggerRefresh = (presetKey) => {
    setIsRefreshing(true);
    if (presetKey) {
      setActivePreset(presetKey);
    }
    setTimeout(() => {
      setIsRefreshing(false);
      setLastRefreshed('Just now');
    }, 400);
  };

  const presets = [
    { id: 'calendar', name: 'Agenda & Calendar', icon: Calendar, tag: 'Productivity' },
    { id: 'pomodoro', name: 'Focus & Deep Work', icon: Timer, tag: 'Concentration' },
    { id: 'developer', name: 'Dev Ops & GitHub', icon: GitPullRequest, tag: 'Engineering' },
    { id: 'presence', name: 'Presence & Status', icon: MessageSquare, tag: 'Team Sync' },
    { id: 'clock', name: 'Minimal Clock & Air', icon: Clock, tag: 'Ambient' },
    { id: 'art', name: 'Daily Poem & Art', icon: Feather, tag: 'Inspiration' },
    { id: 'signage', name: 'Meeting Room Sign', icon: DoorClosed, tag: 'Facilities' },
  ];

  return (
    <section id="simulator" className="py-20 lg:py-28 bg-[#F5EFE6] border-y border-[#E5DDD1] relative overflow-hidden">
      
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-8 border-b border-[#E0D7C9] gap-6 text-left">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE4D8] border border-[#DFD5C6] text-xs font-mono uppercase tracking-wider text-[#5C5549]">
              <Sparkles className="w-3.5 h-3.5 text-[#8C8275]" />
              <span>Interactive Hardware Simulator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121212]">
              Live 7.5" Workspace Display
            </h2>
            <p className="text-sm sm:text-base text-[#5C5549] leading-relaxed">
              Test how real workspace information renders on the physical prototype. 
              Cycle screen modes, toggle monochrome vs. tri-color e-ink, and observe electrophoretic particle waveforms.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1 bg-[#EBE4D8] p-1 rounded-xl border border-[#DFD5C6]">
              <button
                type="button"
                onClick={() => { setVariant('monochrome'); triggerRefresh(); }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  variant === 'monochrome'
                    ? 'bg-[#141414] text-[#FBF9F5] shadow-xs'
                    : 'text-[#5C5549] hover:text-[#121212]'
                }`}
              >
                Monochrome E-Ink
              </button>
              <button
                type="button"
                onClick={() => { setVariant('tricolor'); triggerRefresh(); }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  variant === 'tricolor'
                    ? 'bg-[#C84B31] text-white shadow-xs'
                    : 'text-[#5C5549] hover:text-[#121212]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#E85D43]" />
                <span>Tri-Color Spectra</span>
              </button>
            </div>

            <div className="flex items-center gap-1 bg-[#EBE4D8] p-1 rounded-xl border border-[#DFD5C6]">
              <button
                type="button"
                onClick={() => setMounting('desk')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  mounting === 'desk'
                    ? 'bg-[#141414] text-[#FBF9F5] shadow-xs'
                    : 'text-[#5C5549] hover:text-[#121212]'
                }`}
              >
                Desk (35°)
              </button>
              <button
                type="button"
                onClick={() => setMounting('wall')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  mounting === 'wall'
                    ? 'bg-[#141414] text-[#FBF9F5] shadow-xs'
                    : 'text-[#5C5549] hover:text-[#121212]'
                }`}
              >
                Wall Mount
              </button>
            </div>

            <button
              type="button"
              onClick={() => triggerRefresh()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#141414] bg-[#FBF9F5] hover:bg-white rounded-xl border border-[#DFD5C6] transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#8C8275] ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Cycle Waveform</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-3 flex flex-col gap-2 order-2 lg:order-1 text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C8275] px-1 mb-1 font-semibold">
              Screen Modes (7 Layouts)
            </span>
            {presets.map((preset) => {
              const Icon = preset.icon;
              const isSelected = activePreset === preset.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => triggerRefresh(preset.id)}
                  className={`w-full text-left p-3 rounded-xl border transition-all duration-150 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#141414] text-[#FBF9F5] border-[#141414] shadow-md translate-x-1'
                      : 'bg-[#FBF9F5] text-[#121212] border-[#E5DDD1] hover:border-[#8C8275] hover:bg-[#FDFCF9]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-[#2A2A2A] text-[#FBF9F5]' : 'bg-[#EFE9DF] text-[#5C5549]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-tight leading-snug">
                        {preset.name}
                      </div>
                      <div className={`text-[10px] font-mono ${isSelected ? 'text-[#C5BDB2]' : 'text-[#8C8275]'}`}>
                        {preset.tag}
                      </div>
                    </div>
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#E5DDD1] animate-pulse" />
                  )}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setShowWipCanvas(!showWipCanvas)}
              className="mt-2 p-3 rounded-xl border border-dashed border-[#8C8275] bg-[#EBE3D7] text-left text-xs font-mono text-[#5C5549] hover:bg-[#E3D9CC] transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between font-bold text-[#121212]">
                <span>[WIP: Custom Canvas Builder]</span>
                <Hammer className="w-3.5 h-3.5 text-amber-700" />
              </div>
              <span className="text-[10px] text-[#736B5E] block mt-0.5">Click to view unfinished layout editor draft</span>
            </button>
          </div>

          <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
            
            <div 
              className={`relative transition-all duration-500 w-full max-w-[560px] ${
                mounting === 'desk' 
                  ? 'transform lg:rotate-[-0.5deg]' 
                  : 'transform scale-100'
              }`}
            >
              
              {mounting === 'desk' && (
                <>
                  <div className="absolute -bottom-6 left-12 right-12 h-8 bg-black/25 blur-xl rounded-full transform scale-y-50" />
                  <div className="absolute -bottom-2 left-1/4 w-1/2 h-4 bg-black/40 blur-md rounded-full" />
                </>
              )}

              <div className="relative bg-[#161616] p-5 sm:p-6 rounded-[22px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)] border-4 border-[#242424]">
                
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#333333] pointer-events-none" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#333333] pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#333333] pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#333333] pointer-events-none" />

                <div className="p-1 sm:p-1.5 bg-[#0F0F0F] rounded-[14px] shadow-inner">
                  
                  <div 
                    className={`relative w-full aspect-[800/480] bg-[#F2EFE9] text-[#111111] rounded-[10px] overflow-hidden p-5 sm:p-6 flex flex-col justify-between select-none shadow-sm transition-opacity duration-150 ${
                      isRefreshing ? 'animate-eink-flash' : ''
                    }`}
                    style={{
                      backgroundImage: 'radial-gradient(rgba(0,0,0,0.035) 1px, transparent 0)',
                      backgroundSize: '5px 5px',
                    }}
                  >
                    
                    <div className="flex items-center justify-between border-b border-[#D4CEBF] pb-1.5 font-mono text-[10px] sm:text-xs text-[#4A453C]">
                      <div className="flex items-center gap-1.5">
                        <img src="/logo.png" alt="" className="w-3.5 h-3.5 object-contain invert brightness-0" />
                        <span className="font-bold text-[#111111]">ASYNC OS 2.4</span>
                        <span>•</span>
                        <span>{currentTime} AM</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="flex items-center gap-1">
                          <Wifi className="w-3 h-3 text-[#111111]" />
                          <span>Wi-Fi</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <BatteryCharging className="w-3.5 h-3.5 text-[#111111]" />
                          <span className="font-semibold">88% (24d)</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 py-2 flex flex-col justify-center">
                      
                      {activePreset === 'calendar' && (
                        <div className="space-y-2.5">
                          <div className="flex items-baseline justify-between">
                            <div>
                              <span className="text-[10px] font-mono uppercase tracking-widest text-[#736B5E]">Current Event</span>
                              <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#111111] flex items-center gap-2">
                                <span>Weekly Engineering Sync</span>
                                {variant === 'tricolor' && (
                                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#C84B31] text-white font-mono font-medium uppercase">
                                    Live
                                  </span>
                                )}
                              </h3>
                              <p className="text-xs text-[#4A453C]">10:30 AM – 11:15 AM • Google Meet</p>
                            </div>
                            <div className="text-right font-mono">
                              <span className="text-lg sm:text-xl font-bold text-[#111111]">30m</span>
                              <span className="block text-[9px] text-[#736B5E]">Remaining</span>
                            </div>
                          </div>

                          <div className="w-full bg-[#DED7C8] h-1.5 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${variant === 'tricolor' ? 'bg-[#C84B31]' : 'bg-[#111111]'}`} 
                              style={{ width: '65%' }} 
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#D4CEBF]/60 text-xs">
                            <div className="bg-[#EAE4D7] p-1.5 rounded border border-[#D8D0C0]">
                              <span className="text-[9px] font-mono uppercase text-[#736B5E] block">Next • 11:30 AM</span>
                              <span className="font-semibold text-[#111111] text-xs truncate block">Architecture Review</span>
                            </div>
                            <div className="bg-[#EAE4D7] p-1.5 rounded border border-[#D8D0C0]">
                              <span className="text-[9px] font-mono uppercase text-[#736B5E] block">Later • 02:00 PM</span>
                              <span className="font-semibold text-[#111111] text-xs truncate block">Client Design Walkthrough</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {activePreset === 'pomodoro' && (
                        <div className="flex flex-col items-center justify-center text-center space-y-1.5">
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#E4DDD0] text-[10px] font-mono uppercase tracking-widest text-[#4A453C] border border-[#D5CDBC]">
                            <BellOff className="w-3 h-3 text-[#111111]" />
                            <span>Deep Work Session</span>
                          </div>
                          <div className="font-mono text-4xl sm:text-5xl font-black tracking-tight text-[#111111]">
                            21:40
                          </div>
                          <div className="text-xs font-medium text-[#4A453C]">
                            Goal: <strong className="text-[#111111]">Firmware Waveform Refresh Fix</strong>
                          </div>
                          <div className="flex items-center gap-2 pt-0.5">
                            <div className="flex gap-1">
                              <span className={`w-2 h-2 rounded-full ${variant === 'tricolor' ? 'bg-[#C84B31]' : 'bg-[#111111]'}`} />
                              <span className={`w-2 h-2 rounded-full ${variant === 'tricolor' ? 'bg-[#C84B31]' : 'bg-[#111111]'}`} />
                              <span className={`w-2 h-2 rounded-full ${variant === 'tricolor' ? 'bg-[#C84B31]' : 'bg-[#111111]'}`} />
                              <span className="w-2 h-2 rounded-full bg-[#D4CEBF]" />
                            </div>
                            <span className="text-[10px] font-mono text-[#736B5E]">Streak: 3 of 4</span>
                          </div>
                        </div>
                      )}

                      {activePreset === 'developer' && (
                        <div className="space-y-2 text-xs font-mono">
                          <div className="flex items-center justify-between border-b border-[#D4CEBF] pb-1">
                            <span className="font-bold text-xs text-[#111111]">async-labs / firmware</span>
                            <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                              variant === 'tricolor' ? 'bg-[#C84B31] text-white' : 'bg-[#111111] text-white'
                            }`}>
                              CI: PASSING
                            </span>
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center justify-between bg-[#E8E2D4] p-1.5 rounded border border-[#D5CDBC]">
                              <span className="truncate text-[11px]">PR #142: Fix e-ink LUT cycle</span>
                              <span className="font-bold text-[#111111] text-[10px]">✓ 2 Approvals</span>
                            </div>
                            <div className="flex items-center justify-between bg-[#E8E2D4] p-1.5 rounded border border-[#D5CDBC]">
                              <span className="truncate text-[11px]">PR #148: BLE 5.2 battery sleep</span>
                              <span className="font-bold text-[#736B5E] text-[10px]">Review Needed</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-[#5C5549]">
                            <span>Build: 1m 32s</span>
                            <span>Deployed: 12m ago</span>
                          </div>
                        </div>
                      )}

                      {activePreset === 'presence' && (
                        <div className="text-center space-y-1.5">
                          <div className="text-2xl">🎯</div>
                          <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#111111]">
                            IN FLOW STATE • ASYNC ONLY
                          </h3>
                          <p className="text-xs text-[#4A453C]">
                            Slack status set to <em>"Deep work on prototype"</em> until 2:30 PM.
                          </p>
                          <div className="inline-block px-2.5 py-0.5 bg-[#E4DDD0] rounded text-[10px] font-mono text-[#5C5549] border border-[#D5CDBC]">
                            Desk Rule: Urgent calls only
                          </div>
                        </div>
                      )}

                      {activePreset === 'clock' && (
                        <div className="flex items-center justify-between px-2">
                          <div>
                            <div className="font-mono text-4xl sm:text-5xl font-black tracking-tighter text-[#111111] leading-none">
                              10:45
                            </div>
                            <div className="text-xs font-semibold tracking-wide text-[#5C5549] mt-1 font-mono uppercase">
                              Friday • Sep 4, 2026
                            </div>
                          </div>
                          <div className="text-right space-y-0.5 font-mono text-xs text-[#4A453C]">
                            <div className="text-base font-bold text-[#111111]">24°C</div>
                            <div className="text-[11px]">Clear Sky</div>
                            <div className={`text-[9px] px-1.5 py-0.5 rounded inline-block font-semibold ${
                              variant === 'tricolor' ? 'bg-[#C84B31] text-white' : 'bg-[#111111] text-white'
                            }`}>
                              AQI 22 • FRESH
                            </div>
                          </div>
                        </div>
                      )}

                      {activePreset === 'art' && (
                        <div className="flex items-center justify-between gap-3 px-2">
                          <div className="space-y-1 text-left max-w-xs">
                            <span className="text-[9px] font-mono uppercase tracking-widest text-[#736B5E]">Daily Stillness</span>
                            <blockquote className="font-serif italic text-xs sm:text-sm leading-snug text-[#111111]">
                              "Simplicity is about making room for what matters."
                            </blockquote>
                            <span className="text-[10px] font-mono text-[#5C5549] block">— Minimalist Workspace Thought</span>
                          </div>
                          <div className="w-16 h-16 border border-[#111111] p-1 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#111111] flex items-center justify-center">
                              <div className={`w-4 h-4 ${variant === 'tricolor' ? 'bg-[#C84B31]' : 'bg-[#111111]'}`} />
                            </div>
                          </div>
                        </div>
                      )}

                      {activePreset === 'signage' && (
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between border-b border-[#D4CEBF] pb-1">
                            <div>
                              <span className="text-[9px] font-mono text-[#736B5E] uppercase block">Meeting Space</span>
                              <span className="text-sm font-bold text-[#111111]">Studio Room 04</span>
                            </div>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase ${
                              variant === 'tricolor' ? 'bg-[#C84B31] text-white' : 'bg-[#111111] text-white'
                            }`}>
                              ● Occupied
                            </span>
                          </div>
                          <div className="text-xs text-[#4A453C]">
                            <strong className="text-[#111111]">Current:</strong> Hiring Panel (until 11:30 AM)
                          </div>
                          <div className="text-[10px] font-mono text-[#5C5549] bg-[#E8E2D4] p-1 rounded border border-[#D5CDBC] flex items-center justify-between">
                            <span>Open next at 11:30 AM</span>
                            <span className="font-semibold text-[#111111]">NFC Tap</span>
                          </div>
                        </div>
                      )}

                    </div>

                    <div className="flex items-center justify-between border-t border-[#D4CEBF] pt-1.5 text-[9px] font-mono text-[#736B5E]">
                      <span>15M CADENCE</span>
                      <span className="font-medium text-[#4A453C]">LAST SYNC: {lastRefreshed}</span>
                      <span>300 DPI CARTA</span>
                    </div>

                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 pt-2.5 sm:pt-3 pb-0.5">
                  <img src="/logo.png" alt="AL" className="w-4 h-4 object-contain opacity-40 filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]" />
                  <span className="font-semibold tracking-wider text-xs sm:text-sm text-[#444444] select-none font-sans drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                    Async Labs
                  </span>
                </div>

              </div>

              <div className="mt-3 flex items-center justify-center gap-3 text-[11px] font-mono text-[#7A7265]">
                <span>7.5" diagonal</span>
                <span>•</span>
                <span>800×480 px (16:9.7)</span>
                <span>•</span>
                <span>0W Static Retention</span>
              </div>

            </div>

          </div>

          <div className="lg:col-span-3 flex flex-col gap-3 order-3 text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C8275] px-1 font-semibold">
              Hardware Telemetry (Live)
            </span>
            <div className="bg-[#FBF9F5] p-3.5 rounded-2xl border border-[#E5DDD1] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#7A7265] border-b border-[#EBE4D8] pb-1.5">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#141414]" />
                  <span>ESP32-S3 SoC</span>
                </span>
                <span className="text-emerald-700 font-bold">240 MHz</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#5C5549]">
                <div>
                  <span className="text-[#8C8275] block text-[9px]">DEEP SLEEP:</span>
                  <strong className="text-[#141414]">16.4 µA</strong>
                </div>
                <div>
                  <span className="text-[#8C8275] block text-[9px]">BATTERY VOLT:</span>
                  <strong className="text-[#141414]">4.12 V (LiPo)</strong>
                </div>
              </div>
            </div>

            <div className="bg-[#FBF9F5] p-3.5 rounded-2xl border border-[#E5DDD1] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#7A7265] border-b border-[#EBE4D8] pb-1.5">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#141414]" />
                  <span>Waveform LUT</span>
                </span>
                <span className="text-[#141414] font-bold">Carta 1200</span>
              </div>
              <div className="space-y-1 text-[11px] font-mono text-[#5C5549]">
                <div className="flex justify-between">
                  <span>Flash Duration:</span>
                  <strong className="text-[#141414]">380 ms</strong>
                </div>
                <div className="flex justify-between">
                  <span>Frame Buffer:</span>
                  <strong className="text-[#141414]">48 KB (1-bit SPI)</strong>
                </div>
                <div className="flex justify-between">
                  <span>Panel Temp:</span>
                  <strong className="text-[#141414]">22.4°C</strong>
                </div>
              </div>
            </div>
            {showWipCanvas && (
              <div className="bg-[#181818] text-[#FBF9F5] p-3.5 rounded-2xl border border-[#333333] space-y-2 animate-in fade-in duration-150">
                <div className="flex items-center justify-between text-[11px] font-mono text-amber-400">
                  <span>CANVAS BUILDER (DRAFT)</span>
                  <span className="text-[9px] bg-amber-950 px-1.5 py-0.5 rounded">INCOMPLETE</span>
                </div>
                <p className="text-[10px] text-[#A8A095]">
                  Mock grid system for dragging custom widgets onto the 800×480 canvas. Started implementing with HTML5 drag events.
                </p>
                <div className="grid grid-cols-2 gap-1 text-[10px] font-mono">
                  <div className="p-1.5 bg-[#252525] rounded border border-dashed border-[#555555] text-center">
                    + Calendar Box
                  </div>
                  <div className="p-1.5 bg-[#252525] rounded border border-dashed border-[#555555] text-center">
                    + Pomodoro Timer
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
