import { Button } from "@/components/ui/button";
import { Bio } from "@/features/profile/components/bio";
import { Projects } from "@/features/profile/components/projects";
import { Socials } from "@/features/profile/components/socials";

export default function Page() {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col gap-8 h-dvh w-1/2 bg-foreground/2 text-sm leading-loose p-8 max-w-164">
        <div className="font-sans">
          <h1 className="font-blog-title text-4xl text-primary/80">Project ready!</h1>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="">
          <p>Inherits default mono font.</p>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
        <Bio />
        <Socials />
        <Projects />
      </div>
    </div>
  );
}
