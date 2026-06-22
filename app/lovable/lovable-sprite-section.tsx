import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { SpriteField } from "@/components/sprite-field";

const REASONS = [
  {
    title: "Full-stack fluency",
    description: "Comfortable across the entire stack — from database schema to polished UI animations.",
  },
  {
    title: "Ship velocity",
    description: "Iterates fast without cutting corners. Features land complete, tested, and clean.",
  },
  {
    title: "Design sensibility",
    description: "Cares about pixels. Translates vague mockups into interfaces that feel intentional.",
  },
  {
    title: "AI-native thinking",
    description: "Integrates LLMs as tools, not toys — prompt design, evals, and cost-awareness included.",
  },
  {
    title: "Async by default",
    description: "Writes clear PRs and docs. Teammates always know what's happening and why.",
  },
  {
    title: "Ownership mindset",
    description: "Treats the product like it's theirs. Bugs get fixed before someone else notices.",
  },
  {
    title: "Feedback hunger",
    description: "Actively solicits critique and turns it into better work within the same sprint.",
  },
  {
    title: "Tooling instinct",
    description: "Reaches for the right abstraction — not the flashiest library or the most familiar one.",
  },
  {
    title: "Cross-team empathy",
    description: "Has worked alongside designers, PMs, and data teams. Speaks all three languages.",
  },
  {
    title: "Compound growth",
    description: "Every project leaves the codebase cleaner than it was found. Progress accumulates.",
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
