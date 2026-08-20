import { SpriteField } from "@/components/sprite-field";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";

/** The posting asks for 0→1 work it can look at, so link it rather than assert it. */
const RECEIPTS = [
  { name: "glasscn", detail: "Glass component library for shadcn/ui", href: "https://glasscn-components.vercel.app/" },
  { name: "LeeHireMe", detail: "One-page CV builder, free and open source", href: "https://www.leehireme.xyz/" },
  { name: "Mellow Lines", detail: "Code animation studio, all in the browser", href: "https://mellowlines.dev" },
  {
    name: "alex-posts",
    detail: "Postgres internals, React, and tooling deep dives",
    href: "https://alex-posts.netlify.app/",
  },
];

const REASON_GROUPS = [
  {
    title: "Why Supabase should hire me",
    reasons: [
      {
        title: "0→1, then earned versions",
        description:
          "Everything above went from a blank editor to something strangers use, decided and shipped on my own time. Each one changed after real usage rather than a spec, and the commits are public if you want to read them.",
      },
      {
        title: "CI as the thing that lets you sprint",
        description:
          "Types at the boundaries, lint, unit and component tests, contract tests, a11y, visual regression, bundle budgets. I would rather spend a day on the check than a week on the incident.",
      },
      {
        title: "Agents with guardrails",
        description:
          "I introduced agentic workflows at my company. I review what they write, tighten the architecture where they overreach, and leave them feedback loops so they verify their own work.",
      },
      {
        title: "The modern React landscape",
        description:
          "SSR, streaming, server components, and edge rendering are decisions I make deliberately. This portfolio runs on Next.js 16 with cache components, and I write articles about the trade-offs.",
      },
      {
        title: "Postgres is the fun part",
        description:
          "I read about Postgres internals for pleasure and write articles about what I find. Query plans, indexes, and locking are things I reach for on purpose, not things I look up when something breaks.",
      },
      {
        title: "Past the UI",
        description:
          "TypeScript, Node.js, and AWS alongside it. I own the API contract a screen depends on, and I have planned and run large Postgres migrations in production, designed backwards from the rollback with data reshaped underneath a live product.",
      },
    ],
  },
  {
    title: "Why I want to join Supabase",
    reasons: [
      {
        title: "Building in the open",
        description:
          "My side work is already public and open source. Doing that as the day job, in a repo thousands of developers read and contribute to, is the version of this career I actually want.",
      },
      {
        title: "Studio is a real product",
        description:
          "Tooling used by millions of developers, where a small interaction fix is felt immediately, is the highest-leverage frontend I can think of.",
      },
      {
        title: "A company built on Postgres",
        description:
          "I already spend my evenings inside Postgres and writing about it. Supabase is the one place where that is not a hobby I keep to myself, it is the product I would be working on.",
      },
    ],
  },
];

export function SupabaseFitSection() {
  return (
    <section
      className="relative h-dvh snap-start overflow-hidden bg-[#fbfbfb] text-[#171717]"
      aria-labelledby="supabase-fit-title"
    >
      <SpriteField
        src="/supabase/supabase-symbol.svg"
        size={40}
        density={0.82}
        speed={0.2}
        background="#fbfbfb"
        pushRadius={170}
        pushForce={5000}
        className="opacity-75"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,251,251,0.2)_0%,rgba(251,251,251,0.62)_72%)]" />

      <div className="absolute inset-0 overflow-x-hidden overflow-y-auto px-5 py-12 pb-4 sm:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 id="supabase-fit-title" className="mb-10 text-center">
            <GlassBadge
              className="h-auto w-[calc(100vw-2.5rem)] justify-center px-4 py-4 text-center text-2xl font-medium tracking-[-0.05em] whitespace-normal text-[#171717] sm:w-auto sm:px-6 sm:text-5xl lg:text-6xl"
              surfaceClassName="bg-white/70 shadow-[0_20px_60px_rgba(23,23,23,0.08)]"
            >
              Why we&apos;re a strong match
            </GlassBadge>
          </h2>

          <div className="mb-8 rounded-2xl border border-[#171717]/10 bg-white/75 p-5 shadow-[0_16px_50px_rgba(23,23,23,0.06)] sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[10px] tracking-[0.22em] text-black/45 uppercase">My Open Source projects</p>
              <p className="text-[10px] tracking-[0.22em] text-black/45 uppercase">Shipped and public</p>
            </div>

            <ul className="mt-0 grid gap-2 sm:grid-cols-2">
              {RECEIPTS.map(({ name, detail, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-2.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-[#3ecf8e]/10"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#3ecf8e]/18 text-[#1a7f56]">
                      <svg viewBox="0 0 10 10" className="size-2.5" aria-hidden="true">
                        <path
                          d="M2.5 7.5 7.5 2.5M7.5 2.5H3.9M7.5 2.5v3.6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold tracking-[-0.015em] underline-offset-4 group-hover:underline">
                        {name}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-black/55">{detail}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8">
            {REASON_GROUPS.map(({ title, reasons }, groupIndex) => (
              <div key={title} className="grid content-start gap-4">
                <h3>
                  <GlassBadge
                    className="h-auto px-3.5 py-2 text-[10px] font-semibold tracking-[0.22em] text-[#171717] uppercase"
                    surfaceClassName={
                      groupIndex === 0
                        ? "bg-[linear-gradient(130deg,rgba(62,207,142,0.4),rgba(62,207,142,0.16))]"
                        : "bg-[linear-gradient(130deg,rgba(23,23,23,0.14),rgba(62,207,142,0.18))]"
                    }
                  >
                    {title}
                  </GlassBadge>
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {reasons.map(({ title: reasonTitle, description }) => (
                    <GlassCard
                      key={reasonTitle}
                      className="min-h-[7.5rem] text-[#171717]"
                      surfaceClassName="h-full bg-white/72 shadow-[0_16px_50px_rgba(23,23,23,0.06)]"
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
