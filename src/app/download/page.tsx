"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const versions = [
  {
    version: "1.0.0",
    label: "Latest",
    isLatest: true,
    releaseDate: "January 30, 2025",
    platforms: {
      macOS: [
        { name: "Mac (Apple Silicon)", arch: "ARM64" },
        { name: "Mac (Intel)", arch: "x64" },
        { name: "Mac Universal", arch: "Universal" },
      ],
      windows: [
        { name: "Windows (x64) (System)", arch: "x64-system" },
        { name: "Windows (x64) (User)", arch: "x64-user" },
        { name: "Windows (ARM64) (System)", arch: "arm64-system" },
        { name: "Windows (ARM64) (User)", arch: "arm64-user" },
      ],
      linux: [
        { name: "Linux .deb (ARM64)", arch: "deb-arm64" },
        { name: "Linux .deb (x64)", arch: "deb-x64" },
        { name: "Linux RPM (ARM64)", arch: "rpm-arm64" },
        { name: "Linux RPM (x64)", arch: "rpm-x64" },
        { name: "Linux AppImage (ARM64)", arch: "appimage-arm64" },
        { name: "Linux AppImage (x64)", arch: "appimage-x64" },
      ],
    },
  },
  {
    version: "0.9.0",
    label: null,
    isLatest: false,
    releaseDate: "January 15, 2025",
    platforms: {
      macOS: [
        { name: "Mac (Apple Silicon)", arch: "ARM64" },
        { name: "Mac (Intel)", arch: "x64" },
      ],
      windows: [
        { name: "Windows (x64)", arch: "x64" },
      ],
      linux: [
        { name: "Linux .deb (x64)", arch: "deb-x64" },
      ],
    },
  },
  {
    version: "0.8.0",
    label: null,
    isLatest: false,
    releaseDate: "January 1, 2025",
    platforms: {
      macOS: [
        { name: "Mac (Apple Silicon)", arch: "ARM64" },
      ],
      windows: [],
      linux: [],
    },
  },
];

export default function DownloadPage() {
  const [expandedVersions, setExpandedVersions] = useState<string[]>(["1.0.0"]);

  const toggleVersion = (version: string) => {
    setExpandedVersions((prev) =>
      prev.includes(version)
        ? prev.filter((v) => v !== version)
        : [...prev, version]
    );
  };

  const handleDownload = (platform: string, arch: string, version: string) => {
    // In production, this would trigger actual downloads
    console.log(`Downloading ${platform} ${arch} v${version}`);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a" }}>
      <Header solidBackground />

      <main className="download-main">
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 16px" }}>
          {/* Hero Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "20px",
              marginBottom: "48px",
            }}
            className="download-hero"
          >
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "#1a1a1a",
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="download-logo"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/exact-logo.png"
                alt="Exact"
                style={{ width: "64px", height: "64px" }}
                className="download-logo-img"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              className="download-hero-content"
            >
              <h1 style={{ color: "#ffffff", fontWeight: 600, marginBottom: "8px", fontSize: "24px" }} className="download-title">
                Download Exact
              </h1>
              <p style={{ color: "#6b7280", fontSize: "16px", marginBottom: "16px" }}>
                Available for macOS, Windows, and Linux.
              </p>
              <button
                onClick={() => handleDownload("macOS", "Universal", "1.0.0")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
                className="download-cta-btn"
              >
                Download for macOS
                <DownloadIcon />
              </button>
            </div>
          </div>

          {/* Version List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {versions.map((release) => (
              <div
                key={release.version}
                style={{
                  backgroundColor: "#0a0a0a",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                {/* Version Header */}
                <button
                  onClick={() => toggleVersion(release.version)}
                  className="version-header"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#ffffff", fontSize: "18px", fontWeight: 600 }}>
                      {release.version}
                    </span>
                    {release.label && (
                      <span
                        style={{
                          padding: "4px 10px",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          borderRadius: "9999px",
                          color: "#9ca3af",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                      >
                        {release.label}
                      </span>
                    )}
                  </div>
                  <ChevronIcon expanded={expandedVersions.includes(release.version)} />
                </button>

                {/* Expanded Content */}
                {expandedVersions.includes(release.version) && (
                  <div className="version-content">
                    {/* Platform Grid */}
                    <div
                      className="platform-grid"
                      style={{
                        marginBottom: "20px",
                      }}
                    >
                      {/* macOS */}
                      <div
                        style={{
                          backgroundColor: "#111111",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "8px",
                          padding: "20px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                          <AppleIcon />
                          <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500 }}>
                            macOS
                          </span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          {release.platforms.macOS.map((item) => (
                            <button
                              key={item.arch}
                              onClick={() => handleDownload("macOS", item.arch, release.version)}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "10px 12px",
                                backgroundColor: "transparent",
                                border: "none",
                                borderRadius: "6px",
                                color: "#9ca3af",
                                fontSize: "13px",
                                cursor: "pointer",
                                transition: "background-color 0.15s",
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}
                              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                            >
                              {item.name}
                              <DownloadIcon small />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Windows */}
                      <div
                        style={{
                          backgroundColor: "#111111",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "8px",
                          padding: "20px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                          <WindowsIcon />
                          <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500 }}>
                            Windows
                          </span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          {release.platforms.windows.length > 0 ? (
                            release.platforms.windows.map((item) => (
                              <button
                                key={item.arch}
                                onClick={() => handleDownload("Windows", item.arch, release.version)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  padding: "10px 12px",
                                  backgroundColor: "transparent",
                                  border: "none",
                                  borderRadius: "6px",
                                  color: "#9ca3af",
                                  fontSize: "13px",
                                  cursor: "pointer",
                                  transition: "background-color 0.15s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                              >
                                {item.name}
                                <DownloadIcon small />
                              </button>
                            ))
                          ) : (
                            <span style={{ color: "#4b5563", fontSize: "13px", padding: "10px 12px" }}>
                              Not available in this version
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Linux */}
                      <div
                        style={{
                          backgroundColor: "#111111",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "8px",
                          padding: "20px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                          <LinuxIcon />
                          <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500 }}>
                            Linux
                          </span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          {release.platforms.linux.length > 0 ? (
                            release.platforms.linux.map((item) => (
                              <button
                                key={item.arch}
                                onClick={() => handleDownload("Linux", item.arch, release.version)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  padding: "10px 12px",
                                  backgroundColor: "transparent",
                                  border: "none",
                                  borderRadius: "6px",
                                  color: "#9ca3af",
                                  fontSize: "13px",
                                  cursor: "pointer",
                                  transition: "background-color 0.15s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                              >
                                {item.name}
                                <DownloadIcon small />
                              </button>
                            ))
                          ) : (
                            <span style={{ color: "#4b5563", fontSize: "13px", padding: "10px 12px" }}>
                              Not available in this version
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Release Notes Link */}
                    {release.isLatest && (
                      <a
                        href="/docs/changelog"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "#a855f7",
                          fontSize: "14px",
                          textDecoration: "none",
                        }}
                      >
                        View release notes
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Responsive styles */}
      <style jsx global>{`
        .download-main {
          padding-top: 100px;
          padding-bottom: 80px;
        }
        .version-header {
          padding: 16px;
        }
        .version-content {
          padding: 0 16px 16px;
        }
        .platform-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 640px) {
          .download-main {
            padding-top: 120px;
            padding-bottom: 120px;
          }
          .download-hero {
            flex-direction: row !important;
            align-items: center !important;
            text-align: left !important;
            gap: 24px !important;
          }
          .download-logo {
            width: 120px !important;
            height: 120px !important;
          }
          .download-logo-img {
            width: 80px !important;
            height: 80px !important;
          }
          .download-title {
            font-size: 28px !important;
          }
          .download-hero-content {
            align-items: flex-start !important;
          }
          .download-cta-btn {
            width: auto !important;
          }
          .version-header {
            padding: 20px 24px;
          }
          .version-content {
            padding: 0 24px 24px;
          }
          .platform-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 768px) {
          .platform-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

// Icon Components
function DownloadIcon({ small = false }: { small?: boolean }) {
  const size = small ? 16 : 18;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6b7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.2s",
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#9ca3af">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#9ca3af">
      <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91V13.1l10 .15z" />
    </svg>
  );
}

function LinuxIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#9ca3af">
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139z" />
    </svg>
  );
}
