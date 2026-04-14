"use client";

import {
  type Activity,
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type ContributionsGraphProps = {
  contributions: Activity[];
  total: number;
};

const graphLevelClassNames = [
  "data-[level=0]:fill-zinc-200 dark:data-[level=0]:fill-zinc-800",
  "data-[level=1]:fill-green-200 dark:data-[level=1]:fill-green-950",
  "data-[level=2]:fill-green-400 dark:data-[level=2]:fill-green-800",
  "data-[level=3]:fill-green-600 dark:data-[level=3]:fill-green-700",
  "data-[level=4]:fill-green-800 dark:data-[level=4]:fill-green-500",
].join(" ");

const ContributionsGraph = ({ contributions, total }: ContributionsGraphProps) => (
  <TooltipProvider>
    <ContributionGraph data={contributions} totalCount={total}>
      <ContributionGraphCalendar>
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger render={<g />}>
              <ContributionGraphBlock
                activity={activity}
                dayIndex={dayIndex}
                weekIndex={weekIndex}
                className={cn("cursor-pointer", graphLevelClassNames)}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-semibold">{activity.date}</p>
              <p>{activity.count} contributions</p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>
      <ContributionGraphFooter>
        <ContributionGraphTotalCount />
        <ContributionGraphLegend blockClassName={graphLevelClassNames} />
      </ContributionGraphFooter>
    </ContributionGraph>
  </TooltipProvider>
);

export { ContributionsGraph };
