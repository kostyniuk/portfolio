import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { ContributionsGraph } from "@/features/contributions/graph";
import { type ContributionRepo, type ContributionStats, ContributionVitals } from "@/features/contributions/vitals";

const USERNAME = "kostyniuk";

type ContributionsResponse = {
  total: Record<string, number>;
  contributions: Activity[];
};

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Format an ISO "YYYY-MM-DD" date as "Mon YYYY" without timezone drift.
const monthYear = (iso: string) => {
  const [year, month] = iso.split("-");
  return `${MONTH_LABELS[Number(month) - 1]} ${year}`;
};

// Derive headline vitals from the daily contribution series (sorted ascending).
const computeStats = (contributions: Activity[], total: number): ContributionStats => {
  let longest = 0;
  let run = 0;
  let best = 0;

  for (const activity of contributions) {
    if (activity.count > 0) {
      run += 1;
      longest = Math.max(longest, run);
    } else {
      run = 0;
    }
    best = Math.max(best, activity.count);
  }

  let current = 0;
  for (let i = contributions.length - 1; i >= 0; i--) {
    if (contributions[i].count > 0) {
      current += 1;
    } else {
      break;
    }
  }

  return { total, current, longest, best };
};

const getContributions = async () => {
  const url = new URL(`/v4/${USERNAME}`, "https://github-contributions-api.jogruber.de");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub contributions: ${response.status}`);
  }

  const data = (await response.json()) as ContributionsResponse;

  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const oneYearAgoStr = oneYearAgo.toISOString().split("T")[0];
  const todayStr = today.toISOString().split("T")[0];

  const contributions = data.contributions
    .filter((activity) => activity.date >= oneYearAgoStr && activity.date <= todayStr)
    .sort((a, b) => a.date.localeCompare(b.date));
  const total = contributions.reduce((sum, activity) => sum + activity.count, 0);

  return { contributions, total };
};

// Read the total item count from a paginated response's `Link` header. With
// `per_page=1`, the `rel="last"` page number equals the total number of items.
const lastPageCount = (linkHeader: string | null): number | null => {
  if (!linkHeader) {
    return null;
  }

  const lastLink = linkHeader.split(",").find((part) => part.includes('rel="last"'));
  const pageMatch = lastLink?.match(/[?&]page=(\d+)/);

  return pageMatch ? Number(pageMatch[1]) : null;
};

// Top repositories by the user's own commits within the given window. Considers
// every owned, non-fork repo with push activity inside the window and ranks them
// by the user's commit count (via the list-commits API, which supports author +
// since/until date filtering). Runs once at build time (cache components), so a
// per-repo lookup per candidate is fine. Degrades to an empty list on any failure.
const getTopRepos = async (since: string, until: string): Promise<ContributionRepo[]> => {
  // GitHub's REST API requires a User-Agent header or it rejects the request.
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": USERNAME,
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const reposResponse = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?type=owner&sort=pushed&per_page=100`,
      { headers },
    );

    if (!reposResponse.ok) {
      return [];
    }

    const repos = (await reposResponse.json()) as Array<{
      name: string;
      full_name: string;
      fork: boolean;
      language: string | null;
      pushed_at: string | null;
    }>;

    // Any repo with commits in the window has a pushed_at inside it. Ranking by
    // recency would miss high-commit repos that simply weren't pushed last, so we
    // evaluate every owned, non-fork repo touched within the window.
    const sinceMs = new Date(since).getTime();
    const candidates = repos.filter(
      (repo) => !repo.fork && repo.pushed_at !== null && new Date(repo.pushed_at).getTime() >= sinceMs,
    );

    const withCommits = await Promise.all(
      candidates.map(async (repo): Promise<ContributionRepo | null> => {
        try {
          const commitsUrl = new URL(`https://api.github.com/repos/${repo.full_name}/commits`);
          commitsUrl.searchParams.set("author", USERNAME);
          commitsUrl.searchParams.set("since", since);
          commitsUrl.searchParams.set("until", until);
          commitsUrl.searchParams.set("per_page", "1");

          const commitsResponse = await fetch(commitsUrl, { headers });

          // 409 = empty repo, 4xx/5xx = transient; skip rather than fail the set.
          if (!commitsResponse.ok) {
            return null;
          }

          // Prefer the Link header's last-page count; fall back to the page length
          // when there's a single page (0 or 1 commits in the window).
          const fromHeader = lastPageCount(commitsResponse.headers.get("link"));
          let commits = fromHeader;
          if (commits === null) {
            const page = (await commitsResponse.json()) as unknown[];
            commits = Array.isArray(page) ? page.length : 0;
          }

          return { name: repo.name, lang: repo.language, commits };
        } catch {
          return null;
        }
      }),
    );

    return withCommits
      .filter((repo): repo is ContributionRepo => repo !== null && repo.commits > 0)
      .sort((a, b) => b.commits - a.commits)
      .slice(0, 3);
  } catch {
    return [];
  }
};

async function ContributionsContent() {
  "use cache";
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const [{ contributions, total }, repos] = await Promise.all([
    getContributions(),
    getTopRepos(oneYearAgo.toISOString(), today.toISOString()),
  ]);

  const stats = computeStats(contributions, total);
  const range =
    contributions.length > 0
      ? `${monthYear(contributions[0].date)} — ${monthYear(contributions[contributions.length - 1].date)}`
      : undefined;

  return (
    <>
      <ContributionVitals stats={stats} repos={repos} rootProps={{ "data-slot": "contribution-vitals" }} />
      <ContributionsGraph contributions={contributions} total={total} range={range} />
    </>
  );
}

function Contributions() {
  return (
    <section id="contributions" className="page-section scroll-mt-navigation-scroll-margin">
      <p className="page-section-title">Contributions</p>
      <div className="page-section-body flex flex-col gap-8">
        <ContributionsContent />
      </div>
    </section>
  );
}

export { Contributions, ContributionsContent };
