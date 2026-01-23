"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useDocsTheme } from "@/app/docs/layout";

interface DocsContentProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export function DocsContent({ children, title, description }: DocsContentProps) {
  const { isDark } = useDocsTheme();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="docs-content"
    >
      <header className="mb-8">
        <h1
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
          style={{ color: isDark ? '#ffffff' : '#0a0a0a' }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="mt-3 text-lg"
            style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
          >
            {description}
          </p>
        )}
      </header>
      <div
        className="prose-docs"
        style={{
          ['--text-primary' as string]: isDark ? '#ffffff' : '#0a0a0a',
          ['--text-secondary' as string]: isDark ? '#d1d5db' : '#4b5563',
          ['--text-muted' as string]: isDark ? '#9ca3af' : '#6b7280',
          ['--bg-subtle' as string]: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
          ['--bg-muted' as string]: isDark ? '#0a0a0a' : '#f9fafb',
          ['--border-color' as string]: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        } as React.CSSProperties}
      >
        {children}
      </div>
    </motion.article>
  );
}
