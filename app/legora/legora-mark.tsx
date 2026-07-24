import { cn } from "@/lib/utils";

export function LegoraMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-block size-6 shrink-0 bg-current [mask:url('/legora/legora-symbol.svg')_center/contain_no-repeat]",
        className,
      )}
      aria-hidden="true"
    />
  );
}
