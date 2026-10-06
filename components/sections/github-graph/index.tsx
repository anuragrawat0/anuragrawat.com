import { GitHubContributions } from "./github-contributions";

export function GitHubGraph() {
  return (
    <section className="relative w-full">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-border"
      />

      <GitHubContributions />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-border"
      />
    </section>
  );
}
