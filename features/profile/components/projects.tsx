import { GitHubIcon, XIcon } from "@/components/icons/social-icons";
import { SocialItem, type Social } from "@/features/profile/components/social-item";

type Project = Social & { description: string };

const PROJECTS = {
  mellow_lines: { link: "https://x.com/costiniuc00", label: "@costiniuc00", Icon: XIcon, description: "small desc" },
  mellow_fmt: {
    link: "https://github.com/kostyniuk",
    label: "@kostyniuk",
    Icon: GitHubIcon,
    description: "small desc",
  },
} satisfies Record<string, Project>;

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="mt-2 flex gap-8">
        {Object.entries(PROJECTS).map(([id, social]) => {
          return (
            <div key={id} className="min-w-0 flex-1 basis-0">
              <SocialItem {...social} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { Projects };
