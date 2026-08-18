const STEPS = [
  {
    verb: "Start with an agent",
    detail:
      "I always work with an agent. For bigger features or bugs that aren't obvious at first, I use specific skills to help it focus. For smaller tasks, I explain what needs doing and jump in.",
  },
  {
    verb: "Scope the solution",
    detail:
      "When the work needs a plan, I turn it into a detailed spec, including edge cases and what done looks like.",
  },
  {
    verb: "Implement with agents",
    detail: "Once the task is clear, I let one or more agents build the feature.",
  },
  {
    verb: "Create feedback loops",
    detail: "Browser Use, types, and tests help the agents see what they built and catch their own mistakes.",
  },
  {
    verb: "Check manually",
    detail: "I still open the feature and use it myself, from start to finish.",
  },
  {
    verb: "Run an agent review",
    detail: "I ask fresh agents to review the work and catch anything the first ones missed.",
  },
  {
    verb: "Review the code",
    detail: "Then I read the diff myself and fix whatever is left.",
  },
  {
    verb: "Babysit the PR",
    detail: "Finally, an agent watches CI and review comments until the PR is ready to merge.",
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
          I start with either a problem to solve or a business idea. I shape it around customer needs and technical
          realities, and look for a solution that can serve many customers instead of just one. Once the core is clear,
          I work with Design team on the experience, break it down into a focused story, and leave it ready for a
          developer or me to build.
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
            The result is a feature that has been planned, built, checked, and reviewed from a few different angles,
            usually in much less time.
          </p>
        </div>
      </div>
    </section>
  );
}
