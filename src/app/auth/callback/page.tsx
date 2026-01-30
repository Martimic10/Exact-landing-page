"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallbackPage() {
  const router = useRouter();
  const [status, setStatus] = useState("Completing sign in...");

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Get the session - Supabase automatically handles the OAuth callback
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) {
          console.error("Auth error:", error);
          router.push(`/signin?error=${encodeURIComponent(error.message)}`);
          return;
        }

        if (!session) {
          // Try to exchange the hash/code if present
          const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(
            window.location.href
          );

          if (exchangeError || !data.session) {
            console.error("Exchange error:", exchangeError);
            router.push("/signin?error=Failed%20to%20complete%20sign%20in");
            return;
          }

          // Session established - go to dashboard
          router.push("/dashboard");
          return;
        }

        // We have a session - go to dashboard
        router.push("/dashboard");
      } catch (err) {
        console.error("Callback error:", err);
        router.push("/signin?error=Authentication%20failed");
      }
    };

    handleAuthCallback();
  }, [router]);

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
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
        <img src="/exact-logo.png" alt="Exact" style={{ width: 40, height: 40 }} />
        <span style={{ color: "#ffffff", fontSize: "24px", fontWeight: 600 }}>
          Exact
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* Loading spinner */}
        <svg
          width="32"
          height="32"
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

        <p style={{ color: "#9ca3af", fontSize: "14px" }}>{status}</p>
      </div>
    </div>
  );
}
