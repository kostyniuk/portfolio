import { AccordionContent } from "@/components/ui/accordion";
import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Project } from "@/features/projects/components/projects";
import { BadgeAsLink } from "@/components/ui/badge";
import { ArrowUpRightIcon } from "lucide-react";

function PreviewProject({ label, link, Icon, description, features, source, videoHref }: Project) {
  const items = [
    {
      value: "preview",
      trigger: "Preview",
      content: (
        <video src={videoHref} loop autoPlay muted playsInline className="h-auto w-full max-w-192 object-cover" />
      ),
    },
  ];

  return (
    <article className="grid gap-6 py-6 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,0.9fr)] lg:items-start">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {Icon && <Icon className="size-10" />}
          <p className="text-sm/relaxed font-medium text-foreground">{label}</p>
          <BadgeAsLink href={link} variant={"secondary"}>
            Website <ArrowUpRightIcon data-icon="inline-end" />
          </BadgeAsLink>
          <BadgeAsLink href={source} variant={"outline"}>
            Source <ArrowUpRightIcon data-icon="inline-end" />
          </BadgeAsLink>
        </div>
        <p className="text-xs/relaxed text-muted-foreground">{description}</p>
        <ul className="mt-1 list-disc space-y-1 pl-4 text-xs/relaxed text-muted-foreground">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/8 pt-4 lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0 dark:border-white/10">
        <Accordion>
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </article>
  );
}

export { PreviewProject };
