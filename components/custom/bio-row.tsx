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
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
      </ItemContent>
      {canBeCopied && <CopyButton text={title} />}
    </Item>
  );
}

export { type BioItem, BioRow };
