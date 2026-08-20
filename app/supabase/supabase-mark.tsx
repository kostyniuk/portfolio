import { cn } from "@/lib/utils";

/** Supabase's bolt, masked so it takes its colour from `text-*` like the other application marks. */
export function SupabaseSymbol({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block size-4 shrink-0 bg-current [mask:url('/supabase/supabase-symbol.svg')_center/contain_no-repeat]",
        className,
      )}
    />
  );
}

/** The wordmark is set as type; the published lockup is not an alpha asset. */
export function SupabaseWordmark({ className }: { className?: string }) {
  return <span className={cn("text-[1em] leading-none font-medium tracking-[0.28em]", className)}>SUPABASE</span>;
}
