import type { SocialIcon } from "@/components/icons/social-icons";
import { GlowBorder } from "@/components/custom/glow-border";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { SocialItemMotion } from "@/features/profile/components/social-item-motion";

type Social = {
  link: string;
  label: string;
  Icon: SocialIcon;
};

function SocialItem({ label, link, Icon }: Social) {
  return (
    <SocialItemMotion>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Item variant="outline" className="relative">
          <GlowBorder />
          <ItemMedia className="relative z-10">
            <Icon className="size-10 text-black dark:text-white" />
          </ItemMedia>
          <ItemContent className="relative z-10">
            <ItemTitle>{label}</ItemTitle>
          </ItemContent>
        </Item>
      </a>
    </SocialItemMotion>
  );
}

export { SocialItem };
export type { Social };
