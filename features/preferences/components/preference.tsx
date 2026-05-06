import { PreferenceGroup, type PreferenceIconProps, type PreferenceItemProps } from "@/components/custom/preference";
import {
  AnthropicPreferenceIcon,
  GeminiPreferenceIcon,
  OpenAIPreferenceIcon,
} from "@/components/icons/preference-icons";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const PREFERENCES = [
  { text: "OpenAI", Icon: OpenAIPreferenceIcon, className: "bg-[#74AA9C]", weight: 0.5 },
  { text: "Anthropic", Icon: AnthropicPreferenceIcon, className: "bg-[#CC785C]", weight: 0.5 },
  { text: "Gemini", Icon: GeminiPreferenceIcon, className: "bg-[#4796E3]", weight: 0.05 },
] satisfies PreferenceItemProps[];

function createAvatarPreferenceIcon(src: string, alt: string) {
  return function AvatarPreferenceIcon({ className }: PreferenceIconProps) {
    return (
      <Avatar variant="ghost" className={className}>
        <AvatarImage src={src} alt={alt} />
      </Avatar>
    );
  };
}

const ShadcnPreferenceIcon = createAvatarPreferenceIcon("https://github.com/shadcn.png", "shadcn");
const NextPreferenceIcon = createAvatarPreferenceIcon(
  "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png",
  "Next.js",
);
const TanStackPreferenceIcon = createAvatarPreferenceIcon("https://github.com/TanStack.png", "TanStack Start");
const AstroPreferenceIcon = createAvatarPreferenceIcon("https://github.com/withastro.png", "Astro");
const ReactFinalFormPreferenceIcon = createAvatarPreferenceIcon(
  "https://github.com/final-form.png",
  "React Final Form",
);
const ReactHookFormPreferenceIcon = createAvatarPreferenceIcon(
  "https://github.com/react-hook-form.png",
  "React Hook Form",
);

const COMPONENT_LIBRARY_PREFERENCES = [
  { text: "shadcn", Icon: ShadcnPreferenceIcon, className: "bg-foreground", weight: 1 },
] satisfies PreferenceItemProps[];

const FRAMEWORK_PREFERENCES = [
  { text: "Next.js", Icon: NextPreferenceIcon, className: "bg-foreground", weight: 0.6 },
  { text: "TanStack Start", Icon: TanStackPreferenceIcon, className: "bg-[#10B981]", weight: 0.35 },
  { text: "Astro", Icon: AstroPreferenceIcon, className: "bg-[#BC52EE]", weight: 0.05 },
] satisfies PreferenceItemProps[];

const FORM_PREFERENCES = [
  { text: "TanStack Form", Icon: TanStackPreferenceIcon, className: "bg-[#10B981]", weight: 0.9 },
  { text: "React Final Form", Icon: ReactFinalFormPreferenceIcon, className: "bg-[#E57C46]", weight: 0.05 },
  { text: "React Hook Form", Icon: ReactHookFormPreferenceIcon, className: "bg-[#EC5990]", weight: 0.05 },
] satisfies PreferenceItemProps[];

const PREFERENCE_GROUPS = [
  { title: "AI Model", description: "AI labs", items: PREFERENCES },
  { title: "Components library", description: "UI component system", items: COMPONENT_LIBRARY_PREFERENCES },
  { title: "Frameworks", description: "Web frameworks", items: FRAMEWORK_PREFERENCES },
  { title: "Forms", description: "Form libraries", items: FORM_PREFERENCES },
];

function Preference() {
  return (
    <div>
      <h1>Preferences</h1>
      <Card variant="frosted-light" className="wavy-border mt-2">
        <CardContent className="flex flex-col divide-y divide-border">
          {PREFERENCE_GROUPS.map((group) => (
            <div key={group.title} className="py-6 first:pt-0 last:pb-0">
              <PreferenceGroup {...group} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export { Preference };
