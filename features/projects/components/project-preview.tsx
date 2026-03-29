import { MellowIcon } from "@/components/icons/project-icons";
import { AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  {
    value: "preview",
    trigger: "Preview",
    content: <video src="/mellow_lines.mp4" loop autoPlay muted className="w-192 h-108 object-cover"></video>,
  },
];

function PreviewProject() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MellowIcon className="size-10" />
          <p>Mellow Lines</p>
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
        <p>
          A web app for creating animated videos of code morphing between steps. Paste code snippets, configure syntax
          highlighting and export smooth token-level transitions as WebM/MP4 videos.{" "}
        </p>
      </CardContent>
    </Card>
  );
}

export { PreviewProject };
