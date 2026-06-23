import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { SpriteField } from "@/components/sprite-field";

const REASON_GROUPS = [
  {
    title: "Why Lovable needs me",
    reasons: [
      {
        title: "Shipping",
        description: "I can build things",
      },
      {
        title: "Unique approaches",
        description:
          "I try to be unique in a lot of things, experimenting with designs and not-fully-supported features before most people know about them",
      },
      {
        title: "AI thinking",
        description:
          "I care deeply about AI, and I moved my current company into agentic workflows when no one was using it there",
      },
      {
        title: "Experience",
        description: "I have experience leading teams and impacting development and business decisions",
      },
      {
        title: "Versatility and learning",
        description:
          "I can go really deep in both databases and UX, and I learn something new every day through videos, posts, or my open source work",
      },
      {
        title: "Team",
        description:
          "I care about the people I work with. I'm currently leading a team and finding more happiness in helping others achieve our common goals rather than personal ones",
      },
    ],
  },
  {
    title: "Why I want to be part of Lovable",
    reasons: [
      {
        title: "Team",
        description:
          "I've been following the company's success, and from the outside, the team looks fantastic. I specifically like when people who work at Lovable share the features they build from their personal accounts, showing a great level of passion and accountability",
      },
      {
        title: "Product and community",
        description:
          "I care deeply about UI/UX and want to help architect the websites of the future, building for builders so people with different levels of knowledge can create their dream projects",
      },
    ],
  },
];

export function LovableSpriteSection() {
  return (
    <section className="relative h-dvh snap-start overflow-hidden bg-black">
      <SpriteField
        src="/lovable/lovable-logo-icon.svg"
        size={42}
        density={0.85}
        speed={0.2}
        background="#000000"
        pushRadius={170}
        pushForce={5000}
      />
      <div className="absolute inset-0 overflow-y-auto px-6 py-16">
        <h2 className="mb-12 text-center">
          <GlassBadge className="h-auto px-5 py-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Why we&apos;re a perfect fit
          </GlassBadge>
        </h2>
        <div className="mx-auto grid max-w-6xl gap-8">
          {REASON_GROUPS.map(({ title, reasons }) => (
            <div key={title} className="grid content-start gap-4">
              <h3>
                <GlassBadge
                  className="h-auto px-4 py-3 text-xl font-semibold tracking-tight text-white sm:text-2xl"
                  surfaceClassName="bg-linear-to-br from-[#FF8E63]/50 via-[#FF7EB0]/50 to-[#4B73FF]/50"
                >
                  {title}
                </GlassBadge>
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {reasons.map(({ title, description }) => (
                  <GlassCard key={title} className="h-full text-white" surfaceClassName="h-full bg-amber-400/10">
                    <CardHeader>
                      <CardTitle className="text-base font-semibold">{title}</CardTitle>
                      <CardDescription className="text-sm text-white/60">{description}</CardDescription>
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
