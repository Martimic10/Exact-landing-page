"use client";

import { DocsContent, DocsPagination, DocsCallout } from "@/components/docs";
import { useDocsTheme } from "@/app/docs/layout";

export default function IntroductionPage() {
  const { isDark } = useDocsTheme();

  const textPrimary = isDark ? '#ffffff' : '#0a0a0a';
  const textSecondary = isDark ? '#d1d5db' : '#4b5563';

  return (
    <DocsContent
      title="Welcome to Exact"
      description="The AI code editor built for precision. Write less, build more, ship faster."
    >
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Exact is a next-generation AI-powered code editor designed specifically for frontend developers.
        Unlike general-purpose AI coding tools, Exact understands the nuances of UI development —
        from pixel-perfect component creation to accessible, maintainable code.
      </p>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Why Exact?
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Most AI coding tools generate generic code that requires significant cleanup. Exact is different.
        It&apos;s trained on best practices for React, Vue, Svelte, and modern CSS frameworks like Tailwind.
        Every suggestion is optimized for readability, performance, and maintainability.
      </p>

      <DocsCallout type="tip" title="Pro Tip">
        <p>Exact works best when you provide context about your design system. The more it understands your
        patterns, the more consistent your codebase becomes.</p>
      </DocsCallout>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        What can Exact do for you?
      </h2>
      <ul style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Generate pixel-perfect components</strong> — Describe what you need, and Exact creates
          production-ready React components with proper TypeScript types and Tailwind styling.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Polish existing code</strong> — Paste in messy components and watch Exact clean them up
          while preserving functionality.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Fix layout and spacing issues</strong> — Exact identifies inconsistent margins, padding,
          and alignment problems automatically.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Improve accessibility</strong> — Add proper ARIA labels, focus states, and keyboard
          navigation with a single command.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Refactor safely</strong> — Make sweeping changes with confidence. Exact shows clear
          diffs before applying any modifications.
        </li>
      </ul>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Built for Modern Workflows
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Exact integrates seamlessly with your existing development environment. Whether you&apos;re using VS Code,
        working from the command line, or building in the browser, Exact adapts to your workflow — not the
        other way around.
      </p>

      <DocsCallout type="info" title="Get Started">
        <p>Ready to try Exact? Head to the <a href="/docs/getting-started/installation" style={{ color: '#60a5fa', textDecoration: 'underline' }}>Installation guide</a> to
        get set up in under a minute.</p>
      </DocsCallout>

      <DocsPagination
        next={{ title: "Installation", href: "/docs/getting-started/installation" }}
      />
    </DocsContent>
  );
}
