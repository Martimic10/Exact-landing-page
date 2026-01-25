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
    <>
      <style jsx>{`
        .comparison-section {
          padding-top: 100px;
          padding-bottom: 80px;
        }
        .section-title {
          margin-bottom: 80px;
        }
        .cards-grid {
          gap: 40px;
        }
        .card {
          padding: 48px 56px 56px 56px;
        }
        .card-title {
          margin-bottom: 48px;
        }
        .features-list {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .comparison-section {
            padding-top: 60px;
            padding-bottom: 60px;
          }
          .section-title {
            margin-bottom: 48px;
          }
          .cards-grid {
            gap: 24px;
          }
          .card {
            padding: 32px 24px 40px 24px;
          }
          .card-title {
            margin-bottom: 32px;
          }
          .features-list {
            gap: 20px;
          }
          .feature-item {
            gap: 16px;
          }
        }
      `}</style>

      <section className="comparison-section relative">
        <div className="flex flex-col items-center px-4 md:px-6">
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
            className="section-title text-center text-2xl md:text-4xl lg:text-5xl font-medium text-white"
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
            className="cards-grid w-full max-w-6xl grid grid-cols-1 md:grid-cols-2"
            style={{ gap: '48px' }}
          >
            {/* Other Tools Card */}
            <div
              className="card rounded-3xl md:rounded-4xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05), 0 0 0 1px rgba(255,255,255,0.05)',
              }}
            >
              <h3 className="card-title text-xl md:text-2xl font-semibold text-white/80">
                Other Tools
              </h3>
              <ul className="features-list">
                {otherTools.map((item, index) => (
                  <li key={index} className="feature-item">
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 md:w-3.5 md:h-3.5"
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
                    <span className="text-gray-500 text-base md:text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exact Card */}
            <div
              className="card rounded-3xl md:rounded-4xl relative overflow-hidden"
              style={{
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
                <div className="card-title flex items-center gap-3 md:gap-4">
                  <Image
                    src="/exact-logo.png"
                    alt="Exact"
                    width={32}
                    height={32}
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Exact
                  </h3>
                </div>
                <ul className="features-list">
                  {exactFeatures.map((item, index) => (
                    <li key={index} className="feature-item">
                      <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 md:w-3.5 md:h-3.5"
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
                      <span className="text-gray-200 text-base md:text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
