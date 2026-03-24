"use client";

import { Button } from "../ui/button";

function CopyButton({ text }: { text: string }) {
  const copy = (text: string) => {
    return navigator.clipboard.writeText(text);
  };

  return (
    <Button className={"w-fit"} onClick={() => copy(text)}>
      Copy
    </Button>
  );
}

export { CopyButton };
