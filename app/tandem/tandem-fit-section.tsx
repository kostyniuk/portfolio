import { Check, Minus } from "lucide-react";

import { SpriteField } from "@/components/sprite-field";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";

/** The posting lists bonus points, so answer all of them, including the two I cannot claim. */
const BONUS_POINTS = [
  { area: "LLM-based applications", evidence: "Built and shipped, with review in the loop", met: true },
  { area: "TypeScript and React", evidence: "My daily stack, plus Next.js", met: true },
  { area: "Open source and writing", evidence: "Public projects and technical articles", met: true },
  { area: "Cloud infrastructure", evidence: "Production on AWS, so Azure is a move not a leap", met: true },
  { area: "Kubernetes", evidence: "Adjacent, not yet mine in production", met: false },
  { area: "Streaming audio, health-tech", evidence: "New to me, and the reason I applied", met: false },
];

const REASON_GROUPS = [
  {
    title: "Why Tandem should hire me",
    reasons: [
      {
        title: "The one who gets it done",
        description:
          "Your posting describes the person others come to for help. That is my role today: I lead a team, unblock the work, and still ship the hard parts myself.",
      },
      {
        title: "Across the whole stack",
        description:
          "TypeScript and Node with PostgreSQL behind React on the front, and I own the API contract in between. Picking up your Python services is a week of ramp, not a career change.",
      },
      {
        title: "LLM products, not demos",
        description:
          "I introduced agentic workflows at my company and build with models daily. I know where they need guardrails, evaluation, and a human signature at the end.",
      },
      {
        title: "Complex systems made fast",
        description:
          "I turned a ten-minute core workflow into a twenty-second one by challenging the architecture rather than tuning it. Pipelines and integrations reward that instinct.",
      },
      {
        title: "Product mindset first",
        description:
          "I start from the user problem and work with Design to find the right thing to build. In a clinical tool the difference between correct and usable is the whole product.",
      },
      {
        title: "Open source, in the open",
        description:
          "glasscn, a glass component library for shadcn/ui, a free CV builder, and a technical blog. Public projects with public commits, plus the code reviews and written docs that come with working that way.",
      },
    ],
  },
  {
    title: "Why I want to join Tandem",
    reasons: [
      {
        title: "Stakes worth the difficulty",
        description:
          "High-stakes systems with real consequences are more interesting than another dashboard. Getting a clinician back to the patient instead of the keyboard is a good reason to work hard.",
      },
      {
        title: "AI at the useful end",
        description:
          "Notes and workflows are where language models genuinely help right now. I would rather build that than another chat window.",
      },
      {
        title: "Stockholm, in the room",
        description:
          "I want to be in the office with clinicians, designers, and engineers. The best decisions I have been part of happened standing next to the people making them.",
      },
    ],
  },
];

export function TandemFitSection() {
  return (
    <section
      className="relative h-dvh snap-start overflow-hidden bg-[#fafaf9] text-black"
      aria-labelledby="tandem-fit-title"
    >
      <SpriteField
        src="/tandem/tandem-symbol.svg"
        size={44}
        density={0.8}
        speed={0.2}
        background="#fafaf9"
        pushRadius={170}
        pushForce={5000}
        className="opacity-60"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,250,249,0.26)_0%,rgba(250,250,249,0.7)_72%)]" />

      <div className="absolute inset-0 overflow-x-hidden overflow-y-auto px-5 py-20 pb-4 sm:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 id="tandem-fit-title" className="mb-10 text-center">
            <GlassBadge
              className="h-auto w-[calc(100vw-2.5rem)] justify-center px-4 py-4 text-center text-2xl font-medium tracking-[-0.05em] whitespace-normal text-black sm:w-auto sm:px-6 sm:text-5xl lg:text-6xl"
              surfaceClassName="bg-white/70 shadow-[0_20px_60px_rgba(20,26,10,0.08)]"
            >
              Why we&apos;re a strong match
            </GlassBadge>
          </h2>

          <div className="mb-8 rounded-2xl border border-black/10 bg-white/75 p-5 shadow-[0_16px_50px_rgba(20,26,10,0.07)] sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[10px] tracking-[0.22em] text-black/50 uppercase">Your bonus points, answered</p>
              <p className="text-[10px] tracking-[0.22em] text-black/50 uppercase">Four of six</p>
            </div>

            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {BONUS_POINTS.map(({ area, evidence, met }) => (
                <li key={area} className="flex items-start gap-2.5">
                  <span
                    className={
                      met
                        ? "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#bef66f] text-black"
                        : "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-black/8 text-black/45"
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
                    className="h-auto px-3.5 py-2 text-[10px] font-semibold tracking-[0.22em] text-black uppercase"
                    surfaceClassName={
                      groupIndex === 0
                        ? "bg-[linear-gradient(130deg,rgba(190,246,111,0.85),rgba(190,246,111,0.4))]"
                        : "bg-[linear-gradient(130deg,rgba(13,13,13,0.14),rgba(190,246,111,0.55))]"
                    }
                  >
                    {title}
                  </GlassBadge>
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {reasons.map(({ title: reasonTitle, description }) => (
                    <GlassCard
                      key={reasonTitle}
                      className="min-h-[7.5rem] text-black"
                      surfaceClassName="h-full bg-white/72 shadow-[0_16px_50px_rgba(20,26,10,0.07)]"
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
