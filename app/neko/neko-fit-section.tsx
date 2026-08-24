import { SpriteField } from "@/components/sprite-field";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";

/** The posting frames the role as deliverables over the first year, so answer in the same frame. */
const RAMP = [
  {
    window: "First 3 months",
    plan: "Fully ramped and owning a slice of Member Experience, with work in front of real members rather than in a branch.",
  },
  {
    window: "By 6 months",
    plan: "An end-to-end feature architected and delivered, plus the reliability work that keeps it safe when a clinic is busy.",
  },
  {
    window: "By 12 months",
    plan: "AI-first workflows normal for the team, and one automation that removes a class of work instead of trimming it.",
  },
];

const REASON_GROUPS = [
  {
    title: "Why Neko Health should hire me",
    reasons: [
      {
        title: "10x, not 10%",
        description:
          "I turned a ten-minute core workflow into a twenty-second one by changing the architecture rather than tuning it. That is the instinct your posting describes, already exercised.",
      },
      {
        title: "AI-native, every day",
        description:
          "Claude Code and agentic workflows are how I work, and I introduced them at my company. I can tell you exactly where they carry the eighty percent and where they must not be trusted.",
      },
      {
        title: "Full-stack ownership",
        description:
          "TypeScript and React in front, Node, PostgreSQL, and AWS behind. I own outcomes across the whole path rather than handing the problem to the next team.",
      },
      {
        title: "Fail-safe on purpose",
        description:
          "Types at the boundaries, tests, CI, and observability are how I make systems that hold. For member-facing health software that is the baseline, not a finishing touch.",
      },
      {
        title: "Operational interfaces",
        description:
          "I have built Kanban, Gantt, and scheduling interfaces: multi-step flows, permissions, and dense state. Clinical workflows are the same problem with higher stakes.",
      },
      {
        title: "Lead by example",
        description:
          "I lead a team today through reviews, design feedback, and direct honest answers, and I still ship the hard parts myself.",
      },
    ],
  },
  {
    title: "Why I want to join Neko Health",
    reasons: [
      {
        title: "Prevention is the right bet",
        description:
          "Catching things before symptoms is the rare kind of software where the outcome is measured in someone's years, not in engagement.",
      },
      {
        title: "Vertically integrated is rare",
        description:
          "Hardware, data science, and product under one roof means a frontend decision can change what a clinic can actually do. That feedback loop barely exists elsewhere.",
      },
      {
        title: "Stockholm, in the building",
        description:
          "I am in Stockholm and I want to be near the clinic and the people running it. Proximity is what makes the hard trade-offs quick.",
      },
    ],
  },
];

export function NekoFitSection() {
  return (
    <section
      className="relative h-dvh snap-start overflow-hidden bg-white text-[#1e2a2d]"
      aria-labelledby="neko-fit-title"
    >
      <SpriteField
        src="/neko/neko-symbol.png"
        size={38}
        density={0.82}
        speed={0.2}
        background="#ffffff"
        pushRadius={170}
        pushForce={5000}
        className="opacity-45"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.26)_0%,rgba(255,255,255,0.7)_72%)]" />

      <div className="absolute inset-0 overflow-x-hidden overflow-y-auto px-5 py-20 pb-4 sm:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 id="neko-fit-title" className="mb-10 text-center">
            <GlassBadge
              className="h-auto w-[calc(100vw-2.5rem)] justify-center px-4 py-4 text-center text-2xl font-medium tracking-[-0.05em] whitespace-normal text-[#1e2a2d] sm:w-auto sm:px-6 sm:text-5xl lg:text-6xl"
              surfaceClassName="bg-white/70 shadow-[0_20px_60px_rgba(30,42,45,0.08)]"
            >
              Why we&apos;re a strong match
            </GlassBadge>
          </h2>

          <div className="mb-8 rounded-2xl border border-[#486970]/12 bg-white/80 p-5 shadow-[0_16px_50px_rgba(30,42,45,0.06)] sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[10px] tracking-[0.22em] text-[#486970]/70 uppercase">
                Your first 6 to 12 months, my read
              </p>
              <p className="text-[10px] tracking-[0.22em] text-[#486970]/70 uppercase">Member first</p>
            </div>

            <ol className="mt-4 grid gap-3 sm:grid-cols-3">
              {RAMP.map(({ window: label, plan }) => (
                <li key={label} className="border-t border-[#486970]/15 pt-3">
                  <p className="text-[9px] tracking-[0.2em] text-[#486970] uppercase">{label}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#1e2a2d]/60">{plan}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-8">
            {REASON_GROUPS.map(({ title, reasons }, groupIndex) => (
              <div key={title} className="grid content-start gap-4">
                <h3>
                  <GlassBadge
                    className="h-auto px-3.5 py-2 text-[10px] font-semibold tracking-[0.22em] text-[#1e2a2d] uppercase"
                    surfaceClassName={
                      groupIndex === 0
                        ? "bg-[linear-gradient(130deg,rgba(72,105,112,0.26),rgba(158,188,196,0.3))]"
                        : "bg-[linear-gradient(130deg,rgba(158,188,196,0.4),rgba(72,105,112,0.14))]"
                    }
                  >
                    {title}
                  </GlassBadge>
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {reasons.map(({ title: reasonTitle, description }) => (
                    <GlassCard
                      key={reasonTitle}
                      className="min-h-[7.5rem] text-[#1e2a2d]"
                      surfaceClassName="h-full bg-white/78 shadow-[0_16px_50px_rgba(30,42,45,0.06)]"
                      liquidProps={{ blur: 3, refraction: 8 }}
                    >
                      <CardHeader className="gap-2">
                        <CardTitle className="text-sm font-semibold tracking-[-0.015em]">{reasonTitle}</CardTitle>
                        <CardDescription className="text-xs leading-relaxed text-[#1e2a2d]/60">
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
