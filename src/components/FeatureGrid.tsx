'use client';

import React from 'react';
import { motion } from 'framer-motion';

const modules = [
  {
    title: "Portfolio Compliance",
    label: "Compliance",
    desc: "Automated regulatory reporting and real-time monitoring against global financial risk frameworks.",
    tag: "Real-Time Pipeline"
  },
  {
    title: "Debt & Insolvency Analytics",
    label: "Debt",
    desc: "Machine learning workflows predicting operational distress and insolvency restructuring metrics.",
    tag: "IBC Framework"
  },
  {
    title: "Algorithmic Logic Verification",
    label: "Portfolio",
    desc: "Interactive visual pipelines for complex data processing and deep learning model validation.",
    tag: "LogicLens Engine"
  }
];

export default function FeatureGrid() {
  return (
    <section className="relative z-10 w-full py-24 bg-slate-50 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <span className="text-cyan-700 font-mono text-xs uppercase tracking-widest font-semibold">Architectural Overview</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Core Audit Capabilities</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {modules.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-cyan-400 hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-center mb-4 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-cyan-50 text-cyan-800 border border-cyan-200 font-medium">{item.label}</span>
              <span className="text-slate-400">{item.tag}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}