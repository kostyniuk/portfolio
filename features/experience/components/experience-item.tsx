"use client";

import React from "react";
import { Item, ItemContent, ItemTitle, ItemDescription } from "@/components/ui/item";
import { StickyIcon } from "./sticky-icon";
import type { ExperienceProps } from "./experience";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronsDownUp, ChevronsUpDown, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExperienceSections } from "./experience-section";
import { PulseIcon } from "@/components/pulse";

function ExperienceItem({
  Icon,
  title,
  stack,
  description,
  company,
  period,
  additionalContent,
  isExpanded,
  isCurrent,
}: ExperienceProps & { isExpanded: boolean; isCurrent: boolean }) {
  const [openDetailedInformation, setOpenDetailedInformation] = React.useState(isExpanded);
  const hasAdditionalContent = Boolean(additionalContent?.length);

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
              {isCurrent && (
                <PulseIcon trigger="always" duration={0.8}>
                  <Radio className="w-6 h-6 text-secondary-accent" />
                </PulseIcon>
              )}
              <CollapsibleTrigger
                render={<Button variant="ghost" size="icon" className="size-8" />}
              >
                {openDetailedInformation ? <ChevronsDownUp /> : <ChevronsUpDown />}
                <span className="sr-only">Toggle details</span>
              </CollapsibleTrigger>
            </ItemTitle>
            <ItemDescription className="font-medium text-foreground">{company}</ItemDescription>
            {description ? <ItemDescription className="">{description}</ItemDescription> : null}
            {hasAdditionalContent && additionalContent ? (
              <CollapsibleContent>
                <ExperienceSections sections={additionalContent} className="pt-4" />
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
