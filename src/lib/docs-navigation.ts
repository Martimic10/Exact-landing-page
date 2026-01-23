export interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const docsNavigation: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs/introduction",
        description: "Learn what Exact can do for you",
        icon: "book"
      },
      {
        title: "Installation",
        href: "/docs/getting-started/installation",
        description: "Get Exact up and running",
        icon: "download"
      },
      {
        title: "Quick Start",
        href: "/docs/getting-started/quick-start",
        description: "Create your first component",
        icon: "zap"
      },
    ],
  },
  {
    title: "Features",
    items: [
      {
        title: "Overview",
        href: "/docs/features",
        description: "Explore all features",
        icon: "grid"
      },
      {
        title: "AI Code Generation",
        href: "/docs/features/ai-code-generation",
        description: "Generate components from text",
        icon: "sparkles"
      },
      {
        title: "Component Polish",
        href: "/docs/features/component-polish",
        description: "Clean up existing code",
        icon: "wand"
      },
      {
        title: "Refactoring",
        href: "/docs/features/refactoring",
        description: "Safe code transformations",
        icon: "refresh"
      },
    ],
  },
  {
    title: "Guides",
    items: [
      {
        title: "Keyboard Shortcuts",
        href: "/docs/keyboard-shortcuts",
        description: "Master the hotkeys",
        icon: "keyboard"
      },
      {
        title: "Settings",
        href: "/docs/settings",
        description: "Customize your experience",
        icon: "settings"
      },
      {
        title: "Billing",
        href: "/docs/billing",
        description: "Plans, pricing, and payments",
        icon: "credit-card"
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "FAQ",
        href: "/docs/faq",
        description: "Common questions answered",
        icon: "help"
      },
      {
        title: "Changelog",
        href: "/docs/changelog",
        description: "What's new in Exact",
        icon: "list",
        badge: "New"
      },
    ],
  },
];

// Helper to get previous and next pages for pagination
export function getPagination(currentPath: string): {
  prev?: NavItem;
  next?: NavItem;
} {
  const allItems: NavItem[] = docsNavigation.flatMap((section) => section.items);
  const currentIndex = allItems.findIndex((item) => item.href === currentPath);

  return {
    prev: currentIndex > 0 ? allItems[currentIndex - 1] : undefined,
    next: currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : undefined,
  };
}

// Get item by href
export function getNavItem(href: string): NavItem | undefined {
  const allItems: NavItem[] = docsNavigation.flatMap((section) => section.items);
  return allItems.find((item) => item.href === href);
}
