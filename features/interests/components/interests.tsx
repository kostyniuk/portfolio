"use client";

import { ReactDark } from "@/components/icons/interests-icons";
import { Avatar, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ReactElement } from "react";

type Interest = {
  name: string;
  src: string;
  fallback?: string;
  className?: string;
  Icon?: ReactElement;
};

const INTERESTS: Interest[] = [
  {
    name: "shadcn",
    src: "https://github.com/shadcn.png",
    className: "after:hidden bg-transparent",
  },
  {
    name: "React",
    src: "https://react.dev/apple-touch-icon.png",
    Icon: <ReactDark />,
  },
  {
    name: "Node.js",
    src: "https://github.com/nodejs.png",
  },
  {
    name: "TypeScript",
    src: "https://www.typescriptlang.org/icons/icon-512x512.png",
  },
  {
    name: "PostgreSQL",
    src: "https://www.postgresql.org/media/img/about/press/elephant.png",
  },
  {
    name: "Next.js",
    src: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png",
  },
  {
    name: "Bun",
    src: "https://bun.sh/logo-square.png",
  },
  {
    name: "Vercel",
    src: "https://github.com/vercel.png",
  },
  {
    name: "TanStack",
    src: "https://github.com/TanStack.png",
  },
  {
    name: "Drizzle",
    src: "https://github.com/drizzle-team.png",
  },
  {
    name: "MySQL",
    src: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
  },
];

function Interests() {
  return (
    <div>
      <h1>Interests</h1>
      <AvatarGroup className="gap-4">
        {INTERESTS.map(({ name, className, src, Icon }) => (
          <Tooltip key={name}>
            <TooltipTrigger>
              <Avatar size="lg" variant="ghost" className={className}>
                {!Icon ? (
                  <AvatarImage src={src} alt={name} />
                ) : (
                  <div className="size-full overflow-hidden rounded-full [&>svg]:size-full [&>svg]:block">{Icon}</div>
                )}
                {/* <AvatarFallback>{interest.fallbac ?? interest.name.slice(0, 2).toUpperCase()}</AvatarFallback> */}
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>{name}</TooltipContent>
          </Tooltip>
        ))}
      </AvatarGroup>
    </div>
  );
}

export { Interests };
