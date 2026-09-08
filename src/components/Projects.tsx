'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  tag: string;
  desc: string;
  period: string;
  award?: string;
}

const projects: Project[] = [
  {
    title: "Real-Time Collaborative Document Editor",
    tag: "Full-Stack & WebSockets",
    period: "Nov 24 – Dec 24",
    desc: "Built a collaborative web application utilizing React.js, Node.js, Express.js, Socket.IO, and MongoDB to allow multiple users to edit documents concurrently."
  },
  {
    title: "Animal Geofencing & Live Tracking System",
    tag: "IoT & Real-Time Analytics",
    period: "Jun 25 – May 26",
    desc: "Engineered an IoT animal monitoring device utilizing GPS modules, cloud database storage, and real-time perimeter alert mechanisms to track livestock location and trigger geofence breach warnings on a live dashboard."
  },
  {
    title: "Dyslexia Kids Learning System",
    tag: "Assistive Tech & EdTech",
    period: "Jun 25 – Nov 25",
    desc: "Developed an interactive assistive educational software tool leveraging multimodal audiovisual cues, synchronized pronunciations, and tactile feedback to enhance word recognition for children with dyslexia."
  },
  {
    title: "Time Tracking & Productivity Chrome Extension",
    tag: "Browser Extensions & Web Tools",
    period: "Nov 24 – Dec 24",
    desc: "Developed a browser extension and supporting web tools for tracking time and productivity metrics using HTML, CSS, and JavaScript."
  },
  {
    title: "Expense Tracker Application",
    tag: "Finance & Full-Stack",
    period: "Jan 25 – May 25",
    desc: "Application for expense tracking, budgeting, and savings analysis with automated financial data insight modules."
  },
  {
    title: "Food Label Reader System",
    tag: "Data Processing & Analytics",
    period: "Jan 25 – May 25",
    desc: "Structured data processing system analyzing product ingredients, flagging harmful components, and providing consumer safety insights."
  },
  {
    title: "DSA Learning Simulation Platform",
    tag: "Graph Algorithms & Visualization",
    period: "Jan 25 – Nov 26",
    desc: "Interactive algorithm visualization engine utilizing graph-based models with AI-based accuracy tracking and multilingual learning."
  },
  {
    title: "CO₂ Tracker Application",
    tag: "Emissions Analytics",
    period: "Jun 24 – Nov 24",
    desc: "Emissions calculation engine providing analytical ranking and insight generation for data-driven environmental assessments."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 bg-white/40 px-6 max-w-5xl mx-auto border-t border-slate-200">
      <div className="mb-12 text-center">
        <span className="text-cyan-700 font-mono text-xs uppercase tracking-widest font-semibold">Engineering & Innovations</span>
        <h2 className="text-3xl font-bold text-slate-900 mt-2">Featured Projects & Key Recognition</h2>
      </div>

      {/* Smart India Hackathon Winner Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 p-6 rounded-xl border border-amber-200 bg-amber-50/60 shadow-sm"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-mono font-bold rounded bg-amber-200 text-amber-900">
              🏆 WINNER
            </span>
            <h3 className="font-bold text-slate-900 text-base">Smart India Hackathon (College Round)</h3>
          </div>
          <span className="text-xs font-mono text-amber-800 font-semibold">Aug 25 – Oct 25</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed font-medium">
          Architected an AI/ML-driven digital lending credit score framework with an income-verification layer, combining consumption indicators and repayment patterns for the Ministry of Social Justice & Empowerment.
        </p>
      </motion.div>

      {/* Grid of Projects */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className={`p-6 rounded-xl border transition-all shadow-sm ${proj.award
              ? 'border-amber-300 bg-amber-50/40 hover:bg-white hover:border-amber-400'
              : 'border-slate-200 bg-slate-50/50 hover:border-cyan-500/40 hover:bg-white'
              }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <span className="text-xs font-mono text-cyan-700 uppercase font-semibold">{proj.tag}</span>
              <div className="flex items-center gap-2">
                {proj.award && (
                  <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded">
                    {proj.award}
                  </span>
                )}
                <span className="text-xs font-mono text-slate-400">{proj.period}</span>
              </div>
            </div>
            <h4 className="text-lg font-bold text-slate-900 mt-1 mb-2">{proj.title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}