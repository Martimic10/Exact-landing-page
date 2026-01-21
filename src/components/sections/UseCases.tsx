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
  },
  {
    id: "layout-spacing",
    label: "Layout & Spacing",
    title: "Consistent spacing that just feels right.",
    description:
      "Exact fixes inconsistent margins, padding, and layout issues using modern frontend best practices — so your UI looks intentional, not accidental.",
    cta: "Learn more",
  },
  {
    id: "accessibility",
    label: "Accessibility",
    title: "Accessibility built in, not bolted on.",
    description:
      "Exact automatically improves labels, focus states, semantics, and keyboard navigation — helping you ship accessible UI without slowing down.",
    cta: "Explore features",
  },
  {
    id: "refactors",
    label: "Refactors",
    title: "Safe refactors with exact diffs.",
    description:
      "Refactor frontend code with confidence. Exact makes minimal, scoped changes and shows a clear diff before anything is applied — no surprises.",
    cta: "Start building",
  },
];

export function UseCases() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [buttonHovered, setButtonHovered] = useState(false);
  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40">
      <div className="flex flex-col items-center" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Section Header */}
        <div className="w-full max-w-5xl" style={{ marginBottom: '48px' }}>
          <h2 className="text-2xl font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl">
            One tool. <span className="text-gray-500">Every use case.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div
          className="flex w-full max-w-5xl justify-start overflow-x-auto"
          style={{ marginBottom: '48px' }}
        >
          <div
            className="inline-flex gap-1 rounded-lg p-1"
            style={{ backgroundColor: '#1a1a1a' }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  backgroundColor: activeTab === tab.id ? '#2a2a2a' : 'transparent',
                  color: activeTab === tab.id ? '#ffffff' : '#6b7280',
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: 500,
                  borderRadius: '6px',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full max-w-5xl overflow-hidden rounded-2xl" style={{ backgroundColor: '#0a0a0a' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col"
            >
              {/* Image Area - Full width on top */}
              <div className="relative w-full">
                <div
                  className="relative h-96 w-full overflow-hidden rounded-2xl sm:h-112 md:h-140"
                  style={{ backgroundColor: '#1a1a1a' }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ padding: '16px' }}
                  >
                    {activeTab === "component-polish" && (
                      <img
                        src="/component-polish.png"
                        alt="Component Polish"
                        className="h-full w-full object-contain object-center"
                        style={{ maxHeight: '100%', maxWidth: '100%' }}
                      />
                    )}
                    {activeTab === "layout-spacing" && (
                      <img
                        src="/layout-spacing.png"
                        alt="Layout & Spacing"
                        className="h-full w-full object-contain object-center"
                        style={{ maxHeight: '100%', maxWidth: '100%' }}
                      />
                    )}
                    {activeTab === "accessibility" && (
                      <img
                        src="/exact-accessibility.png"
                        alt="Accessibility"
                        className="h-full w-full object-contain object-center"
                        style={{ maxHeight: '100%', maxWidth: '100%' }}
                      />
                    )}
                    {activeTab === "refactors" && (
                      <img
                        src="/exact-refactors.png"
                        alt="Refactors"
                        className="h-full w-full object-contain object-center"
                        style={{ maxHeight: '100%', maxWidth: '100%' }}
                      />
                    )}
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Content - Outside card, on black background */}
        <div className="flex w-full max-w-5xl items-center justify-between pt-6">
          <div className="flex-1 pr-4">
            <p style={{ color: '#6b7280', fontSize: '12px', marginBottom: '12px' }}>{activeContent?.label}</p>
            <p style={{ color: '#ffffff', fontSize: '20px', lineHeight: '1.8', letterSpacing: '0.01em' }}>
              {activeContent?.description}
            </p>
          </div>
          <div className="shrink-0">
            <button
              type="button"
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
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
    </section>
  );
}
