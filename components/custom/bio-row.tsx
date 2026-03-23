import { Item, ItemContent, ItemMedia, ItemTitle } from "../ui/item";

type BioItem = {
  emojiCode: string;
  title: string;
};

function BioRow({ emojiCode, title }: BioItem) {
  return (
    <Item>
      <ItemMedia variant="icon">{emojiCode}</ItemMedia>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
      </ItemContent>
    </Item>
  );
}

export { type BioItem, BioRow };
