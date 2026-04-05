import { type LinkItemProps } from "@/features/profile/components/link-item";
import { PreviewProject } from "@/features/projects/components/project-preview";

interface Project extends LinkItemProps {
  description: string;
  features: string[];
  videoHref: string;
  source: string;
}

const PROJECTS = {
  mellow_lines: {
    link: "https://mellowlines.dev",
    label: "Mellow Lines",
    description: "A code animation studio that turns code snippets into cinematic videos — entirely in the browser.",
    features: [
      "Token-level morphing with arc-based animations and three cinematic presets (Precise, Studio, Cinematic)",
      "Shiki-powered syntax highlighting with 11 languages, 60 color themes, and 21 background gradients",
      "Full video pipeline client-side via FFmpeg WASM — exports MP4, WebM, and GIF at up to 60 FPS",
      "Deterministic canvas rendering at 1920px+ for sharp, reproducible output",
      "Configurable timing controls: transition speed, hold durations, and FPS selection",
    ],
    videoHref: "/mellow_lines.mp4",
    source: "https://github.com/kostyniuk/mellow-lines",
  },
  mellow_fmt: {
    link: "https://mellowfmt.vercel.app",
    label: "Mellow fmt",
    description: "An interactive playground for exploring and comparing Prettier and Oxfmt formatting options.",
    features: [
      "Side-by-side comparison of 18 Prettier and 5 Oxfmt-specific options with live code previews",
      "Export ready-to-use .prettierrc or .oxfmt.json configs with one click",
      "Preset system (Default, Ultracite) for quick opinionated setups",
      "Sub-option support for complex settings like experimental import sorting",
    ],
    videoHref: "/mellow_fmt.mp4",
    source: "https://github.com/kostyniuk/mellow-fmt",
  },
  alex_posts: {
    link: "https://alex-posts.netlify.app/",
    label: "Alex Posts",
    description: "A technical blog with deep dives into database internals, React mechanics, and JavaScript tooling.",
    features: [
      "10+ PostgreSQL deep dives — MVCC & locking, isolation levels, WAL & shared buffers, B+Tree indexes, window functions, and more",
      "React articles — From JSX to DOM, mounting vs rendering, Activity component, and Next.js 16 PPR",
      "JavaScript & Node.js — tree shaking, package lock files, and non-blocking I/O internals",
    ],
    videoHref: "/alex-posts.mp4",
    source: "https://github.com/kostyniuk/alex-posts",
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
