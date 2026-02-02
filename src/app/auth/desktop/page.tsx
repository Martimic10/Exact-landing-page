"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DesktopAuthPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGitHubSignIn = async () => {
    setLoading(true);
    setError(null);

    try {
      // Store flag in sessionStorage to indicate this is a desktop auth flow
      sessionStorage.setItem("auth_flow", "desktop");

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        setError(error.message);
        setLoading(false);
      }
    } catch (err) {
      setError("Failed to initiate sign in");
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      {/* Logo and branding */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "48px",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#1a1a1a",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <img
            src="/exact-logo.png"
            alt="Exact"
            style={{ width: "52px", height: "52px" }}
          />
        </div>
        <h1
          style={{
            color: "#ffffff",
            fontSize: "28px",
            fontWeight: 600,
            marginBottom: "8px",
          }}
        >
          Sign in to Exact
        </h1>
        <p style={{ color: "#6b7280", fontSize: "14px", textAlign: "center" }}>
          Connect your GitHub account to continue to the desktop app
        </p>
      </div>

      {/* Sign in card */}
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#0a0a0a",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          padding: "32px",
        }}
      >
        {error && (
          <div
            style={{
              padding: "12px 16px",
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
              borderRadius: "8px",
              marginBottom: "24px",
            }}
          >
            <p style={{ color: "#ef4444", fontSize: "14px", margin: 0 }}>
              {error}
            </p>
          </div>
        )}

        <button
          onClick={handleGitHubSignIn}
          disabled={loading}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            padding: "14px 24px",
            backgroundColor: "#ffffff",
            border: "none",
            borderRadius: "10px",
            color: "#000000",
            fontSize: "15px",
            fontWeight: 500,
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
            transition: "opacity 0.15s",
          }}
        >
          {loading ? (
            <>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                style={{ animation: "spin 1s linear infinite" }}
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#9ca3af"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M12 2a10 10 0 0 1 10 10"
                  stroke="#000000"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <span>Connecting...</span>
            </>
          ) : (
            <>
              <GitHubIcon />
              <span>Continue with GitHub</span>
            </>
          )}
        </button>

        <p
          style={{
            color: "#6b7280",
            fontSize: "12px",
            textAlign: "center",
            marginTop: "24px",
            lineHeight: 1.5,
          }}
        >
          By continuing, you agree to our{" "}
          <a
            href="/terms"
            style={{ color: "#9ca3af", textDecoration: "underline" }}
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            style={{ color: "#9ca3af", textDecoration: "underline" }}
          >
            Privacy Policy
          </a>
        </p>
      </div>

      {/* Footer */}
      <p
        style={{
          color: "#4b5563",
          fontSize: "12px",
          marginTop: "32px",
        }}
      >
        You will be redirected back to the Exact app after signing in
      </p>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
