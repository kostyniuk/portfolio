import { PreferenceGroup, type PreferenceIconProps, type PreferenceItemProps } from "@/components/custom/preference";
import {
  AnthropicPreferenceIcon,
  GeminiPreferenceIcon,
  OpenAIPreferenceIcon,
} from "@/components/icons/preference-icons";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const PREFERENCES = [
  { text: "OpenAI", Icon: OpenAIPreferenceIcon, className: "bg-[#74AA9C]", weight: 0.9 },
  { text: "Anthropic", Icon: AnthropicPreferenceIcon, className: "bg-[#CC785C]", weight: 0.09 },
  { text: "Gemini", Icon: GeminiPreferenceIcon, className: "bg-[#4796E3]", weight: 0.04 },
] satisfies PreferenceItemProps[];

function ShadcnPreferenceIcon({ className }: PreferenceIconProps) {
  return (
    <Avatar variant="ghost" className={className}>
      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
    </Avatar>
  );
}

const COMPONENT_LIBRARY_PREFERENCES = [
  { text: "shadcn", Icon: ShadcnPreferenceIcon, className: "bg-foreground", weight: 1 },
] satisfies PreferenceItemProps[];

function Preference() {
  return (
    <div>
      <h1>Preferences</h1>
      <Card variant="frosted-light" className="wavy-border mt-2">
        <CardContent className="flex flex-col gap-6">
          <PreferenceGroup title="AI Model" description="AI labs preferences" items={PREFERENCES} />
          <PreferenceGroup
            title="Components library"
            description="UI component preferences"
            items={COMPONENT_LIBRARY_PREFERENCES}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export { Preference };
