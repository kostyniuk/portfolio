import { cn } from "@/lib/utils";

/** Tandem's twin-arc symbol, masked so it takes its colour from `text-*` like the other application marks. */
export function TandemSymbol({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block h-4 w-7 shrink-0 bg-current [mask:url('/tandem/tandem-symbol.svg')_center/contain_no-repeat]",
        className,
      )}
    />
  );
}

/** The wordmark is set as type; the published lockup is a single locked-up asset. */
export function TandemWordmark({ className }: { className?: string }) {
  return <span className={cn("text-[1em] leading-none font-medium tracking-[0.26em]", className)}>TANDEM</span>;
}
