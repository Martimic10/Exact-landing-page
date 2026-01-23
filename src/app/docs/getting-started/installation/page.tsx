"use client";

import { DocsContent, DocsPagination, DocsCallout } from "@/components/docs";
import { useDocsTheme } from "@/app/docs/layout";

export default function InstallationPage() {
  const { isDark } = useDocsTheme();

  const textPrimary = isDark ? '#ffffff' : '#0a0a0a';
  const textSecondary = isDark ? '#d1d5db' : '#4b5563';
  const bgSubtle = isDark ? '#0a0a0a' : '#f9fafb';
  const borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  return (
    <DocsContent
      title="Installation"
      description="Get Exact up and running in under a minute."
    >
      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '32px', marginBottom: '16px' }}>
        System Requirements
      </h2>
      <ul style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>macOS 12 or later, Windows 10 or later, or Linux</li>
        <li style={{ marginBottom: '8px' }}>Node.js 18 or later (for CLI usage)</li>
        <li style={{ marginBottom: '8px' }}>4GB RAM minimum, 8GB recommended</li>
        <li style={{ marginBottom: '8px' }}>Active internet connection for AI features</li>
      </ul>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Download the App
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        The fastest way to get started is to download the Exact desktop app:
      </p>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
        <a
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: isDark ? '#ffffff' : '#0a0a0a',
            color: isDark ? '#000000' : '#ffffff',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: 500,
            fontSize: '14px',
          }}
        >
          Download for macOS
        </a>
        <a
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
            color: textPrimary,
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: 500,
            fontSize: '14px',
            border: `1px solid ${borderColor}`,
          }}
        >
          Download for Windows
        </a>
        <a
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
            color: textPrimary,
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: 500,
            fontSize: '14px',
            border: `1px solid ${borderColor}`,
          }}
        >
          Download for Linux
        </a>
      </div>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Install via CLI
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '16px' }}>
        Prefer the command line? Install Exact globally with npm:
      </p>

      <div
        style={{
          backgroundColor: bgSubtle,
          border: `1px solid ${borderColor}`,
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px',
          fontFamily: 'monospace',
        }}
      >
        <code style={{ color: textSecondary }}>npm install -g @exact/cli</code>
      </div>

      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '16px' }}>
        Or with Homebrew on macOS:
      </p>

      <div
        style={{
          backgroundColor: bgSubtle,
          border: `1px solid ${borderColor}`,
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px',
          fontFamily: 'monospace',
        }}
      >
        <code style={{ color: textSecondary }}>brew install exact</code>
      </div>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        VS Code Extension
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '16px' }}>
        For VS Code users, install the Exact extension directly from the marketplace:
      </p>
      <ol style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>Open VS Code</li>
        <li style={{ marginBottom: '8px' }}>Go to Extensions (Cmd+Shift+X / Ctrl+Shift+X)</li>
        <li style={{ marginBottom: '8px' }}>Search for &quot;Exact&quot;</li>
        <li style={{ marginBottom: '8px' }}>Click Install</li>
      </ol>

      <DocsCallout type="tip" title="First-time setup">
        <p>After installation, you&apos;ll need to sign in with your Exact account. If you don&apos;t have one yet,
        you can create a free account during the setup process.</p>
      </DocsCallout>

      <DocsPagination
        prev={{ title: "Introduction", href: "/docs/introduction" }}
        next={{ title: "Quick Start", href: "/docs/getting-started/quick-start" }}
      />
    </DocsContent>
  );
}
