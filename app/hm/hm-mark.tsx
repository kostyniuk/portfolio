import { cn } from "@/lib/utils";

/**
 * Both brands are wordmarks rather than symbols, so these are typographic
 * instead of the masked SVGs the other application pages use.
 */
export function HmWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-serif text-[1em] leading-none font-bold italic tracking-[-0.04em]", className)}>
      H&amp;M
    </span>
  );
}

export function CosWordmark({ className }: { className?: string }) {
  return <span className={cn("text-[1em] leading-none font-medium tracking-[0.34em]", className)}>COS</span>;
}
