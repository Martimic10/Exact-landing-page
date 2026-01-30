"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { signInWithOAuth, getCurrentUser, type OAuthProvider } from "@/lib/supabase";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function SignInContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<OAuthProvider | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [error, setError] = useState<string | null>(
    searchParams.get("error") || null
  );

  // Check if user is already logged in
  useEffect(() => {
    async function checkAuth() {
      const user = await getCurrentUser();
      if (user) {
        router.push("/dashboard");
      } else {
        setCheckingAuth(false);
      }
    }
    checkAuth();
  }, [router]);

  const handleOAuthSignIn = async (provider: OAuthProvider) => {
    setIsLoading(provider);
    setError(null);

    const result = await signInWithOAuth(provider);

    if (!result.success) {
      setError(result.error || "Failed to sign in. Please try again.");
      setIsLoading(null);
    }
    // If successful, Supabase will redirect to the OAuth provider
  };

  // Show loading while checking auth
  if (checkingAuth) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src="/exact-logo.png" alt="Exact" style={{ width: 40, height: 40 }} />
          <span style={{ color: "#ffffff", fontSize: "24px", fontWeight: 600 }}>
            Exact
          </span>
        </div>
      </div>
    );
  }

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
      {/* Logo */}
      <Link href="/" style={{ marginBottom: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src="/exact-logo.png" alt="Exact" style={{ width: 40, height: 40 }} />
          <span style={{ color: "#ffffff", fontSize: "24px", fontWeight: 600 }}>
            Exact
          </span>
        </div>
      </Link>

      {/* Sign In Card */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#0a0a0a",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          padding: "40px",
        }}
      >
        <motion.h1
          variants={fadeInUp}
          style={{
            color: "#ffffff",
            fontSize: "24px",
            fontWeight: 600,
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          Sign in to Exact
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          style={{
            color: "#6b7280",
            fontSize: "14px",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Sign in to access the Exact editor
        </motion.p>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              borderRadius: "8px",
              padding: "12px",
              marginBottom: "24px",
            }}
          >
            <p style={{ color: "#ef4444", fontSize: "14px", margin: 0 }}>
              {decodeURIComponent(error)}
            </p>
          </motion.div>
        )}

        {/* OAuth Buttons */}
        <motion.div
          variants={fadeInUp}
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          {/* GitHub Button */}
          <OAuthButton
            provider="github"
            label="Continue with GitHub"
            icon={<GitHubIcon />}
            isLoading={isLoading === "github"}
            disabled={isLoading !== null}
            onClick={() => handleOAuthSignIn("github")}
          />

          {/* Google Button */}
          <OAuthButton
            provider="google"
            label="Continue with Google"
            icon={<GoogleIcon />}
            isLoading={isLoading === "google"}
            disabled={isLoading !== null}
            onClick={() => handleOAuthSignIn("google")}
          />
        </motion.div>

        {/* Back Link */}
        <motion.div
          variants={fadeInUp}
          style={{ marginTop: "24px", textAlign: "center" }}
        >
          <Link
            href="/"
            style={{
              color: "#6b7280",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Back to home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

// OAuth Button Component
function OAuthButton({
  label,
  icon,
  isLoading,
  disabled,
  onClick,
}: {
  provider: string;
  label: string;
  icon: React.ReactNode;
  isLoading: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        width: "100%",
        padding: "14px 20px",
        backgroundColor: isHovered && !disabled ? "#1a1a1a" : "#111111",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "10px",
        color: disabled ? "#6b7280" : "#ffffff",
        fontSize: "15px",
        fontWeight: 500,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.2s",
        opacity: disabled && !isLoading ? 0.6 : 1,
      }}
    >
      {isLoading ? <LoadingSpinner /> : icon}
      {isLoading ? "Signing in..." : label}
    </button>
  );
}

// Icon Components
function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function LoadingSpinner() {
  return (
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

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            backgroundColor: "#000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ color: "#6b7280" }}>Loading...</p>
        </div>
      }
    >
      <SignInContent />
    </Suspense>
  );
}
