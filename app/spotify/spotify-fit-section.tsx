import { SpriteField } from "@/components/sprite-field";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";

const REASON_GROUPS = [
  {
    title: "Why Spotify should hire me",
    reasons: [
      {
        title: "I have built this shape of product",
        description:
          "Kanban, Gantt, Scrum, and scheduling interfaces: multi-step workflows, dependent state, and permissions over data that is never small. That is the shape of the Rights Center.",
      },
      {
        title: "Complex state, kept legible",
        description:
          "Large datasets, pagination, streaming updates, loading and error states. I treat those as the design problem rather than an afterthought once the happy path works.",
      },
      {
        title: "TypeScript and React daily",
        description:
          "This is my stack, including Next.js, and I care about component and state boundaries that still hold up when three squads are working in the same codebase.",
      },
      {
        title: "I help shape the API",
        description:
          "I integrate REST and GraphQL services and would rather design the contract with the backend engineers than build around whatever arrives.",
      },
      {
        title: "Performance under real data",
        description:
          "I turned a ten-minute core workflow into a twenty-second one by challenging the architecture, not merely tuning it. Rights-scale tables reward exactly that instinct.",
      },
      {
        title: "Accessible and tested",
        description:
          "Types, unit and integration tests, and end-to-end coverage are how I move quickly without breaking a tool people depend on to protect their catalogue.",
      },
    ],
  },
  {
    title: "Why I want to join Rights Systems",
    reasons: [
      {
        title: "The problem is genuinely hard",
        description:
          "Content scanning, enforcement, disputes, and territory-level rights are a real domain with real consequences. Going from inception to a live platform in a year is the kind of team I want to be on.",
      },
      {
        title: "B2B deserves consumer polish",
        description:
          "Labels and publishers spend their working day in this tool. Giving them the clarity Spotify gives listeners is the most satisfying kind of frontend work I know.",
      },
    ],
  },
];

export function SpotifyFitSection() {
  return (
    <section className="relative h-dvh snap-start overflow-hidden bg-[#121212]" aria-labelledby="spotify-fit-title">
      <SpriteField
        src="/spotify/spotify-symbol.svg"
        size={42}
        density={0.85}
        speed={0.2}
        background="#121212"
        pushRadius={170}
        pushForce={5000}
      />

      <div className="absolute inset-0 overflow-y-auto px-6 py-20 sm:py-16">
        <h2 id="spotify-fit-title" className="mb-12 text-center">
          <GlassBadge
            className="h-auto px-5 py-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            surfaceClassName="bg-[#1ed760]/20"
          >
            Why we&apos;re a perfect fit
          </GlassBadge>
        </h2>

        <div className="mx-auto grid max-w-6xl gap-8">
          {REASON_GROUPS.map(({ title, reasons }) => (
            <div key={title} className="grid content-start gap-4">
              <h3>
                <GlassBadge
                  className="h-auto px-4 py-3 text-xl font-semibold tracking-tight text-white sm:text-2xl"
                  surfaceClassName="bg-[#1ed760]/25"
                >
                  {title}
                </GlassBadge>
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {reasons.map(({ title: reasonTitle, description }) => (
                  <GlassCard
                    key={reasonTitle}
                    className="h-full text-white"
                    surfaceClassName="h-full bg-black/45"
                    liquidProps={{ blur: 3, refraction: 10 }}
                  >
                    <CardHeader>
                      <CardTitle className="text-base font-semibold">{reasonTitle}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-white/60">{description}</CardDescription>
                    </CardHeader>
                  </GlassCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
