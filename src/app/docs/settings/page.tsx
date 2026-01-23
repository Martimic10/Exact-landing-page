"use client";

import { DocsContent, DocsPagination, DocsCallout } from "@/components/docs";
import { useDocsTheme } from "@/app/docs/layout";

export default function SettingsPage() {
  const { isDark } = useDocsTheme();

  const textPrimary = isDark ? '#ffffff' : '#0a0a0a';
  const textSecondary = isDark ? '#d1d5db' : '#4b5563';
  const bgSubtle = isDark ? '#0a0a0a' : '#f9fafb';
  const borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const kbdBg = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';

  return (
    <DocsContent
      title="Settings"
      description="Configure Exact to match your preferences and workflow."
    >
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Access settings by pressing <kbd style={{ backgroundColor: kbdBg, padding: '4px 8px', borderRadius: '4px', fontSize: '14px' }}>Cmd+,</kbd> or clicking the gear icon
        in the bottom left corner.
      </p>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        General Settings
      </h2>
      <ul style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Theme</strong> — Choose between Dark (default), Light, or System theme.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Font Size</strong> — Adjust the editor font size (12-24px).
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Font Family</strong> — Select your preferred monospace font.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Tab Size</strong> — Set indentation width (2 or 4 spaces).
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Auto Save</strong> — Enable automatic saving after changes.
        </li>
      </ul>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        AI Settings
      </h2>
      <ul style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>AI Model</strong> — Choose the AI model for code generation
          (Standard, Advanced, or Custom).
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Response Style</strong> — Concise (shorter responses) or
          Detailed (more explanation).
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Auto-suggest</strong> — Enable inline code suggestions as you type.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Context Window</strong> — How much surrounding code to include
          in AI requests.
        </li>
      </ul>

      <DocsCallout type="tip" title="Design System Context">
        <p>Add your design system documentation or Tailwind config to give Exact more context
        about your project&apos;s styling conventions.</p>
      </DocsCallout>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Editor Settings
      </h2>
      <ul style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Line Numbers</strong> — Show or hide line numbers.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Minimap</strong> — Show a preview of your code on the right side.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Word Wrap</strong> — Wrap long lines or scroll horizontally.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Bracket Matching</strong> — Highlight matching brackets.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Format on Save</strong> — Automatically format code when saving.
        </li>
      </ul>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Project Settings
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '16px' }}>
        Create a <code style={{ backgroundColor: kbdBg, padding: '2px 6px', borderRadius: '4px' }}>.exactrc</code> file in your project root to configure project-specific settings:
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
        <pre style={{ color: textSecondary, margin: 0 }}>{`{
  "framework": "react",
  "styling": "tailwind",
  "typescript": true,
  "componentPath": "src/components",
  "designSystem": "./design-tokens.json"
}`}</pre>
      </div>

      <DocsCallout type="info" title="Settings Sync">
        <p>Enable Settings Sync to keep your preferences consistent across devices.
        Go to Settings → Sync to sign in and enable sync.</p>
      </DocsCallout>

      <DocsPagination
        prev={{ title: "Keyboard Shortcuts", href: "/docs/keyboard-shortcuts" }}
        next={{ title: "Billing", href: "/docs/billing" }}
      />
    </DocsContent>
  );
}
