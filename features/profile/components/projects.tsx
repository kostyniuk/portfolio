import { MellowIcon } from "@/components/icons/project-icons";
import { type LinkItemProps } from "@/features/profile/components/link-item";
import { PreviewProject } from "@/features/projects/components/project-preview";

interface Project extends LinkItemProps {
  description: string;
  videoHref: string;
}

const PROJECTS = {
  mellow_lines: {
    link: "https://mellowlines.dev",
    label: "Mellow Lines",
    Icon: MellowIcon,
    description:
      "A web app for creating animated videos of code morphing between steps. Paste code snippets, configure syntax highlighting and export smooth token-level transitions as WebM/MP4/gif videos.",
    videoHref: "/mellow_lines.mp4",
  },
  mellow_fmt: {
    link: "https://mellowfmt.vercel.app",
    label: "Mellow fmt",
    description:
      "An interactive playground for exploring and comparing code formatting options between Prettier and Oxfmt.",
    videoHref: "/mellow_fmt.mp4",
  },
  alex_posts: {
    link: "https://alex-posts.netlify.app/",
    label: "Alex Posts",
    description:
      "Insights and thoughts on technology and development, with a focus on React, its ecosystem, PostgreSQL, and all things JavaScript and TypeScript.",
    videoHref: "/alex-posts.mp4",
  },
} satisfies Record<string, Project>;

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="mt-2 flex flex-col gap-4">
        {Object.entries(PROJECTS).map(([id, project]) => {
          return (
            <div key={id} className="">
              <PreviewProject {...project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export type { Project };
export { Projects };
