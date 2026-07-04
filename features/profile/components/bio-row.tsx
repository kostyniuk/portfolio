"use client";

import type { ReactNode } from "react";
import { CopyButton } from "@/components/custom/copy-button";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { useSound } from "@/hooks/use-sound";
import { confirmation004Sound } from "@/lib/confirmation-004";

type BioItem = {
  icon: ReactNode;
  title: string;
  canBeCopied?: boolean;
};

function BioRow({ icon, title, canBeCopied }: BioItem) {
  const [play] = useSound(confirmation004Sound);
  return (
    <Item className="p-1">
      <ItemMedia variant="icon">{icon}</ItemMedia>
      <ItemContent className="flex min-w-0 flex-row items-center gap-2">
        <ItemTitle className="min-w-0 max-w-full truncate">{title}</ItemTitle>
        {canBeCopied && (
          <span className="hidden shrink-0 sm:block">
            <CopyButton text={title} onClick={() => play()} />
          </span>
        )}
      </ItemContent>
    </Item>
  );
}

export { type BioItem, BioRow };
