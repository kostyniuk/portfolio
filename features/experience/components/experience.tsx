"use client";

import {
  AnthropicIcon,
  CloudflareIcon,
  GoogleIcon,
  OpenAIIcon,
  VercelIcon,
  type CompanyIconProps,
} from "@/components/icons/company-icons";
import type { ComponentType } from "react";
import { ExperienceItem } from "./experience-item";

type ExperienceProps = {
  period: string;
  title: string;
  company: string;
  description: string;
  stack: string[];
  keyPoints?: string[];
  Icon: ComponentType<CompanyIconProps>;
};

const EXPERIENCES: ExperienceProps[] = [
  {
    period: "May 2025 — Present",
    title: "Team Lead",
    company: "AMFG",
    Icon: VercelIcon,
    description:
      "Spending a lot of time on enhancing both DX and product, introducing a lot of new technologies and moving the product forward. Managing the team of 2-3 people. More detailed:",
    stack: ["Node.js", "React", "Node.js", "TypeScript", "Javascript", "Postgres"],
    keyPoints: [
      "Led a small cross-functional team of 2-3 engineers and coordinated delivery priorities.",
      "Improved developer experience by simplifying local workflows, tooling, and build/deploy feedback loops.",
      "Introduced and evaluated new technologies to modernize the product stack and reduce maintenance overhead.",
      "Worked across product and engineering to ship features that improved both customer workflows and internal velocity.",
      "Helped shape technical direction, with a focus on maintainable architecture and pragmatic execution.",
    ],
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
    keyPoints: [],
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
];

function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      <div className="mt-2 px-8 shrink-0 flex flex-col ring-1 ring-foreground/10 bg-card">
        <div className="flex flex-row shrink-0 gap-6 py-4">
          <div className="flex flex-col relative">
            <div className="top-0 left-0 left-3 -translate-x-1/2 absolute h-full w-[2px] bg-foreground rounded-full"></div>
            {EXPERIENCES.map((experience, index) => (
              <ExperienceItem key={index} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export type { ExperienceProps };
export { Experience };
