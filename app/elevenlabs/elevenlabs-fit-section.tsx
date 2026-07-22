import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { SpriteField } from "@/components/sprite-field";

const REASON_GROUPS = [
  {
    title: "Why ElevenLabs should hire me",
    reasons: [
      {
        title: "High-velocity shipping",
        description:
          "I turn ambiguous ideas into working products quickly, then keep improving them with real feedback.",
      },
      {
        title: "First-principles thinking",
        description:
          "I question defaults, reduce problems to what matters, and look for approaches others have not tried yet.",
      },
      {
        title: "AI-first workflows",
        description:
          "I moved my current company toward agentic workflows before they were common and use AI to raise both speed and quality.",
      },
      {
        title: "Product judgment",
        description:
          "I care as much about how a product feels and communicates as I do about the systems that make it reliable.",
      },
      {
        title: "Technical range",
        description:
          "I can go deep in databases, APIs, React, animation, and UX—and connect decisions across those layers.",
      },
      {
        title: "Owning outcomes",
        description:
          "I lead teams, stay hands-on, and measure my work by the result we create together rather than the task I completed.",
      },
    ],
  },
  {
    title: "Why I want to join ElevenLabs",
    reasons: [
      {
        title: "Technology with a human surface",
        description:
          "Voice makes advanced AI feel immediate and natural. I want to help shape interfaces people can simply talk to.",
      },
      {
        title: "Autonomy and craft",
        description:
          "Small teams, high ownership, and a culture where the best idea wins are exactly how I do my strongest work.",
      },
      {
        title: "Great features",
        description:
          "I love that company not only concentrates on text-to-speech, but expands it features, for example, I'm a big fan of Avatars.",
      },
    ],
  },
];

export function ElevenLabsFitSection() {
  return (
    <section className="relative h-dvh snap-start overflow-hidden bg-[#fdfcfc] text-black" aria-labelledby="fit-title">
      <SpriteField
        src="/elevenlabs/elevenlabs-symbol.svg"
        size={40}
        density={0.82}
        speed={0.2}
        background="#fdfcfc"
        pushRadius={170}
        pushForce={5000}
        className="opacity-50"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(253,252,252,0.35)_0%,rgba(253,252,252,0.64)_68%)]" />

      <div className="absolute inset-0 overflow-x-hidden overflow-y-auto px-5 py-20 sm:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="mb-3 text-center text-xs tracking-[0.2em] text-black/45 uppercase">Mutual signal</p>
          <h2 id="fit-title" className="mb-10 text-center">
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
                        ? "bg-[linear-gradient(135deg,rgba(255,106,61,0.34),rgba(255,212,149,0.22))]"
                        : "bg-[linear-gradient(135deg,rgba(80,107,255,0.24),rgba(174,226,221,0.2))]"
                    }
                  >
                    {title}
                  </GlassBadge>
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {reasons.map(({ title: reasonTitle, description }) => (
                    <GlassCard
                      key={reasonTitle}
                      className="h-full text-black"
                      surfaceClassName="h-full bg-white/55 shadow-[0_16px_50px_rgba(20,20,20,0.06)]"
                      liquidProps={{ blur: 3, refraction: 8 }}
                    >
                      <CardHeader className="gap-2">
                        <CardTitle className="text-base font-semibold tracking-[-0.015em]">{reasonTitle}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed text-black/55">
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
