"use client";

import { usePathname } from "next/navigation";
import { docsNavigation } from "@/lib/docs-navigation";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-8">
      {docsNavigation.map((section) => (
        <div key={section.title}>
          <h3
            className="mb-3 text-xs font-semibold uppercase tracking-wider"
            style={{ color: '#6b7280' }}
          >
            {section.title}
          </h3>
          <ul className="space-y-1">
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors"
                    style={{
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      color: isActive ? '#ffffff' : '#9ca3af',
                    }}
                  >
                    <span>{item.title}</span>
                    {item.badge && (
                      <span
                        className="rounded-full px-2 py-0.5 text-xs font-medium"
                        style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
