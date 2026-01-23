"use client";

import { ReactNode } from "react";
import { useDocsTheme } from "@/app/docs/layout";

interface DocsCalloutProps {
  type: 'info' | 'warning' | 'tip' | 'note';
  title?: string;
  children: ReactNode;
}

const calloutStyles = {
  info: {
    bg: 'rgba(59, 130, 246, 0.1)',
    border: 'rgba(59, 130, 246, 0.3)',
    icon: '💡',
    titleColor: '#60a5fa',
  },
  warning: {
    bg: 'rgba(245, 158, 11, 0.1)',
    border: 'rgba(245, 158, 11, 0.3)',
    icon: '⚠️',
    titleColor: '#fbbf24',
  },
  tip: {
    bg: 'rgba(34, 197, 94, 0.1)',
    border: 'rgba(34, 197, 94, 0.3)',
    icon: '✨',
    titleColor: '#4ade80',
  },
  note: {
    bg: 'rgba(168, 85, 247, 0.1)',
    border: 'rgba(168, 85, 247, 0.3)',
    icon: '📝',
    titleColor: '#a78bfa',
  },
};

export function DocsCallout({ type, title, children }: DocsCalloutProps) {
  const { isDark } = useDocsTheme();
  const styles = calloutStyles[type];

  return (
    <div
      className="my-6 rounded-lg border p-4"
      style={{
        backgroundColor: styles.bg,
        borderColor: styles.border,
      }}
    >
      <div className="flex gap-3">
        <span className="text-lg">{styles.icon}</span>
        <div className="flex-1">
          {title && (
            <p
              className="mb-2 font-semibold"
              style={{ color: styles.titleColor }}
            >
              {title}
            </p>
          )}
          <div style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>{children}</div>
        </div>
      </div>
    </div>
  );
}
