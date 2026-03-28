import { DocumentIcon, type ProjectIcon } from "@/components/icons/project-icons";
import { GlowBorder } from "@/components/custom/glow-border";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { LinkItemMotion } from "@/features/profile/components/link-item-motion";

interface LinkItemProps {
  link: string;
  label: string;
  description?: string;
  Icon?: ProjectIcon;
}

function LinkItem({ label, link, description, Icon }: LinkItemProps) {
  return (
    <LinkItemMotion>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Item variant="outline" className="relative">
          <GlowBorder />
          <ItemMedia className="relative z-10">
            {Icon ? (
              <Icon className="size-10 text-black dark:text-white" />
            ) : (
              <DocumentIcon className="size-10 text-black dark:text-white" />
            )}
          </ItemMedia>
          <ItemContent className="relative z-10">
            <ItemTitle>{label}</ItemTitle>
            {description && <ItemDescription>{description}</ItemDescription>}
          </ItemContent>
        </Item>
      </a>
    </LinkItemMotion>
  );
}

export { LinkItem };
export type { LinkItemProps };
