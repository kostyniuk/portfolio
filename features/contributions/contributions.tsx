import { Card, CardContent } from "@/components/ui/card";
import { ContributionsExample } from "./example";

function Contributions() {
  return (
    <div>
      <h1>Contibutions</h1>
      <Card variant="frosted-light" className="mt-3">
        <CardContent>
          <ContributionsExample />
        </CardContent>
      </Card>
    </div>
  );
}

export { Contributions };
