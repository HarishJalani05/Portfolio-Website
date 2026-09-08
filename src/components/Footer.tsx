'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaCopy, FaCheck } from 'react-icons/fa6';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('harishjalani1@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="w-full py-12 bg-white/50 border-t border-slate-200 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2">Harish Jalani</h3>
        <div className="flex items-center justify-center gap-2 text-sm text-slate-600 mb-4 font-mono">
          <span>harishjalani1@gmail.com</span>
          <button
            onClick={handleCopyEmail}
            className="p-1 rounded text-slate-500 hover:text-cyan-700 hover:bg-slate-100 transition-colors relative"
            title={copied ? "Copied!" : "Copy email address"}
            aria-label="Copy email address"
          >
            {copied ? (
              <FaCheck className="text-xs text-emerald-600" />
            ) : (
              <FaCopy className="text-xs" />
            )}
            {copied && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-sans font-medium text-white bg-slate-900 rounded shadow-sm whitespace-nowrap">
                Copied!
              </span>
            )}
          </button>
          <span className="text-slate-400">|</span>
          <span>Mumbai, India</span>
        </div>
        <div className="flex justify-center gap-6 text-xs font-mono text-cyan-700">
          <a href="mailto:harishjalani1@gmail.com" className="inline-flex items-center gap-1.5 hover:underline">
            <FaEnvelope className="text-sm" />
            <span>Send Email</span>
          </a>
          <a href="https://www.linkedin.com/in/harish-jalani/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
            <FaLinkedin className="text-sm" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/HarishJalani05" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
            <FaGithub className="text-sm" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}