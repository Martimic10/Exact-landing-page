"use client";

import Image from "next/image";

const navigationLinks = [
  { label: "Features", href: "#features" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10" style={{ backgroundColor: '#111111', marginTop: '120px' }}>
      <div className="mx-auto max-w-6xl" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Main Footer Content */}
        <div style={{ paddingTop: '80px', paddingBottom: '60px' }}>
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-24">
            {/* Left side - Logo, description, social icons */}
            <div className="lg:max-w-md">
              {/* Logo */}
              <div className="flex items-center gap-1 text-white">
                <Image
                  src="/exact-logo.png"
                  alt="Exact"
                  width={44}
                  height={44}
                  style={{ height: '44px', width: 'auto' }}
                />
                <span className="text-xl font-medium">Exact</span>
              </div>

              {/* Description */}
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6', marginTop: '20px' }}>
                The AI code editor built for precision.
                <br />
                Write less, build more, ship faster.
              </p>

              {/* Social Icons */}
              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://x.com/ExactBuild"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="X (Twitter)"
                >
                  <XIcon />
                </a>
                <a
                  href="https://www.linkedin.com/company/exact-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>

            {/* Right side - Navigation */}
            <div>
              <h3 style={{ color: '#ffffff', fontSize: '14px', fontWeight: 500, marginBottom: '28px' }}>
                Navigation
              </h3>
              <nav className="flex flex-col gap-5">
                {navigationLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                    style={{ fontSize: '14px' }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ paddingTop: '60px', paddingBottom: '40px' }}>
          <div className="flex justify-start">
            <span style={{ color: '#6b7280', fontSize: '14px' }}>
              © 2026 Exact
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
