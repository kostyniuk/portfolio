"use client";
import { KPILogoWhite, KPILogoBlack } from "@/components/icons/education-icons";
import { Card, CardContent } from "@/components/ui/card";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";

function Education() {
  return (
    <div>
      <h1>Education</h1>
      <Card variant="frosted-light" className="mt-3">
        <CardContent>
          <Item className="gap-8 p-0">
            <ItemMedia variant="icon">
              <KPILogoBlack className="dark:hidden" />
              <KPILogoWhite className="hidden dark:block" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”</ItemTitle>
              <ItemDescription>Faculty of Informatics and Computer Engineering</ItemDescription>
              <ItemDescription>Bachelor Degree, Computer Engineering, 2017 - 2021.</ItemDescription>
            </ItemContent>
          </Item>
        </CardContent>
      </Card>
    </div>
  );
}

export { Education };
