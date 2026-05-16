"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, type Variants } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { ItemDescription, ItemTitle } from "@/components/ui/item";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const badgeMotionVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.15 },
};

const badgeMotionTransition = { type: "spring", stiffness: 400, damping: 20 } as const;

type PreferenceItemProps = {
  text: string;
  description?: string;
  icon: ReactNode;
  className: string;
  weight?: number;
};

type PreferenceGroupProps = { title: string; description: string; items: PreferenceItemProps[] };

function PreferenceItem({ className, description, icon, text, weight = 1 }: PreferenceItemProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className={cn(
        "group/item flex flex-(--preference-weight) items-center justify-center overflow-hidden transition-[filter,opacity] duration-300 group-hover/preference:not-[&:hover]:opacity-50 group-hover/preference:not-[&:hover]:saturate-50",
        className,
      )}
      style={{ "--preference-weight": weight } as CSSProperties}
      aria-label={text}
    >
      <Tooltip>
        <TooltipTrigger
          render={
            <motion.div variants={badgeMotionVariants} transition={badgeMotionTransition}>
              <Badge variant="secondary" className="size-7 rounded-full p-0 shadow-[0_0_0_0_rgba(255,255,255,0)] transition-shadow duration-300 group-hover/item:shadow-[0_0_12px_2px_rgba(255,255,255,0.5)] [&>svg]:size-4!">
                {icon}
              </Badge>
            </motion.div>
          }
        />
        <TooltipContent className="flex max-w-48 flex-col items-start gap-0.5 px-3 py-2">
          <ItemTitle className="text-background text-xs">{text}</ItemTitle>
          {description ? <ItemDescription className="text-background/70 text-xs">{description}</ItemDescription> : null}
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
}

function PreferenceGroup({ title, description, items }: PreferenceGroupProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </div>
      <div className="group/preference flex h-10 overflow-hidden rounded-full">
        {items.map((preference, i) => (
          <PreferenceItem key={i} {...preference} />
        ))}
      </div>
    </div>
  );
}

export type { PreferenceGroupProps, PreferenceItemProps };
export { PreferenceGroup };
