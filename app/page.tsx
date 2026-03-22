import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-dvh w-1/2 bg-foreground/2 text-sm leading-loose">
        <div className="font-sans">
          <h1 className="font-blog-title text-4xl text-primary/80">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="">
          <p>Inherits default mono font.</p>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
        <div className="flex justify-center w-200 h-800 border-2 border-secondary-accent">
          <Button className="bg-secondary-accent">Hello</Button>
        </div>
      </div>
    </div>
  );
}
