import { GitHubGraph } from "@/components/sections/github-graph";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills"
import { Experience } from "@/components/sections/experience"

export default function Home() {
  return (
    <main>
      <Hero />
      <GitHubGraph />
      <Skills/>
      <Experience/>
    </main>
  );
}