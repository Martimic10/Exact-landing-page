"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

function SuccessContent() {
  const searchParams = useSearchParams();
  const [redirectAttempted, setRedirectAttempted] = useState(false);
  const redirectUrl = searchParams.get("redirect");

  useEffect(() => {
    if (redirectUrl && !redirectAttempted) {
      setRedirectAttempted(true);
      // Small delay to show the success message before redirect
      const timer = setTimeout(() => {
        window.location.href = redirectUrl;
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [redirectUrl, redirectAttempted]);

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

      {/* Success Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#0a0a0a",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          padding: "40px",
          textAlign: "center",
        }}
      >
        {/* Success Icon */}
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1
          style={{
            color: "#ffffff",
            fontSize: "24px",
            fontWeight: 600,
            marginBottom: "8px",
          }}
        >
          Successfully signed in!
        </h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: "14px",
            marginBottom: "24px",
          }}
        >
          Opening Exact editor...
        </p>

        {/* Loading spinner */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={{ animation: "spin 1s linear infinite" }}
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#374151"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M12 2a10 10 0 0 1 10 10"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>

        {/* Manual link fallback */}
        <p style={{ color: "#6b7280", fontSize: "13px" }}>
          If the app doesn&apos;t open automatically,{" "}
          {redirectUrl && (
            <a
              href={redirectUrl}
              style={{ color: "#ffffff", textDecoration: "underline" }}
            >
              click here
            </a>
          )}
        </p>

        {/* Download link if app not installed */}
        <p style={{ color: "#6b7280", fontSize: "13px", marginTop: "16px" }}>
          Don&apos;t have Exact installed?{" "}
          <Link
            href="/download"
            style={{ color: "#ffffff", textDecoration: "underline" }}
          >
            Download now
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default function AuthSuccessPage() {
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
      <SuccessContent />
    </Suspense>
  );
}
