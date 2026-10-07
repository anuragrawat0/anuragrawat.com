import type { Activity } from "@/components/graph/contributions-graph";

type GitHubResponse = {
  contributions?: Activity[];
};

const CONTRIBUTIONS_API = "https://github-contributions-api.jogruber.de/v4";

export async function getCachedContributions(username: string) {
  try {
    const response = await fetch(
      `${CONTRIBUTIONS_API}/${username}?y=last`,
      {
        next: { revalidate: 86_400 },
      },
    );

    if (!response.ok) {
      return [];
    }

    const result = (await response.json()) as GitHubResponse;

    return result.contributions ?? [];
  } catch {
    return [];
  }
}
