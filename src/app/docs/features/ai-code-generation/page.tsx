"use client";

import { DocsContent, DocsPagination, DocsCallout } from "@/components/docs";
import { useDocsTheme } from "@/app/docs/layout";

export default function AICodeGenerationPage() {
  const { isDark } = useDocsTheme();

  const textPrimary = isDark ? '#ffffff' : '#0a0a0a';
  const textSecondary = isDark ? '#d1d5db' : '#4b5563';
  const bgSubtle = isDark ? '#0a0a0a' : '#f9fafb';
  const borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  return (
    <DocsContent
      title="AI Code Generation"
      description="Generate production-ready components from natural language descriptions."
    >
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Exact&apos;s AI code generation goes beyond simple autocomplete. Describe what you need in plain
        English, and Exact creates complete, production-ready components with proper structure,
        types, and styling.
      </p>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        How It Works
      </h2>
      <ol style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Describe your component</strong> — Use natural language to explain what
          you want. Be as specific or general as you like.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Review the generation</strong> — Exact shows you the complete code with
          syntax highlighting and a live preview when possible.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Iterate if needed</strong> — Ask for changes, additions, or a completely
          different approach. Exact maintains context throughout the conversation.
        </li>
        <li style={{ marginBottom: '12px' }}>
          <strong style={{ color: textPrimary }}>Insert into your project</strong> — Accept the code and it&apos;s automatically
          added to your project in the right location.
        </li>
      </ol>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Example Prompts
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '16px' }}>
        Here are some examples of effective prompts:
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        <div
          style={{
            backgroundColor: bgSubtle,
            border: `1px solid ${borderColor}`,
            borderRadius: '8px',
            padding: '16px',
          }}
        >
          <code style={{ color: textSecondary }}>
            &quot;Create a responsive navbar with a logo on the left, nav links in the center, and a login button on the right. Include a mobile hamburger menu.&quot;
          </code>
        </div>
        <div
          style={{
            backgroundColor: bgSubtle,
            border: `1px solid ${borderColor}`,
            borderRadius: '8px',
            padding: '16px',
          }}
        >
          <code style={{ color: textSecondary }}>
            &quot;Build a testimonial carousel with avatar, name, role, and quote. Add smooth transitions and dot indicators.&quot;
          </code>
        </div>
        <div
          style={{
            backgroundColor: bgSubtle,
            border: `1px solid ${borderColor}`,
            borderRadius: '8px',
            padding: '16px',
          }}
        >
          <code style={{ color: textSecondary }}>
            &quot;Create a form with email and password fields, validation, and error states. Use react-hook-form.&quot;
          </code>
        </div>
      </div>

      <DocsCallout type="tip" title="Better prompts = better code">
        <p>Include details about styling (Tailwind classes, color scheme), behavior (hover states, animations),
        and structure (TypeScript props interface) for more accurate generations.</p>
      </DocsCallout>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        What Gets Generated
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '16px' }}>
        Exact generates complete, production-ready code including:
      </p>
      <ul style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>TypeScript interfaces for all props</li>
        <li style={{ marginBottom: '8px' }}>Proper React hooks usage (useState, useEffect, etc.)</li>
        <li style={{ marginBottom: '8px' }}>Tailwind CSS classes with responsive variants</li>
        <li style={{ marginBottom: '8px' }}>ARIA attributes for accessibility</li>
        <li style={{ marginBottom: '8px' }}>Event handlers with proper TypeScript types</li>
        <li style={{ marginBottom: '8px' }}>Comments explaining complex logic</li>
      </ul>

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Framework Support
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Exact automatically detects your framework and generates appropriate code:
      </p>
      <ul style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary }}>React</strong> — Function components with hooks</li>
        <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary }}>Vue 3</strong> — Composition API with script setup</li>
        <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary }}>Svelte</strong> — Native Svelte components</li>
        <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary }}>Next.js</strong> — Server/Client components as appropriate</li>
      </ul>

      <DocsPagination
        prev={{ title: "Features Overview", href: "/docs/features" }}
        next={{ title: "Component Polish", href: "/docs/features/component-polish" }}
      />
    </DocsContent>
  );
}
