import { Play } from "lucide-react";

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment";
import { GlassBadge } from "@/components/ui/glasscn/glass-badge";

type Idea = {
  title: string;
  description: string;
  tweetUrl?: string | null;
  videoSrc?: string;
};

const IDEAS: Idea[] = [
  {
    title: "Make designing easy for users",
    description:
      "@Lovable can greatly benefit if you make 𝙳𝙴𝚂𝙸𝙶𝙽.𝚖𝚍 easy for users.\n\nWhen users see something they like, they continue interacting with the product — but most non-technical users don’t know this format exists. You can already supply a DESIGN.md file and AI will match the styles to it, yet that’s mostly for technical users.\n\nFor less technical users it would be fun to have either/both:\n\n• Before starting a project, learn what designs the user likes — like how @netflix asks you to pick movies or genres, then adapt new projects to their taste.\n• Alongside a project, create real presets (not just dark/light), similar to @shadcn. You already use shadcn, so it should be easy.\n\nA win-win: the user gets something they already visually like from one prompt, and Lovable keeps them engaged and building.",
    tweetUrl: "https://x.com/kostyniuk00/status/2070905264253940093",
    videoSrc: "/lovable/lovable-presets.mp4",
  },
  {
    title: "Small change to date logic",
    description:
      "One more enhancement we can bring: don’t rely on the model’s perception of the current time. Instead, update the system prompt to always use the actual client date, or create a small skill that teaches the model to never use perceived time in code - only the real time.",
    tweetUrl: null,
    videoSrc: "/lovable/lovable-date.mp4",
  },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IdeaAttachment({ idea }: { idea: Idea }) {
  return (
    <Attachment orientation="horizontal" className="w-full gap-5 p-3 sm:gap-7 sm:p-4">
      <AttachmentMedia
        variant="image"
        className="relative aspect-auto w-80 min-h-56 self-stretch overflow-hidden rounded-xl bg-white sm:w-[34rem]"
      >
        {idea.videoSrc ? (
          <video
            src={idea.videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-white text-stone-400">
            <Play className="size-8" />
          </div>
        )}
      </AttachmentMedia>

      <AttachmentContent className="py-1">
        <AttachmentTitle className="text-base whitespace-normal sm:text-lg">{idea.title}</AttachmentTitle>
        <AttachmentDescription className="mt-1.5 whitespace-pre-line text-sm leading-6">
          {idea.description}
        </AttachmentDescription>
      </AttachmentContent>

      {idea.tweetUrl ? (
        <AttachmentActions className="self-center pr-1">
          <AttachmentAction
            size="default"
            aria-label="View this idea on X"
            render={
              <a href={idea.tweetUrl} target="_blank" rel="noreferrer">
                <XIcon className="size-4" />
                View on X
              </a>
            }
          />
        </AttachmentActions>
      ) : null}
    </Attachment>
  );
}

export function LovableIdeasSection() {
  return (
    <section
      className="relative flex h-dvh snap-start flex-col overflow-hidden bg-[#151211] px-5 py-12 text-white sm:px-8 lg:px-12"
      aria-label="Lovable ideas"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "calc(-78vw + 48vh)",
          left: "66%",
          width: "180vw",
          aspectRatio: "0.9917355371900827",
          transform: "translate3d(-50%, 0, 0)",
          backfaceVisibility: "hidden",
        }}
      >
        <img
          src="/lovable/pulse.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-contain opacity-45"
          style={{ filter: "blur(7px) saturate(1.25)" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-8 py-6">
        <header className="flex flex-col items-center gap-3 text-center">
          <GlassBadge className="h-auto px-5 py-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Lovable ideas
          </GlassBadge>
          <p className="max-w-md text-sm leading-6 text-white/55">
            Some ideas to make Lovable more lovable for builders.
          </p>
        </header>

        <div className="flex flex-col items-center gap-6">
          {IDEAS.map((idea, index) => (
            <IdeaAttachment key={`${idea.tweetUrl}-${index}`} idea={idea} />
          ))}
        </div>
      </div>
    </section>
  );
}
