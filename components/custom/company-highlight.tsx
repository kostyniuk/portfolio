"use client";

import type { ComponentProps, ComponentType, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { AMFGIcon, type CompanyIconProps } from "@/components/icons/company-icons";
import { HighlightPhraseContent, HighlightPhraseTrigger } from "@/components/ui/glasscn/highlight-phrase";
import { Popover } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type CompanyProfile = {
  name: string;
  tagline: string;
  description: string;
  facts: { label: string; value: string }[];
  href: string;
  Icon: ComponentType<CompanyIconProps>;
};

const COMPANIES = {
  amfg: {
    name: "AMFG",
    tagline: "Manufacturing workflow automation",
    description:
      "A platform factories plan and run production on, built for industrial 3D printing. It carries a part from the incoming order through quoting, scheduling and machine work to the finished piece.",
    facts: [
      { label: "Industry", value: "Additive manufacturing software" },
      { label: "HQ", value: "London, UK" },
      { label: "My time there", value: "Six years, junior to team lead" },
    ],
    href: "https://amfg.ai",
    Icon: AMFGIcon,
  },
} satisfies Record<string, CompanyProfile>;

type CompanyKey = keyof typeof COMPANIES;

type CompanyHighlightProps = Omit<ComponentProps<typeof HighlightPhraseTrigger>, "children"> & {
  company: CompanyKey;
  children?: ReactNode;
};

function CompanyHighlight({ company, children, className, ...props }: CompanyHighlightProps) {
  const { name, tagline, description, facts, href, Icon } = COMPANIES[company];

  return (
    <Popover>
      {/* --foreground already flips per theme, so the underline follows it. The dark:
          variant is not a second colour: it exists only to beat the registry's
          dark:decoration-red-400, which tailwind-merge will not drop otherwise. */}
      <HighlightPhraseTrigger
        className={cn("inline align-baseline decoration-foreground/40 dark:decoration-foreground/40", className)}
        {...props}
      >
        {children ?? name}
      </HighlightPhraseTrigger>
      <HighlightPhraseContent className="w-[24rem]">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-foreground/5 ring-1 ring-foreground/10">
            <Icon className="size-4" />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="text-sm font-medium text-foreground">{name}</span>
            <span className="truncate text-[0.625rem] font-mono tracking-wide text-muted-foreground">{tagline}</span>
          </span>
        </div>

        <p className="text-xs/relaxed text-muted-foreground">{description}</p>

        <dl className="flex flex-col gap-1.5 border-t border-foreground/10 pt-3">
          {facts.map(({ label, value }) => (
            <div key={label} className="flex items-baseline justify-between gap-3">
              <dt className="shrink-0 text-[0.625rem] font-mono tracking-wide text-muted-foreground">{label}</dt>
              <dd className="text-right text-[0.6875rem] text-foreground">{value}</dd>
            </div>
          ))}
        </dl>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 self-start text-[0.625rem] font-mono tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
        >
          {href.replace("https://", "")}
          <ArrowUpRight className="size-3" />
        </a>
      </HighlightPhraseContent>
    </Popover>
  );
}

export { CompanyHighlight, type CompanyKey };
