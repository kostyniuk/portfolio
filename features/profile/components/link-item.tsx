import { DocumentIcon, type ProjectIcon } from "@/components/icons/project-icons";
import { ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { LinkItemMotion } from "@/features/profile/components/link-item-motion";
import { cn } from "@/lib/utils";

interface LinkItemProps {
  link: string;
  label: string;
  description?: string;
  Icon?: ProjectIcon;
  className?: string;
}

function LinkItem({ label, link, description, Icon, className }: LinkItemProps) {
  return (
    <LinkItemMotion>
      <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full">
        <div
          className={cn(
            "flex w-full items-center gap-3.5 px-4 py-3.5 transition-colors duration-300 hover:bg-foreground/3 dark:hover:bg-foreground/4.5",
            className,
          )}
        >
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
