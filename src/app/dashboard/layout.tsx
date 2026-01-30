"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
      { label: "Overview", href: "/dashboard", icon: OverviewIcon },
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
      { label: "Support", href: "mailto:support@exactai.dev", icon: SupportIcon, external: true },
    ],
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname.startsWith(href);
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

  const SidebarContent = () => (
    <>
      {/* User info */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
          <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500 }}>
            {getUserName()}
          </span>
        </div>
        <span style={{ color: "#6b7280", fontSize: "13px", wordBreak: "break-all" }}>
          Free Plan · {user?.email}
        </span>
      </div>

      {/* Navigation */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {sidebarNavigation.map((group, groupIndex) => (
          <div key={groupIndex} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {group.items.map((item) => {
              const active = isActive(item.href);
              const LinkComponent = item.external ? "a" : Link;
              const linkProps = item.external
                ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: item.href };

              return (
                <LinkComponent
                  key={item.label}
                  {...linkProps}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    backgroundColor: active ? "rgba(255, 255, 255, 0.1)" : "transparent",
                    color: active ? "#ffffff" : "#9ca3af",
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "all 0.15s",
                  }}
                >
                  <item.icon />
                  {item.label}
                </LinkComponent>
              );
            })}
          </div>
        ))}
      </nav>
    </>
  );

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
          padding: "0 16px",
          position: "sticky",
          top: 0,
          backgroundColor: "#0a0a0a",
          zIndex: 40,
        }}
      >
        {/* Left side - Menu button (mobile) + Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            style={{
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              border: "none",
              color: "#ffffff",
              cursor: "pointer",
            }}
          >
            <MenuIcon open={mobileMenuOpen} />
          </button>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src="/exact-logo.png" alt="Exact" style={{ width: 28, height: 28 }} />
          </Link>
        </div>

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
        {/* Desktop Sidebar */}
        <aside
          className="hidden md:block"
          style={{
            width: "256px",
            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "24px 16px",
            minHeight: "calc(100vh - 56px)",
            flexShrink: 0,
          }}
        >
          <SidebarContent />
        </aside>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="md:hidden"
                style={{
                  position: "fixed",
                  inset: 0,
                  top: "56px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 30,
                }}
              />
              {/* Sidebar */}
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.2 }}
                className="md:hidden"
                style={{
                  position: "fixed",
                  top: "56px",
                  left: 0,
                  bottom: 0,
                  width: "280px",
                  backgroundColor: "#0a0a0a",
                  borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "24px 16px",
                  zIndex: 35,
                  overflowY: "auto",
                }}
              >
                <SidebarContent />
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main
          style={{
            flex: 1,
            padding: "24px",
            maxWidth: "900px",
            margin: "0 auto",
            width: "100%",
          }}
          className="dashboard-main"
        >
          {children}
        </main>
      </div>

      {/* CSS for responsive classes */}
      <style jsx global>{`
        .dashboard-main {
          padding: 16px;
        }
        @media (min-width: 768px) {
          .md\\:hidden {
            display: none !important;
          }
          .md\\:block {
            display: block !important;
          }
          .dashboard-main {
            padding: 32px 48px;
          }
        }
        @media (min-width: 1024px) {
          .dashboard-main {
            padding: 32px 64px;
          }
        }
        @media (max-width: 767px) {
          .hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

// Icon Components
function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

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
