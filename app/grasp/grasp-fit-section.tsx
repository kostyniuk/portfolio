import { Check, Minus } from "lucide-react";

import { SpriteField } from "@/components/sprite-field";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";

/**
 * The posting lists five requirements and three pluses. Each claim carries its own
 * evidence, and the two pluses held at arm's length name the honest caveat.
 */
const REQUESTED_AREAS = [
  { area: "TypeScript and React", evidence: "My daily stack, end to end", met: true },
  { area: "Track record of quality systems", evidence: "Years of production systems, built and maintained", met: true },
  {
    area: "System design, databases, performance",
    evidence: "Node, PostgreSQL, and real optimization wins",
    met: true,
  },
  { area: "Cloud infrastructure and deployment", evidence: "AWS in production; GCP is a fast transfer", met: true },
  { area: "AI coding tools, maximized", evidence: "My default way of working, not an experiment", met: true },
  { area: "Next.js", evidence: "Daily, and I write articles about modern Next.js", met: true },
  { area: "OpenSearch", evidence: "Hands-on with Elasticsearch, its origin", met: true },
  { area: "Terraform", evidence: "Worked with it, though not daily", met: true },
];

const REASON_GROUPS = [
  {
    title: "Why Grasp should hire me",
    reasons: [
      {
        title: "Generalist by design",
        description:
          "Data pipeline, API, or UI: I follow the problem wherever it goes. React and TypeScript in front, Node and PostgreSQL behind, and I own features from definition to instrumentation.",
      },
      {
        title: "AI tools at full throttle",
        description:
          "You offer unlimited Claude Code, Codex, and Cursor spend and expect it used. I introduced agentic workflows at my current company and build with them daily.",
      },
      {
        title: "Performance instinct",
        description:
          "I turned a ten-minute core workflow into a twenty-second one by challenging the architecture, not merely tuning it. Research automation lives or dies on wins like that.",
      },
      {
        title: "Product instinct",
        description:
          "I start from the customer problem, not the ticket. I work with design to find the right feature, then ship the smallest version that proves it.",
      },
      {
        title: "Modern Next.js, in depth",
        description:
          "Daily App Router work, close enough to write articles about server components and the rendering trade-offs behind them. Your plus is my default.",
      },
      {
        title: "Self-directed, with urgency",
        description:
          "I scope my own work, unblock myself, and ship at startup pace, with types, tests, and review keeping the bar up while the week's output grows.",
      },
    ],
  },
  {
    title: "Why I want to join Grasp",
    reasons: [
      {
        title: "Agentic AI with real stakes",
        description:
          "Automating research for the largest financial institutions is frontier AI with a paying customer, not a demo. 250 of the biggest firms and 4x growth say the market agrees.",
      },
      {
        title: "Close to the decisions",
        description:
          "A core team where I work directly with the Head of Engineering and CPO, and customer feedback reaches me the same week it is given.",
      },
      {
        title: "Stockholm, in person",
        description:
          "I am in Stockholm and want to build in the same room as the team, where iteration is measured in hours and ownership starts on day one.",
      },
    ],
  },
];

export function GraspFitSection() {
  return (
    <section
      className="relative h-dvh snap-start overflow-hidden bg-[#f5f5f5] text-[#1a1a1a]"
      aria-labelledby="grasp-fit-title"
    >
      <SpriteField
        src="/grasp/grasp-symbol.svg"
        size={44}
        density={0.8}
        speed={0.2}
        background="#f5f5f5"
        pushRadius={170}
        pushForce={5000}
        className="opacity-40"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,245,245,0.32)_0%,rgba(245,245,245,0.78)_72%)]" />

      <div className="absolute inset-0 overflow-x-hidden overflow-y-auto px-5 py-12 pb-4 sm:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 id="grasp-fit-title" className="mb-10 text-center">
            <GlassBadge
              className="h-auto w-[calc(100vw-2.5rem)] justify-center px-4 py-4 text-center text-2xl font-semibold tracking-[-0.045em] whitespace-normal text-[#1a1a1a] sm:w-auto sm:px-6 sm:text-5xl lg:text-6xl"
              surfaceClassName="bg-white/65 shadow-[0_20px_60px_rgba(26,26,26,0.08)]"
            >
              Why we&apos;re a strong match
            </GlassBadge>
          </h2>

          <div className="mb-8 rounded-2xl border border-[#1a1a1a]/10 bg-white/70 p-5 shadow-[0_16px_50px_rgba(26,26,26,0.07)] sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[10px] tracking-[0.22em] text-black/45 uppercase">The posting asks for</p>
              <p className="text-[10px] tracking-[0.22em] text-black/45 uppercase">All eight covered</p>
            </div>

            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {REQUESTED_AREAS.map(({ area, evidence, met }) => (
                <li key={area} className="flex items-start gap-2.5">
                  <span
                    className={
                      met
                        ? "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#1a1a1a] text-[#f5f5f5]"
                        : "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#1a1a1a]/8 text-black/45"
                    }
                  >
                    {met ? <Check className="size-3" strokeWidth={3} /> : <Minus className="size-3" strokeWidth={3} />}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold tracking-[-0.015em]">{area}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-black/55">{evidence}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8">
            {REASON_GROUPS.map(({ title, reasons }, groupIndex) => (
              <div key={title} className="grid content-start gap-4">
                <h3>
                  <GlassBadge
                    className="h-auto px-3.5 py-2 text-[10px] font-semibold tracking-[0.22em] text-[#1a1a1a] uppercase"
                    surfaceClassName={
                      groupIndex === 0
                        ? "bg-[linear-gradient(130deg,rgba(26,26,26,0.14),rgba(26,26,26,0.05))]"
                        : "bg-[linear-gradient(130deg,rgba(26,26,26,0.08),rgba(26,26,26,0.16))]"
                    }
                  >
                    {title}
                  </GlassBadge>
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {reasons.map(({ title: reasonTitle, description }) => (
                    <GlassCard
                      key={reasonTitle}
                      className="min-h-[7.5rem] text-[#1a1a1a]"
                      surfaceClassName="h-full bg-white/70 shadow-[0_16px_50px_rgba(26,26,26,0.07)]"
                      liquidProps={{ blur: 3, refraction: 8 }}
                    >
                      <CardHeader className="gap-2">
                        <CardTitle className="text-sm font-semibold tracking-[-0.015em]">{reasonTitle}</CardTitle>
                        <CardDescription className="text-xs leading-relaxed text-black/55">
                          {description}
                        </CardDescription>
                      </CardHeader>
                    </GlassCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
