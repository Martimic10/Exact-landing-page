"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { docsNavigation } from "@/lib/docs-navigation";

interface DocsMobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DocsMobileNav({ isOpen, onClose }: DocsMobileNavProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed bottom-0 left-0 top-0 z-50 w-80 overflow-y-auto bg-black border-r border-white/10 lg:hidden"
          >
            {/* Header */}
            <div className="flex h-16 items-center justify-between border-b border-white/10 px-6">
              <a href="/" className="flex items-center gap-2 text-lg font-medium text-white">
                <img
                  src="/exact-logo.png"
                  alt="Exact"
                  style={{ height: '28px', width: 'auto' }}
                />
                <span>Exact</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center"
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
            </div>

            {/* Navigation */}
            <nav className="p-6 space-y-8">
              {docsNavigation.map((section) => (
                <div key={section.title}>
                  <h3
                    className="mb-3 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: '#6b7280' }}
                  >
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            onClick={onClose}
                            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors"
                            style={{
                              backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                              color: isActive ? '#ffffff' : '#9ca3af',
                            }}
                          >
                            <span>{item.title}</span>
                            {item.badge && (
                              <span
                                className="rounded-full px-2 py-0.5 text-xs font-medium"
                                style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}
                              >
                                {item.badge}
                              </span>
                            )}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
