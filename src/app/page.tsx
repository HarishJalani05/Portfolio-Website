import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import EducationSkills from '@/components/EducationSkills';
import Footer from '@/components/Footer';
import DynamicGraph from '@/components/DynamicGraph';

export default function Home() {
  return (
    <main className="relative w-full bg-white min-h-screen text-slate-900 selection:bg-cyan-500 selection:text-white overflow-hidden">
      {/* Dynamic telemetry background graph stretching across entire website including footer */}
      <DynamicGraph />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <EducationSkills />
        <Footer />
      </div>
    </main>
  );
}