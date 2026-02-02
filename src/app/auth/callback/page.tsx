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
        // Check if this is a desktop auth flow
        const isDesktopFlow = sessionStorage.getItem("auth_flow") === "desktop";

        // Clear the flag
        sessionStorage.removeItem("auth_flow");

        // Get the session - Supabase automatically handles the OAuth callback
        let { data: { session }, error } = await supabase.auth.getSession();

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

          session = data.session;
        }

        // If this is a desktop auth flow, redirect to the desktop app
        if (isDesktopFlow && session) {
          setStatus("Redirecting to Exact...");

          // Build the redirect URL with tokens in the hash
          // TODO: Change to exact://auth/callback for production
          const redirectUrl = `http://localhost:5173/auth/callback#access_token=${session.access_token}&refresh_token=${session.refresh_token}&expires_in=${session.expires_in}&token_type=${session.token_type}`;

          // Redirect to the desktop app
          window.location.href = redirectUrl;
          return;
        }

        // Web flow - go to dashboard
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
