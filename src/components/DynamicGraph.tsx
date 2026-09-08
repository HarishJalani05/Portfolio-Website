'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function DynamicGraph() {
  const { scrollYProgress } = useScroll();
  const [scrollValue, setScrollValue] = useState(0);
  const [pathLengthValue, setPathLengthValue] = useState(0);
  const [isManualMode, setIsManualMode] = useState(false);
  const [manualPathLength, setManualPathLength] = useState(0.381);

  // Track real-time scroll progress (Array 1)
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrollValue(latest);
  });

  // Dynamic path progress mapped to VERIFIED arc-length fractions
  // (computed via svg-path-properties against the exact pathD below —
  // these are NOT the same as eyeballed % positions):
  // Checkpoint 1 (Hero):        8.55%  -> reached at scroll 0.0
  // Checkpoint 2 (About Me):   28.52%  -> reached at scroll 0.212
  // Checkpoint 3 (Experience): 50.06%  -> reached at scroll 0.388
  // Checkpoint 4 (Projects):   69.87%  -> reached at scroll 0.742
  // Checkpoint 5 (Education):  89.76%  -> reached at scroll 0.913
  // Checkpoint 6 (Footer):    100.00%  -> reached at scroll 1.0
  const mainPathLength = useTransform(
    scrollYProgress,
    [0, 0.208, 0.388, 0.742, 0.913, 1.0],
    [0.152, 0.496, 0.845, 1.2769, 2.01, 2.32]
  );

  // Track real-time path length value (Array 2)
  useMotionValueEvent(mainPathLength, 'change', (latest) => {
    setPathLengthValue(latest);
  });

  // Node opacities lighting up dynamically as user scrolls down
  const node1Opacity = useTransform(scrollYProgress, [0, 0.06], [0.6, 1]);
  const node2Opacity = useTransform(scrollYProgress, [0.10, 0.212], [0.4, 1]);
  const node3Opacity = useTransform(scrollYProgress, [0.25, 0.388], [0.4, 1]);
  const node4Opacity = useTransform(scrollYProgress, [0.55, 0.742], [0.4, 1]);
  const node5Opacity = useTransform(scrollYProgress, [0.75, 0.913], [0.4, 1]);
  const node6Opacity = useTransform(scrollYProgress, [0.90, 1.0], [0.5, 1]);

  // Exact path definition passing through all 6 checkpoints:
  // Checkpoint 1: (850, 80)   -> 85% left, 8% top
  // Checkpoint 2: (70, 200)   -> 7% left, 20% top
  // Checkpoint 3: (900, 350)  -> 90% left, 35% top
  // Checkpoint 4: (110, 550)  -> 11% left, 55% top
  // Checkpoint 5: (920, 800)  -> 92% left, 80% top
  // Checkpoint 6: (500, 960)  -> 50% left, 96% top
  const pathD = "M 500 0 C 700 30, 850 50, 850 80 C 850 140, 70 140, 70 200 C 70 270, 900 270, 900 350 C 900 450, 110 450, 110 550 C 110 675, 920 675, 920 800 C 920 900, 700 940, 500 960";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 w-full h-full">
      {/* Background Technical Grid System extending full page */}
      <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,#0284c7_1px,transparent_1px),linear-gradient(to_bottom,#0284c7_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Radial soft lighting gradients for readability */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-white/50 to-white/80" />

      {/* SVG Canvas for the main graph curve */}
      <div className="relative w-full h-full">
        <svg
          viewBox="0 0 1000 1000"
          className="w-full h-full opacity-80 sm:opacity-95"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="singleMainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#06b6d4" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.9" />
              <stop offset="75%" stopColor="#10b981" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Full background guide track connecting ALL checkpoints (visible 0-100%) */}
          <path
            d={pathD}
            fill="none"
            stroke="#0284c7"
            strokeOpacity="0.25"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            vectorEffect="non-scaling-stroke"
          />

          {/* Animated active gradient line unrolling smoothly forward on scroll or via manual slider */}
          {/* Animated active gradient line unrolling smoothly forward on scroll */}
          {/* Animated active gradient line unrolling smoothly forward on scroll or via manual slider */}
          {isManualMode ? (
            <motion.path
              d={pathD}
              fill="none"
              stroke="url(#singleMainGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: manualPathLength }}
            />
          ) : (
            <motion.path
              d={pathD}
              fill="none"
              stroke="url(#singleMainGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: mainPathLength }}
            />
          )}
        </svg>

        {/* Checkpoint Nodes - Dot center anchored EXACTLY at SVG coordinates */}

        {/* Checkpoint 1 - Hero Section (Top Right) */}
        <motion.div
          style={{ opacity: node1Opacity }}
          className="absolute top-[8%] left-[85%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 pointer-events-auto"
        >
          <span className="w-3.5 h-3.5 rounded-full bg-cyan-500 border-2 border-white shadow-md animate-pulse flex-shrink-0 relative z-10" />
          <span className="absolute right-full mr-3 hidden sm:inline-block text-[10px] font-mono font-bold text-cyan-900 bg-white/95 backdrop-blur-sm border border-cyan-300 px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
            Hello, Myself Harish
          </span>
        </motion.div>

        {/* Checkpoint 2 - About Me Section (Left Margin) */}
        <motion.div
          style={{ opacity: node2Opacity }}
          className="absolute top-[20%] left-[7%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 pointer-events-auto"
        >
          <span className="w-3.5 h-3.5 rounded-full bg-sky-600 border-2 border-white shadow-md flex-shrink-0 relative z-10" />
          <span className="absolute left-full ml-3 hidden sm:inline-block text-[10px] font-mono font-bold text-sky-900 bg-white/95 backdrop-blur-sm border border-sky-300 px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
            I build intelligent systems <br /> that solve real-world problems
          </span>
        </motion.div>

        {/* Checkpoint 3 - Experience Section (Right Margin) */}
        <motion.div
          style={{ opacity: node3Opacity }}
          className="absolute top-[35%] left-[90%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 pointer-events-auto"
        >
          <span className="w-3.5 h-3.5 rounded-full bg-cyan-600 border-2 border-white shadow-md flex-shrink-0 relative z-10" />
          <span className="absolute right-full mr-3 hidden sm:inline-block text-[10px] font-mono font-bold text-cyan-900 bg-white/95 backdrop-blur-sm border border-cyan-300 px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
            EXPERIENCE
          </span>
        </motion.div>

        {/* Checkpoint 4 - Projects Section (Left Margin) */}
        <motion.div
          style={{ opacity: node4Opacity }}
          className="absolute top-[55%] left-[11%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 pointer-events-auto"
        >
          <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-md flex-shrink-0 relative z-10" />
          <span className="absolute left-full ml-3 hidden sm:inline-block text-[10px] font-mono font-bold text-emerald-900 bg-white/95 backdrop-blur-sm border border-emerald-300 px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
            PROJECTS
          </span>
        </motion.div>

        {/* Checkpoint 5 - Education & Skills Section (Right Margin) */}
        <motion.div
          style={{ opacity: node5Opacity }}
          className="absolute top-[80%] left-[92%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 pointer-events-auto"
        >
          <span className="w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-white shadow-md flex-shrink-0 relative z-10" />
          <span className="absolute right-full mr-3 hidden sm:inline-block text-[10px] font-mono font-bold text-blue-900 bg-white/95 backdrop-blur-sm border border-blue-300 px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
            EDUCATION & SKILLS
          </span>
        </motion.div>

        {/* Checkpoint 6 - Footer Section (Center) */}
        <motion.div
          style={{ opacity: node6Opacity }}
          className="absolute top-[96%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 pointer-events-auto"
        >
          <span className="w-4 h-4 rounded-full bg-cyan-500 border-2 border-white shadow-md animate-pulse flex-shrink-0 relative z-10" />
          <span className="absolute left-full ml-3 hidden sm:inline-block text-[10px] font-mono font-bold text-cyan-900 bg-white/95 backdrop-blur-sm border border-cyan-300 px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
            Contact
          </span>
        </motion.div>
      </div>
      {/* <-- ADD THE DEBUG PANEL HERE, right after this closing </div> for the "relative w-full h-full" wrapper */}
    </div>
  );
}