"use client";

import { DocsContent, DocsPagination, DocsCallout } from "@/components/docs";
import { useDocsTheme } from "@/app/docs/layout";

export default function ChangelogPage() {
  const { isDark } = useDocsTheme();

  const textPrimary = isDark ? '#ffffff' : '#0a0a0a';
  const textSecondary = isDark ? '#d1d5db' : '#4b5563';
  const textMuted = isDark ? '#6b7280' : '#9ca3af';

  const releases = [
    {
      version: "1.2.0",
      date: "January 20, 2026",
      tag: "Latest",
      changes: [
        { type: "new", text: "Multi-file refactoring support" },
        { type: "new", text: "Vue 3 Composition API support" },
        { type: "improved", text: "50% faster AI response times" },
        { type: "improved", text: "Better TypeScript type inference" },
        { type: "fixed", text: "Component polish now preserves comments" },
        { type: "fixed", text: "Fixed sidebar scroll position on navigation" },
      ]
    },
    {
      version: "1.1.0",
      date: "January 5, 2026",
      changes: [
        { type: "new", text: "Svelte and SvelteKit support" },
        { type: "new", text: "Custom design system configuration" },
        { type: "new", text: "Keyboard shortcut customization" },
        { type: "improved", text: "Enhanced accessibility suggestions" },
        { type: "improved", text: "Better error messages" },
        { type: "fixed", text: "Fixed dark mode flickering on load" },
      ]
    },
    {
      version: "1.0.0",
      date: "December 15, 2025",
      changes: [
        { type: "new", text: "Initial release" },
        { type: "new", text: "AI code generation for React components" },
        { type: "new", text: "Component Polish feature" },
        { type: "new", text: "Safe refactoring with diff preview" },
        { type: "new", text: "VS Code extension" },
        { type: "new", text: "Desktop app for macOS, Windows, and Linux" },
      ]
    },
    {
      version: "0.9.0",
      date: "November 30, 2025",
      tag: "Beta",
      changes: [
        { type: "new", text: "Public beta release" },
        { type: "new", text: "Tailwind CSS integration" },
        { type: "new", text: "Real-time code preview" },
        { type: "improved", text: "Reduced memory usage by 40%" },
      ]
    },
  ];

  const typeStyles = {
    new: { bg: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', label: 'New' },
    improved: { bg: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', label: 'Improved' },
    fixed: { bg: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', label: 'Fixed' },
  };

  return (
    <DocsContent
      title="Changelog"
      description="See what's new in each version of Exact."
    >
      <DocsCallout type="tip" title="Stay updated">
        <p>Follow us on <a href="https://x.com" style={{ color: '#60a5fa', textDecoration: 'underline' }}>X (Twitter)</a> to
        get notified about new releases and features.</p>
      </DocsCallout>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginTop: '32px' }}>
        {releases.map((release) => (
          <div key={release.version}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, margin: 0 }}>
                v{release.version}
              </h2>
              {release.tag && (
                <span
                  style={{
                    backgroundColor: release.tag === 'Latest' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(168, 85, 247, 0.2)',
                    color: release.tag === 'Latest' ? '#4ade80' : '#a78bfa',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 500,
                  }}
                >
                  {release.tag}
                </span>
              )}
            </div>
            <p style={{ color: textMuted, fontSize: '14px', marginBottom: '16px' }}>
              {release.date}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {release.changes.map((change, index) => {
                const style = typeStyles[change.type as keyof typeof typeStyles];
                return (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: style.bg,
                        color: style.color,
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      {style.label}
                    </span>
                    <span style={{ color: textSecondary, lineHeight: '1.5' }}>{change.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <DocsPagination
        prev={{ title: "FAQ", href: "/docs/faq" }}
      />
    </DocsContent>
  );
}
