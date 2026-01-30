"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

function WaitlistContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

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

      {/* Waitlist Card */}
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
        {/* Clock Icon */}
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            backgroundColor: "rgba(234, 179, 8, 0.1)",
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
            stroke="#eab308"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
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
          You&apos;re on the waitlist!
        </h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: "14px",
            marginBottom: "16px",
            lineHeight: "1.6",
          }}
        >
          Thanks for signing in. We&apos;re gradually rolling out access to Exact.
        </p>

        {email && (
          <p
            style={{
              color: "#9ca3af",
              fontSize: "13px",
              marginBottom: "24px",
            }}
          >
            We&apos;ll notify <strong style={{ color: "#ffffff" }}>{email}</strong>{" "}
            when your access is ready.
          </p>
        )}

        {/* Back to home */}
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: "#ffffff",
            color: "#000000",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Back to home
        </Link>
      </motion.div>
    </div>
  );
}

export default function WaitlistPage() {
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
      <WaitlistContent />
    </Suspense>
  );
}
