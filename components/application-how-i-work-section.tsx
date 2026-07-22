const STEPS = [
  {
    verb: "Plan with AI",
    detail: "For sufficiently large or complex work, I start by planning alongside an AI agent.",
  },
  {
    verb: "Scope the solution",
    detail: "Turn the approach into a complete spec with clear boundaries and acceptance criteria.",
  },
  {
    verb: "Implement with agents",
    detail: "One or more AI agents build the feature from the agreed plan.",
  },
  {
    verb: "Create feedback loops",
    detail: "Browser Use, types, and tests give agents evidence to review their own work.",
  },
  {
    verb: "Check manually",
    detail: "I run the feature myself and inspect the implementation end to end.",
  },
  {
    verb: "Run an agent review",
    detail: "Fresh agents look for gaps, inconsistencies, and violations of project rules.",
  },
  {
    verb: "Review the code",
    detail: "I inspect the final diff manually and resolve anything automation missed.",
  },
  {
    verb: "Babysit the PR",
    detail: "An agent follows CI and review comments until the pull request is ready to ship.",
  },
];

export function ApplicationHowIWorkSection() {
  return (
    <section
      className="application-how-i-work-section relative flex h-dvh snap-start items-start overflow-y-auto bg-[#080808] px-5 py-20 text-[#fdfcfc] sm:px-8 lg:items-center lg:overflow-hidden"
      aria-labelledby="application-how-i-work-title"
    >
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:100%_9vh]" />
      <div className="absolute -top-36 left-[8%] size-96 rounded-full bg-[#ff6a3d]/10 blur-[110px]" />
      <div className="absolute -right-32 bottom-[-8rem] size-[30rem] rounded-full bg-[#506bff]/12 blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl lg:translate-y-[4vh]">
        <p className="mb-3 hidden text-xs tracking-[0.2em] text-white/42 uppercase sm:block">A continuous loop</p>
        <h2
          id="application-how-i-work-title"
          className="max-w-3xl text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.92] font-medium tracking-[-0.065em]"
        >
          How I work.
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/52 sm:text-base">
          I start with either a real problem or a business idea, then shape it around customer needs and technical
          realities. I look for a solution that can serve many customers—not just one. Once the core is clear, I work
          with Design on the experience, turn it into a focused story, and leave it ready for a developer—or me—to pick
          up and build.
        </p>

        <div className="mt-10 sm:mt-12">
          <h3 className="text-sm font-medium tracking-[0.12em] text-white/58">How I develop features</h3>

          <div className="relative mt-5">
            <div className="absolute top-3.5 left-0 hidden h-px w-full bg-white/12 lg:block" />
            <div className="application-process-signal absolute top-3.5 left-0 hidden h-px bg-[#ff6a3d] lg:block" />
            <ol className="relative grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-8 lg:gap-3">
              {STEPS.map(({ verb, detail }, index) => (
                <li key={verb} className="application-process-step flex gap-4 sm:block">
                  <span className="relative z-10 mt-1 grid size-7 shrink-0 place-items-center rounded-full border border-white/20 bg-[#080808] text-[9px] text-white/58 sm:mt-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="sm:mt-6">
                    <p className="text-sm font-semibold tracking-[-0.02em]">{verb}</p>
                    <p className="mt-1 max-w-48 text-[11px] leading-relaxed text-white/42 sm:mt-2">{detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-10 flex items-start gap-4 border-t border-white/10 pt-5 sm:mt-12">
          <span className="shrink-0 text-xs tracking-[0.16em] text-white/32 uppercase">Outcome</span>
          <p className="max-w-2xl text-xs leading-relaxed text-white/48">
            These feedback loops produce a well-scoped, thoroughly tested solution in a short timeframe—ready to ship to
            customers with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
