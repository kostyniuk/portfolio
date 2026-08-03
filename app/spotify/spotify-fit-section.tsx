import { SpriteField } from "@/components/sprite-field";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";

const REASON_GROUPS = [
  {
    title: "Why Spotify should hire me",
    reasons: [
      {
        title: "I can ship",
        description:
          "I build features end to end—from the React interface and design system to backend services and the data behind them.",
      },
      {
        title: "I care about the details",
        description:
          "I care deeply about UI and UX. I want the interaction to feel obvious, fast, and polished, not merely work.",
      },
      {
        title: "I think beyond the ticket",
        description:
          "I start with the customer and business problem, then work with Design and engineering to find the right feature to build.",
      },
      {
        title: "I use AI well",
        description:
          "I introduced agentic workflows at my current company and use them to move faster while keeping judgment, testing, and review in the loop.",
      },
      {
        title: "I can go deep",
        description:
          "I am as happy discussing a small interaction detail as I am tracing a slow query or changing the architecture behind a workflow.",
      },
      {
        title: "I care about the team",
        description:
          "I lead engineers today. I still build, but I get just as much satisfaction from helping the people around me do their best work.",
      },
    ],
  },
  {
    title: "Why I want to join Spotify",
    reasons: [
      {
        title: "A product people choose every day",
        description:
          "Spotify is the kind of product I want to build: something people open because they want to, and where a small improvement can matter at enormous scale.",
      },
      {
        title: "The whole stack matters",
        description:
          "The simple experience hides difficult work across product, UI, data, experimentation, and distributed systems. That range is exactly what I enjoy.",
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
            Why we&apos;re a good fit
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
