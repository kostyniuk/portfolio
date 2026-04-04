"use client";

import {
  CloudflareIcon,
  GoogleIcon,
  OpenAIIcon,
  VercelIcon,
  type CompanyIconProps,
} from "@/components/icons/company-icons";
import type { ComponentType } from "react";
import type { ExperienceSectionData } from "./experience-section";
import { ExperienceItem } from "./experience-item";

type ExperienceProps = {
  period: string;
  title: string;
  company: string;
  description: string;
  stack: string[];
  keyPoints?: string[];
  content?: ExperienceSectionData[];
  additionalContent?: ExperienceSectionData[];
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
    period: "May 2023 — April 2025",
    title: "Senior Fullstack Software Engineer",
    company: "AMFG",
    Icon: CloudflareIcon,
    description:
      "Developed and maintained the Cloudflare Dashboard used by millions of developers. Led performance initiatives for the Workers and Pages product surfaces.",
    stack: ["React", "TypeScript", "Go", "Workers"],
    keyPoints: [],
  },
  {
    period: "December 2021 — May 2023",
    title: "Middle Fullstack Software Engineer",
    company: "AMFG",
    Icon: OpenAIIcon,
    description:
      "Customer CSV Upload, Google OAuth Integration, Custom Gantt Timeline with Drag-and-Drop, Workflow Automation Engine",
    additionalContent: [
      {
        title: "Customer CSV Upload",
        summary:
          "Architected bulk migration system enabling seamless customer data imports, reducing onboarding friction for new platform adopters.",
      },
      {
        title: "Google OAuth Integration",
        summary:
          "Implemented secure, streamlined authentication flow for admin console—eliminating password management overhead while strengthening access controls.",
      },
      {
        title: "Custom Gantt Timeline with Drag-and-Drop",
        summary: "Built interactive project visualization featuring:",
        content: [
          "Dynamic zoom zones for multi-scale planning",
          "Intuitive drag-and-drop task management with real-time Gantt synchronization",
          "Intelligent conflict detection with automated error notifications",
        ],
      },
      {
        title: "Workflow Automation Engine",
        summary: "Designed and developed extensible automation framework supporting:",
        content: [
          "Event-driven triggers (e.g., order status changes)",
          "Multi-channel actions: templated emails, targeted push notifications, cascading status updates",
          "Composable rule system enabling complex, user-defined workflows",
        ],
      },
    ],
    stack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    period: "October 2020 — November 2021",
    title: "Junior Fullstack Software Engineer",
    company: "AMFG",
    Icon: GoogleIcon,
    description:
      "First real working experience ✨. It was a period of adjusting my life to new agenda, combining with university, improving soft skills and meeting a lot of cool people",
    additionalContent: [
      {
        title: "More detailed:",
        content: [
          "Learning new technologies like AWS, Sequilize, styled-components, Kendo, etc.",
          "Improved APIs response time by creating a job that migrates data from old complicated legacy DB to newer, our modern services worked with",
          "Implemented Instant registartion flow for non logged in customer, that automatically links just created order to the account they create in in instant mode",
          "Worked on Admin Console, implementing set of small features that reduced requests to dev team to change something manually.",
        ],
      },
    ],
    stack: ["Node.js", "React", "Postgres"],
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
