import { cn } from "@/lib/utils";

/** Neko Health's mark, masked so it takes its colour from `text-*`. The asset is an alpha mask cut from the published logo. */
export function NekoSymbol({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block h-4 w-5 shrink-0 bg-current [mask:url('/neko/neko-symbol.png')_center/contain_no-repeat]",
        className,
      )}
    />
  );
}

export function NekoWordmark({ className }: { className?: string }) {
  return <span className={cn("text-[1em] leading-none font-medium tracking-[0.24em]", className)}>NEKO HEALTH</span>;
}
