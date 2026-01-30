"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    theme: "dark",
    editorFont: "SF Mono",
    fontSize: "14",
    tabSize: "2",
    autoSave: true,
    formatOnSave: true,
    showMinimap: false,
    wordWrap: true,
    notifications: {
      email: true,
      productUpdates: true,
      tips: false,
    },
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleToggle = (key: keyof typeof settings) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  const handleNotificationToggle = (key: keyof typeof settings.notifications) => {
    setSettings({
      ...settings,
      notifications: {
        ...settings.notifications,
        [key]: !settings.notifications[key],
      },
    });
  };

  return (
    <>
      {/* Header */}
      <div className="settings-header" style={{ marginBottom: "24px" }}>
        <div>
          <h1 className="text-xl md:text-2xl" style={{ color: "#ffffff", fontWeight: 600, marginBottom: "8px" }}>
            Settings
          </h1>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>
            Configure your Exact editor preferences.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="save-btn"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            backgroundColor: saved ? "#22c55e" : "#ffffff",
            border: "none",
            borderRadius: "8px",
            color: saved ? "#ffffff" : "#000000",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          {saved ? (
            <>
              <CheckIcon />
              Saved
            </>
          ) : (
            "Save Changes"
          )}
        </button>
      </div>

      {/* Editor Settings */}
      <h2 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 600, marginBottom: "16px" }}>
        Editor
      </h2>
      <div
        style={{
          backgroundColor: "#111111",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          padding: "24px",
          marginBottom: "32px",
        }}
      >
        <div className="settings-grid">
          {/* Theme */}
          <div>
            <label style={{ display: "block", color: "#9ca3af", fontSize: "13px", marginBottom: "8px" }}>
              Theme
            </label>
            <select
              value={settings.theme}
              onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
              style={{
                width: "100%",
                padding: "10px 12px",
                backgroundColor: "#0a0a0a",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                color: "#ffffff",
                fontSize: "14px",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="system">System</option>
            </select>
          </div>

          {/* Font */}
          <div>
            <label style={{ display: "block", color: "#9ca3af", fontSize: "13px", marginBottom: "8px" }}>
              Editor Font
            </label>
            <select
              value={settings.editorFont}
              onChange={(e) => setSettings({ ...settings, editorFont: e.target.value })}
              style={{
                width: "100%",
                padding: "10px 12px",
                backgroundColor: "#0a0a0a",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                color: "#ffffff",
                fontSize: "14px",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value="SF Mono">SF Mono</option>
              <option value="JetBrains Mono">JetBrains Mono</option>
              <option value="Fira Code">Fira Code</option>
              <option value="Monaco">Monaco</option>
              <option value="Menlo">Menlo</option>
            </select>
          </div>

          {/* Font Size */}
          <div>
            <label style={{ display: "block", color: "#9ca3af", fontSize: "13px", marginBottom: "8px" }}>
              Font Size
            </label>
            <select
              value={settings.fontSize}
              onChange={(e) => setSettings({ ...settings, fontSize: e.target.value })}
              style={{
                width: "100%",
                padding: "10px 12px",
                backgroundColor: "#0a0a0a",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                color: "#ffffff",
                fontSize: "14px",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value="12">12px</option>
              <option value="13">13px</option>
              <option value="14">14px</option>
              <option value="15">15px</option>
              <option value="16">16px</option>
            </select>
          </div>

          {/* Tab Size */}
          <div>
            <label style={{ display: "block", color: "#9ca3af", fontSize: "13px", marginBottom: "8px" }}>
              Tab Size
            </label>
            <select
              value={settings.tabSize}
              onChange={(e) => setSettings({ ...settings, tabSize: e.target.value })}
              style={{
                width: "100%",
                padding: "10px 12px",
                backgroundColor: "#0a0a0a",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                color: "#ffffff",
                fontSize: "14px",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value="2">2 spaces</option>
              <option value="4">4 spaces</option>
              <option value="tab">Tab</option>
            </select>
          </div>
        </div>

        {/* Toggle Settings */}
        <div style={{ marginTop: "24px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <ToggleSetting
              label="Auto Save"
              description="Automatically save files as you edit"
              enabled={settings.autoSave}
              onToggle={() => handleToggle("autoSave")}
            />
            <ToggleSetting
              label="Format on Save"
              description="Automatically format code when saving"
              enabled={settings.formatOnSave}
              onToggle={() => handleToggle("formatOnSave")}
            />
            <ToggleSetting
              label="Show Minimap"
              description="Display code minimap in the editor"
              enabled={settings.showMinimap}
              onToggle={() => handleToggle("showMinimap")}
            />
            <ToggleSetting
              label="Word Wrap"
              description="Wrap long lines to fit the editor width"
              enabled={settings.wordWrap}
              onToggle={() => handleToggle("wordWrap")}
            />
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <h2 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 600, marginBottom: "16px" }}>
        Notifications
      </h2>
      <div
        style={{
          backgroundColor: "#111111",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          padding: "24px",
          marginBottom: "32px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <ToggleSetting
            label="Email Notifications"
            description="Receive important account notifications via email"
            enabled={settings.notifications.email}
            onToggle={() => handleNotificationToggle("email")}
          />
          <ToggleSetting
            label="Product Updates"
            description="Get notified about new features and improvements"
            enabled={settings.notifications.productUpdates}
            onToggle={() => handleNotificationToggle("productUpdates")}
          />
          <ToggleSetting
            label="Tips & Tutorials"
            description="Receive helpful tips to get the most out of Exact"
            enabled={settings.notifications.tips}
            onToggle={() => handleNotificationToggle("tips")}
          />
        </div>
      </div>

      {/* Account Settings */}
      <h2 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 600, marginBottom: "16px" }}>
        Account
      </h2>
      <div
        style={{
          backgroundColor: "#111111",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          padding: "24px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div className="account-row">
            <div style={{ flex: 1 }}>
              <h4 style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>
                Export Data
              </h4>
              <p style={{ color: "#6b7280", fontSize: "13px" }}>
                Download all your data and settings
              </p>
            </div>
            <button
              className="account-btn"
              style={{
                padding: "8px 16px",
                backgroundColor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "6px",
                color: "#ffffff",
                fontSize: "13px",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              Export
            </button>
          </div>

          <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "16px" }}>
            <div className="account-row">
              <div style={{ flex: 1 }}>
                <h4 style={{ color: "#ef4444", fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>
                  Delete Account
                </h4>
                <p style={{ color: "#6b7280", fontSize: "13px" }}>
                  Permanently delete your account and all data
                </p>
              </div>
              <button
                className="account-btn"
                style={{
                  padding: "8px 16px",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  borderRadius: "6px",
                  color: "#ef4444",
                  fontSize: "13px",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        .settings-header {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .save-btn {
          width: 100%;
          justify-content: center;
        }
        .settings-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .account-row {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-start;
        }
        .account-btn {
          width: 100%;
        }
        @media (min-width: 640px) {
          .settings-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
          .save-btn {
            width: auto;
          }
          .settings-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .account-row {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .account-btn {
            width: auto;
          }
        }
      `}</style>
    </>
  );
}

function ToggleSetting({
  label,
  description,
  enabled,
  onToggle,
}: {
  label: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4 style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>
          {label}
        </h4>
        <p style={{ color: "#6b7280", fontSize: "13px" }}>{description}</p>
      </div>
      <button
        onClick={onToggle}
        style={{
          width: "44px",
          height: "24px",
          borderRadius: "12px",
          backgroundColor: enabled ? "#a855f7" : "rgba(255, 255, 255, 0.1)",
          border: "none",
          cursor: "pointer",
          position: "relative",
          transition: "background-color 0.2s",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "9px",
            backgroundColor: "#ffffff",
            position: "absolute",
            top: "3px",
            left: enabled ? "23px" : "3px",
            transition: "left 0.2s",
          }}
        />
      </button>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
