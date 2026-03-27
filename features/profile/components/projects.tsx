import { MellowIcon } from "@/components/icons/project-icons";
import { GitHubIcon, XIcon } from "@/components/icons/social-icons";
import { LinkItem, type LinkItemProps } from "@/features/profile/components/link-item";

interface Project extends LinkItemProps {
  description: string;
}

const PROJECTS = {
  mellow_lines: {
    link: "https://mellowlines.dev",
    label: "Mellow Lines",
    Icon: MellowIcon,
    description:
      "Code animation studio that transforms your code snippets into beautiful, smooth transition animations.",
  },
  mellow_fmt: {
    link: "https://mellowfmt.vercel.app",
    label: "Mellow fmt",
    Icon: MellowIcon,
    description:
      "An interactive playground for exploring and comparing code formatting options between Prettier and Oxfmt.",
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
              <LinkItem {...project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { Projects };
