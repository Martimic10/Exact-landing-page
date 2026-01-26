"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "component-polish",
    label: "Component Polish",
    title: "Cleaner components, instantly.",
    description:
      "Exact analyzes your React components and applies precise UI improvements — cleaner JSX, better Tailwind usage, and improved visual hierarchy — without changing behavior.",
    cta: "See it in action",
    bgImage: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80",
    mockup: "/polish.png",
  },
  {
    id: "layout-spacing",
    label: "Layout & Spacing",
    title: "Consistent spacing that just feels right.",
    description:
      "Exact fixes inconsistent margins, padding, and layout issues using modern frontend best practices — so your UI looks intentional, not accidental.",
    cta: "Learn more",
    bgImage: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&q=80",
    mockup: "/layout.png",
  },
  {
    id: "accessibility",
    label: "Accessibility",
    title: "Accessibility built in, not bolted on.",
    description:
      "Exact automatically improves labels, focus states, semantics, and keyboard navigation — helping you ship accessible UI without slowing down.",
    cta: "Explore features",
    bgImage: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=1200&q=80",
    mockup: "/accessibility.png",
  },
  {
    id: "refactors",
    label: "Refactors",
    title: "Safe refactors with exact diffs.",
    description:
      "Refactor frontend code with confidence. Exact makes minimal, scoped changes and shows a clear diff before anything is applied — no surprises.",
    cta: "Start building",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    mockup: "/refactors.png",
  },
];

export function UseCases() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [buttonHovered, setButtonHovered] = useState(false);
  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-48 lg:pb-40">
      <div className="flex flex-col items-center" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Section Header */}
        <div className="w-full max-w-5xl" style={{ marginBottom: '80px' }}>
          <h2 className="text-2xl font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl">
            One tool. <span className="text-gray-500">Every use case.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex w-full max-w-5xl justify-start overflow-x-auto" style={{ marginBottom: '48px' }}>
          <div
            className="inline-flex gap-1 rounded-lg p-1"
            style={{ backgroundColor: '#1a1a1a' }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="transition-all duration-200"
                style={{
                  backgroundColor: activeTab === tab.id ? '#2a2a2a' : 'transparent',
                  color: activeTab === tab.id ? '#ffffff' : '#6b7280',
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: 500,
                  borderRadius: '6px',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full max-w-5xl rounded-2xl overflow-hidden relative" style={{ marginTop: '0px' }}>
          {/* Background Image */}
          <img
            src={activeContent?.bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(0.35) saturate(0.8)',
            }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, transparent 50%, rgba(0, 0, 0, 0.3) 100%)',
            }}
          />

          {/* Mockup Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="relative flex items-center justify-center h-80 sm:h-96 md:h-112 lg:h-140"
              style={{
                padding: '24px',
              }}
            >
              <img
                src={activeContent?.mockup}
                alt={activeContent?.title}
                className="max-h-full max-w-full object-contain"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Content Card */}
        <div
          className="w-full max-w-5xl rounded-2xl overflow-hidden relative"
          style={{ marginTop: '24px', backgroundColor: '#0a0a0a' }}
        >
          {/* Space Background */}
          <img
            src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1200&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(0.3) saturate(0.7)',
            }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%)',
            }}
          />

          {/* Content */}
          <div
            className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8"
            style={{ padding: '40px 48px' }}
          >
            <div className="flex-1">
              <p
                className="text-gray-400 uppercase tracking-wider"
                style={{ fontSize: '11px', marginBottom: '12px', fontWeight: 600 }}
              >
                {activeContent?.label}
              </p>
              <p
                className="text-white leading-relaxed"
                style={{ fontSize: '15px', maxWidth: '600px' }}
              >
                {activeContent?.description}
              </p>
            </div>
            <div className="shrink-0">
              <button
                type="button"
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
                className="transition-colors duration-200"
                style={{
                  backgroundColor: buttonHovered ? '#e5e5e5' : '#ffffff',
                  color: '#000000',
                  borderRadius: '8px',
                  padding: '14px 24px',
                  fontSize: '14px',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                {activeContent?.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
