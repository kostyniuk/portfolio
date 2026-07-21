import Image from "next/image";

import { cn } from "@/lib/utils";

export function ElevenLabsMark({ className }: { className?: string }) {
  return (
    <Image
      src="/elevenlabs/elevenlabs-symbol.svg"
      width={876}
      height={876}
      alt=""
      aria-hidden="true"
      className={cn("size-6", className)}
    />
  );
}
