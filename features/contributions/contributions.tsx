import { Card, CardContent } from "@/components/ui/card";
import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { ContributionsGraph } from "./graph";

type ContributionsResponse = {
  total: Record<string, number>;
  contributions: Activity[];
};

const getContributions = async () => {
  const username = "kostyniuk";
  const year = new Date().getFullYear();
  const url = new URL(`/v4/${username}`, "https://github-contributions-api.jogruber.de");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub contributions: ${response.status}`);
  }

  const data = (await response.json()) as ContributionsResponse;
  const contributions = data.contributions
    .filter((activity) => activity.date.startsWith(`${year}-`))
    .sort((a, b) => a.date.localeCompare(b.date));
  const total = data.total[String(year)] ?? contributions.reduce((sum, activity) => sum + activity.count, 0);

  return { contributions, total };
};

async function Contributions() {
  "use cache";
  const contributions = await getContributions();

  return (
    <div>
      <h1>Contributions</h1>
      <Card variant="frosted-light" className="mt-3">
        <CardContent>
          <ContributionsGraph contributions={contributions.contributions} total={contributions.total} />
        </CardContent>
      </Card>
    </div>
  );
}

export { Contributions };
