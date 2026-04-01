const EXPERIENCES = [
  {
    period: "March 2024 — Present",
    title: "Senior Frontend Engineer",
    company: "Vercel",
    description:
      "Building the future of web development. Working on Next.js tooling, performance optimizations, and developer experience improvements across the platform.",
  },
  {
    period: "January 2022 — February 2024",
    title: "Frontend Engineer",
    company: "Stripe",
    description:
      "Developed and maintained payment UI components used by millions of merchants. Led migration from legacy codebase to React with TypeScript, improving developer velocity by 40%.",
  },
  {
    period: "June 2020 — December 2021",
    title: "Software Engineer",
    company: "GitLab",
    description:
      "Built CI/CD pipeline visualization features and contributed to the Web IDE. Collaborated on design system components used across the platform.",
  },
  {
    period: "August 2018 — May 2020",
    title: "Junior Developer",
    company: "SoftServe",
    description:
      "Worked on enterprise web applications for international clients. Gained experience with React, Node.js, and PostgreSQL in an agile environment.",
  },
  {
    period: "August 2018 — May 2020",
    title: "Junior Developer",
    company: "SoftServe",
    description:
      "Worked on enterprise web applications for international clients. Gained experience with React, Node.js, and PostgreSQL in an agile environment.",
  },
  {
    period: "August 2018 — May 2020",
    title: "Junior Developer",
    company: "SoftServe",
    description:
      "Worked on enterprise web applications for international clients. Gained experience with React, Node.js, and PostgreSQL in an agile environment.",
  },
  {
    period: "August 2018 — May 2020",
    title: "Junior Developer",
    company: "SoftServe",
    description:
      "Worked on enterprise web applications for international clients. Gained experience with React, Node.js, and PostgreSQL in an agile environment.",
  },
] as const;

function Experience() {
  return (
    <div className="p-8 shrink-0 flex flex-col border border-red-500 bg-red-500/10">
      <h1>Experience</h1>
      <div className="flex flex-row shrink-0 gap-6 py-4 mt-8">
        <div className="flex flex-col relative">
          <div className="top-0 left-0 left-3 -translate-x-1/2 absolute h-full w-[2px] bg-foreground rounded-full"></div>
          {EXPERIENCES.map((experience, index) => (
            <div className="flex gap-12">
              <div className="w-6 h-6 bg-foreground rounded-full sticky top-10 relative z-10 shrink-0"></div>
              <div key={index} className="flex flex-col gap-2 mb-12">
                <div className="text-sm text-muted-foreground">{experience.period}</div>
                <h3 className="text-lg font-semibold">{experience.title}</h3>
                <p className="text-muted-foreground">{experience.company}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Experience };
