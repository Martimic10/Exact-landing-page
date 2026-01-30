"use client";

import { useState } from "react";

interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string | null;
}

export default function ApiKeysPage() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      id: "1",
      name: "Development",
      key: "ex_dev_xxxxxxxxxxxxxxxxxxxx",
      created: "Jan 15, 2025",
      lastUsed: "Jan 30, 2025",
    },
  ]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCreateKey = () => {
    if (!newKeyName.trim()) return;

    const newKey: ApiKey = {
      id: Date.now().toString(),
      name: newKeyName,
      key: `ex_${newKeyName.toLowerCase().replace(/\s+/g, "_")}_${"x".repeat(20)}`,
      created: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      lastUsed: null,
    };

    setApiKeys([...apiKeys, newKey]);
    setNewKeyName("");
    setShowCreateModal(false);
  };

  const handleDeleteKey = (id: string) => {
    setApiKeys(apiKeys.filter((k) => k.id !== id));
  };

  const handleCopyKey = (id: string, key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      {/* Header */}
      <div className="api-keys-header" style={{ marginBottom: "24px" }}>
        <div>
          <h1 className="text-xl md:text-2xl" style={{ color: "#ffffff", fontWeight: 600, marginBottom: "8px" }}>
            API Keys
          </h1>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>
            Manage API keys for programmatic access to Exact.
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="create-key-btn"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 16px",
            backgroundColor: "#ffffff",
            border: "none",
            borderRadius: "8px",
            color: "#000000",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          <PlusIcon />
          Create Key
        </button>
      </div>

      {/* API Keys List */}
      <div
        style={{
          backgroundColor: "#111111",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {apiKeys.length === 0 ? (
          <div style={{ padding: "48px", textAlign: "center" }}>
            <KeyIcon />
            <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 500, marginTop: "16px", marginBottom: "8px" }}>
              No API keys yet
            </h3>
            <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "24px" }}>
              Create an API key to integrate Exact with your workflow.
            </p>
            <button
              onClick={() => setShowCreateModal(true)}
              style={{
                padding: "10px 20px",
                backgroundColor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                color: "#ffffff",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Create your first key
            </button>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="api-keys-table-desktop">
              {/* Table Header */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr 1fr 1fr auto",
                  padding: "12px 24px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <span style={{ color: "#6b7280", fontSize: "12px", fontWeight: 500, textTransform: "uppercase" }}>Name</span>
                <span style={{ color: "#6b7280", fontSize: "12px", fontWeight: 500, textTransform: "uppercase" }}>Key</span>
                <span style={{ color: "#6b7280", fontSize: "12px", fontWeight: 500, textTransform: "uppercase" }}>Created</span>
                <span style={{ color: "#6b7280", fontSize: "12px", fontWeight: 500, textTransform: "uppercase" }}>Last Used</span>
                <span style={{ color: "#6b7280", fontSize: "12px", fontWeight: 500, textTransform: "uppercase" }}>Actions</span>
              </div>

              {/* Table Rows */}
              {apiKeys.map((apiKey, index) => (
                <div
                  key={apiKey.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr 1fr 1fr auto",
                    padding: "16px 24px",
                    alignItems: "center",
                    borderBottom: index < apiKeys.length - 1 ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
                  }}
                >
                  <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500 }}>{apiKey.name}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <code
                      style={{
                        color: "#9ca3af",
                        fontSize: "13px",
                        fontFamily: "monospace",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        padding: "4px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      {apiKey.key.substring(0, 12)}...{apiKey.key.substring(apiKey.key.length - 4)}
                    </code>
                    <button
                      onClick={() => handleCopyKey(apiKey.id, apiKey.key)}
                      style={{
                        padding: "4px 8px",
                        backgroundColor: "transparent",
                        border: "none",
                        color: copiedId === apiKey.id ? "#22c55e" : "#6b7280",
                        fontSize: "12px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      {copiedId === apiKey.id ? <CheckIcon /> : <CopyIcon />}
                      {copiedId === apiKey.id ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <span style={{ color: "#6b7280", fontSize: "13px" }}>{apiKey.created}</span>
                  <span style={{ color: "#6b7280", fontSize: "13px" }}>{apiKey.lastUsed || "Never"}</span>
                  <button
                    onClick={() => handleDeleteKey(apiKey.id)}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "transparent",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      borderRadius: "6px",
                      color: "#ef4444",
                      fontSize: "13px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            {/* Mobile Cards */}
            <div className="api-keys-cards-mobile">
              {apiKeys.map((apiKey) => (
                <div
                  key={apiKey.id}
                  style={{
                    padding: "16px",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500 }}>{apiKey.name}</span>
                    <button
                      onClick={() => handleDeleteKey(apiKey.id)}
                      style={{
                        padding: "4px 10px",
                        backgroundColor: "transparent",
                        border: "1px solid rgba(239, 68, 68, 0.3)",
                        borderRadius: "6px",
                        color: "#ef4444",
                        fontSize: "12px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                    <code
                      style={{
                        color: "#9ca3af",
                        fontSize: "12px",
                        fontFamily: "monospace",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        padding: "4px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      {apiKey.key.substring(0, 10)}...{apiKey.key.substring(apiKey.key.length - 4)}
                    </code>
                    <button
                      onClick={() => handleCopyKey(apiKey.id, apiKey.key)}
                      style={{
                        padding: "4px 8px",
                        backgroundColor: "transparent",
                        border: "none",
                        color: copiedId === apiKey.id ? "#22c55e" : "#6b7280",
                        fontSize: "12px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      {copiedId === apiKey.id ? <CheckIcon /> : <CopyIcon />}
                      {copiedId === apiKey.id ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div style={{ display: "flex", gap: "16px", fontSize: "12px" }}>
                    <span style={{ color: "#6b7280" }}>Created: <span style={{ color: "#9ca3af" }}>{apiKey.created}</span></span>
                    <span style={{ color: "#6b7280" }}>Last used: <span style={{ color: "#9ca3af" }}>{apiKey.lastUsed || "Never"}</span></span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Usage Info */}
      <div
        style={{
          marginTop: "32px",
          padding: "20px 24px",
          backgroundColor: "rgba(168, 85, 247, 0.1)",
          border: "1px solid rgba(168, 85, 247, 0.2)",
          borderRadius: "12px",
        }}
      >
        <h4 style={{ color: "#a855f7", fontSize: "14px", fontWeight: 500, marginBottom: "8px" }}>
          Using API Keys
        </h4>
        <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.6", marginBottom: "12px" }}>
          Include your API key in the Authorization header of your requests:
        </p>
        <code
          style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            padding: "12px 16px",
            borderRadius: "8px",
            color: "#e5e7eb",
            fontSize: "13px",
            fontFamily: "monospace",
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          Authorization: Bearer ex_your_api_key_here
        </code>
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
          }}
          onClick={() => setShowCreateModal(false)}
        >
          <div
            className="create-modal"
            style={{
              backgroundColor: "#1a1a1a",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              padding: "24px",
              width: "100%",
              maxWidth: "400px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>
              Create API Key
            </h3>
            <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "24px" }}>
              Give your key a name to identify it later.
            </p>

            <label style={{ display: "block", marginBottom: "8px", color: "#9ca3af", fontSize: "14px" }}>
              Key Name
            </label>
            <input
              type="text"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              placeholder="e.g., Production, CI/CD"
              style={{
                width: "100%",
                padding: "12px 16px",
                backgroundColor: "#111111",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                color: "#ffffff",
                fontSize: "14px",
                marginBottom: "24px",
                outline: "none",
              }}
            />

            <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
              <button
                onClick={() => setShowCreateModal(false)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  color: "#9ca3af",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleCreateKey}
                disabled={!newKeyName.trim()}
                style={{
                  padding: "10px 20px",
                  backgroundColor: newKeyName.trim() ? "#ffffff" : "rgba(255, 255, 255, 0.1)",
                  border: "none",
                  borderRadius: "8px",
                  color: newKeyName.trim() ? "#000000" : "#6b7280",
                  fontSize: "14px",
                  fontWeight: 500,
                  cursor: newKeyName.trim() ? "pointer" : "not-allowed",
                }}
              >
                Create Key
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive styles */}
      <style jsx>{`
        .api-keys-header {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .create-key-btn {
          width: 100%;
          justify-content: center;
        }
        .api-keys-table-desktop {
          display: none;
        }
        .api-keys-cards-mobile {
          display: block;
        }
        .create-modal {
          margin: 0 16px;
        }
        @media (min-width: 640px) {
          .api-keys-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
          .create-key-btn {
            width: auto;
          }
          .create-modal {
            margin: 0;
          }
        }
        @media (min-width: 768px) {
          .api-keys-table-desktop {
            display: block;
          }
          .api-keys-cards-mobile {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

// Icon Components
function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
