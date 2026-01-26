"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Image from "next/image";

const otherTools = [
  "Rewrites entire files unpredictably",
  "Guesses intent, often incorrectly",
  "Breaks layouts and existing styles",
  "Generic, not built for UI work",
  "Bloated diffs, hard to review",
];

const exactFeatures = [
  "Edits only the component you're working on",
  "Applies small, scoped diff-based changes",
  "Focused on UI, layout, and spacing",
  "Purpose-built for frontend development",
  "Clean diffs you can actually review",
];

export function Comparison() {
  return (
    <section className="relative" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="flex flex-col items-center" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Badge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4 md:mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Why Exact is different
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-2xl md:text-4xl lg:text-5xl font-medium text-white"
          style={{ marginBottom: '80px' }}
        >
          Precision AI editing
          <br />
          <span className="text-gray-500">for frontend code</span>
        </motion.h2>

        {/* Comparison Cards */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"
        >
          {/* Other Tools Card */}
          <div
            className="rounded-2xl md:rounded-3xl relative overflow-hidden"
            style={{
              padding: '32px 28px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
              boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05), 0 0 0 1px rgba(255,255,255,0.05)',
            }}
          >
            <h3 className="text-lg md:text-2xl font-semibold text-white/80" style={{ marginBottom: '28px' }}>
              Other Tools
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {otherTools.map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-2.5 h-2.5 md:w-3 md:h-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <span className="text-gray-500 text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exact Card */}
          <div
            className="rounded-2xl md:rounded-3xl relative overflow-hidden"
            style={{
              padding: '32px 28px',
              background: 'linear-gradient(180deg, rgba(34, 197, 94, 0.08) 0%, rgba(34, 197, 94, 0.02) 100%)',
              boxShadow: 'inset 0 1px 0 0 rgba(34, 197, 94, 0.15), 0 0 0 1px rgba(34, 197, 94, 0.15)',
            }}
          >
            {/* Subtle green glow at top */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center top, rgba(34, 197, 94, 0.15), transparent 70%)',
              }}
            />

            <div className="relative">
              <div className="flex items-center gap-2 md:gap-3" style={{ marginBottom: '28px' }}>
                <Image
                  src="/exact-logo.png"
                  alt="Exact"
                  width={32}
                  height={32}
                  className="w-5 h-5 md:w-7 md:h-7"
                />
                <h3 className="text-lg md:text-2xl font-semibold text-white">
                  Exact
                </h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {exactFeatures.map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-2.5 h-2.5 md:w-3 md:h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-200 text-sm md:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
