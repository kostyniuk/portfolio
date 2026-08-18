import { cn } from "@/lib/utils";

/** Grasp's circle-and-bars symbol, lifted from the published wordmark and masked so it takes its colour from `text-*`. */
export function GraspSymbol({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block size-4 shrink-0 bg-current [mask:url('/grasp/grasp-symbol.svg')_center/contain_no-repeat]",
        className,
      )}
    />
  );
}

/** GRASP is set as letterspaced type; the published lockup is a solid panel, not an alpha asset. */
export function GraspWordmark({ className }: { className?: string }) {
  return <span className={cn("text-[1em] leading-none font-medium tracking-[0.3em]", className)}>GRASP</span>;
}
