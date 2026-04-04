import { DocumentIcon, type ProjectIcon } from "@/components/icons/project-icons";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { ShineBorder } from "@/components/ui/shine-border";
import { LinkItemMotion } from "@/features/profile/components/link-item-motion";

interface LinkItemProps {
  link: string;
  label: string;
  description?: string;
  Icon?: ProjectIcon;
}

const BORDER_DURATION = 3.4;
const BORDER_COLOR = "color-mix(in oklab, var(--foreground) 90%, transparent)";

function LinkItem({ label, link, description, Icon }: LinkItemProps) {
  return (
    <LinkItemMotion>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Item
          variant="outline"
          className="relative overflow-hidden bg-card/95 shadow-md ring-1 ring-foreground/5 dark:ring-foreground/10"
        >
          <ShineBorder duration={BORDER_DURATION} shineColor={BORDER_COLOR} />
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
