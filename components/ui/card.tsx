import * as React from "react";

import { cn } from "@/lib/utils";

function Card({
  className,
  size = "default",
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  size?: "default" | "sm";
  variant?: "default" | "frosted" | "frosted-light";
}) {
  const variantStyles = {
    default: "bg-card ring-1 ring-foreground/5 dark:ring-foreground/10",
    frosted: "border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg hover:bg-white/15 transition-all duration-300",
    "frosted-light":
      "backdrop-blur-sm transition-all duration-300 border border-black/[0.08] bg-black/[0.02] shadow-[0_-2px_8px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] hover:bg-black/[0.04] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-sm dark:hover:bg-white/[0.06]",
  };

  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex w-full flex-col gap-6 overflow-hidden rounded-2xl py-6 text-sm text-card-foreground shadow-md has-[>img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-2xl *:[img:last-child]:rounded-b-2xl sm:rounded-4xl sm:has-[>img:first-child]:pt-0 sm:*:[img:first-child]:rounded-t-4xl sm:*:[img:last-child]:rounded-b-4xl",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1.5 rounded-t-2xl px-4 sm:rounded-t-4xl sm:px-6 group-data-[size=sm]/card:px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-title" className={cn("font-heading text-base font-medium", className)} {...props} />;
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-description" className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("px-4 sm:px-6 group-data-[size=sm]/card:px-4", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-2xl px-4 sm:rounded-b-4xl sm:px-6 group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4",
        className,
      )}
      {...props}
    />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
