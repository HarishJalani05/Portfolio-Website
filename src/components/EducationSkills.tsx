'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiCplusplus,
  SiC,
  SiTypescript,
  SiHtml5,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiApachespark,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiSocketdotio,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiCloudflare,
  SiDocker,
  SiVercel,
  SiJupyter,
  SiFigma,
} from 'react-icons/si';
import {
  FaJava,
  FaAws,
  FaDatabase,
  FaMicrochip,
  FaChartLine,
  FaShieldHalved,
  FaMagnifyingGlassChart,
  FaCoins,
  FaFileContract,
  FaNetworkWired,
  FaCss3Alt,
  FaFileExcel,
  FaFilePowerpoint,
  FaFileWord,
} from 'react-icons/fa6';

const PowerBiIcon = () => (
  <svg className="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="12" width="4.5" height="9" rx="1" fill="#F2C811" />
    <rect x="9.75" y="7" width="4.5" height="14" rx="1" fill="#E8B007" />
    <rect x="16.5" y="3" width="4.5" height="18" rx="1" fill="#D99B00" />
  </svg>
);

export default function EducationSkills() {
  const skillGroups = [
    {
      emoji: '💻',
      category: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
        { name: 'Java', icon: <FaJava className="text-[#E76F00]" /> },
        { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
        { name: 'C', icon: <SiC className="text-[#659AD2]" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: 'SQL', icon: <FaDatabase className="text-[#336791]" /> },
        {
          name: 'HTML/CSS',
          icon: (
            <span className="flex items-center gap-0.5">
              <SiHtml5 className="text-[#E34F26]" />
              <FaCss3Alt className="text-[#1572B6]" />
            </span>
          ),
        },
      ],
      badgeStyle: 'bg-slate-50/90 text-slate-800 border-slate-200/90 hover:border-slate-400 hover:bg-slate-100/80',
    },
    {
      emoji: '🤖',
      category: 'Machine Learning & AI',
      skills: [
        { name: 'PyTorch', icon: <SiPytorch className="text-[#EE4C2C]" /> },
        { name: 'TensorFlow', icon: <SiTensorflow className="text-[#FF6F00]" /> },
        { name: 'Scikit-learn', icon: <SiScikitlearn className="text-[#F7931E]" /> },
        { name: 'OpenCV', icon: <SiOpencv className="text-[#5C3EE8]" /> },
        { name: 'PySpark', icon: <SiApachespark className="text-[#E25A1C]" /> },
      ],
      badgeStyle: 'bg-emerald-50/70 text-emerald-950 border-emerald-200/80 hover:border-emerald-400 hover:bg-emerald-100/70',
    },
    {
      emoji: '🌐',
      category: 'Web & Frameworks',
      skills: [
        { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-slate-900" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-[#5FA04E]" /> },
        { name: 'Express.js', icon: <SiExpress className="text-slate-800" /> },
        { name: 'FastAPI', icon: <SiFastapi className="text-[#009688]" /> },
        { name: 'Flask', icon: <SiFlask className="text-slate-800" /> },
        { name: 'Django', icon: <SiDjango className="text-[#092E20]" /> },
        { name: 'Socket.IO', icon: <SiSocketdotio className="text-slate-900" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      ],
      badgeStyle: 'bg-sky-50/70 text-sky-950 border-sky-200/80 hover:border-sky-400 hover:bg-sky-100/70',
    },
    {
      emoji: '☁️',
      category: 'Databases & Cloud',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: 'AWS', icon: <FaAws className="text-[#FF9900]" /> },
        { name: 'Cloudflare', icon: <SiCloudflare className="text-[#F38020]" /> },
        { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
        { name: 'Vercel', icon: <SiVercel className="text-slate-900" /> },
      ],
      badgeStyle: 'bg-indigo-50/70 text-indigo-950 border-indigo-200/80 hover:border-indigo-400 hover:bg-indigo-100/70',
    },
    {
      emoji: '📊',
      category: 'Analytics, Tools & Systems',
      skills: [
        { name: 'Power BI', icon: <PowerBiIcon /> },
        { name: 'Jupyter', icon: <SiJupyter className="text-[#F37626]" /> },
        { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
        { name: 'IoT & Embedded Systems', icon: <FaMicrochip className="text-cyan-700" /> },
        { name: 'MS Excel', icon: <FaFileExcel className="text-[#217346]" /> },
        { name: 'MS PowerPoint', icon: <FaFilePowerpoint className="text-[#D24726]" /> },
        { name: 'MS Word', icon: <FaFileWord className="text-[#2B579A]" /> },
      ],
      badgeStyle: 'bg-amber-50/70 text-amber-950 border-amber-200/80 hover:border-amber-400 hover:bg-amber-100/70',
    },
    {
      emoji: '📈',
      category: 'Quantitative & Financial Methods',
      skills: [
        { name: 'Financial Analysis', icon: <FaChartLine className="text-teal-600" /> },
        { name: 'Due Diligence (CIRP/IBC)', icon: <FaShieldHalved className="text-sky-600" /> },
        { name: 'Market Research', icon: <FaMagnifyingGlassChart className="text-indigo-600" /> },
        { name: 'Investment Analysis', icon: <FaCoins className="text-amber-600" /> },
        { name: 'Forecasting', icon: <FaChartLine className="text-blue-600" /> },
        { name: 'Compliance', icon: <FaFileContract className="text-emerald-600" /> },
        { name: 'Data Structures & Algorithms', icon: <FaNetworkWired className="text-purple-600" /> },
      ],
      badgeStyle: 'bg-cyan-50/70 text-cyan-950 border-cyan-200/80 hover:border-cyan-400 hover:bg-cyan-100/70',
    },
  ];

  const certifications = [
    'NPTEL: Cloud Computing',
    'NPTEL: Database Management Systems',
    'Full Stack Development Bootcamp',
    'DSA & Competitive Programming',
  ];

  return (
    <section id="skills" className="w-full py-20 bg-slate-50/40 px-6 max-w-5xl mx-auto border-t border-slate-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Section 1: Education in One Horizontal Line */}
        <div id="education">
          <span className="text-cyan-700 font-mono text-xs uppercase tracking-widest font-semibold block mb-1.5">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
            Education & Credentials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-cyan-700 font-semibold bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200/60 inline-block mb-2">
                  2023 - 2027
                </span>
                <h3 className="font-bold text-slate-900 text-sm leading-snug">
                  K. J. Somaiya Institute of Technology, Mumbai
                </h3>
                <p className="text-xs text-cyan-800 font-medium mt-1">
                  B.Tech in Artificial Intelligence & Data Science
                </p>
              </div>
              <p className="text-xs text-slate-600 mt-3 pt-2 border-t border-slate-100 font-mono">
                10.0 SGPA (Recent Semesters) | 9.45 CGPA
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-cyan-700 font-semibold bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200/60 inline-block mb-2">
                  2021 - 2023
                </span>
                <h3 className="font-bold text-slate-900 text-sm leading-snug">
                  Arya Gurukul Junior College, Airoli
                </h3>
                <p className="text-xs text-slate-700 mt-1">
                  HSC (Class 12) Science — 73%
                </p>
              </div>
              <p className="text-xs text-slate-500 mt-3 pt-2 border-t border-slate-100 font-mono">
                JEE: 96%ile | MHT-CET: 96%ile
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded inline-block mb-2">
                  2021
                </span>
                <h3 className="font-bold text-slate-900 text-sm leading-snug">
                  VIBGYOR HIGH, Airoli
                </h3>
                <p className="text-xs text-slate-700 mt-1">
                  ICSE (Class 10) — 94%
                </p>
              </div>
              <p className="text-xs text-slate-500 mt-3 pt-2 border-t border-slate-100 font-mono">
                Distinction Honors
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Skills with each application emoji on a next line & authentic logos */}
        <div>
          <span className="text-cyan-700 font-mono text-xs uppercase tracking-widest font-semibold block mb-1.5">
            Technical Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
            Skills & Competencies
          </h2>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
            {skillGroups.map((group, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 pb-3.5 border-b border-slate-100 last:border-b-0 last:pb-0"
              >
                {/* Category Header with Emoji */}
                <div className="flex items-center gap-2 min-w-[240px] shrink-0">
                  <span className="text-base">{group.emoji}</span>
                  <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wide">
                    {group.category}
                  </span>
                </div>

                {/* Skill Pills with brand logos */}
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md border font-medium transition-all ${group.badgeStyle}`}
                    >
                      <span className="text-sm shrink-0 flex items-center">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Certifications in the last */}
        <div>
          <span className="text-cyan-700 font-mono text-xs uppercase tracking-widest font-semibold block mb-1.5">
            Verified Knowledge
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            Certifications & Recognitions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex items-center gap-2.5"
              >
                <span className="text-base">📜</span>
                <span className="text-xs font-mono font-semibold text-slate-800 leading-tight">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}