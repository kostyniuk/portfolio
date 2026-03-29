import { MellowIcon } from "@/components/icons/project-icons";
import { AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Project } from "@/features/profile/components/projects";

function PreviewProject({ label, link, Icon, description, videoHref }: Project) {
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
