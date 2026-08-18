import { cn } from "@/lib/utils";

/** Aira's corner-bracket device, masked so it takes its colour from `text-*` like the other marks. */
export function AiraFrame({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block h-4 w-6 shrink-0 bg-current [mask:url('/aira/aira-frame.svg')_center/contain_no-repeat]",
        className,
      )}
    />
  );
}

/** AIRA is set as letterspaced type; the published lockup is a solid panel, not an alpha asset. */
export function AiraWordmark({ className }: { className?: string }) {
  return <span className={cn("text-[1em] leading-none font-medium tracking-[0.3em]", className)}>AIRA</span>;
}
