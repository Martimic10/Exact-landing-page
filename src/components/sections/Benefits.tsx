"use client";

const benefits = [
  {
    id: 1,
    icon: "zap",
    title: "Lightning fast",
    description: "Generate production-ready code in seconds, not hours.",
  },
  {
    id: 2,
    icon: "shield",
    title: "Type-safe by default",
    description: "Every component comes with full TypeScript support.",
  },
  {
    id: 3,
    icon: "layers",
    title: "Framework agnostic",
    description: "Works seamlessly with React, Vue, Svelte, and more.",
  },
  {
    id: 4,
    icon: "git",
    title: "Version control ready",
    description: "Clean diffs that integrate perfectly with your workflow.",
  },
  {
    id: 5,
    icon: "puzzle",
    title: "Design system aware",
    description: "Respects your existing tokens, components, and patterns.",
  },
  {
    id: 6,
    icon: "refresh",
    title: "Iterative refinement",
    description: "Tweak and improve until it's exactly right.",
  },
];

function IconPlaceholder({ type }: { type: string }) {
  return (
    <div
      className="flex h-10 w-10 items-center justify-center rounded-lg"
      style={{ backgroundColor: '#1a1a1a' }}
    >
      {type === "zap" && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )}
      {type === "shield" && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )}
      {type === "layers" && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )}
      {type === "git" && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M13 6h3a2 2 0 0 1 2 2v7" />
          <line x1="6" y1="9" x2="6" y2="21" />
        </svg>
      )}
      {type === "puzzle" && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.452-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.473.166.855.498.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
        </svg>
      )}
      {type === "refresh" && (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2v6h-6" />
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
          <path d="M3 22v-6h6" />
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        </svg>
      )}
    </div>
  );
}

export function Benefits() {
  return (
    <section className="relative pb-32 md:pb-48" style={{ paddingTop: '120px' }}>
      <div className="flex flex-col items-center" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Section Header */}
        <div className="w-full max-w-5xl" style={{ marginBottom: '48px' }}>
          <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Why developers love Exact.
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col justify-between rounded-2xl border border-white/10"
              style={{ backgroundColor: '#0a0a0a', padding: '24px', minHeight: '220px' }}
            >
              <IconPlaceholder type={benefit.icon} />
              <div>
                <h3 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.5' }}>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
