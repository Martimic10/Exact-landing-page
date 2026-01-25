"use client";

import { useState } from "react";
import { addToWaitlist } from "@/lib/supabase";

export function CTA() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const result = await addToWaitlist(email);

    if (result.success) {
      setMessage({ type: 'success', text: "You're on the list! We'll be in touch soon." });
      setEmail("");
    } else {
      setMessage({ type: 'error', text: result.error || 'Something went wrong. Please try again.' });
    }

    setIsLoading(false);
  };

  return (
    <section id="waitlist" className="relative pb-32 md:pb-48" style={{ paddingTop: '120px' }}>
      <div className="flex flex-col items-center" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        <div className="w-full max-w-5xl">
          <div
            className="overflow-hidden rounded-2xl border border-white/10"
            style={{ backgroundColor: '#0a0a0a' }}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Mockup - appears first on mobile */}
              <div className="relative order-1 lg:order-2 lg:w-1/2">
                <div className="relative h-80 w-full overflow-hidden sm:h-96 lg:h-full" style={{ minHeight: '400px' }}>
                  {/* Background Image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'url("https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1200&q=80")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'brightness(0.7)',
                    }}
                  />

                  {/* Code Editor Mockup */}
                  <div
                    className="absolute rounded-xl border border-white/10 bg-gray-950 shadow-2xl"
                    style={{
                      top: '40px',
                      right: '-40px',
                      width: '90%',
                      height: 'calc(100% - 60px)',
                    }}
                  >
                    {/* Window Title Bar */}
                    <div className="flex h-10 items-center justify-center border-b border-white/10 bg-gray-900/80">
                      <span className="text-sm text-gray-400">Exact</span>
                    </div>

                    {/* Editor Content */}
                    <div className="flex h-[calc(100%-40px)]">
                      {/* Sidebar */}
                      <div className="hidden w-36 shrink-0 border-r border-white/10 bg-gray-950 p-3 sm:block">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-400">Explorer</span>
                          <span className="text-gray-600">···</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="text-gray-600">▼</span> cogs
                          </div>
                          <div className="ml-4 flex items-center gap-2 text-xs text-gray-500">
                            <span className="text-gray-600">▶</span> components
                          </div>
                          <div className="ml-4 flex items-center gap-2 text-xs text-gray-500">
                            <span className="text-gray-600">▶</span> utils
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="text-gray-600">📄</span> package.json
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="text-gray-600">📄</span> README.md
                          </div>
                        </div>
                      </div>

                      {/* Main editor area */}
                      <div className="flex min-w-0 flex-1 flex-col">
                        {/* Tab bar */}
                        <div className="flex h-9 shrink-0 items-center border-b border-white/10 bg-gray-950 px-3">
                          <div className="flex items-center gap-2 rounded bg-gray-800 px-2 py-1 text-xs text-gray-300">
                            UserAuth.tsx
                            <span className="text-gray-500">×</span>
                          </div>
                          <div className="ml-2 rounded px-2 py-1 text-xs text-gray-500">
                            Database.ts
                          </div>
                          <div className="ml-2 rounded px-2 py-1 text-xs text-gray-500">
                            AI Chat
                          </div>
                        </div>

                        {/* Code area */}
                        <div className="min-h-0 flex-1 overflow-hidden bg-gray-950 p-3 font-mono text-xs">
                          <div className="space-y-1">
                            <div className="flex">
                              <span className="w-6 shrink-0 text-gray-600">1</span>
                              <span>
                                <span className="text-purple-400">import</span>
                                <span className="text-gray-300">{" { "}</span>
                                <span className="text-gray-100">useState</span>
                                <span className="text-gray-300">{" } "}</span>
                                <span className="text-purple-400">from</span>
                                <span className="text-green-400"> &apos;react&apos;</span>
                              </span>
                            </div>
                            <div className="flex">
                              <span className="w-6 shrink-0 text-gray-600">2</span>
                              <span>
                                <span className="text-purple-400">import</span>
                                <span className="text-gray-300">{" { "}</span>
                                <span className="text-gray-100">supabase</span>
                                <span className="text-gray-300">{" } "}</span>
                                <span className="text-purple-400">from</span>
                                <span className="text-green-400"> &apos;@/lib/supabase&apos;</span>
                              </span>
                            </div>
                            <div className="flex">
                              <span className="w-6 shrink-0 text-gray-600">3</span>
                            </div>
                            <div className="flex">
                              <span className="w-6 shrink-0 text-gray-600">4</span>
                              <span>
                                <span className="text-purple-400">export function</span>
                                <span className="text-yellow-300"> UserAuth</span>
                                <span className="text-gray-300">() {"{"}</span>
                              </span>
                            </div>
                            <div className="flex">
                              <span className="w-6 shrink-0 text-gray-600">5</span>
                              <span className="text-gray-300">
                                {"  "}
                                <span className="text-purple-400">const</span>
                                {" [email, setEmail] "}
                                <span className="text-blue-400">=</span>
                                <span className="text-yellow-300"> useState</span>
                                {"('')"}
                              </span>
                            </div>
                            <div className="flex">
                              <span className="w-6 shrink-0 text-gray-600">6</span>
                              <span className="text-gray-300">
                                {"  "}
                                <span className="text-purple-400">const</span>
                                {" [password, setPassword] "}
                                <span className="text-blue-400">=</span>
                                <span className="text-yellow-300"> useState</span>
                                {"('')"}
                              </span>
                            </div>
                            <div className="flex">
                              <span className="w-6 shrink-0 text-gray-600">7</span>
                            </div>
                            <div className="flex">
                              <span className="w-6 shrink-0 text-gray-600">8</span>
                              <span className="text-gray-500 italic">
                                {"  // AI suggestion: Add password validation"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content - appears second on mobile */}
              <div className="order-2 flex flex-col justify-center p-6 sm:p-10 lg:order-1 lg:w-1/2 lg:p-12">
                <h2 className="text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl">
                  Frontend developers
                  <br />
                  deserve better AI tools
                </h2>
                <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: '1.6', marginTop: '16px' }}>
                  Exact doesn&apos;t try to do everything.
                  <br />
                  It does one thing well: UI precision.
                </p>

                {/* Email Input Form */}
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-2 sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={isLoading}
                    style={{
                      backgroundColor: '#1a1a1a',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: '#ffffff',
                      fontSize: '13px',
                      outline: 'none',
                      flex: 1,
                      minWidth: 0,
                      opacity: isLoading ? 0.6 : 1,
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                      backgroundColor: isLoading ? '#cccccc' : isHovered ? '#e5e5e5' : '#ffffff',
                      color: '#000000',
                      borderRadius: '8px',
                      padding: '12px 24px',
                      fontSize: '13px',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                      transition: 'background-color 0.2s',
                      cursor: isLoading ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {isLoading ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </form>

                {/* Status Message */}
                {message && (
                  <p
                    style={{
                      marginTop: '12px',
                      fontSize: '14px',
                      color: message.type === 'success' ? '#22c55e' : '#ef4444',
                    }}
                  >
                    {message.text}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
