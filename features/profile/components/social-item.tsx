import type { SocialIcon } from "@/components/icons/social-icons";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { ShineBorder } from "@/components/ui/shine-border";
import { SocialItemMotion } from "@/features/profile/components/social-item-motion";
import React from "react";

type Social = {
  link: string;
  label: string;
  Icon: SocialIcon;
};

const BORDER_DURATION = 3.4;
const BORDER_COLOR = "color-mix(in oklab, var(--foreground) 90%, transparent)";

function SocialItem({ label, link, Icon }: Social) {
  return (
    <SocialItemMotion>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Item variant="outline" className="relative">
          <ShineBorder duration={BORDER_DURATION} shineColor={BORDER_COLOR} />
          <ItemMedia className="relative z-10">
            <Icon className="size-10 text-black dark:text-white" />
          </ItemMedia>
          <ItemContent className="relative z-10">
            <ItemTitle>{label}</ItemTitle>
            <ItemDescription>{label}</ItemDescription>
          </ItemContent>
        </Item>
      </a>
    </SocialItemMotion>
  );
}

export { SocialItem };
export type { Social };
