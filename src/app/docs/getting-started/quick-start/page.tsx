"use client";

import { DocsContent, DocsPagination, DocsCallout } from "@/components/docs";
import { useDocsTheme } from "@/app/docs/layout";

export default function QuickStartPage() {
  const { isDark } = useDocsTheme();

  const textPrimary = isDark ? '#ffffff' : '#0a0a0a';
  const textSecondary = isDark ? '#d1d5db' : '#4b5563';
  const textMuted = isDark ? '#9ca3af' : '#6b7280';
  const bgSubtle = isDark ? '#0a0a0a' : '#f9fafb';
  const borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const kbdBg = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';

  return (
    <DocsContent
      title="Quick Start"
      description="Create your first component with Exact in 2 minutes."
    >
      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '16px' }}>
        Step 1: Open a Project
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Launch Exact and open your React, Vue, or Svelte project. Exact will automatically detect your
        framework and configure itself accordingly.
      </p>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Step 2: Start a Conversation
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '16px' }}>
        Press <kbd style={{ backgroundColor: kbdBg, padding: '4px 8px', borderRadius: '4px', fontSize: '14px' }}>Cmd+K</kbd> (or <kbd style={{ backgroundColor: kbdBg, padding: '4px 8px', borderRadius: '4px', fontSize: '14px' }}>Ctrl+K</kbd> on Windows/Linux) to open the AI chat.
        Describe what you want to build:
      </p>

      <div
        style={{
          backgroundColor: bgSubtle,
          border: `1px solid ${borderColor}`,
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px',
        }}
      >
        <p style={{ color: textMuted, fontSize: '14px', marginBottom: '8px' }}>You:</p>
        <p style={{ color: textSecondary }}>
          &quot;Create a pricing card component with a title, price, feature list, and CTA button.
          Use Tailwind CSS and make it look modern with a dark theme.&quot;
        </p>
      </div>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Step 3: Review and Apply
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '16px' }}>
        Exact will generate the component and show you a preview. You can:
      </p>
      <ul style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary }}>Accept</strong> — Insert the code directly into your project</li>
        <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary }}>Edit</strong> — Ask for modifications before accepting</li>
        <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary }}>Regenerate</strong> — Get a different approach</li>
      </ul>

      <DocsCallout type="info" title="Generated Code Example">
        <p>Exact creates production-ready code with proper TypeScript types, accessibility attributes,
        and consistent styling that matches your existing codebase.</p>
      </DocsCallout>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Step 4: Iterate and Refine
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Not quite right? Continue the conversation to make adjustments:
      </p>

      <div
        style={{
          backgroundColor: bgSubtle,
          border: `1px solid ${borderColor}`,
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px',
        }}
      >
        <p style={{ color: textMuted, fontSize: '14px', marginBottom: '8px' }}>You:</p>
        <p style={{ color: textSecondary }}>
          &quot;Add a popular badge to the top right corner and make the CTA button pulse on hover.&quot;
        </p>
      </div>

      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Exact understands context from previous messages, so you can have natural conversations
        about your code without repeating yourself.
      </p>

      <DocsCallout type="tip" title="Keyboard Shortcuts">
        <p>Speed up your workflow with shortcuts: <kbd style={{ backgroundColor: kbdBg, padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>Cmd+Enter</kbd> to accept,
        <kbd style={{ backgroundColor: kbdBg, padding: '2px 6px', borderRadius: '4px', fontSize: '12px', marginLeft: '4px' }}>Cmd+R</kbd> to regenerate,
        <kbd style={{ backgroundColor: kbdBg, padding: '2px 6px', borderRadius: '4px', fontSize: '12px', marginLeft: '4px' }}>Esc</kbd> to cancel.</p>
      </DocsCallout>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Next Steps
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Now that you&apos;ve created your first component, explore what else Exact can do:
      </p>
      <ul style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>
          <a href="/docs/features" style={{ color: '#60a5fa', textDecoration: 'underline' }}>Features Overview</a> — Discover all of Exact&apos;s capabilities
        </li>
        <li style={{ marginBottom: '8px' }}>
          <a href="/docs/keyboard-shortcuts" style={{ color: '#60a5fa', textDecoration: 'underline' }}>Keyboard Shortcuts</a> — Master the hotkeys
        </li>
        <li style={{ marginBottom: '8px' }}>
          <a href="/docs/settings" style={{ color: '#60a5fa', textDecoration: 'underline' }}>Settings</a> — Customize Exact to your preferences
        </li>
      </ul>

      <DocsPagination
        prev={{ title: "Installation", href: "/docs/getting-started/installation" }}
        next={{ title: "Features Overview", href: "/docs/features" }}
      />
    </DocsContent>
  );
}
