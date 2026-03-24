"use client";

import { Item, ItemContent, ItemMedia, ItemTitle } from "../ui/item";
import { CopyButton } from "./copy-button";

type BioItem = {
  emojiCode: string;
  title: string;
  canBeCopied?: boolean;
};

function BioRow({ emojiCode, title, canBeCopied }: BioItem) {
  return (
    <Item>
      <ItemMedia variant="icon">{emojiCode}</ItemMedia>
      <ItemContent className="flex flex-row gap-2">
        <ItemTitle>{title}</ItemTitle>
        {canBeCopied && <CopyButton text={title} />}
      </ItemContent>
    </Item>
  );
}

export { type BioItem, BioRow };
