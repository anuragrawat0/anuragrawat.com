import { GitHubGraph } from "@/components/sections/github-graph";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <GitHubGraph />
    </main>
  );
}