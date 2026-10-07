"use client";

import { format } from "date-fns";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
  type Activity,
} from "@/components/graph/contributions-graph";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type GitHubContributionsProps = {
  data: Activity[];
  profileUrl: string;
};

export function GitHubContributions({
  data,
  profileUrl,
}: GitHubContributionsProps) {
  if (data.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center">
        <span className="text-sm text-muted-foreground">
          GitHub activity unavailable.
        </span>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <ContributionGraph
        data={data}
        className="mx-auto py-4 font-sans"
        blockSize={11}
        blockMargin={3}
        blockRadius={2}
      >
        <ContributionGraphCalendar
          className="px-4"
          title="GitHub Contributions"
        >
          {({ activity, dayIndex, weekIndex }) => (
            <Tooltip key={`${activity.date}-${weekIndex}-${dayIndex}`}>
              <TooltipTrigger asChild>
                <g>
                  <ContributionGraphBlock
                    activity={activity}
                    dayIndex={dayIndex}
                    weekIndex={weekIndex}
                  />
                </g>
              </TooltipTrigger>

              <TooltipContent className="bg-black font-sans text-white dark:bg-white dark:text-black">
                <p>
                  {activity.count} contribution
                  {activity.count === 1 ? "" : "s"} on{" "}
                  {format(new Date(activity.date), "d MMM yyyy")}
                </p>
              </TooltipContent>
            </Tooltip>
          )}
        </ContributionGraphCalendar>

        <ContributionGraphFooter className="px-4">
          <ContributionGraphTotalCount>
            {({ totalCount, startDate, endDate }) => (
              <div className="text-sm text-muted-foreground">
                {totalCount.toLocaleString("en")} contributions · {format(
                  new Date(`${startDate}T00:00:00`),
                  "MMM d, yyyy",
                )} – {format(
                  new Date(`${endDate}T00:00:00`),
                  "MMM d, yyyy",
                )} on{" "}
                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4"
                >
                  GitHub
                </a>
                .
              </div>
            )}
          </ContributionGraphTotalCount>

          <ContributionGraphLegend />
        </ContributionGraphFooter>
      </ContributionGraph>
    </TooltipProvider>
  );
}
