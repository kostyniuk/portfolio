import { SpriteField } from "@/components/sprite-field";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";

const REASON_GROUPS = [
  {
    title: "Why Sana should hire me",
    reasons: [
      {
        title: "End-to-end by default",
        description:
          "React and TypeScript on the front, Node and PostgreSQL behind it. I own a feature from problem definition through UX, API, and the events that tell us whether it worked.",
      },
      {
        title: "Agent-native, not agent-curious",
        description:
          "I introduced agentic workflows at my current company and build with them daily—keeping judgment, testing, and review in the loop rather than trusting output blindly.",
      },
      {
        title: "Comfortable at 0→1",
        description:
          "I turn ambiguity into a clear path to production: pick the smallest thing that proves the idea, ship it, and let what we learn decide the next move.",
      },
      {
        title: "Product judgment",
        description:
          "I start from the customer and business problem and work with Design to find the right feature to build, not just the one that was asked for.",
      },
      {
        title: "Depth when it matters",
        description:
          "I turned a ten-minute core workflow into a twenty-second one by challenging the architecture, not merely tuning it. Retrieval-heavy products need that instinct.",
      },
      {
        title: "A force multiplier",
        description:
          "I lead engineers today—reviewing code, setting direction, and still shipping. I get as much from raising the people around me as from my own output.",
      },
    ],
  },
  {
    title: "Why I want to join Sana",
    reasons: [
      {
        title: "Agents doing real work",
        description:
          "Agents that reach across a company's apps, knowledge, and data are the most interesting product surface in software right now, and almost none of it is a solved pattern yet.",
      },
      {
        title: "Small teams, real ownership",
        description:
          "Shipping customer-facing value in a small squad, with instrumentation deciding the next iteration, is exactly the loop I want to be inside.",
      },
      {
        title: "Talent density in Stockholm",
        description:
          "A product-obsessed team with this bar, building here, is rare. I want to be in the room with people who make me raise my own standard.",
      },
    ],
  },
];

export function SanaFitSection() {
  return (
    <section
      className="relative h-dvh snap-start overflow-hidden bg-white text-[#111111]"
      aria-labelledby="sana-fit-title"
    >
      <SpriteField
        src="/sana/sana-symbol.svg"
        size={42}
        density={0.85}
        speed={0.2}
        background="#ffffff"
        pushRadius={170}
        pushForce={5000}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.72)_72%)]" />

      <div className="absolute inset-0 overflow-x-hidden overflow-y-auto px-5 py-20 pb-4 sm:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 id="sana-fit-title" className="mb-10 text-center">
            <GlassBadge
              className="h-auto w-[calc(100vw-2.5rem)] justify-center px-4 py-4 text-center text-2xl font-medium tracking-[-0.05em] whitespace-normal text-black sm:w-auto sm:px-6 sm:text-5xl lg:text-6xl"
              surfaceClassName="bg-white/70 shadow-[0_20px_60px_rgba(17,17,17,0.08)]"
            >
              Why we&apos;re a strong match
            </GlassBadge>
          </h2>

          <div className="grid gap-8">
            {REASON_GROUPS.map(({ title, reasons }, groupIndex) => (
              <div key={title} className="grid content-start gap-4">
                <h3>
                  <GlassBadge
                    className="h-auto px-4 py-3 text-lg font-medium tracking-[-0.02em] text-black sm:text-xl"
                    surfaceClassName={
                      groupIndex === 0
                        ? "bg-[linear-gradient(120deg,rgba(255,138,92,0.32),rgba(192,132,252,0.26))]"
                        : "bg-[linear-gradient(120deg,rgba(125,211,252,0.3),rgba(192,132,252,0.24))]"
                    }
                  >
                    {title}
                  </GlassBadge>
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {reasons.map(({ title: reasonTitle, description }) => (
                    <GlassCard
                      key={reasonTitle}
                      className="min-h-[9.5rem] text-black"
                      surfaceClassName="h-full bg-white/72 shadow-[0_16px_50px_rgba(17,17,17,0.07)]"
                      liquidProps={{ blur: 3, refraction: 8 }}
                    >
                      <CardHeader className="gap-2">
                        <CardTitle className="text-base font-medium tracking-[-0.02em]">{reasonTitle}</CardTitle>
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
