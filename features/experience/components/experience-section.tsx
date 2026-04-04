"use client";

import { ItemDescription } from "@/components/ui/item";
import { cn } from "@/lib/utils";

type ExperienceSectionContent = string | string[];

type ExperienceSectionData = {
  title?: string;
  summary?: string;
  content?: ExperienceSectionContent;
};

type ExperienceSectionTitleProps = {
  children: string;
};

type ExperienceSectionSummaryProps = {
  children: string;
};

type ExperienceSectionContentProps = {
  content?: ExperienceSectionContent;
};

type ExperienceSectionProps = {
  section: ExperienceSectionData;
};

type ExperienceSectionsProps = {
  sections: ExperienceSectionData[];
  className?: string;
};

function ExperienceSectionTitle({ children }: ExperienceSectionTitleProps) {
  return <ItemDescription className="font-medium text-foreground">{children}</ItemDescription>;
}

function ExperienceSectionSummary({ children }: ExperienceSectionSummaryProps) {
  return <ItemDescription>{children}</ItemDescription>;
}

function ExperienceSectionContent({ content }: ExperienceSectionContentProps) {
  if (!content) {
    return null;
  }

  if (typeof content === "string") {
    return <ItemDescription>{content}</ItemDescription>;
  }

  return (
    <ul className="flex flex-col gap-2 list-disc pl-5 text-left text-xs/relaxed font-normal text-muted-foreground">
      {content.map((item, index) => (
        <li key={`${index}-${item}`}>{item}</li>
      ))}
    </ul>
  );
}

function ExperienceSection({ section }: ExperienceSectionProps) {
  return (
    <div className="flex flex-col gap-2">
      {section.title ? <ExperienceSectionTitle>{section.title}</ExperienceSectionTitle> : null}
      {section.summary ? <ExperienceSectionSummary>{section.summary}</ExperienceSectionSummary> : null}
      <ExperienceSectionContent content={section.content} />
    </div>
  );
}

function ExperienceSections({ sections, className }: ExperienceSectionsProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {sections.map((section, index) => (
        <ExperienceSection
          key={`${index}-${section.title ?? section.summary ?? "section"}`}
          section={section}
        />
      ))}
    </div>
  );
}

export type { ExperienceSectionData };
export {
  ExperienceSection,
  ExperienceSectionContent,
  ExperienceSectionSummary,
  ExperienceSectionTitle,
  ExperienceSections,
};
