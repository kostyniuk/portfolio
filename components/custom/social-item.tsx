import type { SocialIcon } from "@/components/icons/social-icons";
import { Item, ItemContent, ItemMedia, ItemTitle } from "../ui/item";

type Social = {
  link?: string;
  label: string;
  Icon: SocialIcon;
};

function SocialItem({ label, Icon }: Social) {
  return (
    <Item variant="outline">
      <ItemMedia>
        <Icon className="size-10 text-black dark:text-white" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{label}</ItemTitle>
      </ItemContent>
    </Item>
  );
}

export { SocialItem };
export type { Social };
