import { type LinkItemProps } from "@/features/profile/components/link-item";
import { PreviewProject } from "@/features/projects/components/project-preview";

interface Project extends LinkItemProps {
  description: string;
  features: string[];
  videoHref: string;
  source: string;
}

const PROJECTS = {
  lee_hire_me: {
    link: "https://www.leehireme.xyz/",
    label: "LeeHireMe",
    description:
      "A single-page CV builder that makes a candidate easy to reason about by showing personality, taste, and signal beyond raw technical details.",
    features: [
      "Modular resume sections for identity, summary, social links, experience, projects, skills, education, awards, inspirations, and portfolio QR",
      "Strict one-page format that forces prioritization: if it does not fit, link out to the portfolio and let the extra context live there",
      "AI flow: paste an old CV, LinkedIn export, portfolio, notes, or links into any AI chat and get back a ready-to-edit LeeHireMe URL",
      "Free, open-source builder with live editing and one-click browser PDF export",
    ],
    videoHref: "/lee-hire-me-demo.mp4",
    source: "https://github.com/kostyniuk/lee-hire-me",
  },
  glasscn: {
    link: "https://glasscn-components.vercel.app/",
    label: "GlassCN",
    description: "A library of Apple-like glass components for shadcn/ui.",
    features: [
      "20+ Glass-styled UI primitives with 5 different glass effects that works great for both dark and light themes",
      "Apple-inspired visual treatment with translucent layers, soft highlights, and liquid surfaces",
      "Physical Refraction: Uses SVG filter primitives and a displacement map to simulate the way light actually bends through thick glass",
      "Open source package with ready-to-adapt building blocks for custom glassmorphism systems",
    ],
    videoHref: "/glasscn.mp4",
    source: "https://github.com/kostyniuk/glasscn-components",
  },
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
    <section id="projects" className="page-section scroll-mt-navigation-scroll-margin">
      <p className="page-section-title">Projects</p>
      <div className="page-rule-list mt-4 flex flex-col">
        {Object.entries(PROJECTS).map(([id, project]) => {
          return (
            <div key={id}>
              <PreviewProject {...project} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export type { Project };
export { Projects };
