"use client";

import { motion } from "framer-motion";

interface DocsHeaderProps {
  onMobileMenuToggle: () => void;
}

export function DocsHeader({ onMobileMenuToggle }: DocsHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md"
    >
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left side - Logo and mobile menu */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={onMobileMenuToggle}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label="Toggle menu"
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

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-lg font-medium text-white">
            <img
              src="/exact-logo.png"
              alt="Exact"
              style={{ height: '32px', width: 'auto' }}
            />
            <span>Exact</span>
          </a>

          {/* Docs badge */}
          <span
            className="rounded-md px-2 py-1 text-xs font-medium"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#9ca3af' }}
          >
            Docs
          </span>
        </div>

        {/* Right side - Search and back to site */}
        <div className="flex items-center gap-4">
          {/* Search button */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-400 transition-colors hover:border-white/20 hover:text-gray-300"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden rounded bg-white/10 px-1.5 py-0.5 text-xs sm:inline">
              ⌘K
            </kbd>
          </button>

          {/* Back to site */}
          <a
            href="/"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            ← Back to site
          </a>
        </div>
      </div>
    </motion.header>
  );
}
