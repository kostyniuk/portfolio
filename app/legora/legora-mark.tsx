import { cn } from "@/lib/utils";

export function LegoraMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-block size-6 text-current", className)} aria-hidden="true">
      <span className="absolute inset-x-[8%] top-[6%] h-[22%] -skew-x-[38deg] bg-current" />
      <span className="absolute inset-y-[8%] left-[39%] w-[22%] -skew-y-[38deg] bg-current" />
      <span className="absolute inset-x-[8%] bottom-[6%] h-[22%] -skew-x-[38deg] bg-current" />
    </span>
  );
}
