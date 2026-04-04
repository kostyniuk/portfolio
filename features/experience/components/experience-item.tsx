"use client";

import React from "react";
import { Item, ItemContent, ItemTitle, ItemDescription } from "@/components/ui/item";
import { StickyIcon } from "./sticky-icon";
import type { ExperienceProps } from "./experience";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExperienceSections } from "./experience-section";

function ExperienceItem({
  Icon,
  title,
  stack,
  description,
  company,
  period,
  keyPoints,
  content,
  additionalContent,
}: ExperienceProps) {
  const [openDetailedInformation, setOpenDetailedInformation] = React.useState(false);
  const detailsContent = additionalContent ?? keyPoints?.map((keyPoint) => ({ summary: keyPoint }));
  const hasAdditionalContent = Boolean(detailsContent?.length);

  return (
    <div className="flex gap-12">
      <StickyIcon>
        <Icon className="size-3.5" />
      </StickyIcon>
      <Item className="mb-12 last:mb-0">
        <ItemContent>
          <span className="text-[0.625rem] font-mono tracking-wide text-muted-foreground">{period}</span>
          <Collapsible open={openDetailedInformation} onOpenChange={setOpenDetailedInformation}>
            <ItemTitle className="text-sm">
              {title}
              <CollapsibleTrigger>
                <Button variant="ghost" size="icon" className="size-8">
                  <ChevronsUpDown />
                  <span className="sr-only">Toggle details</span>
                </Button>
              </CollapsibleTrigger>
            </ItemTitle>
            <ItemDescription className="font-medium text-foreground">{company}</ItemDescription>
            {description ? <ItemDescription className="line-clamp-3">{description}</ItemDescription> : null}
            {content?.length ? <ExperienceSections sections={content} className="py-4" /> : null}
            {hasAdditionalContent && detailsContent ? (
              <CollapsibleContent>
                <ExperienceSections sections={detailsContent} className="pt-4" />
              </CollapsibleContent>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {stack.map((tech, index) => (
                <Badge key={`${index}-${tech}`} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </Collapsible>
        </ItemContent>
      </Item>
    </div>
  );
}

export { ExperienceItem };
