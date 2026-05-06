import {
  AnthropicPreferenceIcon,
  GeminiPreferenceIcon,
  OpenAIPreferenceIcon,
  type PreferenceIcon,
} from "@/components/icons/preference-icons";
import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type PreferenceItemProps = {
  text: string;
  Icon: PreferenceIcon;
  className: string;
  weight?: number;
};

const PREFERENCES = [
  { text: "OpenAI", Icon: OpenAIPreferenceIcon, className: "bg-[#74AA9C]", weight: 0.9 },
  { text: "Anthropic", Icon: AnthropicPreferenceIcon, className: "bg-[#CC785C]", weight: 0.09 },
  { text: "Gemini", Icon: GeminiPreferenceIcon, className: "bg-[#4796E3]", weight: 0.04 },
] satisfies PreferenceItemProps[];

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

function Preference() {
  return (
    <Card className="h-10 p-0">
      <CardContent className="flex flex-1 justify-center p-0 sm:p-0">
        {PREFERENCES.map((preference, i) => (
          <PreferenceItem key={i} {...preference} />
        ))}
      </CardContent>
    </Card>
  );
}

export { Preference };
