import { CopyButton } from "@/components/custom/copy-button";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";

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
