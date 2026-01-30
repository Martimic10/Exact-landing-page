"use client";

import { useState } from "react";

const downloads = [
  {
    platform: "macOS",
    icon: AppleIcon,
    version: "1.0.0",
    releaseDate: "January 2025",
    size: "84 MB",
    available: true,
    requirements: "macOS 12.0 or later, Apple Silicon or Intel",
  },
  {
    platform: "Windows",
    icon: WindowsIcon,
    version: "-",
    releaseDate: "Coming Soon",
    size: "-",
    available: false,
    requirements: "Windows 10/11",
  },
  {
    platform: "Linux",
    icon: LinuxIcon,
    version: "-",
    releaseDate: "Coming Soon",
    size: "-",
    available: false,
    requirements: "Ubuntu 20.04+, Debian 11+, Fedora 35+",
  },
];

const releaseNotes = [
  {
    version: "1.0.0",
    date: "January 30, 2025",
    changes: [
      "Initial release of Exact editor",
      "Component Polish: AI-powered cleanup for JSX and classNames",
      "Layout & Spacing: Automatic alignment and margin fixes",
      "Accessibility: ARIA attributes and semantic HTML generation",
      "Safe Refactors: Scoped diffs with confidence",
    ],
  },
];

export default function DownloadsPage() {
  const [downloadingPlatform, setDownloadingPlatform] = useState<string | null>(null);

  const handleDownload = (platform: string) => {
    if (platform !== "macOS") return;
    setDownloadingPlatform(platform);
    // Simulate download start
    setTimeout(() => {
      setDownloadingPlatform(null);
      // In production, this would trigger an actual download
    }, 2000);
  };

  return (
    <>
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <h1 className="text-xl md:text-2xl" style={{ color: "#ffffff", fontWeight: 600, marginBottom: "8px" }}>
          Downloads
        </h1>
        <p style={{ color: "#6b7280", fontSize: "14px" }}>
          Download Exact for your platform.
        </p>
      </div>

      {/* Download Cards */}
      <div
        className="downloads-grid"
        style={{
          marginBottom: "48px",
        }}
      >
        {downloads.map((download) => (
          <div
            key={download.platform}
            style={{
              backgroundColor: "#111111",
              border: download.available
                ? "1px solid rgba(255, 255, 255, 0.2)"
                : "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "24px",
              opacity: download.available ? 1 : 0.6,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <download.icon />
              </div>
              <div>
                <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 600 }}>
                  {download.platform}
                </h3>
                <span style={{ color: "#6b7280", fontSize: "13px" }}>
                  {download.available ? `v${download.version}` : "Coming Soon"}
                </span>
              </div>
            </div>

            {download.available && (
              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ color: "#6b7280", fontSize: "13px" }}>Release</span>
                  <span style={{ color: "#9ca3af", fontSize: "13px" }}>{download.releaseDate}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#6b7280", fontSize: "13px" }}>Size</span>
                  <span style={{ color: "#9ca3af", fontSize: "13px" }}>{download.size}</span>
                </div>
              </div>
            )}

            <p style={{ color: "#6b7280", fontSize: "12px", marginBottom: "16px", lineHeight: "1.5" }}>
              {download.requirements}
            </p>

            <button
              onClick={() => handleDownload(download.platform)}
              disabled={!download.available || downloadingPlatform === download.platform}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "12px 16px",
                backgroundColor: download.available ? "#ffffff" : "transparent",
                border: download.available ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                color: download.available ? "#000000" : "#6b7280",
                fontSize: "14px",
                fontWeight: 500,
                cursor: download.available ? "pointer" : "not-allowed",
              }}
            >
              {downloadingPlatform === download.platform ? (
                <>
                  <LoadingSpinner />
                  Preparing...
                </>
              ) : download.available ? (
                <>
                  <DownloadIcon />
                  Download for {download.platform}
                </>
              ) : (
                "Coming Soon"
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Release Notes */}
      <h2 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>
        Release Notes
      </h2>
      <div
        style={{
          backgroundColor: "#111111",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {releaseNotes.map((release, index) => (
          <div
            key={release.version}
            style={{
              padding: "24px",
              borderBottom: index < releaseNotes.length - 1 ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span
                style={{
                  padding: "4px 10px",
                  backgroundColor: "rgba(168, 85, 247, 0.1)",
                  borderRadius: "6px",
                  color: "#a855f7",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                v{release.version}
              </span>
              <span style={{ color: "#6b7280", fontSize: "13px" }}>{release.date}</span>
            </div>
            <ul style={{ margin: 0, paddingLeft: "20px" }}>
              {release.changes.map((change, i) => (
                <li
                  key={i}
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  {change}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* System Requirements */}
      <h2 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 600, marginTop: "48px", marginBottom: "16px" }}>
        System Requirements
      </h2>
      <div
        style={{
          backgroundColor: "#111111",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          padding: "24px",
        }}
      >
        <div className="requirements-grid">
          <div>
            <h4 style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500, marginBottom: "12px" }}>
              Minimum
            </h4>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              <li style={{ color: "#9ca3af", fontSize: "13px", marginBottom: "8px" }}>
                • macOS 12.0 (Monterey) or later
              </li>
              <li style={{ color: "#9ca3af", fontSize: "13px", marginBottom: "8px" }}>
                • 8 GB RAM
              </li>
              <li style={{ color: "#9ca3af", fontSize: "13px", marginBottom: "8px" }}>
                • 500 MB available disk space
              </li>
              <li style={{ color: "#9ca3af", fontSize: "13px" }}>
                • Internet connection for AI features
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500, marginBottom: "12px" }}>
              Recommended
            </h4>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              <li style={{ color: "#9ca3af", fontSize: "13px", marginBottom: "8px" }}>
                • macOS 14.0 (Sonoma) or later
              </li>
              <li style={{ color: "#9ca3af", fontSize: "13px", marginBottom: "8px" }}>
                • 16 GB RAM
              </li>
              <li style={{ color: "#9ca3af", fontSize: "13px", marginBottom: "8px" }}>
                • Apple Silicon (M1/M2/M3)
              </li>
              <li style={{ color: "#9ca3af", fontSize: "13px" }}>
                • SSD storage
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        .downloads-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .requirements-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 640px) {
          .downloads-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .requirements-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 768px) {
          .downloads-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  );
}

// Icon Components
function AppleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#9ca3af">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#9ca3af">
      <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91V13.1l10 .15z" />
    </svg>
  );
}

function LinuxIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#9ca3af">
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.468v.02c.002.134.017.267.051.4.033.066.06.152.102.198a.663.663 0 01-.181.064c-.089.042-.18.064-.27.109-.095.046-.183.132-.263.198a.705.705 0 01-.072.054.586.586 0 01-.073-.043 1.253 1.253 0 01-.219-.064.96.96 0 01-.284-.133.71.71 0 00-.088.042.953.953 0 01-.213-.335 1.807 1.807 0 01-.15-.706l-.004.024a.086.086 0 01-.004.021v-.105c0 .02.006.04.006.06.008-.265.061-.465.166-.724.108-.2.248-.398.438-.533.188-.136.371-.198.584-.198zm-2.123.227h.04c.053 0 .103.006.158.018.033.012.066.024.09.042a.291.291 0 01.112.157c.03.09.024.198.015.264-.003.067-.003.11.006.135a.155.155 0 00.051.054c.009.006.018.009.024.012a.113.113 0 01-.012.03.199.199 0 01-.048.048c-.024.021-.054.033-.09.048a.287.287 0 01-.111.027c-.039 0-.075-.006-.111-.018-.036-.018-.072-.042-.108-.072a.274.274 0 01-.075-.099.214.214 0 01-.027-.099c0-.032.003-.063.012-.096a.23.23 0 01.032-.084c.022-.03.05-.051.084-.066a.184.184 0 01.039-.021l.006-.006c-.012-.018-.018-.042-.024-.054-.006-.042-.003-.078.015-.117a.214.214 0 01.072-.096.196.196 0 01-.054-.123.18.18 0 01.006-.054.258.258 0 01.06-.108.253.253 0 01.075-.054c.03-.018.06-.027.096-.03zm4.143 0h.033c.036.003.066.012.096.03.03.018.054.033.075.054a.258.258 0 01.06.108c.006.018.006.036.006.054a.196.196 0 01-.054.123.214.214 0 01.072.096c.018.039.021.075.015.117-.006.012-.012.036-.024.054l.006.006a.184.184 0 01.039.021c.034.015.062.036.084.066a.23.23 0 01.032.084c.009.033.012.064.012.096a.214.214 0 01-.027.099.274.274 0 01-.075.099c-.036.03-.072.054-.108.072a.287.287 0 01-.111.018.287.287 0 01-.111-.027c-.036-.015-.066-.027-.09-.048a.199.199 0 01-.048-.048.113.113 0 01-.012-.03c.006-.003.015-.006.024-.012a.155.155 0 00.051-.054c.009-.024.009-.068.006-.135-.009-.066-.015-.174.015-.264a.291.291 0 01.112-.157c.024-.018.057-.03.09-.042a.453.453 0 01.158-.018zm-2.07.07c.111 0 .218.018.307.063.09.039.162.096.207.165.045.07.063.15.063.24 0 .12-.042.219-.123.309-.081.084-.189.135-.327.147a.553.553 0 01.111.249c.006.072-.009.144-.039.21a.52.52 0 01-.15.189c-.066.054-.135.09-.225.12a.89.89 0 01-.276.042c-.093 0-.183-.015-.27-.042-.087-.03-.162-.066-.222-.12a.51.51 0 01-.15-.189.39.39 0 01-.042-.21c.003-.087.045-.171.111-.249a.503.503 0 01-.327-.147.396.396 0 01-.123-.309c0-.09.024-.17.066-.24.042-.069.117-.126.207-.165a.657.657 0 01.307-.063.657.657 0 01.438.135c-.018.006-.036.015-.054.027-.072.036-.132.087-.174.147-.042.054-.066.12-.066.192 0 .027.006.054.012.081a.319.319 0 00.039.072c.018.024.042.042.066.057a.168.168 0 00.087.024.168.168 0 00.087-.024.194.194 0 00.066-.057.259.259 0 00.039-.072.203.203 0 00.012-.081c0-.072-.024-.138-.066-.192a.426.426 0 00-.174-.147c-.018-.012-.036-.021-.054-.027a.657.657 0 01.438-.135z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function LoadingSpinner() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      style={{ animation: "spin 1s linear infinite" }}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.25"
      />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </svg>
  );
}
