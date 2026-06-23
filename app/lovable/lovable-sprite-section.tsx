import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { SpriteField } from "@/components/sprite-field";

const REASONS = [
  {
    title: "Shipping",
    description: "I can build things",
  },
  {
    title: "Unique approaches",
    description:
      "I try to be unique in a lot of things, experimenting with designs and not-fully supported features before most people know about them",
  },
  {
    title: "Team",
    description:
      "I care about the people I work with. I'm currently leading a team and finding more happiness in helping others achieve our common goals, rather than personal ones",
  },
  {
    title: "AI thinking",
    description:
      "I care deeply about AI, and I moved my current company into agentic workflows when no one was using it there",
  },
  {
    title: "Learning",
    description: "I learn something new every day, whether it's through videos, posts or my open source work",
  },
  {
    title: "Experience",
    description: "I have experience leading teams and impacting development and business decisions",
  },
  {
    title: "Versatility",
    description: "Can go really deep in both databases and UX",
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
        <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Why we&apos;re a perfect fit
        </h2>
        <div className="mx-auto max-w-5xl grid grid-cols-3 gap-4">
          {REASONS.map(({ title, description }) => (
            <GlassCard key={title} className="text-white bg-amber-400/5">
              <CardHeader>
                <CardTitle className="text-base font-semibold">{title}</CardTitle>
                <CardDescription className="text-sm text-white/60">{description}</CardDescription>
              </CardHeader>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
