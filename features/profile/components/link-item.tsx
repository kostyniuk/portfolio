import { DocumentIcon, type ProjectIcon } from "@/components/icons/project-icons";
import { ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
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
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="flex items-center gap-3.5 px-4 py-3.5 transition-colors duration-300 hover:bg-foreground/[0.03] dark:hover:bg-foreground/[0.045]">
          <ItemMedia>
            {Icon ? (
              <Icon className="size-10 text-black dark:text-white" />
            ) : (
              <DocumentIcon className="size-10 text-black dark:text-white" />
            )}
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{label}</ItemTitle>
            {description && <ItemDescription>{description}</ItemDescription>}
          </ItemContent>
        </div>
      </a>
    </LinkItemMotion>
  );
}

export { LinkItem };
export type { LinkItemProps };
