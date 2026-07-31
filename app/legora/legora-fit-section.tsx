import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";

const REASON_GROUPS = [
  {
    title: "Why Legora should hire me",
    reasons: [
      {
        title: "Frontend craft",
        description:
          "I care deeply about UX and build React interfaces where interaction, responsiveness, and performance reinforce the product.",
      },
      {
        title: "Full-stack ownership",
        description:
          "I work fluently across TypeScript, React, Node.js, PostgreSQL, and AWS—and can carry a feature across every layer.",
      },
      {
        title: "Architecture that performs",
        description:
          "I turned a ten-minute core workflow into a twenty-second one by challenging the architecture, not merely tuning it.",
      },
      {
        title: "Product-minded collaboration",
        description:
          "I shape features around customer and business needs, work closely with Design, and turn ambiguity into a clear path to production.",
      },
      {
        title: "Hands-on technical leadership",
        description:
          "I lead engineers, review code, set technical direction, and still ship—raising the bar while helping the people around me grow.",
      },
      {
        title: "AI-native engineering",
        description:
          "I bring a broad understanding of AI models, tools, and best practices, plus the judgment to integrate them into dependable product experiences.",
      },
    ],
  },
  {
    title: "Why I want to join Legora",
    reasons: [
      {
        title: "Frontend that matters",
        description:
          "I want to shape interfaces used for high-stakes legal work, where clarity, speed, polish, and reliability meaningfully affect how professionals work.",
      },
      {
        title: "End-to-end product ownership",
        description:
          "Owning a feature from design handoff through UI, APIs, and production is the breadth I enjoy—and the kind of responsibility I am looking for.",
      },
      {
        title: "High standards, together",
        description:
          "Legora’s mix of ownership, direct low-ego feedback, and building together in Stockholm matches how I want to work: close to the team, moving fast, and accountable for outcomes.",
      },
    ],
  },
];

export function LegoraFitSection() {
  return (
    <section
      className="relative h-dvh snap-start overflow-hidden bg-[#f7f7f3] text-black"
      aria-labelledby="legora-fit-title"
    >
      <div className="legora-fit-pattern absolute inset-0 opacity-65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,247,243,0.34)_0%,rgba(247,247,243,0.74)_70%)]" />

      <div className="absolute inset-0 overflow-x-hidden overflow-y-auto px-5 py-20 sm:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 id="legora-fit-title" className="mb-10 text-center">
            <GlassBadge
              className="h-auto w-[calc(100vw-2.5rem)] justify-center px-4 py-4 text-center text-2xl font-medium tracking-[-0.045em] whitespace-normal text-black sm:w-auto sm:px-5 sm:text-5xl lg:text-6xl"
              surfaceClassName="bg-white/60 shadow-[0_20px_60px_rgba(10,10,10,0.08)]"
            >
              Why we&apos;re a strong match
            </GlassBadge>
          </h2>

          <div className="grid gap-8">
            {REASON_GROUPS.map(({ title, reasons }, groupIndex) => (
              <div key={title} className="grid content-start gap-4">
                <h3>
                  <GlassBadge
                    className="h-auto px-4 py-3 text-lg font-medium tracking-[-0.025em] text-black sm:text-xl"
                    surfaceClassName={
                      groupIndex === 0
                        ? "bg-[linear-gradient(135deg,rgba(23,74,52,0.27),rgba(172,204,184,0.22))]"
                        : "bg-[linear-gradient(135deg,rgba(201,160,75,0.27),rgba(237,220,171,0.2))]"
                    }
                  >
                    {title}
                  </GlassBadge>
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {reasons.map(({ title: reasonTitle, description }, reasonIndex) => (
                    <GlassCard
                      key={`${title}-${reasonIndex}`}
                      className="min-h-[9.5rem] text-black"
                      surfaceClassName="h-full bg-white/55 shadow-[0_16px_50px_rgba(20,20,20,0.06)]"
                      liquidProps={{ blur: 3, refraction: 8 }}
                    >
                      <CardHeader className="gap-2">
                        {reasonTitle ? (
                          <CardTitle className="text-base font-semibold tracking-[-0.015em]">{reasonTitle}</CardTitle>
                        ) : null}
                        {description ? (
                          <CardDescription className="text-sm leading-relaxed text-black/55">
                            {description}
                          </CardDescription>
                        ) : null}
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
