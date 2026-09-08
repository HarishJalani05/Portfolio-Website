'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section id="about" className="w-full py-20 bg-white/40 px-6 max-w-5xl mx-auto border-t border-slate-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <span className="text-cyan-700 font-mono text-xs uppercase tracking-widest font-semibold block mb-3">
          MY STORY
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
          A problem-solver at heart, technologist by craft.
        </h2>

        <div className="space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-normal">
          <p>
            On paper I&apos;m finishing a degree in AI &amp; Data Science; in practice I&apos;m the person who gets handed messy creditor claims and insolvency data and turns them into something a compliance team can actually trust, who takes fragmented market datasets and shapes them into forecasts someone can act on, and who then goes and builds the software layer that makes all of it usable.
          </p>

          <p>
            I move comfortably between due-diligence workrooms and full-stack codebases, between SQL queries and Python models, between reading a balance sheet and shipping a product.
          </p>

          <div className="pt-4 border-t border-slate-200/80">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-cyan-600">✦</span> What drives me
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              I chase problems where data, risk, and behavior collide, treat hackathons as a chance to compress a good idea into a weekend, and I&apos;m drawn less to what looks impressive and more to what still works once real numbers and real users hit it.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
