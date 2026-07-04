"use cache";

import { Heart } from "lucide-react";
import Link from "next/link";

async function Footer() {
  return (
    <footer className="flex w-full justify-center px-3 pb-4 pt-8">
      <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs text-muted-foreground/60">
        <span className="inline-flex items-center gap-1">
          Built with <Heart className="size-3 fill-current" /> by
        </span>
        <Link
          href="https://x.com/kostyniuk00"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Alex Kostyniuk
        </Link>
        <span aria-hidden="true">&middot;</span>
        <span>All rights reserved</span>
        <span aria-hidden="true">&middot;</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}

export { Footer };
