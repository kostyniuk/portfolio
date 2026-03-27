import type { SocialIcon } from "@/components/icons/social-icons";
import { GlowBorder } from "@/components/custom/glow-border";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { SocialItemMotion } from "@/features/profile/components/social-item-motion";

type Social = {
  link?: string;
  label: string;
  Icon: SocialIcon;
};

function SocialItem({ label, Icon }: Social) {
  return (
    <SocialItemMotion>
      <Item variant="outline" className="relative">
        <GlowBorder />
        <ItemMedia className="relative z-10">
          <Icon className="size-10 text-black dark:text-white" />
        </ItemMedia>
        <ItemContent className="relative z-10">
          <ItemTitle>{label}</ItemTitle>
        </ItemContent>
      </Item>
    </SocialItemMotion>
  );
}

export { SocialItem };
export type { Social };
