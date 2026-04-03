import { Item, ItemContent, ItemTitle, ItemDescription } from "@/components/ui/item";
import { StickyIcon } from "./sticky-icon";
import { ExperienceProps } from "./experience";
import { Badge } from "@/components/ui/badge";

function ExperienceItem({ experience }: { experience: ExperienceProps }) {
  return (
    <div className="flex gap-12">
      <StickyIcon>
        <experience.Icon className="size-3.5" />
      </StickyIcon>
      <Item className="mb-12 last:mb-0">
        <ItemContent>
          <span className="text-[0.625rem] font-mono text-muted-foreground tracking-wide">{experience.period}</span>
          <ItemTitle>{experience.title}</ItemTitle>
          <ItemDescription className="font-medium text-foreground">{experience.company}</ItemDescription>
          <ItemDescription className="line-clamp-3">{experience.description}</ItemDescription>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {experience.stack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </ItemContent>
      </Item>
    </div>
  );
}

export { ExperienceItem };
