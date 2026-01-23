"use client";

import { DocsContent, DocsPagination, DocsCallout } from "@/components/docs";
import { useDocsTheme } from "@/app/docs/layout";

export default function ComponentPolishPage() {
  const { isDark } = useDocsTheme();

  const textPrimary = isDark ? '#ffffff' : '#0a0a0a';
  const textSecondary = isDark ? '#d1d5db' : '#4b5563';
  const bgSubtle = isDark ? '#0a0a0a' : '#f9fafb';
  const borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const kbdBg = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';

  return (
    <DocsContent
      title="Component Polish"
      description="Automatically clean up and improve your existing components."
    >
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Component Polish analyzes your existing code and applies improvements while preserving
        functionality. It&apos;s like having a senior developer review and clean up your code instantly.
      </p>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        What Gets Polished
      </h2>
      <ul style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>JSX Structure</strong> — Reorganizes nested elements for better
          readability and removes unnecessary wrapper divs.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Tailwind Classes</strong> — Removes duplicate classes, orders them
          consistently, and suggests more efficient alternatives.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Hook Organization</strong> — Moves hooks to the top of components,
          groups related state, and identifies missing dependencies.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Type Definitions</strong> — Adds missing TypeScript types and improves
          existing type definitions for better type safety.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Visual Hierarchy</strong> — Improves spacing, sizing, and contrast for
          better visual consistency.
        </li>
      </ul>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        How to Use
      </h2>
      <ol style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>Select the component code you want to polish</li>
        <li style={{ marginBottom: '8px' }}>Press <kbd style={{ backgroundColor: kbdBg, padding: '4px 8px', borderRadius: '4px', fontSize: '14px' }}>Cmd+Shift+P</kbd> and type &quot;Polish&quot;</li>
        <li style={{ marginBottom: '8px' }}>Review the suggested changes in the diff view</li>
        <li style={{ marginBottom: '8px' }}>Accept all changes or cherry-pick specific improvements</li>
      </ol>

      <DocsCallout type="info" title="Non-destructive">
        <p>Component Polish never changes your code without showing you the diff first.
        You&apos;re always in control of what gets applied.</p>
      </DocsCallout>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Example Before/After
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '16px' }}>
        Before:
      </p>
      <div
        style={{
          backgroundColor: bgSubtle,
          border: `1px solid ${borderColor}`,
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '16px',
          fontFamily: 'monospace',
          fontSize: '13px',
        }}
      >
        <pre style={{ color: textSecondary, margin: 0, whiteSpace: 'pre-wrap' }}>{`<div className="flex flex-col flex-col gap-4 p-4 p-4">
  <div>
    <h2 className="text-xl text-xl font-bold">{title}</h2>
  </div>
  <div>
    <p>{description}</p>
  </div>
</div>`}</pre>
      </div>

      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '16px' }}>
        After:
      </p>
      <div
        style={{
          backgroundColor: bgSubtle,
          border: `1px solid ${borderColor}`,
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px',
          fontFamily: 'monospace',
          fontSize: '13px',
        }}
      >
        <pre style={{ color: textSecondary, margin: 0, whiteSpace: 'pre-wrap' }}>{`<div className="flex flex-col gap-4 p-4">
  <h2 className="text-xl font-bold">{title}</h2>
  <p>{description}</p>
</div>`}</pre>
      </div>

      <DocsCallout type="tip" title="Batch Processing">
        <p>Polish multiple files at once by selecting a folder in the sidebar and running
        &quot;Polish All Components&quot; from the command palette.</p>
      </DocsCallout>

      <DocsPagination
        prev={{ title: "AI Code Generation", href: "/docs/features/ai-code-generation" }}
        next={{ title: "Refactoring", href: "/docs/features/refactoring" }}
      />
    </DocsContent>
  );
}
