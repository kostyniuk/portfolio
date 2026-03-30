"use client";

import { MySQL, ReactDark } from "@/components/icons/interests-icons";
import { Avatar, AvatarGroup, AvatarImage, avatarImageVariants } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { VariantProps } from "class-variance-authority";
import { ReactElement } from "react";
import { cn } from "@/lib/utils";

type Interest = {
  name: string;
  src: string;
  fallback?: string;
  className?: string;
  Icon?: ReactElement;
  variant?: VariantProps<typeof avatarImageVariants>["variant"];
};

const INTERESTS = [
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
    variant: "square",
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
    Icon: <MySQL />,
    variant: "square",
  },
] satisfies Interest[];

function Interests() {
  return (
    <div>
      <h1>Interests</h1>
      <AvatarGroup className="gap-6">
        {INTERESTS.map(({ name, className, src, Icon, variant }) => (
          <Tooltip key={name}>
            <TooltipTrigger>
              <Avatar size="lg" variant="ghost" className={className}>
                {!Icon ? (
                  <AvatarImage src={src} alt={name} variant={variant} />
                ) : (
                  <div
                    className={cn("size-full", "[&>svg]:block", "[&>svg]:size-full", variant === "square" && "p-1 ")}
                  >
                    {Icon}
                  </div>
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
