import { AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Project } from "@/features/projects/components/projects";
import { BadgeAsLink } from "@/components/ui/badge";
import { ArrowUpRightIcon } from "lucide-react";

function PreviewProject({ label, link, Icon, description, source, videoHref }: Project) {
  const items = [
    {
      value: "preview",
      trigger: "Preview",
      content: <video src={videoHref} loop autoPlay muted className="w-192 h-108 object-cover"></video>,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {Icon && <Icon className="size-10" />}
          <p>{label}</p>
          <BadgeAsLink href={link} variant={"secondary"}>
            Website <ArrowUpRightIcon data-icon="inline-end" />
          </BadgeAsLink>
          <BadgeAsLink href={source} variant={"outline"}>
            Source <ArrowUpRightIcon data-icon="inline-end" />
          </BadgeAsLink>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {/* <Accordion defaultValue={["preview"]}> */}
        <Accordion>
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}

export { PreviewProject };
