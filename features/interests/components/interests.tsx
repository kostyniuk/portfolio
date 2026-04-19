"use client";

import { JavaScript, MySQL, ReactDark, TypeScript } from "@/components/icons/interests-icons";
import { Avatar, AvatarGroup, AvatarImage, avatarImageVariants } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { VariantProps } from "class-variance-authority";
import { ReactElement } from "react";
import { RequireAtLeastOne, cn } from "@/lib/utils";

type BaseInterest = {
  name: string;
  src?: string;
  fallback?: string;
  className?: string;
  Icon?: ReactElement;
  variant?: VariantProps<typeof avatarImageVariants>["variant"];
};

type Interest = RequireAtLeastOne<BaseInterest, "src" | "Icon">;

const INTERESTS = [
  // Languages
  {
    name: "TypeScript",
    Icon: <TypeScript />,
    className: "rounded-md overflow-hidden after:rounded-md",
  },
  {
    name: "JavaScript",
    Icon: <JavaScript />,
    className: "rounded-md overflow-hidden after:rounded-md",
  },
  // Frontend
  {
    name: "React",
    src: "https://react.dev/apple-touch-icon.png",
    Icon: <ReactDark />,
  },
  {
    name: "Next.js",
    src: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png",
  },
  {
    name: "TanStack",
    src: "https://github.com/TanStack.png",
  },
  {
    name: "shadcn",
    src: "https://github.com/shadcn.png",
    className: "after:hidden bg-transparent",
  },
  {
    name: "Tailwind CSS",
    src: "https://github.com/tailwindlabs.png",
  },
  // Runtimes
  {
    name: "Node.js",
    src: "https://github.com/nodejs.png",
  },
  {
    name: "Bun",
    src: "https://bun.sh/logo-square.png",
  },
  // Databases & ORM
  {
    name: "PostgreSQL",
    src: "https://github.com/postgres.png",
    variant: "square",
  },
  {
    name: "MySQL",
    src: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
    Icon: <MySQL />,
    variant: "square",
  },
  {
    name: "Drizzle",
    src: "https://github.com/drizzle-team.png",
  },
  // Platform
  {
    name: "Vercel",
    src: "https://github.com/vercel.png",
  },
] satisfies Interest[];

function Interests() {
  return (
    <div>
      <h1>Interests</h1>
      <Card variant="frosted-light" className="mt-3">
        <CardContent>
          <AvatarGroup className="flex-wrap gap-4 sm:gap-6">
            {INTERESTS.map(({ name, className, src, Icon, variant }) => (
              <Tooltip key={name}>
                <TooltipTrigger>
                  <Avatar size="lg" variant="ghost" className={className}>
                    {!Icon ? (
                      <AvatarImage src={src} alt={name} variant={variant} />
                    ) : (
                      <div
                        className={cn(
                          "size-full",
                          "[&>svg]:block",
                          "[&>svg]:size-full",
                          variant === "square" && "p-1 ",
                        )}
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
        </CardContent>
      </Card>
    </div>
  );
}

export { Interests };
