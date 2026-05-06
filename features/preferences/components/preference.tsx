import { PreferenceGroup, type PreferenceItemProps } from "@/components/custom/preference";
import {
  AnthropicPreferenceIcon,
  GeminiPreferenceIcon,
  OpenAIPreferenceIcon,
} from "@/components/icons/preference-icons";
import { Card, CardContent } from "@/components/ui/card";

const PREFERENCES = [
  { text: "OpenAI", Icon: OpenAIPreferenceIcon, className: "bg-[#74AA9C]", weight: 0.9 },
  { text: "Anthropic", Icon: AnthropicPreferenceIcon, className: "bg-[#CC785C]", weight: 0.09 },
  { text: "Gemini", Icon: GeminiPreferenceIcon, className: "bg-[#4796E3]", weight: 0.04 },
] satisfies PreferenceItemProps[];

function Preference() {
  return (
    <div>
      <h1>Preferences</h1>
      <Card variant="frosted-light" className="wavy-border mt-2">
        <CardContent className="flex flex-col">
          <PreferenceGroup title="AI Model" description="AI labs preferences" items={PREFERENCES} />
        </CardContent>
      </Card>
    </div>
  );
}

export { Preference };
