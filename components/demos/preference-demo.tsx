"use client";

import {
  AnthropicPreferenceIcon,
  GeminiPreferenceIcon,
  OpenAIPreferenceIcon,
} from "@/components/icons/preference-icons";
import { Card } from "@/components/ui/card";
import { PreferenceGroup, type PreferenceItemProps } from "@/components/ui/glasscn/preference";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/liquid-metal-card";

const MODEL_PREFERENCES = [
  {
    text: "OpenAI",
    description: "Daily work, planning, and code review",
    icon: <OpenAIPreferenceIcon className="size-full" />,
    className: "bg-[#74AA9C]",
    weight: 0.82,
  },
  {
    text: "Anthropic",
    description: "UI review and alternate reads",
    icon: <AnthropicPreferenceIcon className="size-full" />,
    className: "bg-[#CC785C]",
    weight: 0.12,
  },
  {
    text: "Gemini",
    description: "Occasional comparison pass",
    icon: <GeminiPreferenceIcon className="size-full" />,
    className: "bg-[#4796E3]",
    weight: 0.06,
  },
] satisfies PreferenceItemProps[];

function PreferenceDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preference</CardTitle>
        <CardDescription>A weighted preference bar with animated badges and tooltips.</CardDescription>
      </CardHeader>
      <CardContent>
        <PreferenceGroup title="AI Model" description="Relative preference by day-to-day usage" items={MODEL_PREFERENCES} />
      </CardContent>
    </Card>
  );
}

export { PreferenceDemo };
