import { cn } from "@/lib/utils";

/** Masked like the other application marks; the asset is a PNG because H&M publish the logotype as raster. */
export function HmMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block size-6 shrink-0 bg-current [mask:url('/hm/hm-symbol.png')_center/contain_no-repeat]",
        className,
      )}
    />
  );
}

/** COS is a plain letter wordmark with no published symbol, so it stays typographic. */
export function CosWordmark({ className }: { className?: string }) {
  return <span className={cn("text-[1em] leading-none font-medium tracking-[0.34em]", className)}>COS</span>;
}
