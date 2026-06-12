import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type DivProps = ComponentPropsWithoutRef<"div"> & {
  [key: `data-${string}`]: string | undefined;
};

export type ContributionStats = {
  total: number;
  current: number;
  longest: number;
  best: number;
};

export type ContributionRepo = {
  name: string;
  commits: number;
  lang: string | null;
};

const LANG_SHORT: Record<string, string> = {
  TypeScript: "TS",
  JavaScript: "JS",
  Python: "Py",
  Go: "Go",
  Rust: "Rs",
  MDX: "MDX",
  Java: "Java",
  Ruby: "Rb",
  Shell: "Sh",
  "C++": "C++",
  CSS: "CSS",
  HTML: "HTML",
};

const shortLang = (lang: string | null) => (lang ? (LANG_SHORT[lang] ?? lang) : "");

const fmt = (n: number) => n.toLocaleString("en-US");

type StatProps = {
  value: string | number;
  label: string;
  sub?: string;
  accent?: boolean;
};

const Stat = ({ value, label, sub, accent }: StatProps) => (
  <div>
    <div className="flex items-baseline gap-1">
      <span
        className={cn(
          "text-3xl font-medium leading-none tabular-nums",
          accent ? "text-contribution-4" : "text-foreground",
        )}
      >
        {value}
      </span>
      {sub ? <span className="text-base text-muted-foreground">{sub}</span> : null}
    </div>
    <div className="mt-2 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">{label}</div>
  </div>
);

type ContributionVitalsProps = {
  stats: ContributionStats;
  repos: ContributionRepo[];
  rootProps?: DivProps;
};

const ContributionVitals = ({ stats, repos, rootProps }: ContributionVitalsProps) => (
  <div {...rootProps} className={cn("flex flex-wrap items-end gap-x-10 gap-y-6 sm:gap-x-14", rootProps?.className)}>
    <Stat value={fmt(stats.total)} label="Total" />
    <Stat value={stats.current} sub="d" label="Current streak" accent />
    <Stat value={stats.longest} sub="d" label="Longest streak" />
    <Stat value={stats.best} label="Most commits/day" />
    {repos.length > 0 ? (
      <div className="flex flex-col items-start gap-1.5 sm:ml-auto">
        <span className="text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">Top repos · commits</span>
        {repos.map((repo) => (
          <div key={repo.name} className="flex items-baseline gap-2.5 whitespace-nowrap text-sm">
            <span className="font-medium text-foreground">{repo.name}</span>
            <span className="text-contribution-4">{repo.commits}</span>
            <span className="text-xs text-muted-foreground">{shortLang(repo.lang)}</span>
          </div>
        ))}
      </div>
    ) : null}
  </div>
);

export { ContributionVitals };
