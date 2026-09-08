'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Ernst & Young (EY), Mumbai",
    role: "Finance Intern - Debt & Strategic Solutions",
    period: "Dec 2025 - Jan 2026",
    details: [
      "Performed data verification and financial due diligence on creditor claims under the Corporate Insolvency Resolution Process (CIRP) as per IBC guidelines.",
      "Conducted compliance checks and stakeholder background analysis, supporting structured financial reporting and audit workflows.",
      "Assisted in stock audits and coordinated asset monetization processes, including the auction of distressed assets.",
      "Analysed financial and operational data during restructuring engagements, gaining practical exposure to insolvency law."
    ]
  },
  {
    company: "CodTech IT Solutions (Virtual)",
    role: "Full Stack Developer Intern",
    period: "Jun 2025 - Jul 2025",
    details: [
      "Built a real-time collaborative document editor using React.js, Node.js, Express.js, Socket.IO, and MongoDB for simultaneous multi-user document editing.",
      "Developed a Chrome extension for time tracking and productivity analytics, alongside responsive web applications using HTML, CSS, and JavaScript.",
      "Engineered responsive user interfaces and connected production-ready backend services and database layers."
    ]
  },
  {
    company: "Axis Bank, Mumbai",
    role: "Research Intern",
    period: "Jun 2024 - Jul 2024",
    details: [
      "Conducted data-driven market research on India's Electric Vehicle (EV) sector, analysing demand-supply datasets across 2W, 3W, 4W, and commercial segments.",
      "Evaluated growth projections and profitability using structured data interpretation and investment analysis frameworks.",
      "Delivered data-backed reports with actionable recommendations supporting strategic forecasting and decision-making."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20 bg-slate-50/40 px-6 max-w-5xl mx-auto border-t border-slate-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <span className="text-cyan-700 font-mono text-xs uppercase tracking-widest font-semibold">Track Record</span>
        <h2 className="text-3xl font-bold text-slate-900 mt-2">Professional Experience</h2>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{exp.company}</h3>
                <p className="text-sm font-medium text-cyan-700 font-mono">{exp.role}</p>
              </div>
              <span className="text-xs font-mono text-slate-400 mt-1 sm:mt-0">{exp.period}</span>
            </div>
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-slate-600 leading-relaxed">
              {exp.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}