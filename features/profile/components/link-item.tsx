import { DocumentIcon, type ProjectIcon } from "@/components/icons/project-icons";
import { LiquidMetalCard } from "@/components/ui/liquid-metal-card";
import { ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { LinkItemMotion } from "@/features/profile/components/link-item-motion";
import { cn } from "@/lib/utils";

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
        <LiquidMetalCard
          className="rounded-2xl p-0 shadow-[0_-2px_8px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] transition-transform duration-300 dark:shadow-sm"
          scale={6}
          repetition={3.2}
          softness={0.45}
        >
          <div
            className={cn(
              "relative z-10 flex items-center gap-3.5 rounded-[calc(var(--radius-2xl)-3px)] px-4 py-3.5",
              "text-sm",
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
        </LiquidMetalCard>
      </a>
    </LinkItemMotion>
  );
}

export { LinkItem };
export type { LinkItemProps };
