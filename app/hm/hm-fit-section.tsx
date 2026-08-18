import { SpriteField } from "@/components/sprite-field";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";

const REASON_GROUPS = [
  {
    title: "Why COS should hire me",
    reasons: [
      {
        title: "The exact stack",
        description:
          "Next.js, React, and TypeScript with Tailwind are what I work in every day: App Router, server components, and the rendering trade-offs that decide how a storefront actually feels.",
      },
      {
        title: "Frontend architecture",
        description:
          "I design component-driven systems and state boundaries that hold up as teams and surfaces multiply, instead of ones that quietly rot into special cases.",
      },
      {
        title: "Performance as a habit",
        description:
          "I turned a ten-minute core workflow into a twenty-second one by challenging the architecture, not merely tuning it. Commerce pages reward exactly that instinct.",
      },
      {
        title: "Full-stack range",
        description:
          "I work fluently across TypeScript, Node.js, PostgreSQL, and AWS, and integrate REST and GraphQL services, so I can follow a feature past the UI when the feature needs it.",
      },
      {
        title: "Technical leadership",
        description:
          "I lead engineers, review code, set direction, and still ship. Code reviews and engineering standards are how I raise the bar without becoming a bottleneck.",
      },
      {
        title: "AI-first development",
        description:
          "I introduced agentic workflows at my current company and use them daily with judgment, testing, and review kept firmly in the loop.",
      },
    ],
  },
  {
    title: "Why I want to join COS",
    reasons: [
      {
        title: "A brand where craft is visible",
        description:
          "COS is built on exceptional quality and lasting design. That is the rare brief where frontend polish is not a nice-to-have, it is the product promise, rendered in a browser.",
      },
      {
        title: "Composable commerce at scale",
        description:
          "A headless e-commerce platform serving brand-unique experiences is genuinely hard, interesting work: content modelling, integration seams, and performance under real traffic.",
      },
      {
        title: "In Stockholm, in the room",
        description:
          "I am in Stockholm and I want to be on-site with product, design, and backend. The best decisions I have been part of happened standing next to the people making them.",
      },
    ],
  },
];

export function HmFitSection() {
  return (
    <section
      className="relative h-dvh snap-start overflow-hidden bg-[#eceae4] text-[#111111]"
      aria-labelledby="hm-fit-title"
    >
      <SpriteField
        src="/hm/hm-symbol.png"
        size={40}
        density={0.82}
        speed={0.2}
        background="#eceae4"
        pushRadius={170}
        pushForce={5000}
        className="opacity-40"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,234,228,0.34)_0%,rgba(236,234,228,0.8)_72%)]" />

      <div className="absolute inset-0 overflow-x-hidden overflow-y-auto px-5 py-20 pb-4 sm:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 id="hm-fit-title" className="mb-10 text-center">
            <GlassBadge
              className="h-auto w-[calc(100vw-2.5rem)] justify-center px-4 py-4 text-center text-2xl font-light tracking-[-0.045em] whitespace-normal text-black sm:w-auto sm:px-6 sm:text-5xl lg:text-6xl"
              surfaceClassName="bg-white/55 shadow-[0_20px_60px_rgba(17,17,17,0.07)]"
            >
              Why we&apos;re a considered match
            </GlassBadge>
          </h2>

          <div className="grid gap-8">
            {REASON_GROUPS.map(({ title, reasons }, groupIndex) => (
              <div key={title} className="grid content-start gap-4">
                <h3>
                  <GlassBadge
                    className="h-auto px-4 py-3 text-lg font-normal tracking-[0.02em] text-black uppercase sm:text-xl"
                    surfaceClassName={
                      groupIndex === 0
                        ? "bg-[linear-gradient(135deg,rgba(229,0,16,0.16),rgba(17,17,17,0.08))]"
                        : "bg-[linear-gradient(135deg,rgba(17,17,17,0.12),rgba(201,195,184,0.24))]"
                    }
                  >
                    {title}
                  </GlassBadge>
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {reasons.map(({ title: reasonTitle, description }, reasonIndex) => (
                    <GlassCard
                      key={reasonTitle}
                      className="min-h-[9.5rem] text-black"
                      surfaceClassName="h-full bg-white/58 shadow-[0_16px_50px_rgba(17,17,17,0.06)]"
                      liquidProps={{ blur: 3, refraction: 8 }}
                    >
                      <CardHeader className="gap-2">
                        <p className="text-[9px] tracking-[0.22em] text-black/35 tabular-nums">
                          {String(reasonIndex + 1).padStart(2, "0")}
                        </p>
                        <CardTitle className="text-base font-medium tracking-[-0.015em]">{reasonTitle}</CardTitle>
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
