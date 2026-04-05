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
          "Proposed and implemented oxlint and oxfmt, achieving 34x faster pre-commit hooks and significantly reducing CI pipeline times.",
          "Proactively migrated the team across major tooling upgrades: npm to pnpm, styled-components to Tailwind, ESLint to oxlint, and Prettier to oxfmt.",
        ],
      },
      {
        title: "Backend Systems & AI",
        content: [
          "Built a 3D model similarity engine using cosine similarity and vector embeddings, leveraging pgvector for vector operations in PostgreSQL - mostly finding top N similar vectors and comparing two vectors.",
          "Pioneered the team's first TypeScript backend service, proving developer experience benefits while delivering a low-defect production system.",
        ],
      },
      {
        title: "Performance & Scalability",
        content: [
          "Architected and cut app creation from 10 minutes to 20 second by gutting legacy services and a bloated DB. Replaced 150+ redundant admin configs with 8 fields that actually matter.",
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
      "Led team-wide adoption of AI-assisted engineering workflows, frontend modernization and internal platform initiatives at AMFG, spanning legacy Angular-to-React migration, advanced state management, customer automation tooling",
    stack: ["React", "TypeScript", "Go", "Workers"],
    additionalContent: [
      {
        title: "Frontend Architecture & Modernization",
        content: [
          "Led complex decoupling and migration of the core sidebar component from legacy Angular to React, navigating tight coupling and intricate legacy dependencies. The work had been considered extremely difficult for years; I delivered it in under two weeks and significantly improved main application performance.",
          "Implemented nuqs for URL-persisted table state, solving collaboration friction across 40+ filter combinations and enabling seamless state sharing between colleagues.",
        ],
      },
      {
        title: "AI Engineering & Team Enablement",
        content: [
          "Pioneered agentic coding workflows using Cursor and Claude.",
          "Organized and led the company's first internal AI workshop, upskilling the team on LLM-assisted development practices.",
        ],
      },
      {
        title: "Backend Systems & Customer Automation",
        content: [
          "Architected a sandboxed scripting environment allowing customers to write Python and JavaScript against our API, delivering powerful automation capabilities that significantly reduced manual customer workflows.",
        ],
      },
      {
        title: "Leadership & Team Building",
        content: ["Conducted 50+ engineering interviews, shaping team growth and hiring standards."],
      },
    ],
  },
  {
    period: "December 2021 — May 2023",
    title: "Middle Fullstack Software Engineer",
    company: "AMFG",
    Icon: OpenAIIcon,
    description:
      "Delivered core platform features across customer onboarding, authentication, planning UX, and workflow automation, with a focus on reducing friction for both customers and internal teams.",
    additionalContent: [
      {
        title: "Platform & Onboarding",
        content: [
          "Architected a bulk migration system for customer CSV uploads, enabling seamless data imports and reducing onboarding friction for new platform adopters.",
          "Implemented secure Google OAuth for the admin console, eliminating password management overhead while strengthening access controls.",
        ],
      },
      {
        title: "Frontend Product Features",
        content: [
          "Built a custom Gantt timeline with drag-and-drop task management, dynamic zoom levels, real-time synchronization, and conflict detection with automated error notifications.",
        ],
      },
      {
        title: "Workflow Automation",
        summary:
          "Involved in building a large workflow automation system that let customers automate custom actions based on triggers, such as an order status change.",
        content: [
          "Supported event-driven triggers such as order status changes, new customer registered, etc.",
          "Enabled 10+ follow-up actions including emails to different recipients, different email templates, push messages in different variants, status changes elsewhere in the system and lot more.",
          "The breadth of possible trigger-and-action combinations gave customers near-endless flexibility for building custom operational workflows.",
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
      "Started my full-time engineering career at AMFG, building foundational fullstack experience while contributing to backend performance improvements and customer-facing admin features.",
    additionalContent: [
      {
        title: "Learning & Foundations",
        content: [
          "Learned and worked with technologies such as AWS, Sequelize, styled-components, and Kendo.",
          "Adjusted to full-time engineering work while balancing university and building core collaboration and communication skills.",
        ],
      },
      {
        title: "Backend & Performance",
        content: [
          "Improved API response times by creating a job that migrated data from a complicated legacy database into newer services used by the modern platform.",
        ],
      },
      {
        title: "Product Features",
        content: [
          "Implemented an instant registration flow for non-logged-in customers that automatically linked a newly created order to the account they created in instant mode.",
          "Worked on the Admin Console, shipping smaller features that reduced requests to the dev team for manual changes.",
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
