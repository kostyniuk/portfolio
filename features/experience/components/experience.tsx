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
      "Leading architecture and delivery at AMFG across frontend modernization, backend platform work, performance improvements, and team-wide developer experience initiatives while managing a team of 2-3 engineers.",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Python"],
    additionalContent: [
      {
        title: "Frontend Architecture & Developer Experience",
        content: [
          "Led migration from Kendo to shadcn/ui and Tailwind CSS, drove investigation, presented ROI analysis, and persuaded stakeholders to invest in a full rewrite that improved iteration speed, developer experience, and UI consistency.",
          "Championed and implemented Oxlint and oxfmt, achieving 34x faster pre-commit hooks and significantly reducing CI pipeline times.",
          "Proactively migrated the team across major tooling upgrades: npm to pnpm, styled-components to Tailwind, ESLint to Oxlint, and Prettier to oxfmt.",
        ],
      },
      {
        title: "Backend Systems & AI/ML",
        content: [
          "Built a 3D model similarity engine using cosine similarity and vector embeddings, leveraging pgvector for vector operations in PostgreSQL.",
          "Pioneered the team's first TypeScript backend service, proving developer experience benefits while delivering a low-defect production system.",
        ],
      },
      {
        title: "Performance & Scalability",
        content: [
          "Architected migration from legacy services and a monolithic database to a streamlined five-field configuration flow, reducing app creation time from 10 minutes to 1 second and eliminating more than 150 redundant admin console configurations.",
        ],
      },
      {
        title: "Leadership & Collaboration",
        content: [
          "Collaborated closely with the design team to deliver stronger UX outcomes.",
          "Achieved 2x personal productivity through AI tooling adoption while maintaining output alongside team leadership and meeting load.",
        ],
      },
    ],
  },
  {
    period: "May 2023 — April 2025",
    title: "Senior Fullstack Software Engineer",
    company: "AMFG",
    Icon: CloudflareIcon,
    description:
      "Led frontend modernization and internal platform initiatives at AMFG, spanning legacy Angular-to-React migration, advanced state management, customer automation tooling, and team-wide adoption of AI-assisted engineering workflows.",
    stack: ["React", "TypeScript", "Go", "Workers"],
    additionalContent: [
      {
        title: "Legacy Migration: Angular -> React Sidebar",
        summary:
          "Led complex decoupling and migration of core sidebar component from legacy Angular to React, navigating tight coupling and intricate legacy dependencies.",
      },
      {
        title: "AI Engineering & Team Enablement",
        summary:
          "Pioneered agentic coding workflows using Cursor and Claude. Organized and led company's first internal AI workshop, upskilling team on LLM-assisted development practices.",
      },
      {
        title: "Advanced Table State Management",
        summary:
          "Implemented nuqs for URL-persisted table state, solving collaboration friction across 40+ filter combinations and enabling seamless state sharing between colleagues.",
      },
      {
        title: "Engine Service: Customer Automation Platform",
        summary:
          "Architected a sandboxed scripting environment allowing customers to write Python and JavaScript against our API. Delivered powerful automation capabilities that significantly reduced manual customer workflows.",
      },
      {
        title: "Technical Interviewing",
        summary: "Conducted 50+ engineering interviews, shaping team growth and hiring standards.",
      },
    ],
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
      <div className="mt-3 flex shrink-0 flex-col rounded-[2rem] border border-border/40 bg-card/95 px-6 shadow-lg ring-1 ring-foreground/5 sm:px-8 dark:ring-foreground/10">
        <div className="flex shrink-0 flex-row gap-6 py-6">
          <div className="relative flex flex-col">
            <div className="absolute top-0 left-0 left-3 h-full w-[2px] -translate-x-1/2 rounded-full bg-foreground"></div>
            {EXPERIENCES.map((experience, index) => (
              <ExperienceItem key={index} {...experience} isExpanded={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export type { ExperienceProps };
export { Experience };
