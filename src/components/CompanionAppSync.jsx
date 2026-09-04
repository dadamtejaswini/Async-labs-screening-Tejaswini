import React, { useState } from 'react';
import { 
  Smartphone, 
  Send, 
  Check, 
  Wifi, 
  RotateCcw, 
  Calendar, 
  Timer, 
  GitBranch, 
  CloudSun, 
  Radio, 
  Sliders, 
  Sparkles,
  ArrowRight,
  Terminal,
  Hammer,
  Bluetooth
} from 'lucide-react';

export default function CompanionAppSync() {
  const [widgets, setWidgets] = useState({
    calendar: true,
    pomodoro: true,
    github: false,
    weather: true,
  });

  const [cadence, setCadence] = useState('15m');
  const [isPushing, setIsPushing] = useState(false);
  const [pushSuccess, setPushSuccess] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState('10:45 AM');
  const [screenFlashed, setScreenFlashed] = useState(false);
  const [packetsSent, setPacketsSent] = useState(14);
  const [webBleTesting, setWebBleTesting] = useState(false);

  const toggleWidget = (key) => {
    setWidgets((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePushToDisplay = () => {
    setIsPushing(true);
    setPushSuccess(false);

    setTimeout(() => {
      setIsPushing(false);
      setScreenFlashed(true);
      setPushSuccess(true);
      setPacketsSent((c) => c + 1);
      
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      hours = hours % 12 || 12;
      setLastSyncTime(`${hours}:${minutes} AM`);

      setTimeout(() => {
        setScreenFlashed(false);
      }, 400);

      setTimeout(() => {
        setPushSuccess(false);
      }, 3500);
    }, 850);
  };

  const handleWebBleMock = () => {
    setWebBleTesting(true);
    setTimeout(() => {
      setWebBleTesting(false);
      alert("Candidate Note: WebBluetooth API requires a physical device with Async Labs firmware running nearby. Simulated BLE handshake completed!");
    }, 1200);
  };

  return (
    <section id="app-sync" className="py-20 lg:py-28 bg-[#F5EFE6] border-t border-[#E5DDD1] relative overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 text-left">
        
        {}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-10 border-b border-[#E0D7C9] gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E1D5] border border-[#DFD5C6] text-xs font-mono uppercase tracking-wider text-[#5C5549]">
              <Radio className="w-3.5 h-3.5 text-[#8C8275] animate-pulse" />
              <span>Wireless Synchronization System</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121212]">
              Companion Software Control
            </h2>
            <p className="text-sm sm:text-base text-[#5C5549] leading-relaxed">
              Configure layouts on your phone or laptop. Transmit updates over Bluetooth Low Energy 5.2 or Wi-Fi 6 with sub-50ms latency.
            </p>
          </div>

          {}
          <div className="bg-[#EBE4D8] p-3 rounded-2xl border border-[#DFD5C6] flex items-center gap-3">
            <div className="text-xs font-mono text-[#5C5549]">
              <span className="font-bold text-[#141414] block">[WIP: WebBluetooth Scan]</span>
              <span className="text-[10px]">Browser WebBLE pairing draft</span>
            </div>
            <button
              type="button"
              onClick={handleWebBleMock}
              disabled={webBleTesting}
              className="px-3 py-1.5 bg-[#141414] text-[#FBF9F5] text-xs font-mono rounded-xl hover:bg-[#282828] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Bluetooth className="w-3.5 h-3.5 text-blue-400" />
              <span>{webBleTesting ? 'Scanning...' : 'Test Scan'}</span>
            </button>
          </div>
        </div>

        {}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {}
          <div className="lg:col-span-4 bg-[#141414] text-[#FBF9F5] rounded-3xl p-5 border border-[#2D2D2D] shadow-xl space-y-4">
            
            {}
            <div className="flex items-center justify-between text-[11px] font-mono text-[#8C8275] pb-2 border-b border-[#262626]">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="AL" className="w-3.5 h-3.5 object-contain" />
                <span>COMPANION APP v2.4</span>
              </div>
              <span className="flex items-center gap-1 text-emerald-400 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                BLE 5.2 PAIRED
              </span>
            </div>

            {}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-[#8C8275] block">
                Active Screen Cards:
              </label>
              
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => toggleWidget('calendar')}
                  className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-colors cursor-pointer ${
                    widgets.calendar 
                      ? 'bg-[#222222] border-[#444444] text-white' 
                      : 'bg-[#181818] border-[#2A2A2A] text-[#777777]'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-medium">
                    <Calendar className="w-4 h-4 text-[#C5BDB2]" />
                    <span>Google & Outlook Calendar</span>
                  </div>
                  <div className={`w-4 h-4 rounded flex items-center justify-center text-xs ${widgets.calendar ? 'bg-white text-black' : 'border border-[#444444]'}`}>
                    {widgets.calendar && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => toggleWidget('pomodoro')}
                  className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-colors cursor-pointer ${
                    widgets.pomodoro 
                      ? 'bg-[#222222] border-[#444444] text-white' 
                      : 'bg-[#181818] border-[#2A2A2A] text-[#777777]'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-medium">
                    <Timer className="w-4 h-4 text-[#C5BDB2]" />
                    <span>Pomodoro Deep Focus</span>
                  </div>
                  <div className={`w-4 h-4 rounded flex items-center justify-center text-xs ${widgets.pomodoro ? 'bg-white text-black' : 'border border-[#444444]'}`}>
                    {widgets.pomodoro && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => toggleWidget('github')}
                  className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-colors cursor-pointer ${
                    widgets.github 
                      ? 'bg-[#222222] border-[#444444] text-white' 
                      : 'bg-[#181818] border-[#2A2A2A] text-[#777777]'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-medium">
                    <GitBranch className="w-4 h-4 text-[#C5BDB2]" />
                    <span>GitHub Actions CI & PRs</span>
                  </div>
                  <div className={`w-4 h-4 rounded flex items-center justify-center text-xs ${widgets.github ? 'bg-white text-black' : 'border border-[#444444]'}`}>
                    {widgets.github && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => toggleWidget('weather')}
                  className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-colors cursor-pointer ${
                    widgets.weather 
                      ? 'bg-[#222222] border-[#444444] text-white' 
                      : 'bg-[#181818] border-[#2A2A2A] text-[#777777]'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-medium">
                    <CloudSun className="w-4 h-4 text-[#C5BDB2]" />
                    <span>Air Quality & Weather</span>
                  </div>
                  <div className={`w-4 h-4 rounded flex items-center justify-center text-xs ${widgets.weather ? 'bg-white text-black' : 'border border-[#444444]'}`}>
                    {widgets.weather && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>
              </div>
            </div>

            {}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#8C8275] block mb-1.5">
                Refresh Cadence:
              </label>
              <div className="grid grid-cols-4 gap-1 bg-[#181818] p-1 rounded-xl border border-[#2D2D2D]">
                {['5m', '15m', '1h', 'Events'].map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    onClick={() => setCadence(rate)}
                    className={`py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                      cadence === rate
                        ? 'bg-[#FBF9F5] text-[#141414] font-bold'
                        : 'text-[#8C8275] hover:text-white'
                    }`}
                  >
                    {rate}
                  </button>
                ))}
              </div>
            </div>

            {}
            <button
              type="button"
              disabled={isPushing}
              onClick={handlePushToDisplay}
              className="w-full py-3 px-4 rounded-xl bg-[#FBF9F5] text-[#141414] hover:bg-[#EAE4D7] font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-50 active:scale-98"
            >
              {isPushing ? (
                <>
                  <RotateCcw className="w-3.5 h-3.5 animate-spin text-[#141414]" />
                  <span>Pushing BLE Packet (28ms)...</span>
                </>
              ) : pushSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3]" />
                  <span className="text-emerald-800">Hardware Refreshed!</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Push Layout to 7.5" Display</span>
                </>
              )}
            </button>

          </div>

          {}
          <div className="lg:col-span-4 bg-[#141414] text-[#A8A095] rounded-3xl p-5 border border-[#2D2D2D] shadow-xl font-mono text-xs space-y-3">
            
            <div className="flex items-center justify-between pb-2 border-b border-[#262626] text-[11px] text-[#777777]">
              <span className="flex items-center gap-1.5 text-white">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span>PACKET INSPECTOR (BLE)</span>
              </span>
              <span className="text-emerald-400">STATUS: READY</span>
            </div>

            {}
            <div className="bg-[#0A0A0A] p-3 rounded-xl border border-[#222222] text-[11px] space-y-1.5 overflow-x-auto text-[#DCD6CC]">
              <div className="text-[#666666]">// Encoded payload for ESP32-S3 SPI</div>
              <div>
                <span className="text-amber-400">target:</span> <span className="text-emerald-300">"async-al-750"</span>
              </div>
              <div>
                <span className="text-amber-400">cadence_rule:</span> <span className="text-emerald-300">"{cadence}"</span>
              </div>
              <div>
                <span className="text-amber-400">active_cards:</span> [
                <span className="text-blue-300">
                  {Object.keys(widgets).filter(k => widgets[k]).map(k => `"${k}"`).join(', ') || 'empty'}
                </span>]
              </div>
              <div>
                <span className="text-amber-400">lut_mode:</span> <span className="text-emerald-300">"GC16_PARTIAL"</span>
              </div>
              <div>
                <span className="text-amber-400">checksum_crc32:</span> <span className="text-purple-300">0x8B4E1A90</span>
              </div>
              <div className="pt-1 text-[#888888]">
                packets_transmitted: <strong className="text-white">{packetsSent}</strong>
              </div>
            </div>

            {}
            <div className="p-3 bg-[#1B1917] rounded-xl border border-[#2E2A24] text-[11px] text-[#A8A095] space-y-1">
              <span className="font-bold text-amber-400 block">// Developer Architecture Choice:</span>
              <p>
                "Instead of streaming heavy bitmaps, we send a JSON configuration packet (~320 bytes). The onboard ESP32 renders it locally into the 1-bit frame buffer. Keeps Wi-Fi active for only 40ms, saving battery!" — Tejaswini
              </p>
            </div>

          </div>

          {}
          <div className="lg:col-span-4 bg-[#181818] p-5 rounded-3xl border border-[#2E2E2E] shadow-xl space-y-3">
            
            <div className="flex items-center justify-between text-[10px] font-mono text-[#8C8275] pb-2 border-b border-[#2A2A2A]">
              <span>TARGET HARDWARE: 7.5"</span>
              <span className="text-emerald-400">LAST SYNC: {lastSyncTime}</span>
            </div>

            {}
            <div 
              className={`bg-[#F2EFE9] text-[#111111] p-4 rounded-xl aspect-[800/480] flex flex-col justify-between select-none shadow-sm ${
                screenFlashed ? 'animate-eink-flash' : ''
              }`}
            >
              <div className="flex items-center justify-between border-b border-[#D4CEBF] pb-1 text-[9px] font-mono text-[#5C5549]">
                <span className="font-bold">ASYNC LABS DESK</span>
                <span>CADENCE: {cadence}</span>
              </div>

              <div className="space-y-1.5 py-1">
                {widgets.calendar && (
                  <div className="bg-[#E6E0D3] p-1.5 rounded border border-[#D5CDBC] text-xs">
                    <span className="text-[8px] font-mono uppercase text-[#736B5E] block">Calendar</span>
                    <strong className="block text-[#111111] text-[11px] truncate">11:00 AM • Quarterly Review</strong>
                  </div>
                )}

                {widgets.pomodoro && (
                  <div className="bg-[#E6E0D3] p-1.5 rounded border border-[#D5CDBC] text-xs flex items-center justify-between">
                    <div>
                      <span className="text-[8px] font-mono uppercase text-[#736B5E] block">Focus Target</span>
                      <strong className="block text-[#111111] text-[11px]">Deep Work Sprint</strong>
                    </div>
                    <span className="font-mono text-xs font-bold">25:00</span>
                  </div>
                )}

                {widgets.github && (
                  <div className="bg-[#E6E0D3] p-1.5 rounded border border-[#D5CDBC] text-[10px] font-mono">
                    <span>GitHub: 2 PRs Pending Review (main: green)</span>
                  </div>
                )}

                {widgets.weather && (
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#5C5549]">
                    <span>Workspace: 23°C</span>
                    <span className="font-bold text-[#111111]">AQI: 18 (Fresh)</span>
                  </div>
                )}

                {!widgets.calendar && !widgets.pomodoro && !widgets.github && !widgets.weather && (
                  <div className="text-center py-6 text-xs text-[#8C8275] font-mono">
                    All widgets toggled off in companion app.
                  </div>
                )}
              </div>

              <div className="text-[8px] font-mono text-[#736B5E] text-center border-t border-[#D4CEBF] pt-1">
                Static Image Retention at 0.00 Watts
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#666666] pt-1">
              <span>Aspect: 16:9.7 (800×480)</span>
              <span>LUT: Carta 1200</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
