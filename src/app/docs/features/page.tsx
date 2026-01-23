"use client";

import { DocsContent, DocsPagination, DocsCallout } from "@/components/docs";
import { useDocsTheme } from "@/app/docs/layout";

export default function FeaturesPage() {
  const { isDark } = useDocsTheme();

  const textPrimary = isDark ? '#ffffff' : '#0a0a0a';
  const textSecondary = isDark ? '#d1d5db' : '#4b5563';
  const textMuted = isDark ? '#9ca3af' : '#6b7280';
  const bgSubtle = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)';
  const borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  return (
    <DocsContent
      title="Features Overview"
      description="Everything Exact can do to supercharge your frontend development."
    >
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Exact is packed with features designed specifically for frontend developers. From AI-powered
        code generation to automated accessibility improvements, here&apos;s what you can accomplish.
      </p>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Core Features
      </h2>

      <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
        <a
          href="/docs/features/ai-code-generation"
          style={{
            display: 'block',
            backgroundColor: bgSubtle,
            border: `1px solid ${borderColor}`,
            borderRadius: '12px',
            padding: '20px',
            textDecoration: 'none',
          }}
        >
          <h3 style={{ color: textPrimary, fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
            AI Code Generation
          </h3>
          <p style={{ color: textMuted, fontSize: '14px', lineHeight: '1.6' }}>
            Generate production-ready React, Vue, and Svelte components from natural language descriptions.
            Includes proper TypeScript types, Tailwind styling, and accessibility attributes.
          </p>
        </a>

        <a
          href="/docs/features/component-polish"
          style={{
            display: 'block',
            backgroundColor: bgSubtle,
            border: `1px solid ${borderColor}`,
            borderRadius: '12px',
            padding: '20px',
            textDecoration: 'none',
          }}
        >
          <h3 style={{ color: textPrimary, fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
            Component Polish
          </h3>
          <p style={{ color: textMuted, fontSize: '14px', lineHeight: '1.6' }}>
            Clean up messy components automatically. Exact improves code organization, removes
            redundancy, and applies consistent formatting while preserving functionality.
          </p>
        </a>

        <a
          href="/docs/features/refactoring"
          style={{
            display: 'block',
            backgroundColor: bgSubtle,
            border: `1px solid ${borderColor}`,
            borderRadius: '12px',
            padding: '20px',
            textDecoration: 'none',
          }}
        >
          <h3 style={{ color: textPrimary, fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
            Safe Refactoring
          </h3>
          <p style={{ color: textMuted, fontSize: '14px', lineHeight: '1.6' }}>
            Make sweeping changes with confidence. Exact shows clear diffs before applying
            modifications and ensures your refactors don&apos;t break existing functionality.
          </p>
        </a>
      </div>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Additional Capabilities
      </h2>

      <ul style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Layout & Spacing Fixes</strong> — Automatically identify and fix
          inconsistent margins, padding, and alignment issues across your components.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Accessibility Improvements</strong> — Add proper ARIA labels, focus
          states, keyboard navigation, and semantic HTML with a single command.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Design System Adherence</strong> — Exact learns your design tokens and
          ensures all generated code follows your established patterns.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Multi-file Editing</strong> — Make coordinated changes across multiple
          files simultaneously while maintaining consistency.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Code Explanation</strong> — Get detailed explanations of complex code
          sections to help you understand and maintain your codebase.
        </li>
      </ul>

      <DocsCallout type="tip" title="Framework Support">
        <p>Exact works with React, Vue, Svelte, Next.js, Nuxt, SvelteKit, Astro, and more.
        It automatically detects your framework and adapts its suggestions accordingly.</p>
      </DocsCallout>

      <DocsPagination
        prev={{ title: "Quick Start", href: "/docs/getting-started/quick-start" }}
        next={{ title: "AI Code Generation", href: "/docs/features/ai-code-generation" }}
      />
    </DocsContent>
  );
}
