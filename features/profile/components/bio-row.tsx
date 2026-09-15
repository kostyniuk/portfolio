"use client";

import type { ReactNode } from "react";
import { CopyButton } from "@/components/custom/copy-button";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { useSound } from "@/hooks/use-sound";
import { confirmation004Sound } from "@/lib/confirmation-004";

type BioItem = {
  icon: ReactNode;
  title: ReactNode;
  /** Text placed on the clipboard by the row's copy button. Omit to hide the button. */
  copyText?: string;
};

function BioRow({ icon, title, copyText }: BioItem) {
  const [play] = useSound(confirmation004Sound);
  return (
    <Item className="p-1">
      <ItemMedia variant="icon">{icon}</ItemMedia>
      <ItemContent className="flex min-w-0 flex-row items-center gap-2">
        <ItemTitle className="min-w-0 max-w-full truncate pb-1">{title}</ItemTitle>
        {copyText && (
          <span className="hidden shrink-0 sm:block">
            <CopyButton text={copyText} onClick={() => play()} />
          </span>
        )}
      </ItemContent>
    </Item>
  );
}

export { type BioItem, BioRow };
