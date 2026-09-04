import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Device360Showcase from './components/Device360Showcase';
import DeviceSimulator from './components/DeviceSimulator';
import Capabilities from './components/Capabilities';
import CompanionAppSync from './components/CompanionAppSync';
import UseCases from './components/UseCases';
import GlanceCalculator from './components/GlanceCalculator';
import TechSpecs from './components/TechSpecs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PreOrderModal from './components/PreOrderModal';

// Root App component for Async Labs T5 Screening
// Author: Tejaswini D.
// Stack: React + Vite + Tailwind CSS
export default function App() {
  const [isPreorderOpen, setIsPreorderOpen] = useState(false);

  // Smooth scroll helper - handles navbar offset properly so headers aren't cut off
  const scrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      const navOffset = 80;
      const elementPos = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPos - navOffset,
        behavior: 'smooth',
      });
    }
  };

  const scrollTo360 = () => {
    const el = document.getElementById('revolve-showcase');
    if (el) {
      const navOffset = 80;
      const elementPos = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPos - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#121212] selection:bg-[#121212] selection:text-[#FBF9F5]">
      {/* Sticky frosted glass header with custom AL monogram logo */}
      <Navbar
        onOpenPreorder={() => setIsPreorderOpen(true)}
        onScrollToSimulator={scrollToSimulator}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero with physical prototype reference benchmark */}
        <Hero
          onOpenPreorder={() => setIsPreorderOpen(true)}
          onScrollToSimulator={scrollToSimulator}
          onScrollTo360={scrollTo360}
        />

        {/* 2. Interactive 360° Hardware Revolution on Scroll & Drag */}
        <Device360Showcase />

        {/* 3. Interactive 7.5" Physical Display Simulator with E-Ink Waveform Flash */}
        <DeviceSimulator />

        {/* 4. Core Capabilities vs Benefits (always visible, zero glare, 30d battery) */}
        <Capabilities onScrollToSimulator={scrollToSimulator} />

        {/* 5. Interactive Companion App Wireless Sync Playground */}
        <CompanionAppSync />

        {/* 6. Diverse Workspace Persona Scenarios (Dev, Exec, Studio, Meeting Room) */}
        <UseCases onScrollToSimulator={scrollToSimulator} />

        {/* 7. Cognitive ROI & Tab Switching Calculator */}
        <GlanceCalculator onOpenPreorder={() => setIsPreorderOpen(true)} />

        {/* 8. Comprehensive Engineering Hardware Tech Specs */}
        <TechSpecs />

        {/* 9. Interactive FAQ Accordion */}
        <FAQ />
      </main>

      {/* Footer with brand statement & candidate metadata */}
      <Footer
        onOpenPreorder={() => setIsPreorderOpen(true)}
        onScrollToSimulator={scrollToSimulator}
      />

      {/* Prototype Reservation Modal with confetti */}
      <PreOrderModal
        isOpen={isPreorderOpen}
        onClose={() => setIsPreorderOpen(false)}
      />
    </div>
  );
}
