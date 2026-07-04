import {
  AnthropicPreferenceIcon,
  GeminiPreferenceIcon,
  OpenAIPreferenceIcon,
} from "@/components/icons/preference-icons";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { PreferenceItemProps, PreferenceGroup } from "@/components/ui/glasscn/preference";

function AvatarPreferenceIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <Avatar variant="ghost" className="size-full">
      <AvatarImage src={src} alt={alt} />
    </Avatar>
  );
}

const PREFERENCES = [
  {
    text: "OpenAI",
    description: "Use for small daily tasks, backend plans, review Opus",
    icon: <OpenAIPreferenceIcon className="size-full" />,
    className: "bg-[#74AA9C]",
    weight: 0.92,
  },
  {
    text: "Anthropic",
    description: "Use for UI, frontend plans, review GPT-5.5",
    icon: <AnthropicPreferenceIcon className="size-full" />,
    className: "bg-[#CC785C]",
    weight: 0.05,
  },
  {
    text: "Gemini",
    description: "Rarely use to see if it became any good",
    icon: <GeminiPreferenceIcon className="size-full" />,
    className: "bg-[#4796E3]",
    weight: 0.05,
  },
] satisfies PreferenceItemProps[];

const COMPONENT_LIBRARY_PREFERENCES = [
  {
    text: "shadcn",
    description: "goat",
    icon: <AvatarPreferenceIcon src="https://github.com/shadcn.png" alt="shadcn" />,
    className: "bg-foreground",
    weight: 1,
  },
] satisfies PreferenceItemProps[];

const FRAMEWORK_PREFERENCES = [
  {
    text: "Next.js",
    icon: (
      <AvatarPreferenceIcon
        src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png"
        alt="Next.js"
      />
    ),
    className: "bg-foreground",
    weight: 0.6,
  },
  {
    text: "TanStack Start",
    icon: <AvatarPreferenceIcon src="https://github.com/TanStack.png" alt="TanStack Start" />,
    className: "bg-[#10B981]",
    weight: 0.35,
  },
  {
    text: "Astro",
    icon: <AvatarPreferenceIcon src="https://github.com/withastro.png" alt="Astro" />,
    className: "bg-[#BC52EE]",
    weight: 0.05,
  },
] satisfies PreferenceItemProps[];

const FORM_PREFERENCES = [
  {
    text: "TanStack Form",
    icon: <AvatarPreferenceIcon src="https://github.com/TanStack.png" alt="TanStack Form" />,
    className: "bg-[#10B981]",
    weight: 0.9,
  },
  {
    text: "React Final Form",
    icon: <AvatarPreferenceIcon src="https://github.com/final-form.png" alt="React Final Form" />,
    className: "bg-[#E57C46]",
    weight: 0.05,
  },
  {
    text: "React Hook Form",
    icon: <AvatarPreferenceIcon src="https://github.com/react-hook-form.png" alt="React Hook Form" />,
    className: "bg-[#EC5990]",
    weight: 0.05,
  },
] satisfies PreferenceItemProps[];

const PREFERENCE_GROUPS = [
  { title: "AI Model", description: "AI labs", items: PREFERENCES },
  { title: "Components library", description: "UI component system", items: COMPONENT_LIBRARY_PREFERENCES },
  { title: "Frameworks", description: "Web frameworks", items: FRAMEWORK_PREFERENCES },
  { title: "Forms", description: "Form libraries", items: FORM_PREFERENCES },
];

function Preference() {
  return (
    <section id="preferences" className="page-section hidden scroll-mt-navigation-scroll-margin sm:block">
      <p className="page-section-title">Preferences</p>
      <div className="page-section-body flex flex-col divide-y divide-border">
        {PREFERENCE_GROUPS.map((group) => (
          <div key={group.title} className="py-6 first:pt-0 last:pb-0">
            <PreferenceGroup {...group} />
          </div>
        ))}
      </div>
    </section>
  );
}

export { Preference };
