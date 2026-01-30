"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { getCurrentUser, signOut } from "@/lib/supabase";

interface User {
  id: string;
  email?: string;
  user_metadata?: {
    full_name?: string;
    name?: string;
    avatar_url?: string;
  };
}

const sidebarNavigation = [
  {
    items: [
      { label: "Overview", href: "/dashboard", icon: OverviewIcon, active: true },
      { label: "Downloads", href: "/dashboard/downloads", icon: DownloadIcon },
    ],
  },
  {
    items: [
      { label: "API Keys", href: "/dashboard/api-keys", icon: KeyIcon },
      { label: "Usage", href: "/dashboard/usage", icon: UsageIcon },
      { label: "Billing", href: "/dashboard/billing", icon: BillingIcon },
    ],
  },
  {
    items: [
      { label: "Settings", href: "/dashboard/settings", icon: SettingsIcon },
      { label: "Docs", href: "/docs", icon: DocsIcon },
      { label: "Support", href: "/support", icon: SupportIcon },
    ],
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Get started with basic AI-powered component editing. Perfect for trying out Exact.",
    cta: "Current Plan",
    current: true,
  },
  {
    name: "Pro",
    price: "$19",
    description: "Unlimited AI edits, priority processing, and advanced refactoring capabilities.",
    cta: "Upgrade to Pro",
    current: false,
  },
  {
    name: "Team",
    price: "$49",
    description: "Everything in Pro plus team collaboration, shared settings, and admin controls.",
    cta: "Upgrade to Team",
    current: false,
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

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        router.push("/signin");
        return;
      }
      setUser(currentUser);
      setLoading(false);
    }
    loadUser();
  }, [router]);

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  const getUserInitials = () => {
    if (!user) return "??";
    const name = user.user_metadata?.full_name || user.user_metadata?.name || user.email || "";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const getUserName = () => {
    if (!user) return "";
    return user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split("@")[0] || "";
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ color: "#6b7280" }}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a" }}>
      {/* Top Header */}
      <header
        style={{
          height: "56px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src="/exact-logo.png" alt="Exact" style={{ width: 28, height: 28 }} />
        </Link>

        {/* Right side - Avatar only */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setAvatarMenuOpen(!avatarMenuOpen)}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "6px",
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#ffffff",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {user?.user_metadata?.avatar_url ? (
              <img
                src={user.user_metadata.avatar_url}
                alt=""
                style={{ width: "100%", height: "100%", borderRadius: "6px", objectFit: "cover" }}
              />
            ) : (
              getUserInitials()
            )}
          </button>

          {avatarMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                marginTop: "8px",
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                padding: "8px",
                minWidth: "160px",
                zIndex: 50,
              }}
            >
              <button
                onClick={handleSignOut}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#ef4444",
                  fontSize: "14px",
                  textAlign: "left",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                Sign out
              </button>
            </motion.div>
          )}
        </div>
      </header>

      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <aside
          style={{
            width: "256px",
            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "24px 16px",
            minHeight: "calc(100vh - 56px)",
          }}
        >
          {/* User info */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500 }}>
                {getUserName()}
              </span>
            </div>
            <span style={{ color: "#6b7280", fontSize: "13px" }}>
              Free Plan · {user?.email}
            </span>
          </div>

          {/* Navigation */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {sidebarNavigation.map((group, groupIndex) => (
              <div key={groupIndex} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {group.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      backgroundColor: item.active ? "rgba(255, 255, 255, 0.1)" : "transparent",
                      color: item.active ? "#ffffff" : "#9ca3af",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "all 0.15s",
                    }}
                  >
                    <item.icon />
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: "32px 48px", maxWidth: "900px" }}>
          {/* Welcome Message */}
          <div style={{ marginBottom: "32px" }}>
            <h1 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 600, marginBottom: "8px" }}>
              Welcome back, {getUserName()}
            </h1>
            <p style={{ color: "#6b7280", fontSize: "14px" }}>
              Manage your Exact subscription and download the editor.
            </p>
          </div>

          {/* Download CTA */}
          <div
            style={{
              backgroundColor: "#111111",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "24px",
              marginBottom: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 500, marginBottom: "4px" }}>
                Download Exact for macOS
              </h3>
              <p style={{ color: "#6b7280", fontSize: "14px" }}>
                Get the latest version of Exact editor for your Mac.
              </p>
            </div>
            <button
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 24px",
                  borderBottom: index < features.length - 1 ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <feature.icon />
                  </div>
                  <div>
                    <h4 style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500, marginBottom: "2px" }}>
                      {feature.name}
                    </h4>
                    <p style={{ color: "#6b7280", fontSize: "13px" }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
                <span
                  style={{
                    padding: "4px 12px",
                    backgroundColor: "rgba(34, 197, 94, 0.1)",
                    borderRadius: "9999px",
                    color: "#22c55e",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  {feature.status}
                </span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

// Icon Components
function OverviewIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

function UsageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function BillingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function DocsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

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
