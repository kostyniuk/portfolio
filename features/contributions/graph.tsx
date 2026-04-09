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
  'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
  'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
  'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
  'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
  'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]',
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
