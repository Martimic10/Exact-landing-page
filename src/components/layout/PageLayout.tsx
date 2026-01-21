"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Subtle gradient overlay for depth */}
      <div className="pointer-events-none fixed inset-0 bg-linear-to-b from-transparent via-transparent to-black/20" />

      {/* Main content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
