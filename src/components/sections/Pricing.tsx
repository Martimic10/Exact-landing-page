"use client";

import { useState } from "react";

const plans = [
  {
    id: 1,
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for trying Exact. All core features included, forever.",
    cta: "Get started",
    ctaStyle: "outline" as const,
    popular: false,
    features: [
      "5 UI polishes / day",
      "AI autocomplete (basic)",
      "Single component scope",
      "Basic accessibility fixes",
      "View-only diff preview",
    ],
  },
  {
    id: 2,
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "For developers who need advanced features and unlimited AI requests.",
    cta: "Get Pro",
    ctaStyle: "filled" as const,
    popular: true,
    features: [
      "Everything in Free",
      "Unlimited AI requests",
      "Faster AI responses",
      "Priority AI responses",
      "Smart refactoring tools",
      "Multi-file editing",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams that need dedicated support, custom deployment, and advanced security.",
    cta: "Contact sales",
    ctaStyle: "outline" as const,
    popular: false,
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Self-hosted deployment",
      "Role-based access control",
      "Team polish profiles",
      "Dedicated support",
      "SLA guarantees",
    ],
  },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  return (
    <section id="pricing" className="relative pb-32 md:pb-48" style={{ paddingTop: '120px' }}>
      <div className="flex flex-col items-center" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Section Header */}
        <div className="w-full max-w-5xl" style={{ marginBottom: '32px' }}>
          <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Start free. <span className="text-gray-500">Scale as you grow.</span>
          </h2>
        </div>

        {/* Billing Toggle */}
        <div className="w-full max-w-5xl" style={{ marginBottom: '48px' }}>
          <div className="flex items-center gap-4">
            <div
              className="inline-flex gap-1 rounded-lg p-1"
              style={{ backgroundColor: '#1a1a1a' }}
            >
              <button
                type="button"
                onClick={() => setBillingPeriod("monthly")}
                style={{
                  backgroundColor: billingPeriod === "monthly" ? '#2a2a2a' : 'transparent',
                  color: billingPeriod === "monthly" ? '#ffffff' : '#6b7280',
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: 500,
                  borderRadius: '6px',
                  transition: 'all 0.2s',
                }}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod("yearly")}
                style={{
                  backgroundColor: billingPeriod === "yearly" ? '#2a2a2a' : 'transparent',
                  color: billingPeriod === "yearly" ? '#ffffff' : '#6b7280',
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: 500,
                  borderRadius: '6px',
                  transition: 'all 0.2s',
                }}
              >
                Yearly
              </button>
            </div>
            <span style={{ color: '#6b7280', fontSize: '14px' }}>Save 20%</span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col rounded-2xl border border-white/10"
              style={{ backgroundColor: '#0a0a0a', padding: '24px' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between" style={{ marginBottom: '16px' }}>
                <h3 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 500 }}>
                  {plan.name}
                </h3>
                {plan.popular && (
                  <span
                    style={{
                      backgroundColor: '#2a2a2a',
                      color: '#ffffff',
                      fontSize: '12px',
                      fontWeight: 500,
                      padding: '4px 12px',
                      borderRadius: '9999px',
                    }}
                  >
                    Popular
                  </span>
                )}
              </div>

              {/* Price */}
              <div style={{ marginBottom: '16px' }}>
                <span style={{ color: '#ffffff', fontSize: '40px', fontWeight: 600 }}>
                  {billingPeriod === "yearly" && plan.price !== "Custom" && plan.price !== "$0"
                    ? `$${Math.round(parseInt(plan.price.replace('$', '')) * 0.8)}`
                    : plan.price}
                </span>
                {plan.period && (
                  <span style={{ color: '#6b7280', fontSize: '16px' }}>{plan.period}</span>
                )}
              </div>

              {/* Description */}
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                {plan.description}
              </p>

              {/* CTA Button */}
              <button
                type="button"
                onMouseEnter={() => setHoveredButton(plan.id)}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  padding: '12px 20px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'all 0.2s',
                  marginBottom: '24px',
                  ...(plan.ctaStyle === 'filled'
                    ? {
                        backgroundColor: hoveredButton === plan.id ? '#e5e5e5' : '#ffffff',
                        color: '#000000',
                        border: 'none',
                      }
                    : {
                        backgroundColor: 'transparent',
                        color: hoveredButton === plan.id ? '#ffffff' : '#d1d5db',
                        border: `1px solid ${hoveredButton === plan.id ? '#9ca3af' : '#4b5563'}`,
                      }),
                }}
              >
                {plan.cta}
              </button>

              {/* Features Divider */}
              <div className="flex items-center gap-3" style={{ marginBottom: '20px' }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#2a2a2a' }} />
                <span style={{ color: '#6b7280', fontSize: '12px' }}>Features</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#2a2a2a' }} />
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckIcon />
                    <span style={{ color: '#6b7280', fontSize: '14px' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
