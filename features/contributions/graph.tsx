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
  "data-[level=0]:fill-contribution-empty",
  "data-[level=1]:fill-contribution-1",
  "data-[level=2]:fill-contribution-2",
  "data-[level=3]:fill-contribution-3",
  "data-[level=4]:fill-contribution-4",
].join(" ");

const ContributionsGraph = ({ contributions, total }: ContributionsGraphProps) => (
  <TooltipProvider>
    <ContributionGraph
      blockRadius={999}
      data={contributions}
      totalCount={total}
      labels={{ totalCount: "{{count}} contributions in the last year" }}
    >
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
        <ContributionGraphLegend
          blockClassName={graphLevelClassNames}
          children={({ level }) => (
            <svg height={12} width={12}>
              <rect
                className={cn("stroke-[1px] stroke-border", graphLevelClassNames)}
                data-level={level}
                height={12}
                rx={999}
                ry={999}
                width={12}
              />
            </svg>
          )}
        />
      </ContributionGraphFooter>
    </ContributionGraph>
  </TooltipProvider>
);

export { ContributionsGraph };
