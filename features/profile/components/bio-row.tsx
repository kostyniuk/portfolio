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
      <ItemContent className="flex flex-row gap-2">
        <ItemTitle>{title}</ItemTitle>
        {canBeCopied && <CopyButton text={title} onClick={() => play()} />}
      </ItemContent>
    </Item>
  );
}

export { type BioItem, BioRow };
