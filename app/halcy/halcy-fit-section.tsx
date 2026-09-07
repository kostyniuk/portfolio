import { SpriteField } from "@/components/sprite-field";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";
import { GlassCard } from "@/components/ui/glasscn/glass-card";

/** Consumer-facing craft is easier to click than to claim, so link it rather than assert it. */
const RECEIPTS = [
  { name: "eevee", detail: "PR review agent on Vercel's eve framework", href: "https://github.com/kostyniuk/eevee" },
  { name: "glasscn", detail: "Glass component library for shadcn/ui", href: "https://glasscn-components.vercel.app/" },
  { name: "Mellow Lines", detail: "Code animation studio, all in the browser", href: "https://mellowlines.dev" },
  { name: "LeeHireMe", detail: "One-page CV builder, free and open source", href: "https://www.leehireme.xyz/" },
  {
    name: "alex-posts",
    detail: "Postgres internals, React, and tooling deep dives",
    href: "https://alex-posts.netlify.app/",
  },
];

const REASON_GROUPS = [
  {
    title: "Why Halcy should hire me",
    reasons: [
      {
        title: "Two people editing the same thing",
        description:
          "I built a Gantt scheduler that several planners drag around at the same time, synced live. I got the conflicts wrong a few times before I got them right, so I know what deciding who wins actually costs.",
      },
      {
        title: "Our CI went from 20 minutes to 4",
        description:
          "Our CI went from 20 minutes to 4 once I stopped the tests fighting over the database. Nobody had to be told to push smaller changes after that, they just did.",
      },
      {
        title: "eevee, a PR review agent I built",
        description:
          "eevee is mine: an agent on Vercel's eve framework that reviews pull requests, rates how safe each one is to merge, and learns from what I correct. It has its own eval suite, because a prompt that matters needs a number that moves in CI.",
      },
      {
        title: "I got a whole team using AI",
        description:
          "I ran the workshops, set up the tooling, and sat with people until it stuck. At work I built our MCP server and public API so agents can drive the product from outside it. A vaguely named tool costs more in retries than the model costs in tokens.",
      },
      {
        title: "Postgres past the ORM",
        description:
          "Hundreds of tables, multi-tenant, and pgvector for similarity search on 3D models. Query plans, indexes, and locking are things I reach for deliberately rather than look up during an incident.",
      },
      {
        title: "0→1, then earned versions",
        description:
          "Everything above went from a blank editor to something strangers use, decided and shipped on my own time. Leading three engineers has not taken me out of the code, and each of those projects changed after real usage rather than a spec.",
      },
    ],
  },
  {
    title: "Why I want to join Halcy",
    reasons: [
      {
        title: "An AI startup solving something real",
        description:
          "I want to work where AI is the mechanism rather than a feature someone bolted on. Turning a vague group idea into a booked trip is genuinely a cool orchestration problem.",
      },
      {
        title: "Shared state with money in it",
        description:
          "Four people editing one trip, two of them booking the same slot from different timezones. I want to work on that problem.",
      },
      {
        title: "I have lost trips to group chats",
        description: "Plans everyone wants and nobody books. Fixing that is worth doing.",
      },
    ],
  },
];

export function HalcyFitSection() {
  return (
    <section
      className="relative h-dvh snap-start overflow-hidden bg-[#f2f2ec] text-[#0f2426]"
      aria-labelledby="halcy-fit-title"
    >
      <SpriteField
        src="/halcy/halcy-logotype.png"
        size={46}
        density={0.7}
        speed={0.22}
        background="#f2f2ec"
        pushRadius={170}
        pushForce={5000}
        className="opacity-50"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,242,236,0.28)_0%,rgba(242,242,236,0.72)_72%)]" />

      <div className="absolute inset-0 overflow-x-hidden overflow-y-auto px-5 pt-10 pb-4 sm:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 id="halcy-fit-title" className="mb-6 text-center">
            <GlassBadge
              className="h-auto w-[calc(100vw-2.5rem)] justify-center px-4 py-3 text-center text-2xl font-medium tracking-[-0.05em] whitespace-normal text-[#0f2426] sm:w-auto sm:px-6 sm:text-4xl lg:text-5xl"
              surfaceClassName="bg-[#f2f2ec]/70 shadow-[0_20px_60px_rgba(15,36,38,0.1)]"
            >
              Why we&apos;re a strong match
            </GlassBadge>
          </h2>

          <div className="mb-5 rounded-2xl border border-[#0f2426]/10 bg-[#f2f2ec]/80 p-4 shadow-[0_16px_50px_rgba(15,36,38,0.07)] sm:p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[10px] tracking-[0.22em] text-[#0f2426]/45 uppercase">My Open Source projects</p>
              <p className="text-[10px] tracking-[0.22em] text-[#0f2426]/45 uppercase">Shipped and public</p>
            </div>

            <ul className="mt-0 grid gap-1.5 sm:grid-cols-2">
              {RECEIPTS.map(({ name, detail, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-2.5 rounded-lg px-2 py-1 transition-colors hover:bg-[#abc8ca]/25"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#0f2426]/10 text-[#0f2426]">
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
                      <span className="mt-0.5 block text-xs leading-relaxed text-[#0f2426]/55">{detail}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            {REASON_GROUPS.map(({ title, reasons }, groupIndex) => (
              <div key={title} className="grid content-start gap-3">
                <h3>
                  <GlassBadge
                    className="h-auto px-3.5 py-2 text-[10px] font-semibold tracking-[0.22em] text-[#0f2426] uppercase"
                    surfaceClassName={
                      groupIndex === 0
                        ? "bg-[linear-gradient(130deg,rgba(15,36,38,0.16),rgba(15,36,38,0.05))]"
                        : "bg-[linear-gradient(130deg,rgba(171,200,202,0.45),rgba(15,36,38,0.08))]"
                    }
                  >
                    {title}
                  </GlassBadge>
                </h3>

                <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {reasons.map(({ title: reasonTitle, description }) => (
                    <GlassCard
                      key={reasonTitle}
                      className="py-3 text-[#0f2426]"
                      surfaceClassName="h-full bg-[#f2f2ec]/80 shadow-[0_16px_50px_rgba(15,36,38,0.07)]"
                      liquidProps={{ blur: 3, refraction: 8 }}
                    >
                      <CardHeader className="gap-1.5">
                        <CardTitle className="text-sm font-semibold tracking-[-0.015em]">{reasonTitle}</CardTitle>
                        <CardDescription className="text-xs leading-relaxed text-[#0f2426]/55">
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
