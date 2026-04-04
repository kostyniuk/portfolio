import type { ReactNode } from "react";
import { CopyButton } from "@/components/custom/copy-button";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";

type BioItem = {
  icon: ReactNode;
  title: string;
  canBeCopied?: boolean;
};

function BioRow({ icon, title, canBeCopied }: BioItem) {
  return (
    <Item className="p-1">
      <ItemMedia variant="icon">{icon}</ItemMedia>
      <ItemContent className="flex flex-row gap-2">
        <ItemTitle>{title}</ItemTitle>
        {canBeCopied && <CopyButton text={title} />}
      </ItemContent>
    </Item>
  );
}

export { type BioItem, BioRow };
