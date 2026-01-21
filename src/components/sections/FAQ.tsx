"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Is Exact really free?",
    answer: "Yes! Our Free plan includes all core features with 5 UI polishes per day. You can use Exact indefinitely without paying. Upgrade to Pro for unlimited requests and faster responses.",
  },
  {
    id: 2,
    question: "How does Exact compare to Cursor or GitHub Copilot?",
    answer: "Exact is purpose-built for frontend development. While Copilot and Cursor are general-purpose AI coding tools, Exact specializes in UI polish, component refinement, and visual consistency — delivering pixel-perfect results every time.",
  },
  {
    id: 3,
    question: "Is my code private?",
    answer: "Absolutely. Your code is never stored on our servers beyond the duration of your session. We don't use your code to train our models. Enterprise customers can opt for self-hosted deployment for complete data control.",
  },
  {
    id: 4,
    question: "What languages does Exact support?",
    answer: "Exact supports React, Vue, Svelte, Angular, and vanilla HTML/CSS/JavaScript. We have first-class support for TypeScript and all major CSS frameworks including Tailwind CSS, styled-components, and CSS Modules.",
  },
  {
    id: 5,
    question: "Can I use Exact offline?",
    answer: "Exact requires an internet connection for AI-powered features. However, Enterprise customers with self-hosted deployment can run Exact entirely on their own infrastructure.",
  },
  {
    id: 6,
    question: "How do I migrate from my current editor?",
    answer: "Exact integrates seamlessly with your existing workflow. Install our VS Code extension or use our standalone app. Your settings, themes, and keybindings can be imported with one click.",
  },
];

function PlusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6b7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transition: 'transform 0.2s',
        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
      }}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative pb-32 md:pb-48" style={{ paddingTop: '120px' }}>
      <div className="flex flex-col items-center" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        <div className="w-full max-w-5xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
            {/* Left side - Header */}
            <div className="lg:w-2/5">
              <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl">
                Questions? <span className="text-gray-500">We've got answers.</span>
              </h2>
            </div>

            {/* Right side - FAQ Items */}
            <div className="flex-1">
              <div className="flex flex-col">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border-b border-white/10"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="flex w-full items-center justify-between text-left"
                      style={{ padding: '24px 0' }}
                    >
                      <span style={{ color: '#ffffff', fontSize: '16px', fontWeight: 500, paddingRight: '16px' }}>
                        {faq.question}
                      </span>
                      <PlusIcon isOpen={openId === faq.id} />
                    </button>
                    <div
                      style={{
                        maxHeight: openId === faq.id ? '200px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease-out',
                      }}
                    >
                      <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6', paddingBottom: '24px' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
