import { Badge } from "@/components/ui/badge";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";

const EXPERIENCES = [
  {
    period: "March 2024 — Present",
    title: "Senior Frontend Engineer",
    company: "Vercel",
    description:
      "Building the future of web development. Working on Next.js tooling, performance optimizations, and developer experience improvements across the platform.",
    stack: ["Next.js", "React", "TypeScript", "Turborepo"],
  },
  {
    period: "January 2022 — February 2024",
    title: "Frontend Engineer",
    company: "Stripe",
    description:
      "Developed and maintained payment UI components used by millions of merchants. Led migration from legacy codebase to React with TypeScript, improving developer velocity by 40%.",
    stack: ["React", "TypeScript", "Ruby", "GraphQL"],
  },
  {
    period: "June 2020 — December 2021",
    title: "Software Engineer",
    company: "GitLab",
    description:
      "Built CI/CD pipeline visualization features and contributed to the Web IDE. Collaborated on design system components used across the platform.",
    stack: ["Vue.js", "Ruby on Rails", "GraphQL", "PostgreSQL"],
  },
  {
    period: "August 2018 — May 2020",
    title: "Junior Developer",
    company: "SoftServe",
    description:
      "Worked on enterprise web applications for international clients. Gained experience with React, Node.js, and PostgreSQL in an agile environment.",
    stack: ["React", "Node.js", "PostgreSQL", "JavaScript"],
  },
  {
    period: "August 2018 — May 2020",
    title: "Junior Developer",
    company: "SoftServe",
    description:
      "Worked on enterprise web applications for international clients. Gained experience with React, Node.js, and PostgreSQL in an agile environment.",
    stack: ["React", "Node.js", "PostgreSQL", "JavaScript"],
  },
  {
    period: "August 2018 — May 2020",
    title: "Junior Developer",
    company: "SoftServe",
    description:
      "Worked on enterprise web applications for international clients. Gained experience with React, Node.js, and PostgreSQL in an agile environment.",
    stack: ["React", "Node.js", "PostgreSQL", "JavaScript"],
  },
  {
    period: "August 2018 — May 2020",
    title: "Junior Developer",
    company: "SoftServe",
    description:
      "Worked on enterprise web applications for international clients. Gained experience with React, Node.js, and PostgreSQL in an agile environment.",
    stack: ["React", "Node.js", "PostgreSQL", "JavaScript"],
  },
] as const;

function Experience() {
  return (
    <div className="p-8 shrink-0 flex flex-col border bg-fo">
      <h1>Experience</h1>
      <div className="flex flex-row shrink-0 gap-6 py-4 mt-8">
        <div className="flex flex-col relative">
          <div className="top-0 left-0 left-3 -translate-x-1/2 absolute h-full w-[2px] bg-foreground rounded-full"></div>
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="flex gap-12">
              <div className="h-full">
                <div className="w-6 h-6 bg-foreground rounded-full sticky top-10 relative z-10"></div>
              </div>
              <Item className="mb-12">
                <ItemContent>
                  <span className="text-[0.625rem] font-mono text-muted-foreground tracking-wide">
                    {experience.period}
                  </span>
                  <ItemTitle>{experience.title}</ItemTitle>
                  <ItemDescription className="font-medium text-foreground">{experience.company}</ItemDescription>
                  <ItemDescription className="line-clamp-3">{experience.description}</ItemDescription>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {experience.stack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </ItemContent>
              </Item>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Experience };
