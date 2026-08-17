import { cn } from "@/lib/utils";

export function SanaMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block size-6 shrink-0 bg-current [mask:url('/sana/sana-symbol.svg')_center/contain_no-repeat]",
        className,
      )}
    />
  );
}
