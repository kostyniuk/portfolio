import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex h-dvh w-dvw">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-blog-title text-4xl text-primary/80">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
        <div className="flex justify-center w-200 h-800 border-2 border-secondary-accent">
          <Button className="bg-secondary-accent">Hello</Button>
        </div>
      </div>
    </div>
  )
}
