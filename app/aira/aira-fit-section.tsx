import { Check, Minus } from "lucide-react";

import { SpriteField } from "@/components/sprite-field";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";

/**
 * The posting asks for at least two of six areas. Listing all six — including the
 * one I can only claim as adjacent — is more convincing than listing the wins alone.
 */
const REQUESTED_AREAS = [
  { area: "Rapid growth journeys", evidence: "Building in a startup today", met: true },
  { area: "Kanban and Scrum", evidence: "Built the interfaces, and work this way", met: true },
  { area: "Next.js", evidence: "Daily, and I write articles about modern Next.js", met: true },
  { area: "Data visualization", evidence: "Gantt and timeline views for real schedules", met: true },
  { area: "Planning and scheduling UIs", evidence: "Shipped scheduling interfaces", met: true },
  { area: "Map integration", evidence: "Adjacent, not yet Mapbox in production", met: false },
];

const REASON_GROUPS = [
  {
    title: "Why Aira should hire me",
    reasons: [
      {
        title: "Modern Next.js, in depth",
        description:
          "React and TypeScript are my daily stack, and I work in modern Next.js closely enough to write articles about it—App Router, server components, and the rendering trade-offs behind them.",
      },
      {
        title: "Kanban, Gantt, and Scrum, built",
        description:
          "I have built board, Gantt, and Scrum interfaces—the exact primitives a planning tool is made of. I know where they get slow, where they get confusing, and what to do about both.",
      },
      {
        title: "Tooling that saves real hours",
        description:
          "I turned a ten-minute core workflow into a twenty-second one by challenging the architecture, not merely tuning it. That is exactly the win a planner feels.",
      },
      {
        title: "Scheduling interfaces already",
        description:
          "I have worked on scheduling interfaces before, so the hard parts are familiar: overlapping constraints, dependent dates, and making the impact of a change visible before it is committed.",
      },
      {
        title: "Range behind the UI",
        description:
          "I work fluently across TypeScript, Node.js, PostgreSQL, and AWS, so when a scheduling view needs different data I can follow it into the API instead of filing a ticket.",
      },
      {
        title: "Startup pace, and agile for real",
        description:
          "I build in a startup today, working Kanban and Scrum rather than reading about them, and I introduced agentic workflows here to ship more per week without giving up review.",
      },
    ],
  },
  {
    title: "Why I want to join Aira",
    reasons: [
      {
        title: "Software with a physical result",
        description:
          "Most frontend work ends at the screen. Here a better schedule means more heat pumps installed and less gas burned—the interface has consequences you can measure in homes.",
      },
      {
        title: "Planning is genuinely hard",
        description:
          "Proximity, travel time, availability, and constant rescheduling make this a real constraint problem. I would rather work on that than on another CRUD screen.",
      },
      {
        title: "Stockholm, in a scale-up",
        description:
          "I am in Stockholm and want the pace and ownership of a company still building its core tooling, with the field force feeling every improvement.",
      },
    ],
  },
];

export function AiraFitSection() {
  return (
    <section
      className="relative h-dvh snap-start overflow-hidden bg-[#f6f4ef] text-[#29292D]"
      aria-labelledby="aira-fit-title"
    >
      <SpriteField
        src="/aira/aira-frame.svg"
        size={44}
        density={0.8}
        speed={0.2}
        background="#f6f4ef"
        pushRadius={170}
        pushForce={5000}
        className="opacity-40"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,244,239,0.32)_0%,rgba(246,244,239,0.78)_72%)]" />

      <div className="absolute inset-0 overflow-x-hidden overflow-y-auto px-5 py-20 pb-4 sm:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 id="aira-fit-title" className="mb-10 text-center">
            <GlassBadge
              className="h-auto w-[calc(100vw-2.5rem)] justify-center px-4 py-4 text-center text-2xl font-semibold tracking-[-0.045em] whitespace-normal text-[#29292D] sm:w-auto sm:px-6 sm:text-5xl lg:text-6xl"
              surfaceClassName="bg-white/65 shadow-[0_20px_60px_rgba(41,41,45,0.08)]"
            >
              Why we&apos;re a strong match
            </GlassBadge>
          </h2>

          <div className="mb-8 rounded-2xl border border-[#29292D]/10 bg-white/70 p-5 shadow-[0_16px_50px_rgba(41,41,45,0.07)] sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[10px] tracking-[0.22em] text-black/45 uppercase">The posting asks for two of these</p>
              <p className="text-[10px] tracking-[0.22em] text-black/45 uppercase">Five covered</p>
            </div>

            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {REQUESTED_AREAS.map(({ area, evidence, met }) => (
                <li key={area} className="flex items-start gap-2.5">
                  <span
                    className={
                      met
                        ? "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#FFAF51] text-[#29292D]"
                        : "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#29292D]/8 text-black/45"
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
                    className="h-auto px-4 py-3 text-lg font-semibold tracking-[-0.02em] text-[#29292D] sm:text-xl"
                    surfaceClassName={
                      groupIndex === 0
                        ? "bg-[linear-gradient(130deg,rgba(255,175,81,0.55),rgba(255,175,81,0.22))]"
                        : "bg-[linear-gradient(130deg,rgba(41,41,45,0.16),rgba(255,175,81,0.2))]"
                    }
                  >
                    {title}
                  </GlassBadge>
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {reasons.map(({ title: reasonTitle, description }) => (
                    <GlassCard
                      key={reasonTitle}
                      className="min-h-[9.5rem] text-[#29292D]"
                      surfaceClassName="h-full bg-white/70 shadow-[0_16px_50px_rgba(41,41,45,0.07)]"
                      liquidProps={{ blur: 3, refraction: 8 }}
                    >
                      <CardHeader className="gap-2">
                        <CardTitle className="text-base font-semibold tracking-[-0.02em]">{reasonTitle}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed text-black/58">
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
