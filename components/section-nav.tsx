"use client";

const SECTION_ITEMS = [
  { id: "bio", label: "Bio" },
  { id: "socials", label: "Socials" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contributions", label: "Contributions" },
  { id: "interests", label: "Interests" },
  { id: "preferences", label: "Preferences" },
  { id: "education", label: "Education" },
];

function SectionNav() {
  return (
    <nav
      aria-label="Page sections"
      className="hidden xl:block fixed top-32 left-[max(1rem,calc(50%-40rem-10rem))] w-36"
    >
      <ul className="flex flex-col gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
        {SECTION_ITEMS.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="transition-colors hover:text-foreground">
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { SectionNav };
