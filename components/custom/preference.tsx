import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { ComponentType, CSSProperties } from "react";

type PreferenceIconProps = {
  className?: string;
};

type PreferenceIcon = ComponentType<PreferenceIconProps>;

type PreferenceItemProps = {
  text: string;
  Icon: PreferenceIcon;
  className: string;
  weight?: number;
};

type PreferenceGroupProps = {
  items: PreferenceItemProps[];
};

function PreferenceItem({ className, Icon, text, weight = 1 }: PreferenceItemProps) {
  return (
    <div
      className={cn("flex flex-(--preference-weight) items-center justify-center overflow-hidden", className)}
      style={
        {
          "--preference-weight": weight,
        } as CSSProperties
      }
      aria-label={text}
    >
      <Tooltip>
        <TooltipTrigger
          render={
            <Badge variant="secondary" className="size-7 rounded-full p-0 [&>svg]:size-4!">
              <Icon />
            </Badge>
          }
        />
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

function PreferenceGroup({ items }: PreferenceGroupProps) {
  return (
    <div className="flex h-10 overflow-hidden rounded-full">
      {items.map((preference, i) => (
        <PreferenceItem key={i} {...preference} />
      ))}
    </div>
  );
}

export type { PreferenceGroupProps, PreferenceIcon, PreferenceIconProps, PreferenceItemProps };
export { PreferenceGroup };
