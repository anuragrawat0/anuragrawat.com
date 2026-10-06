"use client";

import { useEffect, useState } from "react";
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

const GITHUB_USERNAME = "anuragrawat0";
const GITHUB_PROFILE_URL = "https://github.com/anuragrawat0";

type GitHubResponse = {
  contributions: Activity[];
};

export function GitHubContributions() {
  const [data, setData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadContributions() {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
          {
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch contributions");
        }

        const result = (await response.json()) as GitHubResponse;

        setData(result.contributions ?? []);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error(error);
        setError(true);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadContributions();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex h-40 items-center justify-center">
        <span className="text-sm text-muted-foreground">
          Loading GitHub activity...
        </span>
      </div>
    );
  }

  if (error || data.length === 0) {
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
            {({ totalCount, year }) => (
              <div className="text-sm text-muted-foreground">
                {totalCount.toLocaleString("en")} contributions in {year} on{" "}
                <a
                  href={GITHUB_PROFILE_URL}
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
