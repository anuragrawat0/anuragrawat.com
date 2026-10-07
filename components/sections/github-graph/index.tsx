import { Suspense } from "react";

import { getCachedContributions } from "@/lib/get-cached-contributions";

import { GitHubContributions } from "./github-contributions";

const GITHUB_USERNAME = "anuragrawat0";
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;

export function GitHubGraph() {
  return (
    <section className="relative w-full">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-border"
      />

      <Suspense fallback={<GitHubGraphFallback />}>
        <CachedGitHubContributions />
      </Suspense>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-border"
      />
    </section>
  );
}

async function CachedGitHubContributions() {
  const data = await getCachedContributions(GITHUB_USERNAME);

  return (
    <GitHubContributions data={data} profileUrl={GITHUB_PROFILE_URL} />
  );
}

export function GitHubGraphFallback() {
  return (
    <div className="flex min-h-[214px] items-center justify-center">
      <div
        className="size-5 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-foreground"
        aria-label="Loading GitHub activity"
        role="status"
      />
    </div>
  );
}
