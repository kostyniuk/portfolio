import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";

type PreferenceItem = {
  text: string;
  className: string;
  weight?: number;
};

const PREFERENCES = [
  { text: "OpenAI", className: "bg-green-400", weight: 0.2 },
  { text: "Anthropic", className: "bg-red-400", weight: 0.2 },
  { text: "Gemini", className: "bg-red-900", weight: 0.6 },
] satisfies PreferenceItem[];

function PreferenceItem({ className, text, weight = 1 }: PreferenceItem) {
  return (
    <div
      className={cn("flex flex-(--preference-weight) items-center justify-center", className)}
      style={
        {
          "--preference-weight": weight,
        } as React.CSSProperties
      }
    >
      {text}
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
