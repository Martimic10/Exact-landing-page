"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const features = [
  {
    id: 1,
    title: "Component Polish",
    description:
      "Clean up JSX, classNames, and structure without changing behavior. Exact understands your components and makes them better.",
    cta: "See it in action",
    bgImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
  },
  {
    id: 2,
    title: "Layout & Spacing",
    description:
      "Fix alignment, spacing, and responsiveness safely. No more broken layouts from AI edits.",
    cta: "View examples",
    bgImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
  },
  {
    id: 3,
    title: "Accessibility & Refactors",
    description:
      "Add semantic HTML, ARIA attributes, and keyboard support. Improve readability and consistency without changing output.",
    cta: "Learn more",
    bgImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
  },
];

export function Features() {
  return (
    <section id="features" className="relative pb-32 md:pb-48" style={{ paddingTop: '250px' }}>
      <div className="flex flex-col items-center" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Section Header */}
        <div className="w-full max-w-5xl" style={{ marginBottom: '72px' }}>
          <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Built for real frontend work
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl">
            Exact doesn&apos;t aim to be clever. It aims to be predictable.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex w-full max-w-5xl flex-col gap-8 md:gap-10">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10"
            style={{
              backgroundColor: '#0a0a0a',
            }}
          >
              <div className={`flex flex-col ${index === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                {/* Text Content */}
                <div
                  className="order-2 lg:order-1 flex flex-col justify-center lg:w-[45%]"
                  style={{
                    padding: '24px',
                    paddingTop: '32px',
                    paddingBottom: '32px',
                    paddingLeft: index === 1 ? '24px' : '24px',
                    paddingRight: index === 1 ? '24px' : '24px',
                  }}
                >
                  <motion.h3
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-xl font-medium leading-tight text-white sm:text-2xl md:text-3xl"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg"
                  >
                    {feature.description}
                  </motion.p>
                  <motion.a
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    href="#"
                    className="inline-flex w-fit items-center rounded-lg transition-all hover:opacity-90"
                    style={{
                      marginTop: '40px',
                      backgroundColor: '#ffffff',
                      color: '#000000',
                      padding: '14px 24px',
                      fontSize: '14px',
                      fontWeight: 500,
                    }}
                  >
                    {feature.cta}
                  </motion.a>
                </div>

                {/* Image Area with Cloud Background */}
                <div className="order-1 lg:order-2 relative lg:w-[55%]">
                  <div className="relative h-64 w-full overflow-hidden sm:h-80 md:h-96 lg:h-125">
                    {/* Atmospheric Cloud Background */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `url("${feature.bgImage}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.5) saturate(0.8)',
                      }}
                    />
                    {/* Gradient overlay for depth */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: index === 1
                          ? 'linear-gradient(to left, transparent 0%, rgba(10, 10, 10, 0.7) 100%)'
                          : 'linear-gradient(to right, transparent 0%, rgba(10, 10, 10, 0.7) 100%)',
                      }}
                    />
                    {/* Mockup Image */}
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ padding: '24px' }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                        style={{
                          maxWidth: '90%',
                          maxHeight: '90%',
                        }}
                      >
                        <img
                          src={index === 0 ? "/component-feature-ui.png" : index === 1 ? "/react-beyond.png" : "/exact-faster.png"}
                          alt={feature.title}
                          className="h-full w-full object-contain"
                          style={{
                            borderRadius: '12px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
