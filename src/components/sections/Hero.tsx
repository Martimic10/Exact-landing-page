"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              href="/download"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '14px 32px',
                borderRadius: '10px',
                backgroundColor: '#ffffff',
                color: '#000000',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'none',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download For MacOS
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Mobile: Simple mockup without background */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative w-full sm:hidden"
        style={{ marginTop: '48px' }}
      >
        <img
          src="/exact-hero-mockup.png"
          alt="Exact AI Code Editor"
          className="w-full h-auto cursor-pointer"
          style={{
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
          }}
          onClick={() => setIsModalOpen(true)}
        />
      </motion.div>

      {/* Desktop: Hero Image with Space Background */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl hidden sm:block"
        style={{ marginTop: '48px' }}
      >
        {/* Space Background */}
        <div
          className="relative w-full sm:h-[400px] md:h-[500px]"
        >
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(0.6) saturate(0.9)',
            }}
          />
          {/* Gradient overlays */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.8) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.3) 0%, transparent 50%, rgba(0, 0, 0, 0.3) 100%)',
            }}
          />

          {/* Mockup Image Overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center p-6 md:p-12"
          >
            <img
              src="/exact-hero-mockup.png"
              alt="Exact AI Code Editor"
              className="h-full w-auto max-w-full cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
              style={{
                borderRadius: '12px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                objectFit: 'contain',
              }}
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black to-transparent" />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              style={{ fontSize: '32px', lineHeight: 1 }}
            >
              ×
            </button>

            {/* Modal Image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src="/exact-hero-mockup.png"
              alt="Exact AI Code Editor"
              className="max-w-[90vw] max-h-[90vh] object-contain"
              style={{
                borderRadius: '12px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
