"use client";

import { DocsContent, DocsPagination, DocsCallout } from "@/components/docs";
import { useDocsTheme } from "@/app/docs/layout";

export default function KeyboardShortcutsPage() {
  const { isDark } = useDocsTheme();

  const textPrimary = isDark ? '#ffffff' : '#0a0a0a';
  const textSecondary = isDark ? '#d1d5db' : '#4b5563';
  const bgSubtle = isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)';
  const borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const borderSubtle = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
  const kbdBg = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';

  const shortcuts = [
    { category: "General", items: [
      { keys: "Cmd+K", description: "Open AI chat" },
      { keys: "Cmd+Shift+P", description: "Open command palette" },
      { keys: "Cmd+P", description: "Quick file open" },
      { keys: "Cmd+S", description: "Save file" },
      { keys: "Cmd+Z", description: "Undo" },
      { keys: "Cmd+Shift+Z", description: "Redo" },
    ]},
    { category: "AI Features", items: [
      { keys: "Cmd+Enter", description: "Accept AI suggestion" },
      { keys: "Cmd+R", description: "Regenerate AI response" },
      { keys: "Escape", description: "Dismiss AI suggestion" },
      { keys: "Cmd+Shift+C", description: "Polish selected component" },
      { keys: "Cmd+Shift+R", description: "Refactor selected code" },
    ]},
    { category: "Navigation", items: [
      { keys: "Cmd+1-9", description: "Switch to tab 1-9" },
      { keys: "Cmd+W", description: "Close current tab" },
      { keys: "Cmd+\\", description: "Toggle sidebar" },
      { keys: "Cmd+B", description: "Toggle file explorer" },
      { keys: "Cmd+J", description: "Toggle terminal" },
    ]},
    { category: "Editing", items: [
      { keys: "Cmd+D", description: "Select next occurrence" },
      { keys: "Cmd+Shift+L", description: "Select all occurrences" },
      { keys: "Alt+Up/Down", description: "Move line up/down" },
      { keys: "Cmd+/", description: "Toggle comment" },
      { keys: "Cmd+Shift+K", description: "Delete line" },
    ]},
  ];

  return (
    <DocsContent
      title="Keyboard Shortcuts"
      description="Master Exact with these essential keyboard shortcuts."
    >
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        Keyboard shortcuts help you work faster without leaving your keyboard. Here are the
        most important shortcuts to know.
      </p>

      <DocsCallout type="info" title="Platform differences">
        <p>On Windows and Linux, replace <kbd style={{ backgroundColor: kbdBg, padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>Cmd</kbd> with <kbd style={{ backgroundColor: kbdBg, padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>Ctrl</kbd>.</p>
      </DocsCallout>

      {shortcuts.map((section) => (
        <div key={section.category}>
          <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
            {section.category}
          </h2>
          <div
            style={{
              backgroundColor: bgSubtle,
              border: `1px solid ${borderColor}`,
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            {section.items.map((shortcut, index) => (
              <div
                key={shortcut.keys}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 16px',
                  borderBottom: index < section.items.length - 1 ? `1px solid ${borderSubtle}` : 'none',
                }}
              >
                <span style={{ color: textSecondary }}>{shortcut.description}</span>
                <kbd
                  style={{
                    backgroundColor: kbdBg,
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    color: textPrimary,
                    fontFamily: 'monospace',
                  }}
                >
                  {shortcut.keys}
                </kbd>
              </div>
            ))}
          </div>
        </div>
      ))}

      <h2 style={{ color: textPrimary, fontSize: '24px', fontWeight: 600, marginTop: '48px', marginBottom: '16px' }}>
        Customizing Shortcuts
      </h2>
      <p style={{ color: textSecondary, lineHeight: '1.8', marginBottom: '24px' }}>
        You can customize any keyboard shortcut in Settings → Keyboard Shortcuts.
        Click on a shortcut to record a new key combination.
      </p>

      <DocsCallout type="tip" title="Shortcut conflicts">
        <p>If a shortcut conflicts with your system or another app, Exact will show a warning
        and suggest alternatives.</p>
      </DocsCallout>

      <DocsPagination
        prev={{ title: "Refactoring", href: "/docs/features/refactoring" }}
        next={{ title: "Settings", href: "/docs/settings" }}
      />
    </DocsContent>
  );
}
