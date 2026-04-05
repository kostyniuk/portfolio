import {
  AnthropicIcon,
  CloudflareIcon,
  GoogleIcon,
  MicrosoftIcon,
  OpenAIIcon,
  VercelIcon,
  XCorpIcon,
  YouTubeIcon,
  type CompanyIconProps,
} from "@/components/icons/company-icons";
import { Badge } from "@/components/ui/badge";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import type { ComponentType } from "react";
import { StickyIcon } from "./sticky-icon";

const EXPERIENCES: {
  period: string;
  title: string;
  company: string;
  description: string;
  stack: string[];
  Icon: ComponentType<CompanyIconProps>;
}[] = [
  {
    period: "May 2025 — Present",
    title: "Team Lead",
    company: "AMFG",
    Icon: VercelIcon,
    description:
      "Spending a lot of time on enhancing both DX and product, introducing a lot of new technologies and moving the product forward. Managing the team of 2-3 people. More detailed:",
    stack: ["Node.js", "React", "Node.js", "TypeScript", "Javascript", "Postgres"],
  },
  {
    period: "January 2023 — February 2024",
    title: "Software Engineer",
    company: "Anthropic",
    Icon: AnthropicIcon,
    description:
      "Worked on Claude's frontend interfaces and developer-facing tools. Built interactive components for the API playground and contributed to the prompt engineering toolkit.",
    stack: ["React", "TypeScript", "Python", "GraphQL"],
  },
  {
    period: "June 2021 — December 2022",
    title: "Frontend Engineer",
    company: "Cloudflare",
    Icon: CloudflareIcon,
    description:
      "Developed and maintained the Cloudflare Dashboard used by millions of developers. Led performance initiatives for the Workers and Pages product surfaces.",
    stack: ["React", "TypeScript", "Go", "Workers"],
  },
  {
    period: "August 2019 — May 2021",
    title: "Software Engineer",
    company: "OpenAI",
    Icon: OpenAIIcon,
    description:
      "Built internal tooling and developer-facing interfaces for the API platform. Contributed to the Playground and documentation infrastructure.",
    stack: ["React", "Node.js", "Python", "PostgreSQL"],
  },
  {
    period: "March 2018 — July 2019",
    title: "Frontend Engineer",
    company: "Google",
    Icon: GoogleIcon,
    description:
      "Worked on Google Search frontend infrastructure. Improved Core Web Vitals across key surfaces and contributed to the internal component library.",
    stack: ["TypeScript", "Angular", "Go", "Protobuf"],
  },
  {
    period: "September 2016 — February 2018",
    title: "Software Engineer",
    company: "YouTube",
    Icon: YouTubeIcon,
    description:
      "Built player UI features and A/B tested engagement improvements across web and mobile web. Contributed to the Studio creator dashboard.",
    stack: ["JavaScript", "Polymer", "Python", "Spanner"],
  },
  {
    period: "January 2015 — August 2016",
    title: "Software Engineer",
    company: "Microsoft",
    Icon: MicrosoftIcon,
    description:
      "Developed features for the Azure Portal and internal DevOps tooling. Worked on CI/CD pipelines and contributed to the Fluent UI design system.",
    stack: ["React", "TypeScript", "C#", ".NET"],
  },
  {
    period: "June 2014 — December 2014",
    title: "Software Engineering Intern",
    company: "X (formerly Twitter)",
    Icon: XCorpIcon,
    description:
      "Contributed to the timeline rendering pipeline and built internal analytics dashboards for content moderation teams.",
    stack: ["React", "Scala", "GraphQL", "Redis"],
  },
];

function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      <div className="mt-3 flex w-full shrink-0 flex-col rounded-2xl border border-border/40 bg-card/95 px-3 shadow-lg ring-1 ring-foreground/5 sm:rounded-[2rem] sm:px-8 dark:ring-foreground/10">
        <div className="flex shrink-0 flex-row gap-6 py-6">
          <div className="relative flex flex-col">
            <div className="absolute top-0 left-0 left-3 h-full w-[2px] -translate-x-1/2 rounded-full bg-foreground"></div>
            {EXPERIENCES.map((experience, index) => (
              <div key={index} className="flex gap-4 sm:gap-12">
                <StickyIcon>
                  <experience.Icon className="size-3.5" />
                </StickyIcon>
                <Item className="mb-12 last:mb-0">
                  <ItemContent>
                    <span className="font-mono text-[0.625rem] tracking-wide text-muted-foreground">
                      {experience.period}
                    </span>
                    <ItemTitle>{experience.title}</ItemTitle>
                    <ItemDescription className="font-medium text-foreground">{experience.company}</ItemDescription>
                    <ItemDescription className="line-clamp-3">{experience.description}</ItemDescription>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {experience.stack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </ItemContent>
                </Item>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Experience };
