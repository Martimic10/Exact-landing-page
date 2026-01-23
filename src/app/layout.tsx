import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Exact — Precision Developer Tools",
  description:
    "Exact is a precision developer tool built for teams who demand accuracy. Join the waitlist.",
  keywords: ["developer tools", "precision", "engineering", "software"],
  authors: [{ name: "Exact" }],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Exact — Precision Developer Tools",
    description:
      "Exact is a precision developer tool built for teams who demand accuracy. Join the waitlist.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exact — Precision Developer Tools",
    description:
      "Exact is a precision developer tool built for teams who demand accuracy. Join the waitlist.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
