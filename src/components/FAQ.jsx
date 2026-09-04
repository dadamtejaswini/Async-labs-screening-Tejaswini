import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How does the display achieve up to 30 days of battery life on a single charge?',
      a: 'The display utilizes electrophoretic bi-stable microcapsule technology (E-Ink Carta). Unlike LCD or OLED displays that continually refresh 60 to 120 times per second and emit active backlight, e-paper only consumes energy for 300 milliseconds while rearranging physical pigment particles. Once an image is drawn, it maintains that exact state at 0.00 Watts without drawing any electrical power. Between scheduled updates, the dual-core processor stays in ultra-deep sleep mode drawing less than 18 microamperes.'
    },
    {
      q: 'What is the difference between Monochrome Paper and Tri-Color Spectra?',
      a: 'The Monochrome Paper edition renders in pure, high-contrast black and reflective warm white at 300 DPI with instantaneous 0.3-second page refresh cycles. The Tri-Color Spectra edition incorporates black, white, and an electrophoretic terracotta/amber accent pigment—ideal for live indicators, meeting room "Occupied" alerts, urgent pull request flags, and visual flair.'
    },
    {
      q: 'Can I use it both on my desk and mounted on a wall?',
      a: 'Yes, the physical enclosure was engineered specifically for dual placement. It features a built-in foldable dual-angle rear kickstand (35° for seated desk view and 60° for standing desks). It also embeds four high-grade neodymium N52 magnets on the backplate that mount flush to any metal surface or onto our included tool-free magnetic wall mounting disc.'
    },
    {
      q: 'How does the companion app communicate with the physical hardware?',
      a: 'The device supports dual connectivity. It features Wi-Fi 6 (2.4 GHz) for background cloud synchronization with Google Calendar, Microsoft Outlook, Slack, and GitHub, and Bluetooth Low Energy (BLE 5.2) for instant local pushes directly from your iPhone, Android, Mac, or Windows PC. There is zero pairing friction.'
    },
    {
      q: 'Can I build custom scripts, widgets, or Home Assistant integrations?',
      a: 'Async Labs provides an open local REST API and MQTT broker support. You can push arbitrary JSON payloads or pre-rendered 1-bit bitmaps directly to the device over your local Wi-Fi network without relying on our cloud servers. A dedicated Python SDK and webhook documentation are included.'
    },
    {
      q: 'Does the screen emit blue light or create reflections in bright sunlight?',
      a: 'No. The display emits zero blue light because it has no backlight. It relies purely on ambient reflected light, exactly like physical printed stationery or a paperback book. Its etched matte surface eliminates all desk lamp glare and makes it effortlessly readable even in bright daylight next to a window.'
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F5EFE6] border-t border-[#E5DDD1]">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 text-left">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 mb-10 border-b border-[#E0D7C9] gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E1D5] border border-[#DFD5C6] text-xs font-mono uppercase tracking-wider text-[#5C5549]">
              <HelpCircle className="w-3.5 h-3.5 text-[#8C8275]" />
              <span>Frequently Answered Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#121212]">
              Technical & Product Inquiries
            </h2>
            <p className="text-sm sm:text-base text-[#5C5549] leading-relaxed">
              Details on e-paper battery autonomy, companion app networking, physical mounting, and open API access.
            </p>
          </div>

          <div className="bg-[#EBE4D8] p-3 rounded-2xl border border-[#DFD5C6] text-xs font-mono text-[#5C5549] flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#121212]" />
            <span>Have a custom question? Check README or contact directly.</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="bg-[#FBF9F5] rounded-2xl border border-[#E5DDD1] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF6F0] transition-colors"
                >
                  <span className="text-base font-semibold text-[#121212] tracking-tight">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-[#EFE9DF] text-[#141414] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-[#141414] text-[#FBF9F5]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#5C5549] leading-relaxed border-t border-[#EFE9DF] animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
