"use client";

const usageData = {
  currentPeriod: {
    start: "Jan 1, 2025",
    end: "Jan 31, 2025",
  },
  aiEdits: {
    used: 47,
    limit: 100,
    unlimited: false,
  },
  features: [
    { name: "Component Polish", used: 18, icon: ComponentIcon },
    { name: "Layout & Spacing", used: 12, icon: LayoutIcon },
    { name: "Accessibility", used: 9, icon: AccessibilityIcon },
    { name: "Safe Refactors", used: 8, icon: RefactorIcon },
  ],
  dailyUsage: [
    { day: "Mon", edits: 8 },
    { day: "Tue", edits: 12 },
    { day: "Wed", edits: 5 },
    { day: "Thu", edits: 9 },
    { day: "Fri", edits: 7 },
    { day: "Sat", edits: 3 },
    { day: "Sun", edits: 3 },
  ],
};

export default function UsagePage() {
  const usagePercentage = (usageData.aiEdits.used / usageData.aiEdits.limit) * 100;
  const maxDailyEdits = Math.max(...usageData.dailyUsage.map((d) => d.edits));

  return (
    <>
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <h1 className="text-xl md:text-2xl" style={{ color: "#ffffff", fontWeight: 600, marginBottom: "8px" }}>
          Usage
        </h1>
        <p style={{ color: "#6b7280", fontSize: "14px" }}>
          Track your AI edit usage for the current billing period.
        </p>
      </div>

      {/* Usage Overview */}
      <div
        style={{
          backgroundColor: "#111111",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          padding: "24px",
          marginBottom: "24px",
        }}
      >
        <div className="usage-overview-header" style={{ marginBottom: "24px" }}>
          <div>
            <h2 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 600, marginBottom: "4px" }}>
              AI Edits
            </h2>
            <p style={{ color: "#6b7280", fontSize: "13px" }}>
              {usageData.currentPeriod.start} – {usageData.currentPeriod.end}
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{ color: "#ffffff", fontSize: "32px", fontWeight: 600 }}>
              {usageData.aiEdits.used}
            </span>
            <span style={{ color: "#6b7280", fontSize: "16px" }}>
              {" "}/ {usageData.aiEdits.limit}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            height: "8px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "4px",
            overflow: "hidden",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${usagePercentage}%`,
              backgroundColor: usagePercentage > 80 ? "#ef4444" : usagePercentage > 60 ? "#f59e0b" : "#22c55e",
              borderRadius: "4px",
              transition: "width 0.3s ease",
            }}
          />
        </div>

        <div className="usage-overview-footer">
          <span style={{ color: "#6b7280", fontSize: "13px" }}>
            {usageData.aiEdits.limit - usageData.aiEdits.used} edits remaining this month
          </span>
          <a
            href="/dashboard/billing"
            style={{
              color: "#a855f7",
              fontSize: "13px",
              textDecoration: "none",
            }}
          >
            Upgrade for unlimited →
          </a>
        </div>
      </div>

      {/* Feature Breakdown & Daily Chart */}
      <div className="usage-charts-grid" style={{ marginBottom: "24px" }}>
        {/* Feature Breakdown */}
        <div
          style={{
            backgroundColor: "#111111",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            padding: "24px",
          }}
        >
          <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 600, marginBottom: "20px" }}>
            By Feature
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {usageData.features.map((feature) => (
              <div key={feature.name} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <feature.icon />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ color: "#ffffff", fontSize: "14px" }}>{feature.name}</span>
                    <span style={{ color: "#6b7280", fontSize: "13px" }}>{feature.used} edits</span>
                  </div>
                  <div
                    style={{
                      height: "4px",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "2px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${(feature.used / usageData.aiEdits.used) * 100}%`,
                        backgroundColor: "#a855f7",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Chart */}
        <div
          style={{
            backgroundColor: "#111111",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            padding: "24px",
          }}
        >
          <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 600, marginBottom: "20px" }}>
            This Week
          </h3>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "12px", height: "140px" }}>
            {usageData.dailyUsage.map((day) => (
              <div
                key={day.day}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "#6b7280", fontSize: "12px" }}>{day.edits}</span>
                <div
                  style={{
                    width: "100%",
                    height: `${(day.edits / maxDailyEdits) * 100}px`,
                    backgroundColor: "#a855f7",
                    borderRadius: "4px",
                    minHeight: "4px",
                  }}
                />
                <span style={{ color: "#6b7280", fontSize: "12px" }}>{day.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plan Comparison */}
      <div
        style={{
          backgroundColor: "#111111",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          padding: "24px",
        }}
      >
        <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 600, marginBottom: "20px" }}>
          Plan Limits
        </h3>
        <div className="plan-limits-grid">
          <div
            style={{
              padding: "16px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500 }}>Free</span>
              <span
                style={{
                  padding: "2px 8px",
                  backgroundColor: "rgba(34, 197, 94, 0.1)",
                  borderRadius: "4px",
                  color: "#22c55e",
                  fontSize: "11px",
                  fontWeight: 500,
                }}
              >
                Current
              </span>
            </div>
            <p style={{ color: "#6b7280", fontSize: "24px", fontWeight: 600 }}>100</p>
            <p style={{ color: "#6b7280", fontSize: "13px" }}>edits/month</p>
          </div>

          <div
            style={{
              padding: "16px",
              backgroundColor: "rgba(59, 130, 246, 0.05)",
              borderRadius: "8px",
              border: "1px solid rgba(59, 130, 246, 0.2)",
            }}
          >
            <span style={{ color: "#a855f7", fontSize: "14px", fontWeight: 500, marginBottom: "12px", display: "block" }}>
              Pro
            </span>
            <p style={{ color: "#a855f7", fontSize: "24px", fontWeight: 600 }}>Unlimited</p>
            <p style={{ color: "#6b7280", fontSize: "13px" }}>edits/month</p>
          </div>

          <div
            style={{
              padding: "16px",
              backgroundColor: "rgba(168, 85, 247, 0.05)",
              borderRadius: "8px",
              border: "1px solid rgba(168, 85, 247, 0.2)",
            }}
          >
            <span style={{ color: "#a855f7", fontSize: "14px", fontWeight: 500, marginBottom: "12px", display: "block" }}>
              Team
            </span>
            <p style={{ color: "#a855f7", fontSize: "24px", fontWeight: 600 }}>Unlimited</p>
            <p style={{ color: "#6b7280", fontSize: "13px" }}>edits/month + team features</p>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        .usage-overview-header {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .usage-overview-footer {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-start;
        }
        .usage-charts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .plan-limits-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 640px) {
          .usage-overview-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
          .usage-overview-footer {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .plan-limits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 768px) {
          .usage-charts-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .plan-limits-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  );
}

// Icon Components
function ComponentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  );
}

function AccessibilityIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  );
}

function RefactorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
