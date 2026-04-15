import { Heart } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full flex justify-center pb-4 pt-8">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <span>Built with</span>
        <Heart className="size-3 fill-current" />
        <span>by</span>
        <Link
          href="https://x.com/kostyniuk00"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:text-foreground transition-colors"
        >
          Alex Kostyniuk
        </Link>
        <span className="mx-1.5 text-muted-foreground/40">|</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export { Footer };
