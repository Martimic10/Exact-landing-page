"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const resourceLinks = [
  {
    label: "Docs",
    href: "/docs",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    )
  },
  {
    label: "Changelog",
    href: "/changelog",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    )
  },
  {
    label: "Community",
    href: "/community",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
];

const mobileNavLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Docs", href: "/docs" },
  { label: "Changelog", href: "/changelog" },
  { label: "Community", href: "/community" },
];

interface HeaderProps {
  solidBackground?: boolean;
}

export function Header({ solidBackground = false }: HeaderProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [signInHovered, setSignInHovered] = useState(false);
  const [downloadHovered, setDownloadHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed left-0 right-0 top-0 z-50 border-b border-white/5 ${solidBackground ? 'bg-[#0a0a0a]' : 'bg-black/80 backdrop-blur-md'}`}
      >
        <div className="w-full" style={{ paddingLeft: '48px', paddingRight: '48px' }}>
          <nav className="flex h-16 items-center justify-between">
            {/* Logo - Left */}
            <a
              href="/"
              className="flex items-center gap-1 text-lg font-medium text-white"
            >
              <img
                src="/exact-logo.png"
                alt="Exact"
                style={{ height: '40px', width: 'auto' }}
              />
              Exact
            </a>

            {/* Center nav links - hidden on mobile */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="text-sm transition-colors duration-200"
                  style={{
                    color: hoveredLink === link.label ? '#e5e7eb' : '#6b7280'
                  }}
                >
                  {link.label}
                </a>
              ))}

              {/* Resources dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setResourcesOpen(true);
                  setHoveredLink("Resources");
                }}
                onMouseLeave={() => {
                  setResourcesOpen(false);
                  setHoveredLink(null);
                }}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm transition-colors duration-200"
                  style={{
                    color: hoveredLink === "Resources" ? '#e5e7eb' : '#6b7280'
                  }}
                >
                  Resources
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: resourcesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s'
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <AnimatePresence>
                  {resourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 top-full pt-4"
                      style={{ transform: 'translateX(-50%)' }}
                    >
                      <div
                        className="overflow-hidden rounded-xl border border-white/10"
                        style={{
                          backgroundColor: '#1a1a1a',
                          minWidth: '200px',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                        }}
                      >
                        <div
                          className="flex flex-col gap-1"
                          style={{ padding: '12px' }}
                        >
                          {resourceLinks.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
                            >
                              {link.icon}
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right side - Sign in and Download buttons */}
            <div className="flex items-center gap-3">
              {/* Sign in - shows on mobile, Download shows on desktop */}
              <a
                href="/signin"
                onMouseEnter={() => setSignInHovered(true)}
                onMouseLeave={() => setSignInHovered(false)}
                className="sm:hidden transition-all duration-200"
                style={{
                  backgroundColor: signInHovered ? '#e5e5e5' : '#ffffff',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Sign in
              </a>

              {/* Sign in text link - desktop only */}
              <a
                href="/signin"
                onMouseEnter={() => setSignInHovered(true)}
                onMouseLeave={() => setSignInHovered(false)}
                className="hidden sm:block transition-colors duration-200"
                style={{
                  color: signInHovered ? '#ffffff' : '#9ca3af',
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Sign in
              </a>

              {/* Download - filled button, hidden on mobile */}
              <a
                href="/download"
                onMouseEnter={() => setDownloadHovered(true)}
                onMouseLeave={() => setDownloadHovered(false)}
                className="hidden sm:block transition-all duration-200"
                style={{
                  backgroundColor: downloadHovered ? '#e5e5e5' : '#ffffff',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  color: '#000000',
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Download
              </a>

              {/* Hamburger button - visible on mobile only */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="flex h-10 w-10 items-center justify-center md:hidden"
                aria-label="Open menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-white"
                >
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 bg-black md:hidden"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-white"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>

            {/* Mobile nav links */}
            <nav className="flex h-full flex-col justify-start px-6 pt-48">
              {mobileNavLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-3xl font-medium text-white"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
