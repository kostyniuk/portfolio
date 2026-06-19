"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const SECTION_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contributions", label: "Contributions" },
  { id: "preferences", label: "Preferences" },
  { id: "education", label: "Education" },
];

function SectionNav() {
  const [activeSection, setActiveSection] = useState(SECTION_ITEMS[0]?.id);

  useEffect(() => {
    const sections = SECTION_ITEMS.map((section) => document.getElementById(section.id)).filter(
      (section): section is HTMLElement => section !== null,
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="hidden xl:block fixed top-32 left-[max(1rem,calc(50%-40rem-10rem))] w-36"
    >
      <ul className="nav-list flex flex-col gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
        {SECTION_ITEMS.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={cn(
                "nav-link transition-colors hover:text-foreground",
                activeSection === section.id && "text-foreground",
              )}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { SectionNav };
