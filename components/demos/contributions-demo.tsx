import { Card } from "@/components/ui/card";
import { ContributionsContent } from "@/components/ui/contributions";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/liquid-metal-card";

async function ContributionsDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contributions</CardTitle>
        <CardDescription>A GitHub activity panel with contribution stats, top repos, and yearly graph.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <ContributionsContent />
      </CardContent>
    </Card>
  );
}

export { ContributionsDemo };
