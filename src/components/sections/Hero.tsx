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
            className="text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Code with exact precision.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl"
          >
            The AI-native code editor that gets it exactly right.
            <br />
            No approximation. No bloat. Just perfect code, every time.
          </motion.p>

        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-6xl"
        style={{ marginTop: '48px' }}
      >
        <div className="relative mx-auto w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
          <img
            src="/exact-UI.png"
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
