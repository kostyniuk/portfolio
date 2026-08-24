import { Check, Minus } from "lucide-react";

import { SpriteField } from "@/components/sprite-field";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";

/** The posting's "exceptional fit" list, answered item by item. */
const EXCEPTIONAL_FIT = [
  {
    area: "Products for developers",
    evidence: "A component library, a devtool, and a technical blog",
    met: true,
    links: [
      { label: "glasscn", href: "https://glasscn-components.vercel.app/" },
      { label: "mellowfmt", href: "https://mellowfmt.vercel.app" },
      { label: "alex-posts", href: "https://alex-posts.netlify.app/" },
    ],
  },
  { area: "Visual taste", evidence: "glasscn: 20+ glass primitives, built for feel", met: true },
  { area: "Small, high-ownership teams", evidence: "Team lead in a startup, shipping weekly", met: true },
  {
    area: "DNS, webhooks, API platforms",
    evidence: "Yes, though email deliverability itself would be new",
    met: false,
  },
];

const REASON_GROUPS = [
  {
    title: "Why Resend should hire me",
    reasons: [
      {
        title: "Six years of shipped products",
        description:
          "Production web products for six years, features owned from the problem statement through UX, API, instrumentation, and the iteration after launch.",
      },
      {
        title: "TypeScript, React, Next.js",
        description:
          "Exactly your stack, daily. I work close enough to modern Next.js to write articles about App Router, server components, and the rendering trade-offs.",
      },
      {
        title: "Comfortable across the stack",
        description:
          "Node, PostgreSQL, and AWS behind the interface. I own the API contract a screen depends on rather than waiting for someone to change it.",
      },
      {
        title: "Craft is the product",
        description:
          "I care about interaction details to the point of publishing a component library about them. For a developer tool, polish is the difference between trusted and tolerated.",
      },
      {
        title: "Making systems explainable",
        description:
          "Dense operational interfaces are my favourite problem: showing what happened, in order, with the cause visible. That is the same job as an email log or a webhook trace.",
      },
      {
        title: "Default to action",
        description:
          "I introduced agentic workflows at my company and ship with review in the loop. Ambiguous problem, smallest honest version, then iterate on what users actually do.",
      },
    ],
  },
  {
    title: "Why I want to join Resend",
    reasons: [
      {
        title: "Email is deceptively deep",
        description:
          "One API call hides DNS, deliverability, retries, and reputation. Products that make genuinely hard infrastructure feel trivial are the ones I admire most.",
      },
      {
        title: "Developers are my users already",
        description:
          "My open source work exists for other developers. Doing that as the day job, for three million of them, is a straight upgrade.",
      },
      {
        title: "Remote, small, high ownership",
        description:
          "Fifty people across fifteen countries with autonomy to just ship is how I want to work. I am in CET, which sits inside your timezone requirement.",
      },
    ],
  },
];

export function ResendFitSection() {
  return (
    <section
      className="relative h-dvh snap-start overflow-hidden bg-white text-[#0a0a0a]"
      aria-labelledby="resend-fit-title"
    >
      <SpriteField
        src="/resend/resend-symbol.svg"
        size={40}
        density={0.82}
        speed={0.2}
        background="#ffffff"
        pushRadius={170}
        pushForce={5000}
        className="opacity-55"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.68)_72%)]" />

      <div className="absolute inset-0 overflow-x-hidden overflow-y-auto px-5 py-20 pb-4 sm:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 id="resend-fit-title" className="mb-10 text-center">
            <GlassBadge
              className="h-auto w-[calc(100vw-2.5rem)] justify-center px-4 py-4 text-center text-2xl font-medium tracking-[-0.05em] whitespace-normal text-[#0a0a0a] sm:w-auto sm:px-6 sm:text-5xl lg:text-6xl"
              surfaceClassName="bg-white/70 shadow-[0_20px_60px_rgba(10,10,10,0.08)]"
            >
              Why we&apos;re a strong match
            </GlassBadge>
          </h2>

          <div className="mb-8 rounded-2xl border border-black/10 bg-white/80 p-5 shadow-[0_16px_50px_rgba(10,10,10,0.06)] sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[10px] tracking-[0.22em] text-black/45 uppercase">
                Your exceptional fit list, answered
              </p>
              <p className="text-[10px] tracking-[0.22em] text-black/45 uppercase">Three of four</p>
            </div>

            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {EXCEPTIONAL_FIT.map(({ area, evidence, met, links }) => (
                <li key={area} className="flex items-start gap-2.5">
                  <span
                    className={
                      met
                        ? "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#0a0a0a] text-white"
                        : "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-black/8 text-black/45"
                    }
                  >
                    {met ? <Check className="size-3" strokeWidth={3} /> : <Minus className="size-3" strokeWidth={3} />}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold tracking-[-0.015em]">{area}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-black/55">{evidence}</p>
                    {links ? (
                      <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                        {links.map(({ label, href }) => (
                          <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="font-mono text-[11px] text-black/70 underline decoration-black/25 underline-offset-4 transition-colors hover:text-black hover:decoration-black"
                          >
                            {label}
                          </a>
                        ))}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8">
            {REASON_GROUPS.map(({ title, reasons }, groupIndex) => (
              <div key={title} className="grid content-start gap-4">
                <h3>
                  <GlassBadge
                    className="h-auto px-3.5 py-2 text-[10px] font-semibold tracking-[0.22em] text-[#0a0a0a] uppercase"
                    surfaceClassName={
                      groupIndex === 0
                        ? "bg-[linear-gradient(130deg,rgba(10,10,10,0.16),rgba(10,10,10,0.05))]"
                        : "bg-[linear-gradient(130deg,rgba(160,160,160,0.3),rgba(10,10,10,0.08))]"
                    }
                  >
                    {title}
                  </GlassBadge>
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {reasons.map(({ title: reasonTitle, description }) => (
                    <GlassCard
                      key={reasonTitle}
                      className="min-h-[7.5rem] text-[#0a0a0a]"
                      surfaceClassName="h-full bg-white/78 shadow-[0_16px_50px_rgba(10,10,10,0.06)]"
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
