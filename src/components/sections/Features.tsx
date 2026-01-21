"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const features = [
  {
    id: 1,
    title: "Pixel-perfect precision",
    description:
      "AI that understands frontend. Generate components that match your design system exactly, every time.",
    cta: "See it in action",
  },
  {
    id: 2,
    title: "Built for React & beyond",
    description:
      "Native support for React, Vue, Svelte, and more. Exact speaks your framework's language fluently.",
    cta: "View frameworks",
  },
  {
    id: 3,
    title: "Ship faster, stay consistent",
    description:
      "From prototype to production in minutes. Exact ensures your code stays clean and maintainable.",
    cta: "Learn more",
  },
];

export function Features() {
  return (
    <section id="features" className="relative pb-32 md:pb-48" style={{ paddingTop: '250px' }}>
      <div className="flex flex-col items-center" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Section Header */}
        <div className="w-full max-w-5xl" style={{ marginBottom: '72px' }}>
          <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Code with precision.
            <br />
            <span className="text-gray-500">Ship with confidence.</span>
          </h2>
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
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:w-[40%] lg:p-14">
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

                {/* Image Area */}
                <div className="relative lg:w-[60%]">
                  <div className="relative h-48 w-full overflow-hidden sm:h-64 md:h-80 lg:h-125" style={{ backgroundColor: '#1a1a1a' }}>
                    {index === 0 ? (
                      /* First Feature Card - Custom Image */
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ padding: '16px' }}
                      >
                        <img
                          src="/component-feature-ui.png"
                          alt="Pixel-perfect precision"
                          className="h-full w-full object-contain object-center"
                          style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                          }}
                        />
                      </div>
                    ) : index === 1 ? (
                      /* Second Feature Card - Custom Image */
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ padding: '16px' }}
                      >
                        <img
                          src="/react-beyond.png"
                          alt="Built for React & beyond"
                          className="h-full w-full object-contain object-center"
                          style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                          }}
                        />
                      </div>
                    ) : (
                      /* Third Feature Card - Custom Image */
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ padding: '16px' }}
                      >
                        <img
                          src="/exact-faster.png"
                          alt="Ship faster, stay consistent"
                          className="h-full w-full object-contain object-center"
                          style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                          }}
                        />
                      </div>
                    )}
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
