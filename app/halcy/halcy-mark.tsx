import { cn } from "@/lib/utils";

/**
 * Halcy's published logotype, masked so it takes its colour from `text-*` like
 * the other application marks. The asset keeps its 863x416 aspect ratio.
 */
export function HalcyLogotype({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block aspect-[863/416] h-4 shrink-0 bg-current [mask:url('/halcy/halcy-logotype.png')_center/contain_no-repeat]",
        className,
      )}
    />
  );
}

export function HalcyWordmark({ className }: { className?: string }) {
  return <span className={cn("text-[1em] leading-none font-medium tracking-[0.26em]", className)}>HALCY</span>;
}
