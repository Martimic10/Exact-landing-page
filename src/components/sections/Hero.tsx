"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center pb-48 sm:pb-56 md:pb-64" style={{ paddingTop: '120px', paddingLeft: '24px', paddingRight: '24px' }}>
      {/* Text Content */}
      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-4 sm:gap-6"
        >
          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-2xl font-medium leading-[1.15] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
          >
            AI frontend editing — without breaking your code
          </motion.h1>

          {/* Supporting line */}
          <motion.p
            variants={fadeInUp}
            className="max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg mt-2"
          >
            Small, diff-based component edits for predictable UI changes.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp} style={{ marginTop: '40px' }}>
            <a
              href="#waitlist"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 32px',
                borderRadius: '10px',
                backgroundColor: '#ffffff',
                color: '#000000',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'none',
              }}
            >
              Join Waitlist
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl"
        style={{ marginTop: '48px' }}
      >
        <div className="relative mx-auto w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
          <img
            src="/exact-hero-mockup.png"
            alt="Exact AI Code Editor"
            className="w-full h-auto"
            style={{
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          />
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black to-transparent" />
    </section>
  );
}
