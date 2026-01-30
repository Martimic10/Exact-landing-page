"use client";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying Exact. All core features included, forever.",
    cta: "Current Plan",
    current: true,
  },
  {
    name: "Starter",
    price: "$12",
    description: "For solo developers and light daily use.",
    cta: "Upgrade to Starter",
    current: false,
  },
  {
    name: "Pro",
    price: "$24",
    description: "Built for serious frontend developers.",
    cta: "Upgrade to Pro",
    current: false,
    popular: true,
  },
];

const features = [
  {
    name: "Component Polish",
    icon: ComponentIcon,
    description: "AI-powered cleanup for JSX, classNames, and component structure",
    status: "Available",
  },
  {
    name: "Layout & Spacing",
    icon: LayoutIcon,
    description: "Fix alignment, margins, and responsive issues automatically",
    status: "Available",
  },
  {
    name: "Accessibility",
    icon: AccessibilityIcon,
    description: "Add ARIA attributes, semantic HTML, and keyboard navigation",
    status: "Available",
  },
  {
    name: "Safe Refactors",
    icon: RefactorIcon,
    description: "Refactor code with confidence using exact, scoped diffs",
    status: "Available",
  },
];

export default function DashboardOverview() {
  return (
    <>
      {/* Welcome Message */}
      <div style={{ marginBottom: "24px" }}>
        <h1 className="text-xl md:text-2xl" style={{ color: "#ffffff", fontWeight: 600, marginBottom: "8px" }}>
          Overview
        </h1>
        <p style={{ color: "#6b7280", fontSize: "14px" }}>
          Manage your Exact subscription and download the editor.
        </p>
      </div>

      {/* Download CTA */}
      <div
        className="download-cta"
        style={{
          backgroundColor: "#111111",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "32px",
        }}
      >
        <div className="download-cta-content">
          <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 500, marginBottom: "4px" }}>
            Download Exact for macOS
          </h3>
          <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "16px" }}>
            Get the latest version of Exact editor for your Mac.
          </p>
        </div>
        <button
          className="download-btn"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 24px",
            backgroundColor: "#ffffff",
            border: "none",
            borderRadius: "8px",
            color: "#000000",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download
        </button>
      </div>

      {/* Pricing Plans */}
      <h2 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>
        Your Plan
      </h2>
      <div className="plans-grid" style={{ marginBottom: "32px" }}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            style={{
              backgroundColor: "#111111",
              border: plan.current ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "12px" }}>
              <span style={{ color: "#ffffff", fontSize: "16px", fontWeight: 600 }}>{plan.name}</span>
              <span style={{ color: "#6b7280", fontSize: "14px" }}>{plan.price}/mo.</span>
            </div>
            <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.5", marginBottom: "16px" }}>
              {plan.description}
            </p>
            <button
              disabled={plan.current}
              style={{
                padding: "8px 16px",
                backgroundColor: plan.current ? "transparent" : "transparent",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "6px",
                color: plan.current ? "#6b7280" : "#ffffff",
                fontSize: "13px",
                cursor: plan.current ? "default" : "pointer",
                transition: "all 0.15s",
              }}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Features */}
      <h2 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>
        Features
      </h2>
      <div
        style={{
          backgroundColor: "#111111",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {features.map((feature, index) => (
          <div
            key={feature.name}
            className="feature-row"
            style={{
              padding: "16px",
              borderBottom: index < features.length - 1 ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flex: 1 }}>
              <div
                className="feature-icon"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <feature.icon />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="feature-header">
                  <h4 style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500, marginBottom: "2px" }}>
                    {feature.name}
                  </h4>
                  <span
                    className="feature-status-mobile"
                    style={{
                      padding: "4px 10px",
                      backgroundColor: "rgba(34, 197, 94, 0.1)",
                      borderRadius: "9999px",
                      color: "#22c55e",
                      fontSize: "11px",
                      fontWeight: 500,
                    }}
                  >
                    {feature.status}
                  </span>
                </div>
                <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: "1.4" }}>
                  {feature.description}
                </p>
              </div>
            </div>
            <span
              className="feature-status-desktop"
              style={{
                padding: "4px 12px",
                backgroundColor: "rgba(34, 197, 94, 0.1)",
                borderRadius: "9999px",
                color: "#22c55e",
                fontSize: "12px",
                fontWeight: 500,
                flexShrink: 0,
                marginLeft: "16px",
              }}
            >
              {feature.status}
            </span>
          </div>
        ))}
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        .download-cta {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .download-btn {
          width: 100%;
          justify-content: center;
        }
        .plans-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .feature-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
        .feature-header {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 4px;
        }
        .feature-status-desktop {
          display: none;
        }
        .feature-status-mobile {
          display: inline-block;
        }
        @media (min-width: 640px) {
          .download-cta {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
          .download-btn {
            width: auto;
          }
          .plans-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 768px) {
          .plans-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .feature-row {
            align-items: center;
            padding: 16px 24px;
          }
          .feature-header {
            margin-bottom: 0;
          }
          .feature-status-desktop {
            display: inline-block;
          }
          .feature-status-mobile {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

// Icon Components
function ComponentIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  );
}

function AccessibilityIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  );
}

function RefactorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
