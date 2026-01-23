"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useDocsTheme } from "@/app/docs/layout";
import { getNavItem } from "@/lib/docs-navigation";

interface PaginationLink {
  title: string;
  href: string;
}

interface DocsPaginationProps {
  prev?: PaginationLink;
  next?: PaginationLink;
}

export function DocsPagination({ prev, next }: DocsPaginationProps) {
  const { isDark } = useDocsTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get full nav item data including description
  const prevItem = prev ? getNavItem(prev.href) : undefined;
  const nextItem = next ? getNavItem(next.href) : undefined;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!prev && !next) return null;

  return (
    <nav
      style={{
        marginTop: isMobile ? '48px' : '64px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
      aria-label="Pagination"
    >
      {next && (
        <Link
          href={next.href}
          onClick={scrollToTop}
          scroll={false}
          style={{
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '8px' : '16px',
            padding: isMobile ? '14px 16px' : '16px 20px',
            borderRadius: '12px',
            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            backgroundColor: 'transparent',
            textDecoration: 'none',
            transition: 'background-color 0.15s, border-color 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)';
            e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
          }}
        >
          <div style={{ order: isMobile ? 2 : 1 }}>
            <div style={{ fontWeight: 500, color: isDark ? '#ffffff' : '#0a0a0a', marginBottom: '4px', fontSize: isMobile ? '15px' : '16px' }}>
              {next.title}
            </div>
            {nextItem?.description && (
              <div style={{ fontSize: isMobile ? '13px' : '14px', color: isDark ? '#9ca3af' : '#6b7280' }}>
                {nextItem.description}
              </div>
            )}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: isDark ? '#9ca3af' : '#6b7280',
            fontSize: isMobile ? '13px' : '14px',
            order: isMobile ? 1 : 2,
          }}>
            Next
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
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </Link>
      )}

      {prev && (
        <Link
          href={prev.href}
          onClick={scrollToTop}
          scroll={false}
          style={{
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '8px' : '16px',
            padding: isMobile ? '14px 16px' : '16px 20px',
            borderRadius: '12px',
            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            backgroundColor: 'transparent',
            textDecoration: 'none',
            transition: 'background-color 0.15s, border-color 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)';
            e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: isDark ? '#9ca3af' : '#6b7280', fontSize: isMobile ? '13px' : '14px' }}>
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
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Previous
          </div>
          <div style={{ textAlign: isMobile ? 'left' : 'right' }}>
            <div style={{ fontWeight: 500, color: isDark ? '#ffffff' : '#0a0a0a', marginBottom: '4px', fontSize: isMobile ? '15px' : '16px' }}>
              {prev.title}
            </div>
            {prevItem?.description && (
              <div style={{ fontSize: isMobile ? '13px' : '14px', color: isDark ? '#9ca3af' : '#6b7280' }}>
                {prevItem.description}
              </div>
            )}
          </div>
        </Link>
      )}
    </nav>
  );
}
