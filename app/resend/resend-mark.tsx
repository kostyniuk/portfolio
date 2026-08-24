import { cn } from "@/lib/utils";

/** Resend's published icon, masked so it takes its colour from `text-*` like the other application marks. */
export function ResendSymbol({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block size-4 shrink-0 bg-current [mask:url('/resend/resend-symbol.svg')_center/contain_no-repeat]",
        className,
      )}
    />
  );
}

export function ResendWordmark({ className }: { className?: string }) {
  return <span className={cn("text-[1em] leading-none font-medium tracking-[0.26em]", className)}>RESEND</span>;
}
