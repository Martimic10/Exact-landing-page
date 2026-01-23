"use client";

import { DocsContent, DocsPagination, DocsCallout } from "@/components/docs";
import { useDocsTheme } from "@/app/docs/layout";

export default function RefactoringPage() {
  const { isDark } = useDocsTheme();

  const textPrimary = isDark ? '#ffffff' : '#0a0a0a';
  const textSecondary = isDark ? '#d1d5db' : '#4b5563';
  const bgSubtle = isDark ? '#0a0a0a' : '#f9fafb';
  const borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const kbdBg = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';

  return (
    <DocsContent
      title="Safe Refactoring"
      description="Make sweeping changes with confidence using AI-powered refactoring."
    >
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Refactoring can be scary — one wrong move and you break your entire app. Exact&apos;s
        refactoring tools show you exactly what will change before any code is modified,
        making large-scale changes safe and predictable.
      </p>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Types of Refactoring
      </h2>

      <h3 style={{ color: textPrimary, fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>
        Rename Across Files
      </h3>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Rename a component, function, or variable and Exact updates every reference across your
        entire codebase. Includes imports, exports, and even JSX usage.
      </p>

      <h3 style={{ color: textPrimary, fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>
        Extract Component
      </h3>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Select a chunk of JSX and extract it into a new component. Exact automatically identifies
        which props need to be passed and creates the proper TypeScript interface.
      </p>

      <h3 style={{ color: textPrimary, fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>
        Convert to TypeScript
      </h3>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Convert JavaScript files to TypeScript with proper type annotations. Exact infers types
        from usage patterns and adds appropriate interfaces.
      </p>

      <h3 style={{ color: textPrimary, fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '12px' }}>
        Modernize Syntax
      </h3>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Update legacy code patterns to modern equivalents: class components to hooks, var to const,
        callbacks to async/await, and more.
      </p>

      <DocsCallout type="warning" title="Always review diffs">
        <p>While Exact is highly accurate, always review the diff before applying changes.
        Large refactors should be tested thoroughly before committing.</p>
      </DocsCallout>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        The Diff View
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '16px' }}>
        Before any refactor is applied, Exact shows you a comprehensive diff view:
      </p>
      <ul style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}><span style={{ color: '#4ade80' }}>Green</span> — Lines being added</li>
        <li style={{ marginBottom: '8px' }}><span style={{ color: '#f87171' }}>Red</span> — Lines being removed</li>
        <li style={{ marginBottom: '8px' }}><span style={{ color: '#fbbf24' }}>Yellow</span> — Lines being modified</li>
      </ul>

      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        You can accept all changes, reject all, or go file-by-file to cherry-pick what you want.
      </p>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Natural Language Refactoring
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '16px' }}>
        You can also describe refactors in plain English:
      </p>
      <div
        style={{
          backgroundColor: bgSubtle,
          border: `1px solid ${borderColor}`,
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '16px',
        }}
      >
        <code style={{ color: textSecondary }}>
          &quot;Convert all onClick handlers in this file to use the new analytics wrapper&quot;
        </code>
      </div>
      <div
        style={{
          backgroundColor: bgSubtle,
          border: `1px solid ${borderColor}`,
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px',
        }}
      >
        <code style={{ color: textSecondary }}>
          &quot;Replace all instances of the old Button component with the new one from @/components/ui&quot;
        </code>
      </div>

      <DocsCallout type="tip" title="Undo Support">
        <p>Every refactor can be undone with <kbd style={{ backgroundColor: kbdBg, padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>Cmd+Z</kbd>.
        Exact keeps a history of all changes so you can always go back.</p>
      </DocsCallout>

      <DocsPagination
        prev={{ title: "Component Polish", href: "/docs/features/component-polish" }}
        next={{ title: "Keyboard Shortcuts", href: "/docs/keyboard-shortcuts" }}
      />
    </DocsContent>
  );
}
