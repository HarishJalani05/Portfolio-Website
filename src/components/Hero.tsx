'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-transparent flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Profile Photo Avatar Frame */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 group cursor-pointer"
        >
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 blur-sm opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100">
            <img
              src="/assets/Harish%20Jalani%20Photo.png"
              alt="Harish Jalani"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block px-3.5 py-1.5 mb-4 text-xs font-mono tracking-widest text-cyan-800 uppercase bg-cyan-50/80 border border-cyan-200/80 rounded-full shadow-sm backdrop-blur-sm"
        >
          AI &amp; Data Science | Finance &amp; Software Developer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl leading-[1.1]"
        >
          Harish Jalani
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-3xl text-slate-600 text-base md:text-lg mb-10 leading-relaxed font-normal"
        >
          A problem-solver at heart, technologist by craft, mainly because I trust what holds up under real scrutiny more than what reads well on paper. I operate at the overlap of artificial intelligence, data systems, and finance that actually has consequences — not the version that lives in textbooks.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-lg bg-slate-900 text-white font-mono text-xs font-semibold hover:bg-cyan-800 transition-colors shadow-md"
          >
            Read My Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}