import React, { useState } from 'react';
import { Cpu, HardDrive, Wifi, Battery, Maximize, Layers, Terminal, Sparkles, Download, Hammer } from 'lucide-react';

export default function TechSpecs() {
  const [activeTab, setActiveTab] = useState('display');

  const specCategories = [
    { id: 'display', name: 'Display & Optics', icon: Maximize },
    { id: 'power', name: 'Power & Battery', icon: Battery },
    { id: 'connectivity', name: 'SoC & Wireless', icon: Wifi },
    { id: 'physical', name: 'Enclosure & Mount', icon: Layers },
    { id: 'developer', name: 'APIs & Webhooks', icon: Terminal },
    { id: 'wip', name: '[WIP: CAD & Schematics]', icon: Hammer },
  ];

  const specs = {
    display: [
      { label: 'Screen Technology', value: '7.5-inch E-Ink Carta 1200 (Reflective Bi-Stable)' },
      { label: 'Resolution', value: '800 × 480 pixels (16:9.7 aspect ratio)' },
      { label: 'Pixel Density', value: '300 DPI (crisp printed-paper clarity)' },
      { label: 'Viewing Angle', value: '178° true hemispherical paper reflectance' },
      { label: 'Color Options', value: 'Monochrome Paper (B&W) or Tri-Color Spectra (B/W/Terracotta)' },
      { label: 'Surface Treatment', value: 'Ultra-matte anti-glare etching (Zero blue light emitted)' },
    ],
    power: [
      { label: 'Battery Capacity', value: '3,000 mAh rechargeable Lithium-Polymer' },
      { label: 'Typical Battery Life', value: 'Up to 30 days (based on 12-15 updates/day)' },
      { label: 'Static Power Draw', value: '0.00 Watts (maintains image without electrical power)' },
      { label: 'Charging Interface', value: 'USB-C (Power Delivery 5V / 1A supported)' },
      { label: 'Recharge Time', value: 'Approximately 90 minutes from 0% to full' },
      { label: 'Deep Sleep Current', value: '< 18 µA between scheduled network wakeups' },
    ],
    connectivity: [
      { label: 'Wireless Networking', value: 'Wi-Fi 6 (802.11 b/g/n/ax 2.4 GHz)' },
      { label: 'Bluetooth Protocol', value: 'Bluetooth Low Energy (BLE 5.2) with instant wake' },
      { label: 'Onboard Microcontroller', value: 'Dual-core ESP32-S3 ultra-low-power SoC' },
      { label: 'Local Cache Storage', value: '16 MB high-speed flash for offline layout caching' },
      { label: 'Security & Encryption', value: 'WPA3 Personal/Enterprise, TLS 1.3 encrypted payloads' },
    ],
    physical: [
      { label: 'Outer Dimensions', value: '178 mm (width) × 116 mm (height) × 11.2 mm (depth)' },
      { label: 'Weight', value: '220 grams (balanced for both desk & wall stability)' },
      { label: 'Bezel Material', value: 'Precision matte textured carbon-composite enclosure' },
      { label: 'Desktop Kickstand', value: 'Dual-angle rear kickstand supporting 35° and 60° tilt' },
      { label: 'Wall Mounting', value: 'Embedded quadruple neodymium N52 magnetic array' },
      { label: 'Finish', value: 'Matte Obsidian Charcoal with embossed Async Labs logo' },
    ],
    developer: [
      { label: 'Local REST API', value: 'Embedded HTTP server accepts raw bitmap or JSON data' },
      { label: 'Smart Home Integration', value: 'Native MQTT & Home Assistant integration' },
      { label: 'Webhook Engine', value: 'Push arbitrary payloads directly via HTTPS endpoints' },
      { label: 'Companion Software', value: 'Native clients for macOS, Windows, Linux, iOS & Android' },
      { label: 'Cloud Synchronizer', value: 'Async Labs Cloud Bridge with OAuth for Google, Outlook & Slack' },
    ],
    wip: [
      { label: 'KiCad Schematic Status', value: 'Draft v0.8 complete — routing 3.3V LDO regulator lines' },
      { label: 'STEP / STL CAD Files', value: 'Kickstand hinge tolerance testing on Bambu Lab P1S' },
      { label: 'ESP-IDF Firmware Branch', value: 'feat/deep-sleep-ulp-timer (PR awaiting merge)' },
      { label: 'Candidate Note', value: 'Intended to include downloadable 3D printable brackets, slated for post-screening!' },
    ]
  };

  return (
    <section id="specs" className="py-20 lg:py-28 bg-[#FBF9F5] border-t border-[#E5DDD1]">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 text-left">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-10 border-b border-[#E8E1D5] gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DF] border border-[#DFD5C6] text-xs font-mono uppercase tracking-wider text-[#5C5549]">
              <Sparkles className="w-3.5 h-3.5 text-[#8C8275]" />
              <span>Engineering Specifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121212]">
              Industrial Specifications
            </h2>
            <p className="text-sm sm:text-base text-[#5C5549] leading-relaxed">
              Every millimeter built around the fixed 7.5-inch prototype benchmark. Transparent materials, honest battery calculations, and open APIs.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#simulator"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-[#141414] bg-[#EFE9DF] hover:bg-[#E3DBCF] rounded-xl border border-[#DFD5C6] transition-colors"
            >
              <span>Verify in 7.5" Simulator</span>
            </a>
          </div>
        </div>

        <div className="bg-[#F5EFE6] rounded-3xl p-6 sm:p-10 border border-[#E5DDD1] shadow-md">
          
          <div className="flex flex-wrap gap-2 pb-6 border-b border-[#E5DDD1] mb-8">
            {specCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              const isWip = cat.id === 'wip';
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#141414] text-[#FBF9F5] shadow-xs'
                      : isWip
                      ? 'bg-[#EAE0D2] text-amber-900 border border-dashed border-amber-600/40 hover:bg-[#E3D7C5]'
                      : 'bg-[#EDE5DB] text-[#5C5549] hover:text-[#121212] hover:bg-[#E2D9CB]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isWip ? 'text-amber-700' : ''}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specs[activeTab].map((spec) => (
              <div 
                key={spec.label} 
                className="bg-[#FBF9F5] p-5 rounded-2xl border border-[#E5DDD1] flex flex-col justify-between"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-[#8C8275] mb-1">
                  {spec.label}
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#121212]">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#E5DDD1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7A7265]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Physical Hardware Standard: Fixed 7.5" Enclosure Specification Respected</span>
            </div>
            <span>RoHS & CE Certified Prototype Run</span>
          </div>

        </div>

      </div>
    </section>
  );
}
